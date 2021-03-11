import React, { useState } from 'react'
import { Modal, Button, Form, 
        Input, notification, Col, 
        Row, Upload, Select, Alert, Tooltip } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
const { Option } = Select

const UserCreateForm = ({ visible, onCreate, onCancel}) => {
    const [form] = Form.useForm()
    return(
        <Modal
            visible={visible}
            title='Formulario de Inscripción'
            okText = 'Inscribirse'
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
                    <Form.Item name='name' label='Nombre' rules={[
                        { required: true, message: 'Por favor ingrese su nombre'},                    
                    ]}>
                        <Input />
                    </Form.Item>    
                    </Col>
                    <Col span={12} style={styles.colField} >
                    <Form.Item name='last_name' label='Apellido' rules={[
                        { required: true, message: 'Por favor ingrese su apellido'},                    
                    ]}>
                        <Input />
                    </Form.Item>
                    </Col>  
                </Row>
                
                <Row>
                    <Col span={12} style={styles.colField} >
                        <Form.Item name='email' label='Email' rules={[
                            { required: true, message: 'Por favor ingrese su correo'},
                            { type: 'email', message: 'Debes ingresar un correo valido'}
                        ]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12} style={styles.colField} >
                        <Form.Item name='username' label='Usuario' rules={[
                        { required: true, message: 'Por favor ingrese su nombre de usuario'},                    
                        ]}>
                        <Input />
                    </Form.Item>
                    </Col>
                </Row>
                
                <Row>
                    <Col span={12} style={styles.colField} >
                        <Form.Item name='principal_image' label='Imagen'>
                            <Upload>
                                <Button icon={<UploadOutlined />}> Click para cargar imagen...</Button>
                            </Upload>
                        </Form.Item>
                    </Col>
                    <Col span={12} style={styles.colField} >
                        <Form.Item name='country' label='País' rules={[
                            { required: true, message: 'Por favor ingrese su país'},                    
                        ]}>
                            <Select>

                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={8} style={styles.colField} >
                        <Form.Item name='region' label='Región' rules={[
                                { required: true, message: 'Por favor ingrese su región'},                    
                            ]}>
                            <Select>
                                
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8} style={styles.colField} >
                        <Form.Item name='commune' label='Comuna' rules={[
                        { required: true, message: 'Por favor ingrese su comuna'},                    
                        ]}>
                            <Select>
                                
                                </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8} style={styles.colField} >
                        <Form.Item name='province' label='Provincía' rules={[
                            { required: true, message: 'Por favor ingrese su provincía'},                    
                        ]}>
                            <Select>
                                
                                </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row style={styles.alert}>
                    <Alert showIcon closable type='warning' message='Puedes seleccionar hasta 3 perfiles...' />
                </Row>
                <Row>
                    <Col span={8} style={styles.colField} >
                    <Form.Item name='type_user1' label='Rol #1' rules={[
                        { required: true, message: 'Selecciona al menos un tipo de Rol'},                    
                    ]}>
                        <Select>
                            <Option>Artista / Manager</Option> 
                            <Option>
                                <Tooltip title='Gestión Cultural / Producción / Programación'>
                                    Gestión Cultural / Producción / Programación
                                </Tooltip>                           
                            </Option>

                            <Option>
                                <Tooltip title='Representante de organización o empresa, pública o privada'>
                                    Representante de Organización
                                </Tooltip>
                            </Option>
                            <Option>Proveedor</Option>                            
                        </Select>
                    </Form.Item> 

                    </Col>
                    <Col span={8} style={styles.colField} >
                    <Form.Item name='type_user2' label='Rol #2'>
                        <Select>        
                            <Option>Artista / Manager</Option>                            
                            <Option>Gestión Cultural / Producción / Programación</Option>
                            <Option>Representante de Organización</Option>
                            <Option>Proveedor</Option>                            
                        </Select>
                    </Form.Item>                         
                    </Col>
                    <Col span={8} style={styles.colField} >
                    <Form.Item name='type_user3' label='Rol #3'>
                        <Select>        
                        <Option>Artista / Manager</Option>                            
                            <Option>Gestión Cultural / Producción / Programación</Option>
                            <Option>Representante de Organización</Option>
                            <Option>Proveedor</Option>                            
                        </Select>
                    </Form.Item> 
                    </Col>
                </Row>                                                              
            </Form>

        </Modal>
    )

}

const SignUp = () => {
    
    const initialState = {
        visibleModal: false,        
        data: null,
        isLoading: false
    }    

    const [globalState, SetGlobalState] = useState(initialState)

    function onCreate(values){
        console.log(values)
        notification.success({ message:`${values.email} fue creado!!!`, title:'Usuario creado'})
        SetGlobalState({...globalState, visibleModal: false})
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
                Inscribete Aquí
            </Button>
            <UserCreateForm visible={globalState.visibleModal} onCreate={onCreate} onCancel={closeModal} />
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
        marginTop:'40px',
        marginBottom:'30px'
    }
}
    

export default SignUp