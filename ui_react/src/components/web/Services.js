import React from 'react'
import { Row, Col, Typography, Modal, List } from 'antd'
import service1 from '../../assets/service_icons/CONFERENCIAS.png'
import service2 from '../../assets/service_icons/RONDAS-DE-VINCULACION.png'
import service3 from '../../assets/service_icons/SHOWCASES.png'
import service4 from '../../assets/service_icons/TALLERES.png'
const { Title } = Typography
const { Item } = List


const Services = () => {

    return(
        <Row style={styles.container} justify='center'>
                <Col xs={24} lg={6} style={styles.column} span={6} >
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
                    <Title style={styles.title} level={4}>Talleres</Title>
                </Col>
                <Col xs={24} lg={6}  style={styles.column} span={6}>
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
                    <Title style={styles.title} level={4} >Conferencias y Mesas Temáticas </Title>
                </Col>
                <Col xs={24} lg={6}  style={styles.column} span={6}>
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
                    <Title style={styles.title} level={4}>Rondas de Vinculación</Title>
                </Col>
                <Col xs={24} lg={6}  style={styles.column} span={6}>
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
                    <Title style={styles.title} level={4}>Visionados y Showcases</Title>
                </Col>
        </Row>
    )
}

const styles = {
    container: {
        padding:'8%',
        paddingTop:'7%',
        paddingBottom:'7%', 
        backgroundColor: '#ce3d4b',        
    },
    column: {
        textAlign:'center'
    },
    img: {
      width: '40%',
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
