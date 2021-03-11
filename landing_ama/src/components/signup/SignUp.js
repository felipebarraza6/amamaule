import React, { useState } from 'react'
import { Modal, Button, Form, 
        Input, notification, Col, 
        Row, Select, Alert, Tooltip, message } from 'antd'
import { geo } from '../../resources/geo'
import { countries } from '../../resources/countries'
const { Option } = Select

const UserCreateForm = ({ visible, onCreate, onCancel}) => {
    // Hooks of in the state form and child selection void region, communes & provinces (only chilean)
    const [isChilean, setIsChilean] = useState(false)
    const [provinces, setProvinces] = useState([])        
    const [indexElements, setIndexElements] = useState({
        keyRegion: null,
        keyProvince: null
    })

    const [form] = Form.useForm()    
      
    return(
        <Modal
            visible={visible}
            title='Formulario de Inscripción / Creación de Usuario'
            okText = 'Inscribirse'
            style={{top:'1px'}}
            width='600px'
            cancelText = 'Cancelar'
            onCancel = {onCancel}
            onOk={()=> {
                form.validateFields().then((values)=> {                    
                    let password = values['password']
                    let password_conf = values['confirmation_password']
                    if(password === password_conf){
                        form.resetFields()
                        onCreate(values)
                        
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
                        <Form.Item name='phone_number' label='Teléfono de contacto' rules={[
                            { required: true, message: 'Por favor ingrese su telefono'},                                                                       
                        ]}>
                            <Input />
                        </Form.Item>
                    </Col>     
                    <Col span={12} style={styles.colField} >
                        <Form.Item name='country' label='País de residencia' rules={[
                            { required: true, message: 'Por favor ingrese su país'},                    
                        ]}>
                            <Select showSearch onChange={ (value) => { 
                                if(value !== 'Chile'){ 
                                    setIsChilean(false) 
                                }else{
                                    setIsChilean(true) 
                                } 
                                }}>                                
                                {countries.map((obj)=><Option value={obj}>{obj}</Option>)}
                            </Select>
                        </Form.Item>
                    </Col>                     
                </Row>
                <Row>                    
                    
                    <Col span={12} style={styles.colField} >
                        {isChilean ? 
                            <Form.Item name='region' label='Región de residencia' rules={[
                                { required: true, message: 'Por favor ingrese su región'},                    
                            ]}>
                                <Select onSelect = { (value, index) => {
                                    setProvinces(geo[index.key].provincias)
                                    setIndexElements({...indexElements, keyRegion: index.key})
                                    }}>
                                    {geo.map((obj, index)=><Option value={obj.region} key={index}>{obj.region}</Option>)}
                                </Select>
                            </Form.Item>:
                            <Form.Item name='region' label='Región de residencia' rules={[
                                { required: true, message: 'Por favor ingrese su región'},                    
                                ]}>
                                <Input />
                            </Form.Item>
                        
                        } 
                    </Col>
                    {isChilean && <Col span={12} style={styles.colField} >
                        <Form.Item name='province' label='Provincía de residencia' rules={[
                            { required: true, message: 'Por favor ingrese su provincía'},                    
                        ]}>
                            <Select onSelect = {(value, index) => {
                                setProvinces(geo[indexElements.keyRegion].provincias[index.key].comunas)
                            }}>                           
                                {provinces.map((obj, index)=><Option value={obj.name} key={index}>{obj.name}</Option>)}
                            </Select>
                        </Form.Item>
                    </Col>}                    
                </Row>
                <Row>             
                    
                    {isChilean && <Col span={12} style={styles.colField} >
                        <Form.Item name='commune' label='Comuna de residencia' rules={[
                        { required: true, message: 'Por favor ingrese su comuna'},                    
                        ]}>
                            <Select>
                                {provinces.map((obj, index)=><Option value={obj.name} key={index}>{obj.name}</Option>)}
                            </Select>
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
                    <Col span={12} style={styles.colField}>
                        <Form.Item name='password' label='Contraseña' rules={[
                            { required: true, message: 'Por favor ingresa tu contraseña'},                    
                            ]}>
                                <Input type='password' />
                        </Form.Item>
                    </Col>
                    <Col span={12} style={styles.colField}>
                        <Form.Item name='confirmation_password' label='Confirma tu Contraseña' rules={[
                            { required: true, message: 'Por favor ingresa tu contraseña'},                    
                            ]}>
                                <Input type='password' />
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
        isLoading: false,
        isChilean: true,

    }    

    const [globalState, SetGlobalState] = useState(initialState)    

    function onCreate(values){
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
        marginTop:'20px',
        marginBottom:'30px',
        width:'100%'
    }
}
    

export default SignUp