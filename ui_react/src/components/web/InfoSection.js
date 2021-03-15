import React from 'react'
import { Row, Col, Card, Typography, Tag } from 'antd'
import SignUp from './auth/SignUp'
const { Title, Paragraph } = Typography


const InfoSection = () => {

    return(
        <Row justify='center' style={styles.row}>
                <Card 
                    style={styles.card}
                    title={
                        <Title level={3}>
                            Vincular para Crear
                        </Title>
                    }>
                        <Paragraph>
                          AMA es el primer encuentro de vinculación online de Artistas Escénicos del Maule, 
                          Impulsado por el Teatro Regional del Maule y la Seremi de las Culturas, las Artes y 
                          el Patrimonio de la Región del Maule. 
                        </Paragraph> 
                        <Paragraph>
                          Inscríbete y participa en nuestras conferencias, 
                          mesas de conversación, talleres y rondas de vinculación con programadores nacionales.
                          Además, tendrás acceso exclusivo a nuestros showcases y visionados durante esta edición.
                        </Paragraph>
                        <SignUp />
                </Card>
        </Row>
    )

}


const styles = {
    row: {
        marginTop:'50px',
        marginBottom: '100px',
    },
    card: {
        width: '600px',
        marginTop: '3%',
        boxShadow:'25px 25px 5px rgba(0, 0, 0, 0.2)',
    }
    
}


export default InfoSection
