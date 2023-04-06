import React, { useState, useContext, useEffect } from 'react'
import {SendOutlined} from "@ant-design/icons"
import {Button, Tooltip, Form, Drawer, Select, TimePicker,Col, Row, Typography, Spin, Input} from "antd"
import {AuthContext} from '../../../App'
import {GroupsContext} from '../../../containers/web/LinksInstances'
import {sendInvitation} from '../../../actions/meetings_rounds/getData'
const { Option } =Select
const { Text} = Typography
const { TextArea } = Input

const CreateMeeting = ({invited}) => {

    const [form] = Form.useForm()
    const [visible, setVisible] = useState(false)
    const {state:contextUser} = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
    const [state, setState] = useState(0)
    const {dispatch} = useContext(GroupsContext)

    async function onFinish(values){
        setLoading(true)
        var format_time = values.hour_minutes.format('HH:mm:ss')
        var date_formated = `2023-04-${values.day}T${format_time}`

        values = {
            'owner': contextUser.user.id,
            'start_date': date_formated,
            'participans_invited': [invited.id, contextUser.user.id],
            'is_active': true,
            'message': values.message
        }


        sendInvitation(values, contextUser, dispatch, invited, setLoading, setVisible, form)

       /* postMeeting(values, contextUser, dispatch, invited, setLoading, setVisible, form).then((response)=> {

        

        }).catch((error)=> {
            console.log(error)
        })*/
    }

    useEffect(()=> {
        setState(window.innerWidth)
    },[])


    return(<>
            <Drawer placement={window.innerWidth > 800 ? 'right':'top'}
                    title={<>Envíar invitación a <Text> "{invited.first_name} {invited.last_name}"</Text></>} visible={visible} onClose={()=>setVisible(false)}
                height={450}
                width = {500}
            >{state > 800 ?
                <Row justify={'start'}>
                <Form layout={'horizontal'} form={form} onFinish={onFinish} >
                    <Form.Item name='day' rules={[{required:true, message:'Debes seleccionar un día'}]} >
                    <Select size={'large'} style={{width:'400px'}} placeholder={'Selecciona el día de la reunión'}>
                            <Option value={'25'}>Martes 25</Option>
                            <Option value={'26'}>Miércoles 26</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name='hour_minutes' rules={[{required:true, message:'Debes seleccionar la hora'}]} >
                        <TimePicker
                            size={'large'}
                            disabledHours={() => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ,10,11, 14, 17, 18, 19, 20, 21, 22, 23, 24]}
                            minuteStep={20}
                            hideDisabledOptions = {true}
                            disabledMinutes = { (selectedHour) => {
                                console.log(selectedHour)
                                var minutes= []
                                if (selectedHour === 16){
                                    minutes = [40]
                                }else{
                                    minutes = []
                                }
                                return minutes;
                            }}
                            inputReadOnly={true}
                            showNow={false} style={{width:'400px'}} placeholder={'Selecciona la hora(formato 24 hrs)'} format={'HH:mm'} />
                    </Form.Item>
                    <Form.Item name={'message'} rules={[{max:800, message:'Has superado los 800 caracteres...'}]}>
                        <TextArea  size={'large'} placeholder={'Escribe tu mensaje (opcional)'} rows={4} style={{width:'400px'}} />
                    </Form.Item>
                    <Form.Item style={{float:'right'}}>
                        <Button disabled={loading} size={'large'} style={{marginRight:'10px'}} type={'primary'} htmlType={'submit'} >AGENDAR</Button>

                        <Button danger size={'large'} type={'primary'} onClick={()=> setVisible(false)} >CANCELAR</Button>
                    </Form.Item>
                    {loading && <Form.Item>
                        <Spin size={'large'} style={{marginLeft:'20px'}} />
                    </Form.Item>}
                </Form>
                    </Row>:
                <Form style={{marginTop:'40px'}} layout={'inline'} form={form} title={'asdas'} onFinish={onFinish} >

                    <Form.Item name='day' rules={[{required:true, message:'Debes seleccionar un día'}]} >
                        <Select size={'large'} style={{width:'300px'}} placeholder={'Selecciona el día de la reunión'}>
                            <Option value={'25'}>Martes 25</Option>
                            <Option value={'26'}>Miércoles 26</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name='hour_minutes' rules={[{required:true, message:'Debes seleccionar la hora'}]} >
                        <TimePicker
                            size={'large'}
                            disabledHours={() => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ,10,11, 14, 17, 18, 19, 20, 21, 22, 23, 24]}
                            minuteStep={20}
                            hideDisabledOptions = {true}
                            disabledMinutes = { (selectedHour) => {
                                console.log(selectedHour)
                                var minutes= []
                                if (selectedHour === 16){
                                    minutes = [40]
                                }else{
                                    minutes = []
                                }
                                return minutes;
                            }}
                            inputReadOnly={true}
                            showNow={false} style={{width:'300px', marginTop:'20px'}} placeholder={'Selecciona la hora(formato 24 hrs)'} format={'HH:mm'} />
                    </Form.Item>

                    <Form.Item name={'message'} rules={[{max:800, message:'Has superado los 800 caracteres...'}]}>
                        <TextArea  size={'large'} placeholder={'Escribe tu mensaje (opcional)'} rows={4} style={{width:'300px', marginTop:'20px', marginBottom:'20px'}} />
                    </Form.Item>

                    <Form.Item >
                        <Button disabled={loading} size={'large'} style={{marginRight:'10px',backgroundColor:'rgb(176, 93, 185)', borderColor:'rgb(176, 93, 185)'}} type={'primary'} htmlType={'submit'} >AGENDAR</Button>

                        <Button danger size={'large'} type={'primary'} onClick={()=> setVisible(false)} >CANCELAR</Button>
                    </Form.Item>
                    {loading &&
                    <Form.Item>
                        <Spin size={'large'} style={{marginLeft:'20px'}} />
                    </Form.Item>}

                </Form>


            }
            </Drawer>
        <Tooltip title={'Envíar invitación'} color={'#ff6d3c'}>
        <Button size={'medium'} icon={<SendOutlined />}
                style={{
                    borderColor:'#18c5cc' ,
                    backgroundColor:'#18c5cc',
                    color:'white'
                }}
                onClick={()=>setVisible(true)} />
        </Tooltip>
        </>
        )
}


export default CreateMeeting
