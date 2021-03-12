import React from 'react'
import { Row, Card, Typography, Tag } from 'antd'
import SignUp from './auth/SignUp'
const { Title, Paragraph } = Typography


const InfoSection = () => {

    return(
        <Row justify='center' style={styles.row}>
                <Card 
                    hoverable 
                    style={styles.card}
                    title={
                        <Title level={3}>
                            Vincular para Crear
                        </Title>
                    }
                    extra={<Tag color='volcano' style={{marginLeft:'20px'}}>Del 14 al 17 de abril del 2021</Tag>}>
                        <Paragraph>
                        AMA es el primer encuentro de vinculación online de Artistas Escénicos del Maule, 
                        Impulsado por el Teatro Regional del Maule y la Seremi de las Culturas, las Artes y 
                        el patriotismo de la Región del Maule. Inscribete y participa en nuestras conferencias, 
                        mesas de conversación, talleres y rondas de vinculación con programadores nacionales. Además, 
                        tendrás acceso exclusivo a nuestros showcases y visionados durante esta edición.
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
        width: '700px',
        boxShadow:'20px 25px 5px rgba(0, 0, 0, 0.1)',
        marginLeft:'8px',
        marginRight:'50px'
    }
    
}


export default InfoSection