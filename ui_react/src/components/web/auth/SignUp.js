import React, { useState, useContext } from 'react'
import { Modal, Button, Form, 
        Input, notification, Col, 
        Row, Select, Alert, Spin, message } from 'antd'
import { geo, geo_re_ci } from '../../../resources/geo'
import api from '../../../api/endpoints'
import { AuthContext } from '../../../App'
import { countries } from '../../../resources/countries'
const { Option } = Select


const SignUp = ({ setStep, setUser }) => {

    const { dispatch } = useContext(AuthContext)

    const [errors, setErrors] = useState(null)
    const initialState = {
        visibleModal: false,        
        data: null,
        isLoading: false,
        isChilean: true,

    }    

    
    const [isChilean, setIsChilean] = useState(false)
    const [activeRegion, setActiveRegion] = useState(false)     
    const [activeProvinces, setProvinces] = useState(false) 
    const [provinces, setRegionSelect] = useState({})
    const [load, setLoad] = useState(false)

    const [form] = Form.useForm()    

    async function onCreate(values){
        setLoad(true)
        var email_convert_to_user = /^([^]+)@(\w+).(\w+)$/.exec(values.email)           
        
        if(Array.isArray(email_convert_to_user)){
            var outString = email_convert_to_user[1].replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');             
            values={
                ...values,
                username: (outString+email_convert_to_user[2]).slice(0,12)
            }                  
        }else {
            values ={
                ...values,
                username : values.phone_number.slice(0,12) 
            }
        }

        values = {
            ...values,
            email: values.email.toLowerCase()
        }
        
       const request = await api.user.signup(values).then(async(response)=> {
           
            const rq1 = await api.user.login({email:values.email, password:values.password}).then((r)=> {
                const user = r.data.user
                const access_token = r.data.access_token  
                dispatch({
                    type: 'LOGIN',
                    payload: {
                      access_token,
                      user
                    }
                  })                                             
            })
            
            notification.success({ message:`${values.email} fue creado!!!`, title:'Usuario creado'}) 
            setLoad(false)
            form.resetFields()     
            setStep(1)
            console.log(response)
            setUser(response)
                  
        }).catch((error)=> {
            setLoad(false)
            console.log({error})
            if(error.response){
                setErrors(error.response.data)            
            }
            
            if(errors){
            Object.keys(errors).map((key, index) => {
              let field = key
              let message = errors[key]
              
              if(field==='phone_number'){
                  field = 'Teléfono'
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
      
    return(
            <Form
                form={form}
                layout = 'vertical'
                name='form_user_create'                
                onFinish={onCreate}            
            >
                <Row>
                    <Col xs={24} lg ={8} span={8} style={styles.colField} >
                    <Form.Item name='first_name' label='Nombre' rules={[
                        { required: true, message: 'Por favor ingrese su nombre'},                    
                    ]}>
                        <Input />
                    </Form.Item>    
                    </Col>
                    <Col  xs={24} lg ={8} span={8} style={styles.colField} >
                    <Form.Item name='last_name' label='Apellido' rules={[
                        { required: true, message: 'Por favor ingrese su apellido'},                    
                    ]}>
                        <Input />
                    </Form.Item>
                    </Col>  
                
                    <Col  xs={24} lg ={8} span={8} style={styles.colField} >
                        <Form.Item name='email' label='Correo Electrónico' rules={[
                            { required: true, message: 'Por favor ingrese su correo'},
                            { type: 'email', message: 'Debes ingresar un correo valido'}
                        ]}>
                            <Input />
                        </Form.Item>
                    </Col>                   
                    <Col  xs={24} lg ={8} span={8} style={styles.colField} >
                        <Form.Item name='phone_number' label='Telefono/Celular' rules={[
                            { required: true, message: 'Por favor ingrese su telefono'},                                                                       
                            { max: 12, message:'Solo puedes ingresar 12 Digitos'}
                        ]}>
                            <Input />
                        </Form.Item>
                    </Col>     
                    <Col  xs={24} lg ={8} span={8} style={styles.colField} >
                        <Form.Item name='country' label='País de residencia' rules={[
                            { required: true, message: 'Por favor ingrese su país'},                    
                        ]}>
                            <Select showSearch onChange={ (value) => { 
                                setActiveRegion(true)
                                if(value !== 'chile'){ 
                                    setIsChilean(false) 
                                    setProvinces(false)
                                }else{
                                    setIsChilean(true) 
                                } 
                                }}>                                
                                <Option value='chile'><b>Chile</b></Option>
                                {countries.map((obj)=><Option value={obj}>{obj}</Option>)}
                            </Select>
                        </Form.Item>
                    </Col>     
                    {activeRegion &&  <React.Fragment>
                            {isChilean ? <Col  xs={24} lg ={8} span={8} style={styles.colField} >
                                <Form.Item name='region' label='Región de residencia' rules={[
                                    { required: true, message: 'Por favor seleccione su región'},                    
                                ]}>
                                    <Select onSelect={(x, z)=>{
                                        setProvinces(true)
                                        setRegionSelect(geo_re_ci[z.key].provincias)                                                                                
                                        }}>
                                        {geo_re_ci.map((obj, index)=><Option value={obj.region} key={index}>{obj.region}</Option>)}
                                    </Select>
                                </Form.Item></Col>: <Col  xs={24} lg ={8} span={8} style={styles.colField} >
                                <Form.Item name='region' label='Región de residencia' rules={[
                                    { required: true, message: 'Por favor ingrese su región'},                    
                                    ]}>
                                    <Input />
                                </Form.Item>
                                </Col>
                            
                            }
                            </React.Fragment> 
                        }                
                </Row>
                <Row>                    
                    
                    
                        
                    
                    {activeProvinces && <Col  xs={24} lg ={8} span={8} style={styles.colField} >
                        <Form.Item name='commune' label='Ciudad' rules={[
                        { required: true, message: 'Por favor seleccione su ciudad'},                                            
                        ]}>
                          <Select>
                            {provinces && <>
                                {provinces.map((obj, index)=><Option value={obj.name} key={index}>{obj.name}</Option>)}
                            </>}                            
                          </Select>   
                      </Form.Item>

                    </Col>}                    
                </Row>
                <Row>                    
                    <Col  xs={24} lg ={8} span={8} style={styles.colField}>
                        <Form.Item name='password' label='Contraseña (minimo 6 caracteres)' rules={[
                            { required: true, message: 'Por favor ingresa tu contraseña'},
                            { min:6, message:'Debes ingresar al menos 6 caracteres'}
                            ]}>
                                <Input type='password' />
                        </Form.Item>
                    </Col>
                    <Col  xs={24} lg ={8} span={8} style={styles.colField}>
                        <Form.Item name='password_confirmation' label='Confirma tu Contraseña' rules={[
                            { required: true, message: 'Por favor ingresa tu contraseña'},                    
                            {min: 6, message: 'Debes ingresar al menos 6 caracteres'}
                            ]}>
                                <Input type='password' />
                        </Form.Item>
                    </Col>
                    <Col  xs={24} lg ={18} span={18}>
                    <p>¿Problemas para crear tu cuenta?</p> 
                    <p>Envíanos un correo a <a href='mailto:soporte@amamaule.cl' style={{color:'rgb(176, 93, 185)'}}  >soporte@amamaule.cl</a></p>
                    </Col>
                    <Col  xs={24} lg ={6} span={6}>
                        <Button disabled={load} htmlType='submit'  style={{margin:'5px', backgroundColor:'rgb(176, 93, 185)', borderColor:'rgb(176, 93, 185)', marginRight:'10px'}} type='primary' >Crear y completar perfil</Button>                       
                        <Button onClick={()=> {form.resetFields()}} type='primary' style={{margin:'5px', backgroundColor:'rgb(176, 93, 185)', borderColor:'rgb(176, 93, 185)', marginRight:''}}>Limpiar </Button>
                    </Col>
                      </Row>                                                              
            </Form>
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
