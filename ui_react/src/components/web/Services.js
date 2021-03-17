import React from 'react'
import { Row, Col, Typography, Modal, Button } from 'antd'
import service1 from '../../assets/service_icons/CONFERENCIAS.png'
import service2 from '../../assets/service_icons/RONDAS-DE-VINCULACION.png'
import service3 from '../../assets/service_icons/SHOWCASES.png'
import service4 from '../../assets/service_icons/TALLERES.png'
import {InfoCircleOutlined} from '@ant-design/icons'

const { Title } = Typography


const Services = () => {

    return(
        <Row style={styles.container} justify='center'>
                <Col xs={24} lg={6} style={styles.column} span={6} >
                    <img onClick={()=>{Modal.info(
                        {                         
                            icon: <img src={service1} style={styles.img2}  />,
                            content: <p>
                                Experiencias formativas online diseñadas preferentemente para habitantes 
                                de la Región del Maule. Las temáticas a abordar son las resultantes de la 
                                encuesta dirigida a artistas y programadores/as de espacios culturales de 
                                nuestra región. Esta actividad requiere inscripción previa.
                            </p>,
                            
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
                                Abordaremos temas de interés para el desarrollo artístico, a través de la mirada de 
                                invitados internacionales, con vasta experiencia y conocimiento en la materia. Con esto, 
                                apostamos por inspirar a quienes participan en AMA 2021 para abrir paso a nuevas perspectivas 
                                en torno al trabajo creativo post pandemia.
                            </p>
                        }
                    )}}
                     src={service2} style={styles.img}  alt='service2' />
                    <Title style={styles.title} level={4} >Conferencias</Title>
                </Col>
                <Col xs={24} lg={6}  style={styles.column} span={6}>
                    <img
                    onClick={()=>{Modal.info(
                        {                         
                            icon: <img src={service2} style={styles.img2}  />,
                            content: <p>
                                Espacios de encuentro virtual entre programadores, artistas u otros participantes de interés para tu 
                                trabajo. Se trata de rondas de diez minutos, donde podrás presentar tu trabajo y establecer nuevos nexos. 
                                Serán reuniones bilaterales consensuadas por ambas partes. Te haremos llegar un tutorial detallado sobre 
                                cómo agendar reuniones.
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
                            icon: <img src={service2} style={styles.img2}  />,
                            content: <div><p>
                                Iniciativa abierta a toda la comunidad. Cada día podrás acceder a un nuevo espectáculo, ya sea a obras que corresponden
                                 a coproducciones del Teatro Regional del Maule como también a espectáculos especialmente seleccionados para los habitantes
                                  de nuestra región.
                            </p>
                            <p>
                            En tanto, los programadores y los participantes del encuentro, tendrán la posibilidad de revisar trabajos de artistas escénicos de la 
                            Región del Maule, a través de un material audiovisual, diseñado especialmente para la ocasión. Esta información estará disponible exclusivamente
                             para quienes participen del encuentro.
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
      marginBottom: '3%'
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
