import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { PageHeader, Card,Col, Row, Descriptions, Tooltip, Tag, Form, Input, Select, Button, Upload } from 'antd'
import { RollbackOutlined} from '@ant-design/icons'

import { AuthContext } from '../Home'
const {Option} = Select

const ProfileUser = () => {
    const { state } = useContext(AuthContext)
    var is_am = false
    var is_prov = false
    var is_pro = false
    if(state.user){
        const per1 = state.user.type_user1
        const per2 = state.user.type_user2
        const per3 = state.user.type_user3

        if(per1 === 'AM' || per2 ==='AM' || per3 === 'AM'){
            is_am = true
        }
        if(per1 === 'PROV' || per2 ==='PROV' || per3 === 'PROV'){
            is_prov = true
        }

        if(per1 === 'PRO' || per2 ==='PRO' || per3 === 'PRO'){
            is_pro = true
        }

    }    
    
    
    return(<>{state.user &&<>
            <Row style={styles.container}>
                <PageHeader                     
                    extra={<Tooltip title='Volver al inicio'><Link to='/'><RollbackOutlined style={{fontSize:'24px', color:'#CE3D4B'}} /></Link></Tooltip>}
                    title ={`@${state.user.username}`}  />                
            </Row>
            <Row style={{marginBottom:'30px'}}>
                <Col span={12} style={{paddingRight:'20px', marginTop:'-2%', paddingLeft:'20px'}}>
                    <Row>
                        
                        <Col span={24}>
                            <Card title='Perfil de Usuario' extra={<>
                                {state.user.type_user1 && <Tag color='volcano'> {state.user.type_user1} </Tag>} 
                                {state.user.type_user2 && <Tag color='volcano'> {state.user.type_user2} </Tag>} 
                                {state.user.type_user3 && <Tag color='volcano'> {state.user.type_user3} </Tag>} 
                                </>}>
                                <Form layout='vertical'>
                                    {is_am && 
                                        <>
                                        <Form.Item label='Disciplina'>
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
                                        <Form.Item label='Genero'>
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
                                        </>
                                    }
                                    {is_prov &&
                                        <Form.Item label='Tipo Proveedor'>
                                            <Select placeholder='Selecciona una opcion'>
                                                <Option>transporte</Option>
                                                <Option>técnica</Option>
                                                <Option>catering</Option>
                                                <Option>otros</Option>
                                            </Select>
                                        </Form.Item>
                                    }
                                    {is_pro && 
                                        <Form.Item label='Tipo Profesional'>
                                            <Select placeholder='Selecciona una opcion'>                                            
                                                <Option>diseñador gráfico/a</Option>
                                                <Option>escenógrafo/a</Option>
                                                <Option>sonido</Option>
                                                <Option>iluminación</Option>
                                                <Option>comunicación</Option>
                                                <Option>audiovisualista</Option>
                                                <Option>fotógrafo/a</Option>
                                                <Option>maquillador/a</Option>
                                                <Option>vestuarista</Option>
                                                <Option>otros</Option>
                                            </Select>
                                        </Form.Item>
                                    
                                    }
                                    <Form.Item label='Nombre Entidad'>
                                        <Input />
                                    </Form.Item>
                                    <Form.Item label='Cargo'>
                                        <Input />
                                    </Form.Item>
                                    <Form.Item label='Perfil Profesional'>
                                        <Input />
                                    </Form.Item>
                                    <Form.Item label='Dossier Archivo'>
                                        <Input />
                                    </Form.Item>
                                    <Form.Item label='URL'>
                                        <Input />
                                    </Form.Item>
                                    <Form.Item>
                                        <Button size="large" type='primary' htmlType='submit' style={{backgroundColor:'#CE3D4B', borderColor:'#CE3D4B'}}>Actualizar</Button>
                                    </Form.Item>
                                </Form>                    
                            </Card>
                        </Col>
                        
                    </Row>

                </Col>
                
                <Col span={12} style={{paddingRight:'20px', marginTop:'-7%'}}>
                        <Col span={24} style={{margin:'20px'}}>
                            <Card title='Inscripcion a Talleres'>                    
                            </Card>
                        </Col>
                        {state.user.region==='Maule' &&
                        <Col span={24} style={{margin:'20px'}}>
                            <Card title='Visionados' >
                            </Card>
                        </Col>}
                    <Descriptions 
                        title="Información General" 
                        bordered={true} 
                        style={{backgroundColor:'white', padding:'20px'}} 
                        layout='vertical'>
                            <Descriptions.Item label="Nombre"> {state.user.first_name} {state.user.last_name} </Descriptions.Item>
                            <Descriptions.Item label="Telefono"> {state.user.phone_number} </Descriptions.Item>
                            <Descriptions.Item label="Usuario"> {state.user.username} </Descriptions.Item>
                            <Descriptions.Item span={3} label="Correo Electrónico"> {state.user.email} </Descriptions.Item>
                            <Descriptions.Item label="País" >
                                {state.user.country}
                            </Descriptions.Item>
                            <Descriptions.Item label="Región" span={2}>
                                {state.user.region}
                            </Descriptions.Item>
                            {state.user.country === 'Chile' &&
                            <>
                                <Descriptions.Item label="Provincia" >
                                    {state.user.province}
                                </Descriptions.Item>
                                <Descriptions.Item label="Comuna">
                                    {state.user.commune}
                                </Descriptions.Item>
                            </>
                            }
                    </Descriptions>
                </Col>
            </Row></>}
            </>)

}

const styles = {
    container: {
        padding:'30px'
    }
}

export default ProfileUser