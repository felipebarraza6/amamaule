import React from 'react'
import { Row, Col, Typography, Modal, List } from 'antd'
import service1 from '../../assets/service_icons/CONFERENCIAS.png'
import service2 from '../../assets/service_icons/RONDAS-DE-VINCULACION.png'
import service3 from '../../assets/service_icons/SHOWCASES.png'
import service4 from '../../assets/service_icons/TALLERES.png'
import service5 from '../../assets/service_icons/CATALOGO.png'
import service6 from '../../assets/service_icons/06.png'
const { Title } = Typography
const { Item } = List


const Services = () => {

    return(
        <Row style={styles.container} justify='center'>
                <Col xs={24} lg={3} style={styles.column} >
                    <img onClick={()=>{Modal.info(
                        {                         
                            icon: <img src={service1} style={styles.img2}  />,
                            width:'700px',
                            content: <Row>
                                <Col>
                                    Experiencias formativas online diseñadas preferentemente para habitantes de la Región del Maule. 
                                    Las temáticas a abordar son las resultantes de la encuesta dirigida a artistas y programadores/as 
                                    de espacios culturales de nuestra región:
                                </Col>
                                <Col>
                                    <List bordered header={<Title level={5}>Talleres</Title>} style={{marginTop:'10px'}}>                                
                                        <Item>
                                            1. Taller de Pitching
                                        </Item>
                                        <Item>
                                            2. Taller de Montaje Site Specific
                                        </Item>
                                        <Item>
                                            3. Taller Ley de Donaciones Culturales
                                        </Item>
                                        <Item>
                                            4. Taller de Marketing Digital para la industria musical
                                        </Item>
                                        <Item>
                                            5. Taller de herramientas para la gestión de proyectos culturales
                                        </Item>
                                        <Item>
                                            6. Taller de financiamiento para la circulación internacional
                                        </Item>
                                    </List>
                                    <p style={{marginTop:'20px'}}>
                                    Esta actividad requiere inscripción previa, completando perfil en www.amamaule.cl
                                    </p>
                                </Col>
                            </Row>,
                            
                        }
                    )}}
                    src={service1} style={styles.img}  alt='service1' />                    
                </Col>
                <Col xs={24} lg={3}  style={styles.column} span={6}>
                    <img
                     onClick={()=>{Modal.info(
                        {                         
                            icon: <img src={service2} style={styles.img2}  />,
                            content: <p>
                                Abordaremos temas de interés para el desarrollo artístico, a través de la mirada de invitados con experiencia y 
                                conocimiento en la materia. Con esto, apostamos por inspirar a quienes participan en AMA 2021 e impulsar nuevas 
                                perspectivas en torno al trabajo creativo post pandemia.
                            </p>
                        }
                    )}}
                     src={service2} style={styles.img}  alt='service2' />
                    
                </Col>
                <Col xs={24} lg={3}  style={styles.column} span={6}>
                    <img
                    onClick={()=>{Modal.info(
                        {                         
                            icon: <img src={service3} style={styles.img2}  />,
                            content: <p>
                                Espacios de encuentro virtual entre programadores, artistas u otros participantes de interés 
                                para tu trabajo. Se trata de reuniones online de diez minutos de duración, tiempo en el cual 
                                podrás presentar tu propuesta o proyecto artístico y establecer nexos con tu contraparte. Te 
                                haremos llegar un tutorial detallado sobre cómo agendar reuniones. 
                            </p>
                        }
                    )}}
                     src={service3} style={styles.img}  alt='service3' />
                    
                </Col>
                <Col xs={24} lg={3}  style={styles.column} span={6}>
                    <img 
                    onClick={()=>{Modal.info(
                        {                            
                            icon: <img src={service4} style={styles.img2}  />,
                            content: <div><p>
                                AMA presentará cada día showcases y espectáculos artísticos abiertos a la comunidad 
                                de forma gratuita. Del mismo modo, los programadores tendrán acceso exclusivo a una 
                                sección de visionados de propuestas artísticas seleccionadas, de artistas de la Región 
                                del Maule.
                            </p>
                            </div>
                        }
                    )}}
                    src={service4} style={styles.img}  alt='service4' />
                    
                </Col>
                <Col xs={24} lg={3}  style={styles.column} >
                    <a target='__blank' href='http://www.teatroregional.cl/catalogo-de-obras-y-artistas-escenicos-region-del-maule'>
                    <img
                    src={service5} style={styles.img}  alt='service4' /></a>
                    
                    
                </Col>
                <Col xs={24} lg={3}  style={styles.column} >
                    <a target='__blank' >
                    <img
                    src={service6} style={styles.img}  alt='service4' /></a>
                    
                </Col>
        </Row>
    )
}

const styles = {
    container: {
        padding:'2%',
        paddingTop:'8%',
        paddingBottom:'8%', 
        backgroundColor: '#18c5cc',        
    },
    column: {
        textAlign:'center',
        margin:'20px'
    },
    img: {
      width: '80%',
      marginBottom: '3%',
      cursor:'pointer'
    },
    img2: {
        width:'20%',
        marginBottom:'10px'
    },
    title: {
        color: 'white',
    }
}


export default Services
