import React, { useState, useEffect } from 'react'
import { Form,Button, Select, Typography, message, notification } from 'antd'
import { InputItem } from 'antd-mobile'
import { countries } from '../../../resources/countries'
import { geo } from '../../../resources/geo'
import { EditOutlined } from '@ant-design/icons'
import api from '../../../api/endpoints'
const { Title } = Typography
const { Option } = Select

const SignUp = () =>{

    const [isChilean, setIsChilean] = useState()
    const [isActiveRegion, setIsActiveRegion] = useState(false)
    const [errors, setErrors] = useState()

    const [form] = Form.useForm()   

    useEffect(()=> {
        window.scroll({top:0})
    }, [])

    return(
            <>
            <Title style={{textAlign:'center', marginTop:'20px', marginBottom:'30px'}} level={4} ><EditOutlined style={{marginRight:'20px', fontSize:'25px'}} /> Formulario de inscripción</Title>
            <Form name='signup' style={{marginBottom:'30px'}} onFinish={async (values)=>{
                
                var password = values['password']
                var password_confirm = values['password_confirmation']
                if(password !== password_confirm){
                    message.error('Las contraseñas no coinciden!')
                }else{
                    const request = await api.user.signup(values).then((response)=> {
                        notification.success({ message:`${values.email} fue creado!!!`, title:'Usuario creado'})                        
                        form.resetFields()
                        setTimeout(()=> {
                            window.location.replace('/')
                        }, 3000)
                        
                    }).catch((error)=> {                        
                        setErrors(error.response.data)
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
                                  field = 'Nombre de </React.Fragment>usuario'
                              }
                                notification.error({message:`${field}: ${message}`})
                              }
                        )}
                    })

                    return request
                }            
            }}>
                <Form.Item style={styles.formItem}
                    rules={[{ required: true, message: 'Ingresa tu nombre' }]}
                    name='first_name'
                >
                    <InputItem                        
                        placeholder="* Ingresa tu nombre"                        
                        >
                            Nombre
                    </InputItem>
                </Form.Item>
                <Form.Item style={styles.formItem}
                    rules={[{ required: true, message: 'Ingresa tu apellido' }]}
                    name='last_name'
                >
                    <InputItem                        
                        placeholder="* Ingresa tu apellido"                        
                        >
                            Apellido
                    </InputItem>
                </Form.Item>
                <Form.Item name='email' style={styles.formItem} rules={[{ type: 'email', message: 'Ingresa un correo valido' }, {required: true, message: 'Ingresa tu correo'}]} >
                    <InputItem                        
                        placeholder="* Ingresa tu correo"  
                        type=''
                        >
                            Correo
                    </InputItem>
                </Form.Item>
                <Form.Item style={styles.formItem}
                    rules={[{required: true, message: 'Ingresa tu nombre de usuario'}]}
                    name='username'
                >
                    <InputItem                        
                        placeholder="* Ingresa tu usuario"                        
                        >
                            Usuario
                    </InputItem>
                </Form.Item>
                <Form.Item style={styles.formItem}
                    rules={[{required: true, message: 'Ingresa tu telefono'}, {max:12, message:'Tienes un máximo de 12 digitos'}]}
                    name='phone_number'
                >
                    <InputItem                        
                        placeholder="* Ingresa tu telefono"
                        >
                            Telefono
                    </InputItem>
                </Form.Item>
                <Form.Item style={styles.formItem} label='Selecciona tu país' 
                    rules={[{required: true, message: 'Ingresa tu país'}]}
                    name='country'
                >
                   <Select placeholder='País' style={{width:'100%'}} onChange={(value)=> {
                       setIsActiveRegion(true)
                       if(value==='chile'){
                           setIsChilean(true)
                       }else{
                           setIsChilean(false)
                       }
                   }}>
                       <Option value='chile'><b>Chile</b></Option>
                       {countries.map((obj)=><Option value={obj} key={obj}> {obj} </Option>)}
                   </Select>                   
                </Form.Item>
                {isActiveRegion && 
                <Form.Item style={styles.formItem} 
                    rules={[{required: true, message: 'Ingresa tu región'},{max:120, message:'Pudes ingresar hasta 120 carácteres'}]}
                    name='region'
                >
                    {isChilean ? 
                        <Select placeholder='Región' style={{width:'100%'}}>
                        {geo.map((obj, index)=><Option value={obj.region} key={index}>{obj.region}</Option>)}
                   </Select>:<InputItem placeholder='Escribe tu región' >Región</InputItem>                   
                    }
                </Form.Item>
                }
                {isChilean && 
                <Form.Item style={styles.formItem}
                rules={[{required: true, message: 'Ingresa tu comuna'}, {max:120, message: 'Pudes ingresar hasta 120 carácteres'}]}
                name='commune'
                >   
                   <InputItem placeholder='* Escribe tu comuna' >Comuna</InputItem>                            
                </Form.Item>
                }

                <Form.Item style={styles.formItem} label='Perfil #1' rules={[{required: true, message: 'Selecciona tu perfil'}]}
                    name='type_user1'
                >
                   <Select placeholder='Selecciona un perfil...' style={{width:'100%'}}>
                   <Option value='AM'>
                                Artista / Manager
                            </Option> 
                            <Option value='GES'>                                
                                    Gestión Cultural / Producción / Programación                                                     
                            </Option>

                            <Option value='RE'>                                
                                    Representante de Organización                                
                            </Option>
                            <Option value='PROV'>                                
                                    Proveedor                                
                            </Option>
                            <Option value='PRO'>                                
                                    Profesional asociado/a                                
                    </Option>      
                   </Select>                   
                </Form.Item>

                <Form.Item style={styles.formItem} label='Perfil #2'  name='type_user2'>
                   <Select placeholder='Selecciona un perfil...' style={{width:'100%'}}>
                   <Option value='AM'>
                                Artista / Manager
                            </Option> 
                            <Option value='GES'>
                                    Gestión Cultural / Producción / Programación
                            </Option>

                            <Option value='RE'>                                
                                    Representante de Organización                                
                            </Option>
                            <Option value='PROV'>                                
                                    Proveedor
                            </Option>
                            <Option value='PRO'>                                
                                Profesional asociado/a                                
                   </Option>      
                   </Select>                   
                </Form.Item>
                <Form.Item style={styles.formItem} label='Perfil #3'  name='type_user3'>
                   <Select placeholder='Selecciona un perfil...' style={{width:'100%'}}>
                   <Option value='AM'>
                                Artista / Manager
                            </Option> 
                            <Option value='GES'>                                
                                    Gestión Cultural / Producción / Programación                                
                            </Option>

                            <Option value='RE'>                                
                                    Representante de Organización                                
                            </Option>
                            <Option value='PROV'>                                
                                    Proveedor                                                         
                            </Option>
                            <Option value='PRO'>
                                    Profesional asociado/a                                
                            </Option>      
                   </Select>                   
                </Form.Item>

                <Form.Item style={styles.formItem}  rules={[{required: true, message: 'Escribe tu contraseña'},{min:6, message:'Al menos debes ingresar 6 carácteres'}]} name='password'>
                    <InputItem                        
                        placeholder="* Ingresa tu contraseña"
                        type='password'
                        >
                            
                    </InputItem>
                </Form.Item>

                <Form.Item style={styles.formItem} rules={[{required: true, message: 'Confirma tu contraseña'}, {min:6, message:'Al menos debes ingresar 6 carácteres'}]} name='password_confirmation'>
                    <InputItem                        
                        placeholder="* Confirmación de contraseña"
                        type='password'                        
                        >
                            
                    </InputItem>
                </Form.Item>
                <Form.Item style={styles.formItem} >
                    <Button style={{width:'100%'}} size='large' type='primary' htmlType="submit" >
                        Inscribirse
                    </Button>                                                    
                </Form.Item>
            </Form>
        </>)

}


const styles = {
    formItem: {
        paddingLeft:'5px',
        paddingRight:'5px',        
    }
}

export default SignUp