import React from 'react'


import {Col, Row, Typography, Card, Button, Select} from 'antd'
import img1 from '../../../assets/img/BANNER_RONDAS_04.jpg'
import img2 from '../../../assets/img/BANNER_RONDAS_05.jpg'
const {Title, Paragraph} = Typography

const LinksInstancesAV = () => {

    return(<><Row style={{paddingTop:'20px', margin:'20px'}}>
        <Col span={24} style={{paddingTop:'30px'}}>
            <Title level={3}>RONDAS DE VINCULACIÓN -  ARTES DE LA VISUALIDAD</Title>
        </Col>
            <Col span={16} style={{paddingTop:'20px', marginLeft:'30px'}}>
                <Paragraph style={{textAlign:'justify'}}> 
                Las rondas de vinculación son parte de las actividades existentes en lo que se ha denominado Espacio Digital de Artistas de la Visualidad. Este último es un espacio dentro del estacionamiento que contempla un montaje a manera de galería con exhibición en pantallas de obras visuales. En el mismo espacio a algunos metros, se considera un pequeño escenario dotado de pantalla, para efectuar estas rondas de vinculación con artistas de la visualidad, en un formato más expositivo.
            </Paragraph>
            <Paragraph style={{textAlign:'justify'}}>
            En ese sentido el que sube al escenario es el artista previamente inscrito, quien tendrá una presentación de su trabajo y un tiempo aprox de 5 minutos para un primer pitch, y otros 5 minutos para conversar y responder consultas de los programadores que estarán sentados al aire libre, en sillas, considerando la cantidad de personas que admita el aforo. El zócalo del Teatro Regional del Maule albergará las rondas de vinculación de Artistas Visuales.
            </Paragraph>
        </Col>
        </Row>
        <Row style={{paddingTop:'0px', marginLeft:'0px', marginRight: '0px'}}>
        <Col span={12} style={{marginTop:'50px', paddingRight:'20px'}}>
            <Card title='¿Te gustaria presenciar los pitch de artistas visuales?'>
                <Row>

                    <Col span={24}>
                    <img src={img1} width={400} />
                    </Col>
                    <Col span={24}>                    
                        <Select mode='multiple' style={{float:'right', marginTop:'-70px', paddingLeft:'20px', width:'260px'}} placeholder='Selecciona una opcion'>
                            <Select.Option>24 marzo 17.00 a 19.00 hrs</Select.Option>
                            <Select.Option>25 marzo 15.00 a 18.30 hrs</Select.Option>
                            <Select.Option>26 marzo 15.00 a 18.30 hrs</Select.Option>
                        </Select>    
                    </Col>
                </Row>
                
                <center>
                    
                </center>
            </Card>
        </Col>
        <Col span={12} style={{marginTop:'50px', paddingLeft:'40px'}}>
            <Card title='¿Quieres presentar tu propuesta artística a los programadores?'>
            <Row>
                <Col span={24}>
                <img src={img2} width={400} />
                </Col>
                <Col span={24}>
                <Select mode='multiple' style={{float:'right', marginTop:'-70px', paddingLeft:'20px'}} placeholder='Selecciona una opcion'>
                        <Select.Option>24 marzo 17.00 a 19.00 hrs</Select.Option>
                        <Select.Option>25 marzo 15.00 a 18.30 hrs</Select.Option>
                        <Select.Option>26 marzo 15.00 a 18.30 hrs</Select.Option>
                </Select>    
                </Col>
                </Row>
                
            </Card>
        </Col>       
    </Row></>)


}

export default LinksInstancesAV