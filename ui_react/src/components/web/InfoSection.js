import React, { useState, useEffect} from 'react'
import { Row, Col, Card, Typography, Tag } from 'antd'
import SignUp from './auth/SignUp'
const { Title, Paragraph } = Typography


const InfoSection = () => {

    const [size, setSize] = useState()

    useEffect(()=> {
        setSize(window.innerWidth)
    }, [])

    return(
        <Row justify='center' style={styles.row}>
                <Card 
                    style={styles.card}
                    title={
                        <Title level={3}>
                            Vincular para Crear
                        </Title>
                    }>
                        <Paragraph align={'justify'}>
                          AMA es el primer encuentro de vinculación online para Artistas Escénicos de la Región del Maule. Durante cuatro jornadas, las y los artistas tendrán la oportunidad de reunirse junto a actores del mundo público y privado, con el objetivo de reactivar redes a nivel regional para la programación de Artes Escénicas en el Maule y el resto del país.

                        </Paragraph> 
                        <Paragraph align={'justify'}>
                          AMA, Vincular Para Crear, propone una agenda de reuniones bilaterales y grupales que permitan a programadores y creadores conocerse, abriendo la oportunidad de ver trabajos estrenados, en progreso y proyectos de creación con sello local.

                        </Paragraph>
                        <Paragraph align={'justify'}>
                            Además, esperamos encontrarnos en el marco de conferencias y mesas de conversación en torno a los nuevos desafíos de la gestión cultural y el acceso trabajo artístico.
Finalmente, propociaremos instancias de formación que inciten a la educación continua y sirvan de inspiración para todas y todos los participantes.
                        </Paragraph>

                        
                        
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
