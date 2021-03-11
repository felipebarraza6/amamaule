import React from 'react'
import { Row, Col, Typography } from 'antd'
import service1 from '../assets/service_icons/CONFERENCIAS.png'
import service2 from '../assets/service_icons/RONDAS-DE-VINCULACION.png'
import service3 from '../assets/service_icons/SHOWCASES.png'
import service4 from '../assets/service_icons/TALLERES.png'
const { Title } = Typography

const Services = () => {

    return(
        <Row style={styles.container} justify='center'>
                <Col style={{textAlign:'center'}}>
                    <img src={service1} style={{width:'20%', marginBottom:'15px'}} />
                    <Title style={styles.title} level={4}>Talleres</Title>
                </Col>
                <Col style={{textAlign:'center'}}>
                    <img src={service2} style={{width:'20%', marginBottom:'15px'}} />
                    <Title style={styles.title} level={4} >Conferencias</Title>
                </Col>
                <Col style={{textAlign:'center'}}>
                    <img src={service3} style={{width:'20%', marginBottom:'15px', marginTop:'15px'}} />
                    <Title style={styles.title} level={4}>Rondas de Vinculación</Title>
                </Col>
                <Col style={{textAlign:'center'}}>
                    <img src={service4} style={{width:'20%', marginBottom:'15px', marginTop:'15px'}} />
                    <Title style={styles.title} level={4}>Visionados y Showcases</Title>
                </Col>
        </Row>
    )
}

const styles = {
    container: {
        marginTop:'10%',
        padding:'5%',
        paddingTop:'10%',
        paddingBottom:'10%', 
        backgroundColor: '#ce3d4b',        
    },
    column: {
        textAlign:'center'
    },
    title: {
        color: 'white',
    }
}


export default Services