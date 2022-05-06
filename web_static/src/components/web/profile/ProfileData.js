import React, { useContext, useState } from 'react'
import { Col, Row, Card, Form, Select, Tag, Input,
          Upload, Button, message, Checkbox, Alert } from 'antd'
import { UploadOutlined  } from '@ant-design/icons'
import { AuthContext } from '../../../App'
import api from '../../../api/endpoints'
const { Option } = Select
const { TextArea } = Input


const ProfileData = () => {
  
  const { state } = useContext(AuthContext)
  const [otherSupplier, setOtherSupplier] = useState(false)
  const [otherTypeProfesional, setOtherTypeProfesional] = useState(false)
  const [otherArtist, setOtheArtist] = useState(false)
  const [otherGener, setOtherGener] = useState(false)
  const [blockDis, setBlockDis] = useState(false)
  const [blockGener, setBlockGener] = useState(false)
  const [errors, setErrors] = useState(null)
  const [file, setFile] = useState()

 
 async  function onFinish(values){
    if(values.disciplina){
      values= {
        ...values,
        disciplina: values.disciplina.toString()
      }
    }

    if(values.genero){
        values = {
          ...values,
          genero: values.genero.toString()
        }
    }

   const request = await api.user.create_profile(state.user.id, values).then((response)=> {
      message.success('Perfil Creado!!!')      
      if(!file){
        window.location.reload()
      }else{
        message.warning('Estamos cargando tu dossier...')      
      }
    }).catch((error)=> {
      if(error.response){
        setErrors(error.response.data)
      }
      if(errors){
        Object.keys(errors).map((key, index)=> {
          let field = key
          let m = errors[key]
          if(key==='non_field_errors'){
              field='Error'
          }

          message.error(`${field}: ${m}`)
      
        })
      }
    
    }) 

  const file_re = await api.user.upload_file('dossier_archivo', file, state.user.id).then((response)=> {
    window.location.reload()
    }).catch((error)=>{
      console.log({error})
    })
    
    return request

  }


  var is_artis = false
  if(state.user){
   if(state.user.type_user1 === 'AM'){
      is_artis = true
   }else if(state.user.type_user2 === 'AM'){
      is_artis = true
   }else if(state.user.type_user3 === 'AM'){
      is_artis = true
   }else{
      is_artis = false
   } 

  }

  var is_prov = false
   if(state.user){
   if(state.user.type_user1 === 'PROV'){
      is_prov = true
   }else if(state.user.type_user2 === 'PROV'){
      is_prov = true
   }else if(state.user.type_user3 === 'PROV'){
      is_prov = true
   }else{
      is_prov = false
   } 

  }

  var is_pro = false
  if(state.user){
    if(state.user.type_user1 === 'PRO'){
        is_pro = true
    }else if(state.user.type_user2 === 'PRO'){
        is_pro = true
    }else if(state.user.type_user3 === 'PRO'){
        is_pro = true
    }else{
        is_pro = false
    } 
  }

  
  return(
     <Row>
        <Col span={24}>
            <Card title='Perfil de Usuario' >
                                   
                                <Form layout='vertical' onFinish={(values)=> onFinish(values)}>
                                    <Alert
                                          description="Estimado Usuario/a: Recordamos actualizar tu información de perfil, escogiendo una foto real y nombre de usuario (nickname).
                                          Los usuarios/as que no completen correctamente su perfil, no podran acceder a las Rondas de Vinculación"
                                          type="warning"
                                          showIcon
                                          closable
                                          style={{ marginBottom:'20px' }}
                                        />
                                      <Row>
                                        {state &&<> 
                                          {is_artis &&  <>
                                             <Col xs={{span:24}} lg={{span:12}}  style={{paddingRight:'5px'}}>
                                         <p>Si eres artista, indica tu disciplina artística (puedes marcar hasta 3)</p>
                                         <Checkbox onChange={(e)=>{ 
                                            setOtheArtist(e.target.checked)  
                                            setBlockDis(false)
                                            }}  /> Si no encuentras tus opciones puedes agregarlas manualmente
                                                                                    
                                          {!otherArtist ? 
                                          <Form.Item name='disciplina' rules={[
                                            {required:true, message:'Selecciona al menos una opción'},
                                            
                                          ]}  >
                                            <Select disabled={blockDis}  onChange={(value)=>{
                                              
                                              if(value.length >= 3){                                              
                                              setBlockDis(true)
                                            }}}  mode='multiple' placeholder='Selecciona hasta 3 opciones'>
                                                <Option value="teatro">teatro</Option>
                                                <Option value="música">música</Option>
                                                <Option value="circo">circo</Option>
                                                <Option value="danza">danza</Option>
                                                <Option value="títeres">títeres</Option>
                                                <Option value="narración oral">narración oral</Option>
                                                <Option value="ópera">ópera</Option>
                                                <Option value="performance">performance</Option>
                                            </Select>
                                            </Form.Item>
                                            :<Form.Item name='disciplina' rules={[
                                              {required:true, message:'Selecciona al menos una opción'},
                                              {max:800, message:'Excede el maximo permitido'}
                                              
                                            ]}  >
                                            <Input placeholder='Escribe tus opciones' />
                                            </Form.Item>
                                          }
                                        
                                        </Col>
                                        <Col xs={{span:24}} lg={{span:12}}   style={{paddingLeft:'5px'}}  >
                                          <p>Si eres artista, con qué genero te identificas (puedes marcar hasta 3)</p>
                                          <Checkbox onChange={(e)=>{
                                              setOtherGener(e.target.checked)
                                              setBlockGener(false)
                                              }} /> Si no encuentras tus opciones puedes agregarlas manualmente 
                                        
                                          
                                        {!otherGener ? 
                                        <Form.Item name='genero' rules={[{required:true, message:'Selecciona al menos una opción'}]} >
                                            <Select disabled={blockGener} mode='multiple' placeholder='Selecciona hasta 3 opciones' onChange={(value)=>{if(value.length >= 3){                                              
                                              setBlockGener(true)
                                            }}}>
                                                <Option value='musica popular'>música popular</Option>
                                                <Option value='musica docta'>música docta</Option>
                                                <Option value='folclore o música de raíz'>folclore o música de raíz</Option>
                                                <Option value='teatro contemporáneo'>teatro contemporáneo</Option>
                                                <Option value='teatro familiar'>teatro familiar</Option>
                                                <Option value='teatro educativo'>teatro educativo</Option>
                                                <Option value='lambe lambe'>lambe lambe</Option>
                                                <Option value='narración oral'>narración oral</Option>
                                                <Option value='performance'>performance</Option>
                                                <Option value='circo contemporáneo'>circo contemporáneo</Option>
                                                <Option value='circo clásico'>circo clásico</Option>
                                                <Option value='danza contemporánea'>danza contemporánea</Option>
                                                <Option value='danza moderna'>danza moderna</Option>
                                                <Option value='ballet'>ballet</Option>
                                                <Option value='danza folclórica'>danza folclórica</Option>
                                                <Option value='marionetista'>marionetista</Option>
                                                <Option value='titiritero/a'>titiritero/a</Option>
                                                <Option value='canto popular'>canto popular</Option>
                                                <Option value='canto lírico'>canto lírico</Option>
                                                <Option value='canto coral'>canto coral</Option>
                                                </Select>
                                              </Form.Item>
                                            :<Form.Item name='genero' rules={[
                                              {required:true, message:'Selecciona al menos una opción'},
                                              {max:800, message:'Excede el maximo permitido'}
                                            ]} >
                                              <Input placeholder='Escribe tus opciones'  />
                                            </Form.Item>
                                            }
                                       
                                      </Col>
                                          </>} 
                                        </>}
                                        {is_prov && <Col span={24} style={{paddingRight:'5px'}}>
                                        <Form.Item label='Tipo de Proveedor' name='tipo_proveedor'>
                                             <Checkbox onChange={(e)=>setOtherSupplier(e.target.checked)} /> Si no encuentras tu opción puedes agregarla manualmente
                                            {!otherSupplier ? 
                                            <Select placeholder='Selecciona una opcion'>
                                                <Option value='transporte'>transporte</Option>
                                                <Option value='técnica'>técnica</Option>
                                                <Option value='catering'>catering</Option>
                                            </Select>:<Input maxLength={800} placeholder='Escribre tu opción'  />
                                            }
                                        </Form.Item>
                                        </Col>}
                                        {is_pro && 
                                        <Col span={24} style={{paddingLeft:'5px'}}>
                                        <Form.Item label='Tipo de Profesional' name='tipo_profesional' >
                                            <Checkbox onChange={(e)=>setOtherTypeProfesional(e.target.checked)} /> Si no encuentras tu opción puedes agregarla manualmente
                                          {!otherTypeProfesional ? 
                                            <Select placeholder='Selecciona una opción'>                                             
                                                <Option value='disenador gráfico/a'>diseñador gráfico/a</Option>
                                                <Option value='escenografo/a'>escenógrafo/a</Option>
                                                <Option value='sonido'>sonido</Option>
                                                <Option value='iluminación'>iluminación</Option>
                                                <Option value='comunicación'>comunicación</Option>
                                                <Option value='audiovisualista'>audiovisualista</Option>
                                                <Option value='fotografo'>fotógrafo/a</Option>
                                                <Option value='maquillador'>maquillador/a</Option>
                                                <Option value='vestuarista'>vestuarista</Option>
                                            </Select>:<Input maxLength={800} placeholder='Escribre tu opción'  />
                                            }
                                        </Form.Item>
                                        </Col>}
                                    <Col xs={{span:24}} lg={{span:12}}  style={{paddingRight:'5px'}}>
                                    <Form.Item label='Nombre de la entidad, organización, elenco o proyecto al que representas' 
                                     rules={[
                                       {required:true, message:'Este es un campo obligatorio'},
                                       {max:800, message:'Maximo de caracteres permitidos'}
                                       ]}  name='nombre_entidad'>
                                        <Input />
                                    </Form.Item>
                                    </Col>
                                    <Col xs={{span:24}} lg={{span:12}}  style={{paddingLeft:'5px'}}>
                                    <Form.Item label='Cargo dentro de la misma' name='cargo' 
                                      rules={[                                        
                                        {max:800, message:'Maximo de caracteres permitidos'}
                                        ]}
                                    >
                                        <Input style={{marginTop:'22px'}}  />
                                    </Form.Item>
                                    </Col>
                                    <Col span={24}> 
                                    <Form.Item label='Perfil profesional o de tu organización'  
                                        rules={[
                                          {required:true, message:'Este es un campo obligatorio'},
                                          {max:800, message:'Maximo de caracteres permitidos'}
                                          ]}  name='perfil_profesional'>
                                        <TextArea />
                                    </Form.Item>
                                    </Col>
                                    <Col xs={{span:25}} lg={{span:8}}  style={{paddingRight:'5px'}}  >
                                    <h4>Si tienes un dossier, adjunta aquí</h4>
                                    {file && `${file.name}`}      
                                    <Form.Item name='dossier' label={<>
                                      <div style={{padding:'5px', marginTop:'10px', cursor:'pointer', border:'#B05DB9'}}>
                                        <UploadOutlined style={{fontSize:'23px', color:'#B05DB9', marginTop:'5px', cursor:'pointer'}} /> 
                                        <span style={{fontSize:'15px', color:'#B05DB9',marginLeft:'15px'}}>Selecciona tu archivo</span>
                                        </div>  
                                      </>} > 
                                        
                                        <input style={styles.uploadFile}  type='file' onChange={async(evt)=>{
                                          setFile(evt.target.files[0])                                                                                                                                  
                                          } } />                                                                                
                                    </Form.Item>
                                    
                                    </Col>
                                    <Col xs={{span:24}} lg={{span:12}}  style={{paddingLeft:'5px'}}>
                                    <Form.Item label='URL' name='url_contenido' rules={[
                                       {max:1200, message:'Maximo de caracteres permitidos'}
                                       ]}>
                                        <Input addonBefore='http://'  />
                                    </Form.Item>
                                    </Col>
                                    </Row>
                                    <Form.Item>
                                        <Button size="large" type='primary' htmlType='submit' style={{backgroundColor:'#FFBA31', borderColor:'#FFBA31'}}>Enviar Perfil</Button>
                                    </Form.Item>
                                </Form>     
                            </Card>
                        </Col>
                        
                    </Row>

  )

}

const styles = {
  uploadFile: {
    opacity: '0',
    position: 'absolute',
    zIndex: '-1'
  }
}


export default ProfileData
