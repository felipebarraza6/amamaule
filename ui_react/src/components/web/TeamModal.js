import React, {useEffect, useState} from 'react'
import {Modal, Menu, Button, Row, Col, Card, Typography, Avatar} from 'antd'
import { TeamOutlined } from '@ant-design/icons'
import { LinkedinOutlined, 
         InstagramOutlined, 
         MailOutlined, 
         FacebookOutlined, ChromeOutlined, BehanceOutlined } from '@ant-design/icons'
import kateryn from '../../assets/persons/kgarzon.jpeg'
import vflores from '../../assets/persons/vflores.jpg'
import mrojas from '../../assets/persons/mrojas.jpeg'
import lalvarez from '../../assets/persons/lalvarez.jpg'
import cmunoz from '../../assets/persons/cmunoz.jpg'
import crojas from '../../assets/persons/crojas.jpg'
import fcarvajal from '../../assets/persons/fcarvajal.JPG'
import alara from '../../assets/persons/alara.jpeg'
import pcontardo from '../../assets/persons/pcontardo.jpg'
import csalazar from '../../assets/persons/csalazar.jpeg'
import vbarahona from '../../assets/persons/vbarahona.jpg'
import bmunoz from '../../assets/persons/bmunoz.jpg'
import eurrutia from '../../assets/persons/eurrutia.jpg'
import fsilva from '../../assets/persons/fsilva.jpeg'
import forostica from '../../assets/persons/forostica.jpeg'
import jgualteros from '../../assets/persons/jgualteros.jpg'
import evaldivieso from '../../assets/persons/evaldivieso.jpeg'
import cpacheco from '../../assets/persons/cpacheco.jpg'


const { Item } = Menu
const { Title, Paragraph, Text} = Typography

