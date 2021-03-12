import React, {useContext, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { PageHeader, Card,Col, Row, Descriptions, Tooltip, Tag, Form, Input, Select, Button, Upload, List, Modal, Typography, message, Spin } from 'antd'
import { RollbackOutlined, CheckCircleOutlined, EyeOutlined, DownCircleOutlined, EditOutlined, EuroCircleFilled} from '@ant-design/icons'
import api from '../api/endpoints'
import { AuthContext } from '../Home'
import pdf from '../assets/bases.pdf'
const {Option} = Select
const { Title, Paragraph } = Typography
const { TextArea } = Input


const ProfileUser = () => {

    

    const { state } = useContext(AuthContext)
    const [sendQuestions, setSendQuestions] = useState(false)
    const [dataProfile, setDataProfile] = useState(null)
    const [dataProfileA, setDataProfileA] = useState({})

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

    const get_profile = async() => {
        const request = await api.user.get_profile_center(state.user.id).then((response)=> {
            setDataProfile(response.data)
            setDataProfileA(response.data)
        })

        return request
    }
    
    

    useEffect(()=>{
        
        if(state.user){            
            get_profile()
        }
        
    }, [])

    const data = [
        {
            name: 'Taller de Pitching',
            description1: `Taller de Pitching: Cómo elaborar una presentación efectiva para tus proyectos artísticos y/o de gestión cultural.`,
            description2: `En el marco del Encuentro AMA 2021: Vincular para Crear, te invitamos a participar de nuestro Taller de Pitching, cuyo objetivo 
            será entregar herramientas discursivas para una presentación concreta, concisa y efectiva del proyecto artístico y/o de gestión, 
            previo a tu participación en nuestras Rondas de Vinculación AMA. En ellas, podrás agendar reuniones para ser tú mismo/a quien relate 
            su proyecto al representante con quien te toque reunirte.`,
            date: 'Miércoles 24 y jueves 25 de marzo, 18 horas',
            notice: 'Cierre de inscripciones: 21 de marzo, 18 horas',   
            is_ok: dataProfileA.taller_pitching,
            field: 'taller_pitching'        
            
        },        
        {
            name:'Taller de Montaje Site Specific', 
            description:'Este taller propone un espacio de investigación para artistas escénicos en torno a tres temáticas',
            element1: 'Espacio doméstico de cada participante como un espacio compartido de co-creación',
            element2: 'Herramientas del site specific para crear',
            element3: 'Posibilidades performáticas de las plataformas virtuales como Zoom y el espacio online',
            date:'Miércoles 14 de abril, 19 horas',
            notice: 'Inscripciones abiertas hasta el día 01 de abril 2021. Cupos limitados',
            is_ok: dataProfileA.taller_montaje,
            field: 'taller_montaje'
            
        },
        {
            name:'Taller Ley de Donaciones Culturales', 
            description:'Conoce las claves de esta modalidad de financiamiento y su aplicación: un mecanismo mixto que estimula el aporte del Estado de Chile y de los contribuyentes a proyectos culturales de instituciones sin fines de lucro, mediante un crédito sobre el Impuesto.',
            date:'Miércoles 14 de abril, 19 horas',
            notice: 'Inscripciones abiertas hasta el día 01 de abril 2021. Cupos limitados',
            is_ok: dataProfileA.taller_ley_donaciones,
            field: 'taller_ley_donaciones'
            
        },
        {
            name:'Taller de Marketing Digital para la industria musical', 
            description:'Se abordará la utilización eficaz de las principales herramientas y plataformas publicitarias y de comunicación para llevar a cabo las estrategias y acciones de marketing estratégico para el desarrollo y difusión de tu proyecto musical en internet, así como herramientas estratégicas para la productividad, redes sociales, plataformas de contenido, entre otras. ',
            date:'Jueves 15 de abril, 19 horas',
            notice: 'Inscripciones abiertas hasta el día 01 de abril 2021. Cupos limitados',
            is_ok: dataProfileA.taller_marketing_digital,
            field: 'taller_marketing_digital'
        },
        {
            name:'Taller de herramientas para la gestión de proyectos culturales', 
            description:'Herramientas para la planificación y administración cultural, desde la idea hasta la gestión de los recursos. Conoceremos aplicaciones y software: desarrollo, uso y apropiaciones de herramientas digitales para la gestión cultural.',
            date:'Jueves 15 y Viernes 16 de abril, 19 horas',
            notice: 'Inscripciones abiertas hasta el 04 de abril de 2021. Cupos limitados',
            is_ok: dataProfileA.taller_herr_gestion,
            field: 'taller_herr_gestion'
        },
        {
            name:'Taller de financiamiento para la circulación internacional', 
            description:'Se abordarán distintos programas y/o fuentes de financiamiento públicos para la circulación internacional de proyectos creativos en las disciplinas de artes escénicas y música.',
            date:'Sábado 17 de abril, 19 horas',
            notice: 'Inscripciones abiertas hasta el día 01 de abril 2021. Cupos limitados',
            is_ok: dataProfileA.taller_financiamiento,
            field: 'taller_financiamiento'
            
        },
        
      ]

    console.log(dataProfile)
    
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
                                    
                                    {dataProfile &&
                                <Form layout='vertical' initialValues={dataProfile} onFinish={ async(values)=>{
                                        var disciplina_prop = ''
                                        var genero_pro = ''
                                        if(values.disciplina){
                                            disciplina_prop = values.disciplina.toString()
                                        }
                                        if(values.genero){
                                            genero_pro = values.genero.toString()
                                        }
                                        values = {
                                            ...values,
                                            "disciplina": disciplina_prop,
                                            "genero": genero_pro,
                                        }
                                        console.log(values)
                                        const request = await api.user.update_profile(state.user.id, values).then((response)=> {
                                            message.success('Perfil Actualizado!')
                                            console.log(response)
                                        })
                                        
                                    }}>
                                    {console.log(dataProfile)}
                                    {is_am && 
                                        <>
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
                                        </>
                                    }
                                    {is_prov &&
                                        <Form.Item label='Tipo Proveedor' name='tipo_proveedor'>
                                            <Select placeholder='Selecciona una opcion'>
                                                <Option value='transporte'>transporte</Option>
                                                <Option value='técnica'>técnica</Option>
                                                <Option value='catering'>catering</Option>
                                                <Option value='otros'>otros</Option>
                                            </Select>
                                        </Form.Item>
                                    }
                                    {is_pro && 
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
                                    
                                    }
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
                                }               
                            </Card>
                        </Col>
                        
                    </Row>

                </Col>
                
                <Col span={12} style={{paddingRight:'20px', marginTop:'-7%'}}>
                        <Col span={24} style={{margin:'20px'}}>
                            <Card title='Inscripcion a Talleres'> 
                                <List
                                    itemLayout="horizontal"
                                    size="large"                                    
                                    bordered
                                    dataSource={data}
                                    renderItem={ Item => (
                                        
                                        <List.Item>
                                            {Item.name}   
                                            <Button type='link' style={{float:'right'}} onClick={() => message.success('Taller Agregado') }>
                                                <CheckCircleOutlined style={{color:'grey',fontSize:'27px', marginLeft:'15px', marginRight:'15px', float:'right'}} />                                        
                                            </Button>
                                            <Tooltip title='Ver'>   
                                                <Button type='link' style={{float:'right'}} onClick={()=> Modal.info({
                                                    content:<>
                                                    <Paragraph> {Item.description1} </Paragraph>
                                                    <Paragraph> {Item.description2} </Paragraph>
                                                    {Item.element1 && 
                                                    <>
                                                    <Paragraph style={{marginLeft:'30px'}}>1) {Item.element1} </Paragraph>
                                                    <Paragraph style={{marginLeft:'30px'}}>2) {Item.element2} </Paragraph>
                                                    <Paragraph style={{marginLeft:'30px'}}>3) {Item.element3} </Paragraph>
                                                    </>
                                                    }
                                                    <Tag> {Item.date} </Tag><Tag style={{marginTop:'10px'}}> {Item.notice} </Tag></>,
                                                    title:`${Item.name}`,
                                                    width:'700px',                                                    
                                                    okText: 'Volver',
                                                    okType:'danger',
                                                    icon:''
                                                    
                                                })}>
                                                    
                                                    <EyeOutlined style={{color:'#61263D',fontSize:'30px', marginLeft:'15px', marginRight:'15px', float:'right'}} />
                                                </Button>                                                                                     
                                            </Tooltip>                                                                                    
                                        </List.Item>
                                        
                                    )}
                                >
                                </List>
                            </Card>
                        </Col>
                        {state.user.region==='Maule' &&
                        <Col span={24} style={{margin:'20px'}}>
                            <Card title='Visionados' >
                            <Row>
                                <Col span={12} style={{textAlign:'center'}}>
                            <a>
                                
                                <Button type='link' style={{borderColor:'#61263D', color:'#61263D'}} icon={<DownCircleOutlined />}><a href={pdf} target='__blank'>Descargar Bases</a></Button>                                
                            </a>
                            </Col>
                            <Col span={12} style={{textAlign:'center'}}>
                                
                                
                                    <Button type='link' onClick={()=>setSendQuestions(true)} style={{borderColor:'#61263D', color:'#61263D'}} icon={<EditOutlined />}>Postula Aquí</Button>                                
                                
                            </Col>
                            <Col span={24}>
                                {sendQuestions ?  
                                    <>
                                    <Form style={{margin:'30px'}} layout='vertical' onFinish={(values)=>{ 
                                        values = {
                                            ...values,
                                            is_send_visio: true
                                        }
                                        const request = api.user.update_profile(state.user.id, values).then((response)=> {
                                            message.success('Formulario enviado!')
                                        })
                                    } } >
                                        
                                        {dataProfile.is_send_visio ? <><Spin size='default' style={{marginRight:'20px', marginLeft:'190px'}} /> En Evaluación</> :<>
                                        <Form.Item label='Nombre de la Propuesta' name='nombre_propuesta' >
                                            <Input />
                                        </Form.Item>                              
                                        <Form.Item label='Reseña de la Propuesta' name='resena_propuesta'>
                                            <TextArea rows={4} />
                                        </Form.Item>                                             
                                        <Form.Item label='Nombres de Integrantes del elenco y roles de c/u (si corresponde)' name='resena_nombre_integrantes'>
                                            <Input />
                                        </Form.Item>
                                        <Form.Item label='Año en el que fue estrenada o publicada (En caso de no haber sido estrenada, indicarlo):' name='anio_estreno'>
                                            <Input />
                                        </Form.Item>
                                        <Form.Item label='Formato de Exhibición (Indicar si es una obra para circular en forma virtual, presencial o en ambas modalidades):' name='formato_ex'>
                                            <Select placeholder='seleccionar una opcion'>
                                                <Option>Virtual</Option>
                                                <Option>Presencial</Option>
                                                <Option>Ambas</Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item label='URL de descarga:' name='url_descarga'>
                                            <Input />
                                        </Form.Item>      
                                        <Form.Item >
                                            <Row>
                                                <Col><Button type='primary' style={{marginRight:'20px'}} htmlType='submit'  >Enviar Respuestas</Button></Col>
                                                <Col><Button type='ghost' style={{borderColor:'red', color:'red'}} onClick={()=>setSendQuestions(false)}>Cancelar</Button></Col>
                                            </Row>
                                        </Form.Item> 
                                        </>
                                        }                                  
                                    </Form>
                                    </>: <Paragraph style={{margin:'20px'}}>Teatro Regional del Maule y la Seremía de las Culturas, las Artes y el Patrimonio de la Región del Maule, te invita a postular a la sección de visionados de creaciones de artes escénicas en el marco del Encuentro AMA: Vincular para Crear.</Paragraph>
                                }
                            </Col>
                            </Row>
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