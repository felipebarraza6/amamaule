import React, { useContext, useState } from 'react'
import { Col, Row, Card, Form, Select, Tag, Input,
          Upload, Button, message} from 'antd'
import { AuthContext } from '../../../App'
import api from '../../../api/endpoints'

const { Option } = Select
const { TextArea } = Input


const ProfileData = () => {


 
  
  return(
     <Row>
        <Col span={24}>
            <Card title='Perfil de Usuario' >
                                    
                                   
                                <Form layout='vertical' >
                                        <Form.Item label='Disciplina' name='disciplina'>                                            
                                            <Select mode='multiple' placeholder='Selecciona hasta 3 opciones'>
                                                <Option value="teatro">teatro</Option>
                                                <Option value="música">música</Option>
                                                <Option value="circo">circo</Option>
                                                <Option value="danza">danza</Option>
                                                <Option value="títeres">títeres</Option>
                                                <Option value="narración oral">narración oral</Option>n
                                                <Option value="ópera">ópera</Option>
                                                <Option value="performance">performance</Option>
                                            </Select>                                            
                                        </Form.Item>
                                        <Form.Item label='Genero' name='genero'>
                                            <Select mode='multiple' placeholder='Selecciona hasta 3 opciones'>
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
                                        <Form.Item label='Tipo Proveedor' name='tipo_proveedor'>
                                            <Select placeholder='Selecciona una opcion'>
                                                <Option value='transporte'>transporte</Option>
                                                <Option value='técnica'>técnica</Option>
                                                <Option value='catering'>catering</Option>
                                                <Option value='otros'>otros</Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item label='Tipo Profesional' name='tipo_profesional'>
                                            <Select placeholder='Selecciona una opcion'>                                            
                                                <Option value='disenador gráfico/a'>diseñador gráfico/a</Option>
                                                <Option value='escenografo/a'>escenógrafo/a</Option>
                                                <Option value='sonido'>sonido</Option>
                                                <Option value='iluminación'>iluminación</Option>
                                                <Option value='comunicación'>comunicación</Option>
                                                <Option value='audiovisualista'>audiovisualista</Option>
                                                <Option value='fotografo'>fotógrafo/a</Option>
                                                <Option value='maquillador'>maquillador/a</Option>
                                                <Option value='vestuarista'>vestuarista</Option>
                                                <Option value='otros'>otros</Option>
                                            </Select>
                                        </Form.Item>
                                    
                                    <Form.Item label='Nombre Entidad' name='nombre_entidad'>
                                        <Input />
                                    </Form.Item>
                                    <Form.Item label='Cargo' name='cargo'>
                                        <Input />
                                    </Form.Item>
                                    <Form.Item label='Perfil Profesional' name='perfil_profesional'>
                                        <TextArea />
                                    </Form.Item>
                                    <Form.Item label='Dossier Archivo' name='dossier_archivo'>
                                        <Upload > Subir Archivo</Upload>
                                    </Form.Item>
                                    <Form.Item label='URL' name='url_contenido'>
                                        <Input />
                                    </Form.Item>
                                    <Form.Item>
                                        <Button size="large" type='primary' htmlType='submit' style={{backgroundColor:'#CE3D4B', borderColor:'#CE3D4B'}}>Actualizar</Button>
                                    </Form.Item>
                                </Form>     
                            </Card>
                        </Col>
                        
                    </Row>

  )

}


export default ProfileData
