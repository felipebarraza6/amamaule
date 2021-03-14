import React from 'react'
import { Row, Col, Typography } from 'antd'
import service1 from '../../assets/service_icons/CONFERENCIAS.png'
import service2 from '../../assets/service_icons/RONDAS-DE-VINCULACION.png'
import service3 from '../../assets/service_icons/SHOWCASES.png'
import service4 from '../../assets/service_icons/TALLERES.png'
const { Title } = Typography

const Services = () => {

    return(
        <Row style={styles.container} justify='center'>
                <Col style={styles.column} span={6} >
                    <img src={service1} style={styles.img}  alt='service1' />
                    <Title style={styles.title} level={4}>Talleres</Title>
                </Col>
                <Col style={styles.column} span={6}>
                    <img src={service2} style={styles.img}  alt='service2' />
                    <Title style={styles.title} level={4} >Conferencias</Title>
                </Col>
                <Col style={styles.column} span={6}>
                    <img src={service3} style={styles.img}  alt='service3' />
                    <Title style={styles.title} level={4}>Rondas de Vinculación</Title>
                </Col>
                <Col style={styles.column} span={6}>
                    <img src={service4} style={styles.img}  alt='service4' />
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
    title: {
        color: 'white',
    }
}


export default Services
