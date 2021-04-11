import React, {useEffect, useState} from 'react'
import {Button, Form, Input, Row, Col, notification} from "antd"
import api from '../../../api/endpoints'
const {TextArea} = Input


const UpdateProfileData = ({user}) => {

    const [state, setState] = useState()
    async function UpdateData (values){
        const request = await api.user.update_profile(user.id, values).then((response)=> {
            console.log(response)
            notification.success({message:'Perfil actualizado!'})
        }).catch((error)=> {
                console.log(error)
            })
    }

    useEffect(()=> {
        async function getUserData(user) {
            const request = await api.user.get_profile_center(user).then((response)=> {
                setState(response.data)
                console.log(response.data)
            }).catch((error)=> {
                console.log(error)
            })
            return request
        }

        getUserData(user.id)
    },[])

    return(<>{state &&
        <Form layout={'vertical'} style={{padding:'20px'}} name='update_data' onFinish={UpdateData} initialValues={{'nombre_entidad': state.nombre_entidad, 'cargo':state.cargo, 'perfil_profesional': state.perfil_profesional}}>
            <Row justify={'center'}>
                <Col lg={12} xs={24}>
                                <Form.Item name='nombre_entidad' label={'Nombre de la entidad, organización'} rules={[{required:true, message:'Debes ingresar el nombre de tu entidad'},
                                    {max:800, message:'Has superado los 800 caracteres'}]}>
                                    <Input />
                                </Form.Item>
                                <Form.Item name='cargo' label={'Cargo dentro de la misma'} rules={[{required:true, message:'Debes ingresar el cargo'},
                                {max:800, message:'Has superado los 800 caracteres'}]}>
                                    <Input />
                                </Form.Item>
                                <Form.Item name='perfil_profesional' label={'Perfil Profesional'} rules={[{required:true, message:'Debes ingresar tu perfil profesional'},
                                {max:800, message:'Has superado los 800 caracteres'}]}>
                                    <TextArea rows={5} />
                                </Form.Item>
                                <Form.Item>
                                    <Button htmlType='submit' style={{backgroundColor:'rgb(206, 61, 75)', borderColor:'rgb(206, 61, 75)'}} type={'primary'}>ACTUALIZAR DATOS </Button>
                                </Form.Item>
                </Col>
                </Row>
        </Form>}</>
    )

}


export default UpdateProfileData