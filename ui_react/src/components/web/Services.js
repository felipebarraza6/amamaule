import React, {useState, useEffect} from 'react'
import { Row, Col, Typography, Modal, List } from 'antd'
import service1 from '../../assets/service_icons/CONFERENCIAS.png'
import service2 from '../../assets/service_icons/RONDAS-DE-VINCULACION.png'
import service3 from '../../assets/service_icons/SHOWCASES.png'
import service4 from '../../assets/service_icons/TALLERES.png'
import service5 from '../../assets/service_icons/CATALOGO.png'
import service6 from '../../assets/service_icons/06.png'
import Avi from '../../assets/img/BANNER-AAVV-MERCADO.jpg'
const { Title, Paragraph } = Typography
const { Item } = List


const Services = () => {

    const [size, setSize] = useState()

    useEffect(()=> {
        setSize(window.innerWidth)
    }, [])

    const styles = {
        container: {
            padding:'2%',
            paddingTop:'8%',
            paddingBottom:'8%', 
            backgroundColor: '#18c5cc',        
        },
        column: {
            textAlign:'center',
            margin:'20px',
        },
        img: {
          width: size > 800 ? '80%': '30%',
          marginBottom: '3%',
          cursor:'pointer',
        },
        img2: {
            width:'20%',
            marginBottom:'10px'
        },
        title: {
            color: 'white',
        }
    }

    return(<>
        <Row style={styles.container} justify='center'>
                <Col xs={24} lg={3} style={styles.column} >
                    <img onClick={()=>{Modal.info(
                        {                         
                            icon: <img src={service1} style={styles.img2}  />,
                            width:'700px',
                            content: <Row>
                                <Col style={{marginTop:'20px'}}>    
                                    <Paragraph>Una vez inscrito/a y con perfil en nuestra plataforma, podrás acceder al formulario de postulación a los talleres, ya sea en aquellos impartidos en formato presencial o aquellos en formato on line. Se te confirmará de acuerdo a la disponibilidad de cupos.</Paragraph>                               
                                    <Paragraph style={{marginTop:'20px'}}><strong>TALLERES</strong></Paragraph>
                                    <Paragraph style={{marginLeft:'20px'}}>
                                    <strong>1.</strong> "De la sala a la calle: montaje en espacio público".  Relator: Tamara Figueroa y Kevin Morizur, ADTRES, Agrupación de Diseñadores, Técnicos y Realizadores Escénicos.
                                    </Paragraph>
                                    <Paragraph style={{marginLeft:'20px'}}>
                                    <strong>2.</strong> "Gestión Cultural y Proyectos Transmedia": Relatora: Natalia Roca, periodista, gestora cultural y productora ejecutiva audiovisual penquista .
                                    </Paragraph>
                                    <Paragraph style={{marginLeft:'20px'}}>
                                    <strong>3.</strong> "Cuerpo y conciencia para el bienestar de los artistas". Relator: José Vidal  
                                    </Paragraph>
                                    <Paragraph style={{marginLeft:'20px'}}>
                                    <strong>4.</strong> "Producción musical" Relatora: Natalia Suazo, "Natisú"
                                    </Paragraph>
                                    <Paragraph style={{marginLeft:'20px'}}>
                                    <strong>5.</strong> "Marketing y Comunicación Cultural para las Artes Escénicas". Relator: Fernando Costa, Fundador agencia MERCA.
                                    </Paragraph>
                                    <Paragraph style={{marginLeft:'20px'}}>
                                    <strong>6.</strong> "Collage feminista y político: estrategias interdisciplinarias para la performance." Relator: Colectivo LASTESIS.
                                    </Paragraph>
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
                          Para participar solo debes ingresar a www.amamaule.cl el día de la actividad, sin necesidad de estar inscritos y tener perfil en el encuentro.
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
                            content: <><p>
                          Las Rondas de Vinculación en formato presencial consisten en reuniones previamente agendadas entre un grupo de programadores u organizaciones que tengan programas de apoyo y/o colaboración con el sector artístico (escénico o de la visualidad) con artistas escénicos y de la visualidad. Esas reuniones de vinculación serán en horarios diferenciados de acuerdo a la disciplina artística. 
De acuerdo a tu perfil inscrito, se te enviará una invitación a participar en las rondas, y se te indicarán los detalles importantes a considerar al momento de la reunión. </p>
                      <p>
                          Las Rondas de Vinculación en formato on line se realizarán desde la plataforma web. Para ello podrás agendarlas directamente con la persona u organización de tu interés. Al inscribirte recibirás un correo con las instrucciones para agendar, y además podrás consultar el tutorial en www.amamaule.cl

                      </p>
                          <p>
Las rondas on line durarán 10 minutos, ocasión en la que podrás presentar tu trabajo y establecer nexos con quienes te reúnas, o terminar conversaciones y/o alianzas iniciadas de manera presencial.
                          </p>
                          </>
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
                               Los espectáculos como showcases y obras de artes escénicas en espacios abiertos o cerrados, serán con entrada gratuita, descargando previamente tu entrada en el sitio web del Teatro Regional del Maule.  (el link sería www.vivoticket.cl) este tendría acces directo desde www.amamaule.cl 
 
                            </p>


                            <Paragraph><strong>OBRAS</strong></Paragraph>                            
                            <Paragraph style={{marginLeft:'20px'}}>
                                - RAM
                                </Paragraph>
                                <Paragraph style={{marginLeft:'20px'}}>
                                - Kpuchapo
                                </Paragraph>
                                <Paragraph style={{marginLeft:'20px'}}>
                                - Cuervos de Pantano
                                </Paragraph>
                            
                            <Paragraph><strong>ESPECTÁCULOS NACIONALES</strong></Paragraph>
                                <Paragraph style={{marginLeft:'20px'}}>
                                - Yorka
                                </Paragraph>
                                <Paragraph style={{marginLeft:'20px'}}>
                                - Deligth Lab
                                </Paragraph>
                                <Paragraph style={{marginLeft:'20px'}}>
                                - Lopez
                                </Paragraph>

                            <Paragraph><strong>SHOWCASES REGIONALES</strong></Paragraph>
                            <Paragraph style={{marginLeft:'20px'}}>
                                - Invierno Nuclear
                            </Paragraph>
                            <Paragraph style={{marginLeft:'20px'}}>
                                - Idea Blanco
                                </Paragraph>
                                <Paragraph style={{marginLeft:'20px'}}>
                                - Winters of Blue
                                </Paragraph>
                                <Paragraph style={{marginLeft:'20px'}}>
                                - Odia Las Jaulas
                                </Paragraph>
                                <Paragraph style={{marginLeft:'20px'}}>
                                - Mandi Gómez
                                </Paragraph>
                                <Paragraph style={{marginLeft:'20px'}}>- Adrik Caleidoscopio</Paragraph>
                                <Paragraph style={{marginLeft:'20px'}}>- Tomi no me ama</Paragraph>                                
                            </div>
                        }
                    )}}
                    src={service4} style={styles.img}  alt='service4' />
                    
                </Col>
               <Col xs={24} lg={3}  style={styles.column} >
                    <img
                    onClick={()=>{
                      Modal.info({
                        icon: <img src={service5} style={styles.img2} />,
                        content: <p>Instancia para la difusión y promoción de los artistas de la visualidad inscritos en AMA-Maule. La invitación a participar se efectuará directamente por correo a los participantes, indicando los detalles importantes a considerar al momento de su realización.
</p>
                      })
                    }}
                    src={service5} style={styles.img}  alt='service4' />
                    
                </Col>
<Col xs={24} lg={3}  style={styles.column} span={6}>
                <a target='__blank' href='http://www.teatroregional.cl/wp-content/uploads/2021/06/Catálogo-de-Artistas-ABRIL-2021.pdf'>
                    <img src={service6} style={styles.img}  alt='service3' />
                </a>     
                </Col>
        </Row>
      </>
    )
}




export default Services
