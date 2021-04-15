import React, { useState, useContext, useEffect } from 'react'
import {SendOutlined} from "@ant-design/icons"
import {Button, Tooltip, Form, Drawer, Select, TimePicker,Col, Row, Typography, Input} from "antd"
import {AuthContext} from '../../../App'
import {GroupsContext} from '../../../containers/web/LinksInstances'
import {postMeeting} from '../../../actions/meetings_rounds/getData'
const { Option } =Select
const { Text} = Typography
const { TextArea } = Input

const CreateMeeting = ({invited}) => {

    const [form] = Form.useForm()
    const [visible, setVisible] = useState(false)
    const {state:contextUser} = useContext(AuthContext)
    const [state, setState] = useState()
    const {dispatch} = useContext(GroupsContext)

    async function onFinish(values){

        var format_time = values.hour_minutes.format('HH:mm:ss')
        var date_formated = `2021-04-${values.day}T${format_time}`

        values = {
            'owner': contextUser.user.id,
            'start_date': date_formated,
            'participans_invited': [invited.id, contextUser.user.id],
            'is_active': true,
            'message': values.message
        }

        postMeeting(values, contextUser, dispatch, invited).then((response)=> {
            form.resetFields()
            setVisible(false)
        }).catch((error)=> {
            console.log(error)
        })
    }

    useEffect(()=> {
        setState(window.innerWidth)
    },[])

    console.log(state)
    return(<>
            <Drawer placement={'top'}
                    title={<>Envíar invitación a <Text mark> {invited.first_name} {invited.last_name}</Text></>} visible={visible} onClose={()=>setVisible(false)}
                height={350}
            >{!state > 800 ?
                <Row justify={'center'}>
                <Form layout={'inline'} form={form} title={'asdas'} onFinish={onFinish} >
                    <Col xs={24}>
                    <Form.Item name='day' rules={[{required:true, message:'Debes seleccionar un día'}]} >
                        <Select size={'large'} style={{width:'100%'}} placeholder={'Selecciona el día de la reunión'}>
                            <Option value={'15'}>Jueves 15</Option>
                            <Option value={'16'}>Viernes 16</Option>
                            <Option value={'17'}>Sábado 17</Option>
                        </Select>
                    </Form.Item>
                        </Col>
                    <Col xs={24}>
                    <Form.Item name='hour_minutes' rules={[{required:true, message:'Debes seleccionar la hora'}]} >
                        <TimePicker
                            size={'large'}
                            disabledHours={() => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ,10, 12,13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 24]}
                            minuteStep={10}
                            disabledMinutes={(selectedHour)=> {
                                if (selectedHour === 11) {
                                    return [ 51, 52, 53, 54, 55, 56, 57, 58, 59 ]
                                }
                                if (selectedHour === 16){
                                    return [  21,22,23,24,25,26,27,28,,29,30,31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59 ]
                                }
                            }}
                            hideDisabledOptions = {true}
                            showNow={false} style={{width:'100%'}} placeholder={'Selecciona la hora(formato 24 hrs)'} format={'HH:mm'} />
                    </Form.Item>
                    </Col>
                    <Col xs={24} style={{marginBottom:'10px'}}>
                    <Form.Item name={'message'} rules={[{max:800, message:'Has superado los 800 caracteres...'}]}>
                        <TextArea  size={'large'} placeholder={'Escribe tu mensaje (opcional)'} rows={4} style={{width:'300px'}} />
                    </Form.Item>
                        </Col>
                    <Col xs={24}>
                    <Form.Item >
                        <Button size={'large'} style={{marginRight:'10px'}} type={'primary'} htmlType={'submit'} >AGENDAR</Button>

                        <Button danger size={'large'} type={'primary'} onClick={()=> setVisible(false)} >CANCELAR</Button>
                    </Form.Item>
                        </Col>
                </Form>
                    </Row>:
                <Form style={{marginTop:'40px'}} layout={'inline'} form={form} title={'asdas'} onFinish={onFinish} >

                    <Form.Item name='day' rules={[{required:true, message:'Debes seleccionar un día'}]} >
                        <Select size={'large'} style={{width:'100%'}} placeholder={'Selecciona el día de la reunión'}>
                            <Option value={'15'}>Jueves 15</Option>
                            <Option value={'16'}>Viernes 16</Option>
                            <Option value={'17'}>Sábado 17</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name='hour_minutes' rules={[{required:true, message:'Debes seleccionar la hora'}]} >
                        <TimePicker
                            size={'large'}
                            disabledHours={() => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ,10, 12,13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 24]}
                            m
                            minuteStep={10}
                            disabledMinutes={(selectedHour)=> {
                                if (selectedHour === 11) {
                                    return [ 51, 52, 53, 54, 55, 56, 57, 58, 59 ]
                                }
                                if (selectedHour === 16){
                                    return [  21,22,23,24,25,26,27,28,,29,30,31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59 ]
                                }
                            }}
                            hideDisabledOptions = {true}
                            inputReadOnly={true}
                            showNow={false} style={{width:'300px'}} placeholder={'Selecciona la hora(formato 24 hrs)'} format={'HH:mm'} />
                    </Form.Item>

                    <Form.Item name={'message'} rules={[{max:800, message:'Has superado los 800 caracteres...'}]}>
                        <TextArea  size={'large'} placeholder={'Escribe tu mensaje (opcional)'} rows={4} style={{width:'400px'}} />
                    </Form.Item>

                    <Form.Item >
                        <Button size={'large'} style={{marginRight:'10px'}} type={'primary'} htmlType={'submit'} >AGENDAR</Button>

                        <Button danger size={'large'} type={'primary'} onClick={()=> setVisible(false)} >CANCELAR</Button>
                    </Form.Item>

                </Form>


            }
            </Drawer>
        <Tooltip title={'Envíar invitación'} color={'geekblue'}>
        <Button size={'medium'} icon={<SendOutlined />}
                style={{
                    borderColor:'rgb(97, 38, 61)' ,
                    backgroundColor:'rgb(97, 38, 61)',
                    color:'white'
                }}
                onClick={()=>setVisible(true)} />
        </Tooltip>
        </>
        )
}


export default CreateMeeting