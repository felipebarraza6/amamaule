import React from 'react'


import {Col, Row, Typography, Card, Button, Select} from 'antd'

const {Title, Paragraph} = Typography

const LinksInstancesAV = () => {

    return(<><Row style={{paddingTop:'20px', margin:'20px'}}>
        <Col span={24} style={{paddingTop:'30px'}}>
            <Title level={3}>RONDAS DE VINCULACIÓN -  ARTES DE LA VISUALIDAD</Title>
        </Col>
            <Col span={12} style={{paddingTop:'20px'}}>
                <Paragraph> Presentación Individual de artistas con pantalla grande destinado a programadores y públicos interesados. 10 minutos cada uno (5 min pitch - 5 min feedback programadores).
            </Paragraph>
        </Col>
        </Row>
        <Row style={{paddingTop:'0px', marginLeft:'30px', marginRight: '30px'}}>
        <Col span={12} style={{marginTop:'50px', paddingRight:'10px'}}>
            <Card title='¿Te gustaria presenciar los pitch de artistas visuales?'>
                <center>
                    <Select placeholder='Selecciona una opcion'>
                        <Select.Option>SI</Select.Option>
                        <Select.Option>NO</Select.Option>
                    </Select>
                </center>
            </Card>
        </Col>
        <Col span={12} style={{marginTop:'50px', paddingRight:'10px'}}>
            <Card title='¿Quieres presentar tu propuesta artística a los programadores?'>
                <center>
                    <Select placeholder='Selecciona una opcion' style={{width:'300px'}}>
                        <Select.Option>24 marzo 17.00 a 19.00 hrs</Select.Option>
                        <Select.Option>25 marzo 15.00 a 18.30 hrs</Select.Option>
                        <Select.Option>26 marzo 15.00 a 18.30 hrs</Select.Option>
                    </Select>
                </center>
            </Card>
        </Col>
        <Col span={8} style={{marginTop:'70px', paddingRight:'10px'}}>
            <Card title='Pitch: 24 marzo 17.00 a 19.00  hrs' extra={'7 cupos'}>
            <center><Button type='primary' style={{backgroundColor:'rgb(176, 93, 185)', borderColor: 'rgb(176, 93, 185)'}}>CONFIRMO PARTICIPACION</Button></center>
            </Card>            
        </Col>
        <Col span={8} style={{marginTop:'70px', paddingRight:'10px'}}>
            <Card title='Pitch: 25 marzo 15.00 a 18.30 hrs' extra={'13 cupos'}>
            <center><Button type='primary' style={{backgroundColor:'rgb(176, 93, 185)', borderColor: 'rgb(176, 93, 185)'}}>CONFIRMO PARTICIPACION</Button></center>
            </Card>
        </Col>
        <Col span={8} style={{marginTop:'70px', paddingRight:'10px'}} >
            <Card title='Pitch: 26 marzo 15.00 a 18.30 hrs' extra={'13 cupos'}>
            <center><Button type='primary' style={{backgroundColor:'rgb(176, 93, 185)', borderColor: 'rgb(176, 93, 185)'}}>CONFIRMO PARTICIPACION</Button></center>
            </Card>
        </Col>
    </Row></>)


}

export default LinksInstancesAV