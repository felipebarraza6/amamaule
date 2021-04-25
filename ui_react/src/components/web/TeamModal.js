import React, {useEffect, useState} from 'react'
import {Modal, Menu, Button, Row, Col, Card, Typography} from 'antd'
import { TeamOutlined } from '@ant-design/icons'
const { Item } = Menu
const { Title, Paragraph, Text} = Typography

const TeamModal = () => {

    const [visible, setVisible] = useState(false)

    return(<>
        
        <Modal 
            title='NUESTRO EQUIPO' 
            width="100%" 
            visible={visible} 
            style={styles.modal} 
            footer={[<Button onClick={()=>setVisible(false)} style={{backgroundColor:'rgb(97, 38, 61)', color:'white'}}>Cerrar</Button>]}
            onCancel={()=>setVisible(false)}>
                <Row align='space-around' style={{textAlign:'center'}}>
                    <Col style={{marginBottom:'20px'}}>
                        <Card hoverable style={{width:'300px', backgroundColor:'rgb(206, 61, 75)'}}>
                            <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Katheryne Garzón</Paragraph>
                            <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Producción General</Paragraph>
                        </Card>                        
                    </Col>                
                    <Col>
                        <Card hoverable style={{width:'300px', backgroundColor:'rgb(206, 61, 75)'}} >
                                <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Victoria Flores</Paragraph>
                                <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Producción Ejecutiva</Paragraph>
                        </Card>                        
                    </Col>
                </Row>

                <Row align='space-around' style={{marginTop:'20px'}}>
                    <Col xs={24} lg={6} style={{paddingRight:'10px', textAlign:'center'}}>
                        <Card style={{width:'100%', backgroundColor:'rgb(97, 38, 61)', color:'white'}}>Comunicaciones</Card>
                        <Row align='space-around' style={{marginTop:'20px'}}>
                            <Col>
                                <Card hoverable style={styles.cardPerson}>
                                    <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Manuel Rojas</Paragraph>
                                    <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Encargado Comunicaciones TRM</Paragraph>
                                </Card>
                            </Col>
                            <Col>
                                <Card hoverable style={styles.cardPerson} >
                                <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Lorena Alvarez</Paragraph>
                                    <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Encargada Comunicaciones AMA</Paragraph>
                                </Card>
                            </Col>
                            
                        </Row>
                        <Row align='space-around' style={{marginTop:'20px'}}>
                            <Col>
                                <Card hoverable style={styles.cardPerson}>
                                <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Pilar Higuera</Paragraph>
                                    <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Encargada Comunicaciones TRM</Paragraph>
                                </Card>
                            </Col>
                            <Col>
                                <Card hoverable style={styles.cardPerson} >
                                <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Claudio Rojas</Paragraph>
                                    <Paragraph style={{fontSize:'12px', textAlign:'center', paddingBottom:'35px', color:'white'}}>Diseño Gráfico</Paragraph>
                                </Card>
                            </Col>
                            
                        </Row>
                        <Row align='space-around' style={{marginTop:'20px'}}>
                            <Col>
                                <Card hoverable style={styles.cardPerson}>
                                <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Francisco Carvajal</Paragraph>
                                    <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Audiovisual</Paragraph>
                                </Card>
                            </Col>
                            <Col>
                                <Card hoverable style={styles.cardPerson} >
                                <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Alvaro Lara</Paragraph>
                                    <Paragraph style={{fontSize:'12px', textAlign:'center', paddingBottom:'17px', color:'white'}}>Audiovisual</Paragraph>
                                </Card>
                            </Col>
                            
                        </Row>
                        <Row align='space-around' style={{marginTop:'20px'}}>
                            <Col>
                                <Card hoverable style={styles.cardPerson}>
                                <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Paola Contardo</Paragraph>
                                    <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Apoyo comunicacional</Paragraph>
                                </Card>
                            </Col>
                            <Col>
                                <Card hoverable style={styles.cardPerson} >
                                <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Catalina Salazar</Paragraph>
                                    <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Apoyo comunicacional</Paragraph>
                                </Card>
                            </Col>
                            
                        </Row>
                    </Col>
                    <Col xs={24} lg={6} style={{paddingRight:'10px', textAlign:'center'}}>
                        <Card style={{width:'100%', backgroundColor:'rgb(97, 38, 61)', color:'white'}} >Producción</Card>
                        <Row justify='center' style={{marginTop:'20px'}}>
                        <Col style={{marginBottom:'20px'}}>
                                <Card hoverable style={styles.cardColor}>
                                    <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Verónica Barahona</Paragraph>
                                    <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Coordinadora de Producción y Técnica TRM</Paragraph>
                                </Card>
                            </Col>
                            <Col style={{marginBottom:'20px'}}>
                                <Card hoverable style={styles.cardColor} >
                                    <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Bárbara Muñoz</Paragraph>
                                    <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Asistente de Producción</Paragraph>
                                </Card>
                            </Col>
                            <Col style={{marginBottom:'20px'}}>
                                <Card hoverable style={styles.cardColor}>
                                    <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Enzo Urrutia</Paragraph>
                                    <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Asistente Producción TRM</Paragraph>
                                </Card>
                            </Col>    
                                                      
                        </Row>
                    </Col>

                    <Col xs={24} lg={6} style={{paddingRight:'10px', textAlign:'center'}}>
                        <Card style={{width:'100%', backgroundColor:'rgb(97, 38, 61)', color:'white'}}>Área TI</Card>
                        <Row align='center' style={{marginTop:'20px'}}>
                        <Col  style={{marginBottom:'20px'}}>
                                <Card style={styles.cardColor} hoverable><Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Felipe Silva</Paragraph></Card>
                            </Col>
                            <Col style={{marginBottom:'20px'}}>
                                <Card style={styles.cardColor} hoverable><Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Mauricio Selfene</Paragraph></Card>
                            </Col>
                            <Col style={{marginBottom:'20px'}}>
                                <Card style={styles.cardColor} hoverable><Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Felipe Barraza</Paragraph></Card>
                            </Col>                 
                        </Row>
                    </Col>
                    <Col xs={24} lg={6} style={{paddingRight:'10px', textAlign:'center'}}>
                        <Card style={{width:'100%', backgroundColor:'rgb(97, 38, 61)', color:'white'}} >Contenidos</Card>
                        <Row align='space-around' style={{marginTop:'20px'}}>
                            <Col style={{marginBottom:'20px'}}>
                                <Card hoverable style={styles.cardColor} >
                                <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Francisca Oróstica</Paragraph>
                                    <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Encargada de Contenidos</Paragraph>
                                </Card>
                            </Col>
                            <Col span={24} style={{marginBottom:'20px'}}>
                            <Card style={{width:'100%', backgroundColor:'rgb(97, 38, 61)', color:'white'}}>Sistematización</Card>
                            </Col>
                            <Col style={{marginBottom:'20px'}}>
                                <Card hoverable style={styles.cardColor} >
                                <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Jennifer Gualteros</Paragraph>
                                    <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Encargada de sistematización</Paragraph>
                                </Card>
                            </Col>   
                            <Col  style={{marginBottom:'20px'}}>
                                <Card style={styles.cardColor} hoverable ><Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Elvira Valdivieso</Paragraph>
                                    <Paragraph style={{fontSize:'12px', textAlign:'center', color:'white'}}>Encargada de sistematización</Paragraph></Card>
                            </Col>                                                  
                        </Row>
                    </Col>
                </Row>

                

        </Modal>
        <Button style={{paddingBottom:'50px', paddingTop:'12px', color:'white'}} type='link' onClick={()=>setVisible(true)}>
        <TeamOutlined style={{fontSize:'25px', color:'white'}} />
             
                        EQUIPO              
        </Button>
        </>
        
    )
}

const styles = {
    item: {
        backgroundColor: '#CE3D4B',
        marginRight:'5px',
        marginLeft:'5px'
    },
    modal: {
        top:'10px'
    },
    cardPerson: {
        width:'150px',
        backgroundColor:'rgb(245, 129, 126)'
    },
    cardColor: {        
        backgroundColor:'rgb(245, 129, 126)', 
        width:'300px', color:'white'
    }

}


export default TeamModal