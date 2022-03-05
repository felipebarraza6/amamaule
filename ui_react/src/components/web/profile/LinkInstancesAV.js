import React, { useState } from 'react'


import {Col, Row, Typography, Card, Button, Select} from 'antd'
import img1 from '../../../assets/img/BANNER_RONDAS_04.jpg'
import img2 from '../../../assets/img/BANNER_RONDAS_05.jpg'
const {Title, Paragraph} = Typography

const LinksInstancesAV = () => {

    const [state, setState] = useState({
        av_pitch: [],
        av_artists: []
    })



    return(<><Row style={{paddingTop:'0px', margin:'20px'}}>        
        <Row style={{paddingTop:'20px', margin:'20px', marginLeft:'40px'}}>
        <Col span={24} style={{paddingTop:'30px'}}>
            <Title level={3}>RONDAS DE VINCULACIÓN -  ARTES DE LA VISUALIDAD</Title>
        </Col><Col span={20} style={{margin:'25px'}}>
            <Paragraph style={{textAlign:'justify'}}> 
            Las rondas de vinculación son parte de las actividades existentes en lo que se ha denominado Espacio Digital de Artistas de la Visualidad. Este último es un espacio dentro del estacionamiento que contempla un montaje a manera de galería con exhibición en pantallas de obras visuales. En el mismo espacio a algunos metros, se considera un pequeño escenario dotado de pantalla, para efectuar estas rondas de vinculación con artistas de la visualidad, en un formato más expositivo.
            </Paragraph>
            <Paragraph style={{textAlign:'justify'}}> 
            En ese sentido el que sube al escenario es el artista previamente inscrito, quien tendrá una presentación de su trabajo y un tiempo aprox de 5 minutos para un primer pitch, y otros 5 minutos para conversar y responder consultas de los programadores que estarán sentados al aire libre, en sillas, considerando la cantidad de personas que admita el aforo. El zócalo del Teatro Regional del Maule albergará las rondas de vinculación de Artistas Visuales.
            </Paragraph>
        </Col></Row>
        </Row>
        <Row style={{marginBottom:'60px', marginTop:'0px'}} justify='center'>
            <Col span={12} lg={12} xs={24} >
                <Card hoverable cover={<img src={img1} />} style={{ width: 500, margin:'20px' }} >
                    <Card.Meta title="¿Te gustaria presenciar los pitch de artistas visuales?" />
                    <Select mode='multiple' size='large' style={{width:'100%', marginTop:'20px'}} placeholder='Selecciona uno o más días'>
                        <Select.Option value='24 marzo 17.00 a las 19.00 hrs'>24 marzo 17.00 a las 19.00 hrs</Select.Option>
                        <Select.Option value='25 marzo 15.00 a las 18.30 hrs'>25 marzo 15.00 a las 18.30 hrs</Select.Option>
                        <Select.Option value='26 marzo 15.00 a las 18.30 hrs'>26 marzo 15.00 a las 18.30 hrs</Select.Option>
                    </Select> 
                    <Button size='large' type='primary' style={styles.btn} >Participar</Button>                 
                </Card>                
            </Col>
            <Col span={12} lg={12}  xs={24}>
                 <Card hoverable cover={<img src={img2} />} style={{ width: 500, margin:'20px' }}>                    
                        <Typography.Paragraph>
                            ¿Quieres presentar tu propuesta artística a los programadores?
                        </Typography.Paragraph>
                        <Select mode='multiple' size='large' style={{width:'100%', marginTop:'20px'}} placeholder='Selecciona uno o más días'>
                            <Select.Option value='24 marzo 17.00 a las 19.00 hrs'>24 marzo 17.00 a las 19.00 hrs</Select.Option>
                            <Select.Option value='25 marzo 15.00 a las 18.30 hrs'>25 marzo 15.00 a las 18.30 hrs</Select.Option>
                            <Select.Option value='26 marzo 15.00 a las 18.30 hrs'>26 marzo 15.00 a las 18.30 hrs</Select.Option>
                        </Select>  
                    <Button size='large' type='primary' style={styles.btn} >Participar</Button>                   
                                              
                </Card>
                
            </Col>       
    </Row></>)


}

const styles = {
    btn: {
        backgroundColor:'rgb(176, 93, 185)', 
        borderColor: 'rgb(176, 93, 185)', 
        marginTop:'10px', 
        float: 'right'
    }
}

export default LinksInstancesAV