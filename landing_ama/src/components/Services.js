import React from 'react'
import { Row, Col, Typography } from 'antd'
const { Title } = Typography


const Services = () => {

    return(
        <Row style={styles.container} >
            <Col span={6} style={styles.column}>
                <Title level={4}>Talleres</Title>
            </Col>
            <Col span={6} style={styles.column}>
                <Title level={4} >Conferencias</Title>
            </Col>
            <Col span={6} style={styles.column}>
                <Title level={4}>Rondas de Vinculación</Title>
            </Col>
            <Col span={6} style={styles.column}>
                <Title level={4}>Visionados y Showcases</Title>
            </Col>
        </Row>
    )
}

const styles = {
    container: {
        marginTop:'60px',
        margin:'30px'
    },
    column: {
        textAlign:'center'
    }

}


export default Services