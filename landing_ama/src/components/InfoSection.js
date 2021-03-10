import React from 'react'
import { Row, Card, Typography, Button } from 'antd'
const { Text, Title, Paragraph } = Typography

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
                    extra={<Text style={{marginLeft:'20px'}}>Del 14 al 17 de abril del 2021</Text>}>
                        <Paragraph>
                        AMA es el primer encuentro de vinculación online de Artistas Escénicos del Maule, 
                        Impulsado por el Teatro Regional del Maule y la Seremi de las Culturas, las Artes y 
                        el patriotismo de la Región del Maule. Inscribete y participa en nuestras conferencias, 
                        mesas de conversación, talleres y rondas de vinculación con programadores nacionales. Además, 
                        tendrás acceso exclusivo a nuestros showcases y visionados durante esta edición.
                        </Paragraph>
                        <Button size='large' style={styles.button}>
                            Inscribete Aquí
                        </Button>
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
        width: '700px'
    },
    button: {
        backgroundColor: '#CE3D4B', 
        color:'white', 
        borderColor:'#CE3D4B'
    }
    
}


export default InfoSection