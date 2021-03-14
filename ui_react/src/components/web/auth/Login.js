import React, { useState, useContext } from 'react'
import { Modal, Button, Form, 
        Input, notification, Col, 
        Row, message } from 'antd'
import api from '../../../api/endpoints'
import { AuthContext} from '../../../App'
import { UserOutlined } from '@ant-design/icons'


const UserLoginForm = ({ visible, onCreate, onCancel}) => {
    
    const [form] = Form.useForm()        
    return(
        <Modal
            visible={visible}
            title='Inicio de Sesión'
            okText = 'Aceptar'            
            width='600px'
            cancelText = 'Cancelar'
            onCancel = {onCancel}
            onOk={()=> {
                form.validateFields().then((values)=> {                                        
                    //form.resetFields()
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
                    <Form.Item name='email' label='Correo Electrónico' rules={[
                        { required: true, message: 'Por favor ingrese su correo'},                    
                    ]}>
                        <Input />
                    </Form.Item>    
                    </Col>
                    <Col span={12} style={styles.colField} >
                    <Form.Item name='password' label='Contraseña' rules={[
                        { required: true, message: 'Por favor ingrese su contraseña'},
                        {min:6, message: 'Debes ingresar al menos 6 caracteres'}
                    ]}>
                        <Input type='password' />
                    </Form.Item>
                    </Col>  
                </Row>                                                                                       
             <Col style={{textAlign:'right', marginRight:'20px'}}> Olvide mi contraseña?</Col>
            </Form>

        </Modal>
    )
}


const Login = () => {        
    const {dispatch} = useContext(AuthContext)
    const initialState = {
        visibleModal: false,        
        data: null,
        isLoading: false,
        isChilean: true,

    }    

    const [globalState, SetGlobalState] = useState(initialState)    

    async function onCreate(values){
        const request = await api.user.login(values).then((response)=> {            
            notification.success({ message:`${values.email} ha iniciado sesion`, title:'Credenciales correctas'})
            
            SetGlobalState({...globalState, visibleModal: false})
            dispatch({
                type:'LOGIN',
                payload: response.data
            })
            window.location.replace('/profile')
        }).catch((error)=> {
            notification.error({message:'El usuario no ha podido acceder, vuelva a intentarlo'})
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
            <Button size='large' style={styles.button} onClick={changeVisible}>
                <UserOutlined style={{fontSize:'20px'}} />
                Ingresar
            </Button>
            <UserLoginForm visible={globalState.visibleModal} onCreate={onCreate} onCancel={closeModal} />
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
    

export default Login
