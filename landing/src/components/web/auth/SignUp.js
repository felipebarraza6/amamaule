import React, { useState } from 'react'
import { Modal, Button, Form, 
        Input, notification, Col, 
        Row, Select, Alert, Tooltip, message } from 'antd'
import { geo } from '../../../resources/geo'
import api from '../../../api/endpoints'
import { countries } from '../../../resources/countries'
const { Option } = Select


const UserCreateForm = ({ visible, onCreate, onCancel}) => {
    // Hooks of in the state form and child selection void region, communes & provinces (only chilean)
    const [isChilean, setIsChilean] = useState(false)
    const [activeRegion, setActiveRegion] = useState(false)     
    const [indexElements, setIndexElements] = useState({
        keyRegion: null,
        keyProvince: null
    })

    const [form] = Form.useForm()    
      
    return(
        <Modal
            visible={visible}
            title='Formulario de Inscripción'
            okText = 'Inscribirse'
            style={{top:'1px'}}
            width='600px'
            cancelText = 'Cancelar'
            onCancel = {onCancel}
            onOk={()=> {
                form.validateFields().then((values)=> {                    
                    let password = values['password']
                    let password_conf = values['password_confirmation']
                    if(password === password_conf){
                        onCreate(values, form)
                    } else{
                        message.error('Las contraseñas no coinciden!')
                    }                    
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
                    <Form.Item name='first_name' label='Nombre' rules={[
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
                        <Form.Item name='email' label='Correo Electrónico' rules={[
                            { required: true, message: 'Por favor ingrese su correo'},
                            { type: 'email', message: 'Debes ingresar un correo valido'}
                        ]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12} style={styles.colField} >
                        <Form.Item name='username' label='Nombre de Usuario' rules={[
                        { required: true, message: 'Por favor ingrese su nombre de usuario'},                    
                        ]}>
                        <Input />
                    </Form.Item>
                    </Col>
                </Row>
                <Row>             
                    <Col span={12} style={styles.colField} >
                        <Form.Item name='phone_number' label='Telefono/Celular' rules={[
                            { required: true, message: 'Por favor ingrese su telefono'},                                                                       
                            { max: 12, message:'Solo puedes ingresar 12 Digitos'}
                        ]}>
                            <Input />
                        </Form.Item>
                    </Col>     
                    <Col span={12} style={styles.colField} >
                        <Form.Item name='country' label='País de residencia' rules={[
                            { required: true, message: 'Por favor ingrese su país'},                    
                        ]}>
                            <Select onChange={ (value) => { 
                                setActiveRegion(true)
                                if(value !== 'chile'){ 
                                    setIsChilean(false) 
                                }else{
                                    setIsChilean(true) 
                                } 
                                }}>                                
                                <Option value='chile'><b>Chile</b></Option>
                                {countries.map((obj)=><Option value={obj}>{obj}</Option>)}
                            </Select>
                        </Form.Item>
                    </Col>                     
                </Row>
                <Row>                    
                    
                    <Col span={12} style={styles.colField} >
                        {activeRegion &&  <React.Fragment>
                            {isChilean ? 
                                <Form.Item name='region' label='Región de residencia' rules={[
                                    { required: true, message: 'Por favor ingrese su región'},                    
                                ]}>
                                    <Select>
                                        {geo.map((obj, index)=><Option value={obj.region} key={index}>{obj.region}</Option>)}
                                    </Select>
                                </Form.Item>:
                                <Form.Item name='region' label='Región de residencia' rules={[
                                    { required: true, message: 'Por favor ingrese su región'},                    
                                    ]}>
                                    <Input />
                                </Form.Item>
                            
                            }
                            </React.Fragment> 
                        }
                    </Col>
                    
                    {isChilean && <Col span={12} style={styles.colField} >
                        <Form.Item name='commune' label='Comuna de residencia' rules={[
                        { required: true, message: 'Por favor ingrese su comuna'},                    
                        { max: 120, message: 'Tienes un maximo de 120 caracteres'}
                        ]}>
                          <Input />                            
                      </Form.Item>

                    </Col>}                    
                </Row>
                <Row style={styles.alert}>
                    <Col span={24}>
                        <Alert showIcon closable type='warning' message='Puedes seleccionar hasta 3 aréas de trabajo(perfiles)' />
                    </Col>
                </Row>
                <Row>
                    <Col span={8} style={styles.colField} >
                    <Form.Item name='type_user1' label='Perfil #1' rules={[
                        { required: true, message: 'Selecciona al menos un tipo de Rol'},                    
                    ]}>
                        <Select>
                            <Option value='AM'>
                                Artista / Manager
                            </Option> 
                            <Option value='GES'>
                                <Tooltip title='Gestión Cultural / Producción / Programación'>
                                    Gestión Cultural / Producción / Programación
                                </Tooltip>                           
                            </Option>

                            <Option value='RE'>
                                <Tooltip title='Representante de organización o empresa, pública o privada'>
                                    Representante de Organización
                                </Tooltip>
                            </Option>
                            <Option value='PROV'>
                                <Tooltip title='Proveedor/a (transporte, técnica, catering, otros)'>
                                    Proveedor
                                </Tooltip>                                
                            </Option>
                            <Option value='PRO'>
                                <Tooltip title='Profesional Asociado/a a las Artes Escénicas (diseñador gráfico/a, escenógrafo/a, sonido, iluminación, comunicación, audiovisualista, fotógrafo/a, maquillador/a, vestuarista, otros)'>
                                    Profesional asociado/a
                                </Tooltip>                                
                            </Option>                          
                        </Select>
                    </Form.Item> 
                    </Col>
                    <Col span={8} style={styles.colField} >
                    <Form.Item name='type_user2' label='Perfil #2'>
                    <Select>
                            <Option value='AM'>
                                Artista / Manager
                            </Option> 
                            <Option value='GES'>
                                <Tooltip title='Gestión Cultural / Producción / Programación'>
                                    Gestión Cultural / Producción / Programación
                                </Tooltip>                           
                            </Option>

                            <Option value='RE'>
                                <Tooltip title='Representante de organización o empresa, pública o privada'>
                                    Representante de Organización
                                </Tooltip>
                            </Option>
                            <Option value='PROV'>
                                <Tooltip title='Proveedor/a (transporte, técnica, catering, otros)'>
                                    Proveedor
                                </Tooltip>                                
                            </Option>
                            <Option value='PRO'>
                                <Tooltip title='Profesional Asociado/a a las Artes Escénicas (diseñador gráfico/a, escenógrafo/a, sonido, iluminación, comunicación, audiovisualista, fotógrafo/a, maquillador/a, vestuarista, otros)'>
                                    Profesional asociado/a
                                </Tooltip>                                
                            </Option>                          
                        </Select>
                    </Form.Item>                         
                    </Col>
                    <Col span={8} style={styles.colField} >
                    <Form.Item name='type_user3' label='Perfil #3'>
                    <Select>
                            <Option value='AM'>
                                Artista / Manager
                            </Option> 
                            <Option value='GES'>
                                <Tooltip title='Gestión Cultural / Producción / Programación'>
                                    Gestión Cultural / Producción / Programación
                                </Tooltip>                           
                            </Option>

                            <Option value='RE'>
                                <Tooltip title='Representante de organización o empresa, pública o privada'>
                                    Representante de Organización
                                </Tooltip>
                            </Option>
                            <Option value='PROV'>
                                <Tooltip title='Proveedor/a (transporte, técnica, catering, otros)'>
                                    Proveedor
                                </Tooltip>                                
                            </Option>
                            <Option value='PRO'>
                                <Tooltip title='Profesional Asociado/a a las Artes Escénicas (diseñador gráfico/a, escenógrafo/a, sonido, iluminación, comunicación, audiovisualista, fotógrafo/a, maquillador/a, vestuarista, otros)'>
                                    Profesional asociado/a
                                </Tooltip>                                
                            </Option>                          
                        </Select>
                    </Form.Item> 
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={styles.colField}>
                        <Form.Item name='password' label='Contraseña' rules={[
                            { required: true, message: 'Por favor ingresa tu contraseña'},
                            { min:6, message:'Debes ingresar al menos 6 caracteres'}
                            ]}>
                                <Input type='password' />
                        </Form.Item>
                    </Col>
                    <Col span={24} style={styles.colField}>
                        <Form.Item name='password_confirmation' label='Confirma tu Contraseña' rules={[
                            { required: true, message: 'Por favor ingresa tu contraseña'},                    
                            {min: 6, message: 'Debes ingresar al menos 6 caracteres'}
                            ]}>
                                <Input type='password' />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                    <p>¿Problemas para crear tu cuenta?</p> 
                    </Col>
                    <p>Envíanos un correo a <a href='mailto:info@amamaule.cl'  >info@amamaule.cl</a></p>
                      </Row>                                                              
            </Form>

        </Modal>
    )
}


const SignUp = () => {
    
    const [errors, setErrors] = useState(null)
    const initialState = {
        visibleModal: false,        
        data: null,
        isLoading: false,
        isChilean: true,

    }    

    const [globalState, SetGlobalState] = useState(initialState)    

    async function onCreate(values, form){
        const request = await api.user.signup(values).then((response)=> {
            notification.success({ message:`${values.email} fue creado!!!`, title:'Usuario creado'})
            SetGlobalState({...globalState, visibleModal: false})
            form.resetFields()            
        }).catch((error)=> {
            
            setErrors(error.response.data)
            console.log(errors)
            if(errors){
            Object.keys(errors).map((key, index) => {
              let field = key
              let message = errors[key]
              
              if(field==='phone_number'){
                  field = 'Telefono'
              }
              if(field==='email'){
                  field = 'Email'
              }
              if(field === 'username'){
                  field = 'Nombre de usuario'
              }

                notification.error({message:`${field}: ${message}`})
              }
              )}

             
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
                Inscríbete aquí
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
        marginTop:'20px',
        marginBottom:'30px',
        width:'100%'
    }
}
    

export default SignUp
