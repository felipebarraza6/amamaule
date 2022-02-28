import React from 'react'


import {Col, Row, Typography, Card, Button} from 'antd'

const {Title, Paragraph} = Typography

const LinksInstancesAE = () => {

    return(<Row style={{paddingTop:'20px', margin:'20px', marginLeft:'40px'}}>
        <Col span={12} style={{paddingTop:'30px'}}>
            <Title level={3}>RONDAS DE VINCULACIÓN - ARTES ESCÉNICAS</Title>
        </Col>
        <Col span={20} style={{margin:'25px'}}>
            <Paragraph> Las Rondas de Vinculación en formato presencial consisten en reuniones previamente agendadas entre un grupo de programadores u organizaciones que tengan programas de apoyo y/o colaboración con el sector artístico escénico con artistas escénicos y visuales. Principalmente programadores y artistas son quienes participarán de estas rondas. 
</Paragraph>
        </Col>
        <Col style={{marginTop:'50px', paddingRight:'10px', marginLeft:'70px'}}>
            <Card title='Artes Escénicas: 24 marzo 11.30 a 13.00 horas.'>
                <center><Button type='primary' style={{backgroundColor:'rgb(176, 93, 185)', borderColor: 'rgb(176, 93, 185)'}}>CONFIRMO PARTICIPACION</Button></center>
            </Card>
        </Col>
        <Col style={{marginTop:'50px', paddingRight:'10px'}}>
            <Card title='Artes Escénicas: 25 marzo 13.00 a 14.00 horas.'>
            <center><Button type='primary' style={{backgroundColor:'rgb(176, 93, 185)', borderColor: 'rgb(176, 93, 185)'}}>CONFIRMO PARTICIPACION</Button></center>
            </Card>            
        </Col>
        <Col style={{marginTop:'50px', paddingRight:'10px'}}>
            <Card title='Artes Escénicas: 26 marzo 13.00 a 14.00 horas.'>
            <center><Button type='primary' style={{backgroundColor:'rgb(176, 93, 185)', borderColor: 'rgb(176, 93, 185)'}}>CONFIRMO PARTICIPACION</Button></center>
            </Card>
        </Col>
    </Row>)


}

export default LinksInstancesAE