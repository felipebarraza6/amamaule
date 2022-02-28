import React, { useState } from 'react'
import { Modal, Button, Form, 
        Input, notification, Col, 
        Row } from 'antd'
import api from '../../../api/endpoints'


const FormPasswordReset  = ({ visible, onCreate, onCancel}) => {

    const [form] = Form.useForm()    
      
    return(
        <Modal
            visible={visible}
            title='Recuperacion de Contraseña'
            okText = 'Envíar solicitud'
            width='600px'
            cancelText = 'Cancelar'
            onCancel = {onCancel}
            onOk={()=> {
                form.validateFields().then((values)=> {                    
                        form.resetFields()
                        onCreate(values)
                }).catch((info) => {
                    console.log(info)
                })
            }}
        >
            <Form
                form={form}
                layout = 'vertical'
                name='form_user_create'                
            >
                <Row>
                    <Col span={12} style={styles.colField} >
                    <Form.Item name='user' label='Correo Electrónico' rules={[
                        { required: true, message: 'Campo obligatorio'},                    
                        { type: 'email', message: 'Debes ingresar un correo valido'}
                    ]}>
                        <Input />
                    </Form.Item>    
                    </Col>
                    <Col span={12} style={styles.colField} >
                    <Form.Item name='phone_number' label='Telefono' rules={[
                        { required: true, message: 'Campo obligatorio'},                
                    ]}>
                        <Input />
                    </Form.Item>
                    </Col>  
                </Row>
                
                <Row>
                    <Col span={12} style={styles.colField} >
                        <Form.Item name='username' label='Nombre de usuario' rules={[
                            { required: true, message: 'Campo obligatorio'},
                        ]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12} style={styles.colField} >
                        <Form.Item name='new_password' label='Nueva clave' rules={[
                        { required: true, message: 'Ingresa tu nueva clave'},                    
                        ]}>
                        <Input type='password' />
                    </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Modal>
    )
}


const ResetPassword = () => {
    
    const initialState = {
        visibleModal: false,        
        data: null,
        isLoading: false,
        isChilean: true,

    }    

    const [globalState, SetGlobalState] = useState(initialState)    

    async function onCreate(values){
        const request = await api.user.reset_password(values).then((response)=> {
            notification.success({ message:`Clave modificada!`, title:'Recuperación de credenciales'})
            SetGlobalState({...globalState, visibleModal: false})
        }).catch((error)=> {
            notification.error({message:'Datos incorrectos :('})
        })
        return request
        
        
    }

    function changeVisible(){
        SetGlobalState({
            ...globalState,
            visibleModal: true
        })
    }

    function closeModal() {
        SetGlobalState({
            ...globalState,
            visibleModal: false
        })        
    }

    return (
        <React.Fragment>
            <Button size='large' type='link' onClick={changeVisible}>
                ¿Olvidaste tu contraseña?
            </Button>
            <FormPasswordReset visible={globalState.visibleModal} onCreate={onCreate} onCancel={closeModal} />
        </React.Fragment>
    )
}


const styles = {
    button: {
        backgroundColor: '#CE3D4B', 
        color:'white', 
        borderColor:'#CE3D4B'
    },
    colField: {
        paddingRight: '10px'
    },
    alert: {
        marginTop:'20px',
        marginBottom:'30px',
        width:'100%'
    }
}
    

export default ResetPassword