const TeamModal = () => {

    const [visible, setVisible] = useState(false)
    const [visibleInfo, setVisibleInfo] = useState(false)
    const [infoPerson, setInfoPerson] = useState({
        name: '',
        charge: '',
        description: '',
        image: '',
        links: []
    })

    return(<>
        <Modal
            visible={visibleInfo}
            title={infoPerson.name}
            onCancel={()=>setVisibleInfo(false)}            
            footer={[<Button onClick={()=>setVisibleInfo(false)} style={{backgroundColor:'#ff6d3c', color:'white'}}>Cerrar</Button>]}
        >
            <Row>
                <Col lg={6} align="center">
                    <Avatar style={{borderColor:'#ffba31', borderStyle:'solid'}} shape='square' src={infoPerson.image} size={120} />
                </Col>
                <Col lg={18} style={{paddingLeft:'20px'}}>
                    <Paragraph align="justify">  
                        {infoPerson.description}
                    </Paragraph>
                </Col>
                <Col lg={24}>
                    {infoPerson.links.map((obj)=> obj ) }
                </Col>
            </Row>

        </Modal>
        <Modal 
            title='NUESTRO EQUIPO' 
            width="100%" 
            visible={visible} 
            style={styles.modal} 
            footer={[<Button onClick={()=>setVisible(false)} style={{backgroundColor:'rgb(97, 38, 61)', color:'white'}}>Cerrar</Button>]}
            onCancel={()=>setVisible(false)}>        
            <Row justify="center">
      <Col span={4}>
      <Card hoverable style={{width:'200px', backgroundColor:'#3a1f33'}} onClick={()=>{
                            setInfoPerson({
                                ...infoPerson,
                                name: 'Kateryn Garzón',
                                description:'Gestor de proyectos de emprendimiento e innovación, con foco en las Industrias Creativas. Mg. Gestión de Personas en la U. de Chile y Diplomada en Herramientas de Innovación y Metodologías Ágiles en UAI. Dedicada a fortalecer la profesionalización del sector de las Artes Escénicas en Chile a través de programas como Innova Escena y Emprende Escena. Actualmente, Productora General en AMA.',
                                image: kateryn,
                                links: [
                                    <a href='https://www.linkedin.com/in/kateryn-garzon/' target='__blank'><LinkedinOutlined style={{fontSize:'25px', marginRight:'10px', color:'rgb(97, 38, 61)'}} /></a>,
                                    <a href='https://www.instagram.com/kateryn_garzon/' target='__blank'><InstagramOutlined style={{fontSize:'25px', marginRight:'10px', color:'rgb(97, 38, 61)'}} /></a>,
                                    <a href='mailto:kgarzon@postgradouchile.cl' target='__blank'><MailOutlined style={{fontSize:'25px', marginRight:'10px', color:'rgb(97, 38, 61)'}} /></a>
                                ]
                                
                            })
                            setVisibleInfo(true)
                        }}  >
                            <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Kateryn Garzón</Paragraph>
                            <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Producción General</Paragraph>
                        </Card>     
      </Col>
      <Col span={4}>
      <Card hoverable style={{width:'200px', backgroundColor:'#3a1f33'}}   >
                            <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Seremia de las Culturas y las Artes Región del Maule</Paragraph>
                        </Card>
      </Col>
      <Col span={4}><Card hoverable style={{width:'200px', backgroundColor:'#3a1f33'}} onClick={()=>{
                            setInfoPerson({
                                ...infoPerson,
                                name: 'Victoria Flores',
                                description:'Victoria es periodista de profesión, ha estado vinculada al mundo de la cultura y las artes desde la gestión desde hace más de 15 años. Ha trabajo en instituciones público y privadas como El Mercurio de Valparaíso, Conaf, Universidad Católica del Maule, Corporación Cultural Municipal de Talca, y desde hace seis años el Teatro Regional del Maule, desde el que lleva la dirección. Tiene estudios en la Universidad de Concepción, Complutense de Madrid, Federico Santa María y Universidad Adolfo Ibañez. Desde lo profesional a vinculado la cultura con el financiamiento público y privado buscando generar nuevas posibilidades.',
                                image: vflores,
                                links: [
                                    <a href='http://www.teatroregional.cl/' target='__blank'><ChromeOutlined style={{fontSize:'25px', marginRight:'10px', color:'rgb(97, 38, 61)'}} /></a>,
                                    
                                ]
                            })
                            setVisibleInfo(true)
                        }}>
                                <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Victoria Flores</Paragraph>
                                <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Producción Ejecutiva</Paragraph>
                        </Card></Col>
    </Row>        

                <Row align='space-around' style={{marginTop:'20px'}}>
                    <Col xs={24} lg={6} style={{paddingRight:'10px', textAlign:'center'}}>
                        <Card style={{width:'100%', backgroundColor:'#3a1f33', color:'white'}}>Comunicaciones</Card>
                        <Row align='space-around' style={{marginTop:'20px'}}>
                            <Col>
                                <Card hoverable style={styles.cardPerson} onClick={()=>{
                            setInfoPerson({
                                ...infoPerson,
                                name: 'Manuel Rojas',
                                description:'Periodista especializado en marketing, con más de una década de experiencia en comunicaciones corporativas, campañas publicitarias, relaciones públicas, coordinación de ventas, emprendimiento, producción de eventos y gestión cultural. Ha colaborado en instituciones como Corporación Maule Activa, Universidad Santo Tomás, VideoLab, JUNAEV y Teatro Regional del Maule, donde actualmente se desempeña como encargado de comunicaciones.',
                                image: mrojas,
                                links: [
                                    <a href='mailto:manuel.rojas@teatroregional.cl' target='__blank'><MailOutlined style={{fontSize:'25px', marginRight:'10px', color:'rgb(97, 38, 61)'}} /></a>,
                                    
                                ]
                            })
                            setVisibleInfo(true)
                        }}>
                                    <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Manuel Rojas</Paragraph>
                                    <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Encargado Comunicaciones TRM</Paragraph>
                                </Card>
                            </Col>
                            <Col>
                                <Card hoverable style={styles.cardPerson} >
                                <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Comunicaciones Institucionales / Seremi Cultura Maule</Paragraph>                                    
                                </Card>
                            </Col>
                           
                            
                        </Row>
                        <Row align='space-around' style={{marginTop:'20px'}}>
                        <Col>
                                <Card hoverable style={styles.cardPerson} onClick={()=>{
                            setInfoPerson({
                                ...infoPerson,
                                name: 'Lorena Alvarez',
                                description:'Periodista. Mag. en Comunicación Social y Educación en la PUC y la UAB. Directora de comunicaciones en Identidades Festival y en Liquenlab Magallanes. Reseña libros de arte e ilustración para B8 Estudio, en Barcelona. Se ha desempeñado como programadora de artes escénicas en festivales en México, Uruguay, España, EEUU y Francia, entre otros.',
                                image: lalvarez,
                                links: [
                                    <a href='https://www.linkedin.com/in/lorena-álvarez-chávez-94586a177/' target='__blank'><LinkedinOutlined style={{fontSize:'25px', marginRight:'10px', color:'rgb(97, 38, 61)'}} /></a>,
                                    
                                ]
                            })
                            setVisibleInfo(true)
                        }}>
                                <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Lorena Alvarez</Paragraph>
                                    <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Encargada Comunicaciones AMA</Paragraph>
                                </Card>
                            </Col>
                            <Col>
                                <Card hoverable style={styles.cardPerson} onClick={()=>{
                            setInfoPerson({
                                ...infoPerson,
                                name: 'Cinthia Muñoz',
                                description:'Periodista y Licenciada en Comunicación Social de la Universidad Santo Tomás. Comenzó su formación en el Museo de la Memoria y los Derechos Humanos. Ha trabajado en diversos medios de comunicación de la región del Maule como Redmaule.com y TV Contivisión. Se ha desempeñado en investigación periodística y en campañas políticas. Actualmente trabaja como periodista en el área de Comunicaciones del Teatro Regional del Maule.',
                                image: cmunoz,
                                links: [
<a href=' https://www.linkedin.com/in/cinthia-mu%C3%B1oz-urrutia-aa1130b8/' target='__blank'><LinkedinOutlined style={{fontSize:'25px', marginRight:'10px', color:'rgb(97, 38, 61)'}} /></a>,
<a href='https://www.instagram.com/cinthia.indomita/' target='__blank'><InstagramOutlined style={{fontSize:'25px', marginRight:'10px', color:'rgb(97, 38, 61)'}} /></a>,
<a href='https://www.facebook.com/cinthiamunozu' target='__blank'><FacebookOutlined style={{fontSize:'25px', marginRight:'10px', color:'rgb(97, 38, 61)'}} /></a>
                                ]
                            })
                            setVisibleInfo(true)
                        }}>
                                <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Cinthia Muñoz</Paragraph>
                                    <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Encargada Comunicaciones AMA</Paragraph>
                                </Card>
                            </Col>
                           
                            
                        </Row>
                        <Row align='space-around' style={{marginTop:'20px'}}>
                        <Col>
                                <Card hoverable style={styles.cardPerson} onClick={()=>{
                            setInfoPerson({
                                ...infoPerson,
                                name: 'Claudio Rojas',
                                description:'Diseñador, trabajador de la Cultura. Hace carrera en comunicaciones y como creador de arte escenográfico en óperas del TRM, premiadas por el Círculo de Críticos de Arte de Chile. Productor creativo, monitor de talleres artísticos y fundador y director de la “Cía. de Teatro & Coro La Libertad” premiada nacionalmente por la calidad de sus obras.',
                                image: crojas,
                                links: [
                                    <a href='www.behance.net/claudiorojasp' target='__blank'><BehanceOutlined style={{fontSize:'25px', marginRight:'10px', color:'rgb(97, 38, 61)'}} /></a>,
                                    <a href='www.teatrolalibertad.cl' target='__blank'><ChromeOutlined style={{fontSize:'25px', marginRight:'10px', color:'rgb(97, 38, 61)'}} /></a>,
                                    <a href='www.linkedin.com/in/claudiorojasp' target='__blank'><LinkedinOutlined style={{fontSize:'25px', marginRight:'10px', color:'rgb(97, 38, 61)'}} /></a>,
                                    <a href='www.facebook.com/claudiorojasp' target='__blank'><FacebookOutlined style={{fontSize:'25px', marginRight:'10px', color:'rgb(97, 38, 61)'}} /></a>,
                                    <a href='www.instagram.com/claudio.sws' target='__blank'><InstagramOutlined style={{fontSize:'25px', marginRight:'10px', color:'rgb(97, 38, 61)'}} /></a>,
                                    
                                ]
                            })
                            setVisibleInfo(true)
                        }}>
                                <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Claudio Rojas</Paragraph>
                                    <Paragraph style={{fontSize:'12px', textAlign:'center', paddingBottom:'35px', color:'white'}}>Diseño Gráfico</Paragraph>
                                </Card>
                            </Col>
                            <Col>
                                <Card hoverable style={styles.cardPerson} onClick={()=>{
                            setInfoPerson({
                                ...infoPerson,
                                name: 'Charlot Pachecto',
                                description:'Diseñadora, Titulada con Mención en Diseño de Productos en la Universidad de Talca. Se ha desempeñado como Diseñadora en el equipo de Comunicaciones del Teatro Regional del Maule. “Desde que conocí el mundo del diseño, he visto como la creatividad nos puede ayudar a crear y comunicar una identidad propia sobre las cosas que nos rodean”.',
                                image: cpacheco,
                                links: [                                    
                                    
                                ]
                            })
                            setVisibleInfo(true)
                        }}>
                                
                                    <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Charlot Pachecto</Paragraph>
                                    <Paragraph style={{fontSize:'12px', textAlign:'center', paddingBottom:'15px', color:'white'}}>Diseño Gráfico</Paragraph>
                                
                                </Card>
                            </Col>
                                                        
                            
                        </Row>
                        <Row align='space-around' style={{marginTop:'20px'}}>
                        <Col>
                                <Card hoverable style={styles.cardPerson} onClick={()=>{
                            setInfoPerson({
                                ...infoPerson,
                                name: 'Francisco Carvajal',
                                description:'Francisco Carvajal, oriundo de la 4ta región, erradicado hace 9 años en Talca. Desde joven estuve relacionado con el mundo de las artes escénicas.Estudié “Comunicación Audiovisual” en IPST.Pueden ver algunos de mis trabajos en @mirillaaudiovisuall mi marca como realizador desde el año 2016.',
                                image: fcarvajal,
                                links: [
                                    <a href='https://www.linkedin.com/in/pilar-higuera-valencia-210742a8/' target='__blank'><LinkedinOutlined style={{fontSize:'25px', marginRight:'10px', color:'rgb(97, 38, 61)'}} /></a>,
                                    
                                ]
                            })
                            setVisibleInfo(true)
                        }}>
                                <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Francisco Carvajal</Paragraph>
                                    <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Audiovisual</Paragraph>
                                </Card>
                            </Col>
                        <Col>
                                <Card hoverable style={styles.cardPerson} onClick={()=>{
                            setInfoPerson({
                                ...infoPerson,
                                name: 'Alvaro Lara',
                                description:'Realizador Audiovisual maulino, egresado de la carrera de Comunicación Audiovisual de la Universidad Santo Tomás, Sede Talca, que desde lo artístico desarrolla la creación de contenidos, animación y proyección de visuales en los más importantes títulos de Opera desarrollados por el TRM como Don Giovanni, Il Trovatore, Otello, La Traviata y La Fiesta del Mircielago, desde el 2011 pertenece al quipo de comunicaciones del TRM y actualmente está a cargo de las Dirección Audiovisual del programa Sesiones TRM. ',
                                image: alara
                            })
                            setVisibleInfo(true)
                        }}>
                                <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Alvaro Lara</Paragraph>
                                    <Paragraph style={{fontSize:'12px', textAlign:'center', paddingBottom:'17px', color:'white'}}>Audiovisual</Paragraph>
                                </Card>
                            </Col>
                        
                           
                            
                            
                        </Row>
                    </Col>
                    <Col xs={24} lg={6} style={{paddingRight:'10px', textAlign:'center'}}>
                        <Card style={{width:'100%', backgroundColor:'#3a1f33', color:'white'}} >Producción</Card>
                        <Row justify='center' style={{marginTop:'20px'}}>
                            
                        <Col style={{marginBottom:'20px'}}>
                                <Card hoverable style={styles.cardColor} onClick={()=>{
                            setInfoPerson({
                                ...infoPerson,
                                name: 'Verónica Barahona',
                                description:'Coordinadora de Producción y Técnica del Teatro Regional del Maule. Actriz, licenciada en Artes Escénicas de la U. Mayor con postítulo en Gestión Cultural de la UST. 15 años de experiencia en areas de producción, educación y gestión cultural.',
                                image: vbarahona,
                                links: [
                                    <a href='https://www.linkedin.com/in/veronicabarahonadiaz/' target='__blank'><LinkedinOutlined style={{fontSize:'25px', marginRight:'10px', color:'rgb(97, 38, 61)'}} /></a>,                            
                                    <a href='https://www.instagram.com/vero_barahona_/' target='__blank'><InstagramOutlined style={{fontSize:'25px', marginRight:'10px', color:'rgb(97, 38, 61)'}} /></a>,                                    
                                ]
                                
                            })
                            setVisibleInfo(true)
                        }}>
                                    <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Verónica Barahona</Paragraph>
                                    <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Coordinadora de Producción y Técnica TRM</Paragraph>
                                </Card>
                            </Col>
                            <Col style={{marginBottom:'20px'}}>
                                <Card hoverable style={styles.cardColor} onClick={()=>{
                            setInfoPerson({
                                ...infoPerson,
                                name: 'Bárbara Muñoz',
                                description:'Productora, gestora cultural y fotógrafa profesional con más de 15 años de experiencia en el área teatral, galería de arte y productoras. He desarrollado diversos procesos creativos dominando las comunicaciones, el trabajo en equipo, capacidades organizativas y administrativas. Dispuesta siempre a conquistar nuevos desafíos y conocimientos.',
                                image: bmunoz
                            })
                            setVisibleInfo(true)
                        }}>
                                    <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Bárbara Muñoz</Paragraph>
                                    <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Asistente de Producción AMA</Paragraph>
                                </Card>
                            </Col>
                            <Col style={{marginBottom:'20px'}}>
                                <Card hoverable style={styles.cardColor} onClick={()=>{
                            setInfoPerson({
                                ...infoPerson,
                                name: 'Enzo Urrutia',
                                description:'Asistente de Producción del Teatro Regional del Maule, vínculo entre el TRM y los espacios culturales de las 30 comunas de la Región del Maule para el desarrollo de distintas actividades y disciplinas culturales en beneficio de la comunidad regional. Técnico en Dirección y Producción de Eventos de la Universidad del Pacifico, con más de 15 años en gestión cultural en El Centro Cultural Chimkowe, Fundación Futuro y el TRM.',
                                image: eurrutia
                            })
                            setVisibleInfo(true)
                        }}>
                                    <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Enzo Urrutia</Paragraph>
                                    <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Asistente de Producción TRM</Paragraph>
                                </Card>
                            </Col>    
                                                      
                        </Row>
                    </Col>

                    <Col xs={24} lg={6} style={{paddingRight:'10px', textAlign:'center'}}>
                        <Card style={{width:'100%', backgroundColor:'#3a1f33', color:'white'}}>Área TI</Card>
                        <Row align='center' style={{marginTop:'20px'}}>                        
                        <Col style={{marginBottom:'20px'}}>
                                <Card style={styles.cardColor} hoverable onClick={()=>{
                            setInfoPerson({
                                ...infoPerson,
                                name: 'Felipe Barraza',
                                description:'',
                                image: ''
                            })
                            setVisibleInfo(true)
                        }}>
                                    <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Felipe Barraza</Paragraph>
                                    <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Programador y Artquitectura </Paragraph>
                                </Card>
                            </Col>     
                            <Col style={{marginBottom:'20px'}}>
                                <Card style={styles.cardColor} hoverable onClick={()=>{
                            setInfoPerson({
                                ...infoPerson,
                                name: 'Mauricio Selfene',
                                description:'',
                                image: ''
                            })
                            setVisibleInfo(true)
                        }}>
                                <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Mauricio Selfene</Paragraph>
                                    <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Desarrollador Web </Paragraph>
                                </Card>
                            </Col>                            
                            <Col  style={{marginBottom:'20px'}}>
                                <Card style={styles.cardColor} hoverable onClick={()=>{
                            setInfoPerson({
                                ...infoPerson,
                                name: 'Felipe Silva',
                                description:'Analista Programador encargado de área Informática del Teatro Regional del Maule y asesor informático del Teatro Municipal de Santiago.',
                                image: fsilva
                            })
                            setVisibleInfo(true)
                        }}>
                                <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Felipe Silva</Paragraph>
                                    <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Encargado de Informática</Paragraph>
                                </Card>
                            </Col>            
                        </Row>
                    </Col>
                    <Col xs={24} lg={6} style={{paddingRight:'10px', textAlign:'center'}}>
                        <Card style={{width:'100%', backgroundColor:'#3a1f33', color:'white'}} >Contenidos</Card>
                        <Row align='space-around' style={{marginTop:'20px'}}>
                            
                            <Col style={{marginBottom:'20px'}}>
                                <Card hoverable style={styles.cardColor}>
                                <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Unidad Regional de Ciudadanía Cultural / Seremi Cultura Maule</Paragraph>                                    
                                </Card>
                                
                            </Col>
                            <Col style={{marginBottom:'20px'}}>
                                <Card hoverable style={styles.cardColor}>
                                <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Unidad de Fomento de la Cultura y las Artes / Seremi Cultura Maule</Paragraph>                                    
                                </Card>
                                
                            </Col>
                            <Col style={{marginBottom:'20px'}}>
                                <Card hoverable style={styles.cardColor} onClick={()=>{
                            setInfoPerson({
                                ...infoPerson,
                                name: 'Francisca Oróstica',
                                description:'Periodista, Máster en Gestión Cultural y Diplomada en Mediación Cultural y Desarrollo de Públicos.  Trabaja en  gestión cultural  y programación artística. Ha participado en proyectos tales como FEDAM, Festival de Dramaturgia Maulina y La Revuelta Danza, programa de formación en danza contemporánea. Actualmente es gestora cultural de la Dirección de Extensión de la Universidad de Talca. ',
                                image: forostica,
                                links: [
                                    <a href='https://www.instagram.com/franorostik/' target='__blank'><InstagramOutlined style={{fontSize:'25px', marginRight:'10px', color:'rgb(97, 38, 61)'}} /></a>,
                                    <a href='mailto:franciscaorostica@gmail.com' target='__blank'><MailOutlined style={{fontSize:'25px', marginRight:'10px', color:'rgb(97, 38, 61)'}} /></a>,                                                            
                                ]
                            })
                            setVisibleInfo(true)
                        }}>
                                <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Francisca Oróstica</Paragraph>
                                    <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Encargada de Contenidos</Paragraph>
                                </Card>
                                
                            </Col>
                            
                            
                            
                               
                                                                              
                        </Row>
                    </Col>
                    
                </Row>

                

        </Modal>
        <Button style={{paddingBottom:'40px', paddingTop:'12px', color:'white'}} type='link' onClick={()=>setVisible(true)}>
             
                        EQUIPO              
        </Button>
        </>
        
    )
}

const styles = {
    item: {
        backgroundColor: '#b05db9',
        marginRight:'5px',
        marginLeft:'5px'
    },
    modal: {
        top:'10px'
    },
    cardPerson: {
        width:'150px',
        backgroundColor:'#b05db9'
    },
    cardColor: {        
        backgroundColor:'#b05db9', 
        width:'300px', color:'white'
    }

}


export default TeamModal
