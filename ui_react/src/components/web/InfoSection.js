import React, { useState, useEffect} from 'react'
import { Row, Col, Collapse,Card, Typography, Tag } from 'antd'
import SignUp from './auth/SignUp'
import CarouselBanner from './CarouselBanner'
import Slide1 from '../../assets/FONDO_WEB.jpg' 
const { Title, Paragraph, Text } = Typography

const { Panel } = Collapse;


const InfoSection = () => {

    const [size, setSize] = useState()

    useEffect(()=> {
        setSize(window.innerWidth)
    }, [])

    return(
        <Row justify='center' style={{backgroundImage:`url(${Slide1})`,backgroundPosition: 'top',
        backgroundSize: '160% auto',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        width: '100%'}} >
                <Card 
                    style={styles.card}
                   >
<CarouselBanner />
<Collapse style={{marginTop:'60px'}} defaultActiveKey={['1']} bordered={false} className="site-collapse-custom-collapse">
      <Panel header="INSCRIPCIÓN" key="1" className="site-collapse-custom-panel">
    
<SignUp />

    </Panel>
    <Panel header="¿QUÉ ES AMA?" key="2" className="site-collapse-custom-panel">
        <Paragraph align={'justify'} style={{color:''}}> 
            AMA es un encuentro de vinculación para Artistas Escénicos y Visuales de la Región del Maule, 
            pensado bajo la modalidad de plataforma de intercambio junto a otros actores del ecosistema, como 
            lo son gestores culturales, programadores, profesionales asociados, entre otros. 
        </Paragraph>
        <Paragraph align={'justify'} style={{color:''}}>
            Del 24 al 30 de marzo de 2022, celebramos la segunda edición de AMA, bajo la consigna #VincularParaCrear. 
            De forma presencial y virtual, incluyendo las Artistas de la Visualidad de la región del Maule.
    </Paragraph>
    </Panel>   
    <Panel header="¿QUÉ PUEDES HACER EN AMA?" key="3" className="site-collapse-custom-panel">
        <Paragraph align={'justify'} style={{color:''}}>
            Los participantes de AMA (artistas, programadores, y otros mencionados) podrán sostener 
            reuniones en rondas de vinculación tanto presenciales como en modalidad on line para presentar 
            proyectos, planes de trabajo, esbozar potenciales alianzas, conocer procesos creativos y experiencias 
            de otros centros culturales, informarse de fuentes de financiamiento posible, entre otros temas que convoquen 
            el interés de las partes involucradas.        
        </Paragraph>
        <Paragraph align={'justify'} style={{color:''}}>
            AMA también es una instancia para asistir a conferencias y mesas de conversación sobre temas 
            atingentes a la gestión cultural y al trabajo artístico, así como para participar en talleres de formación 
            en ámbitos de interés para quienes se inscriban en esta versión. 
        </Paragraph>
        <Paragraph align={'justify'} style={{color:''}}>
            AMA está abierta a público general a través de espectáculos gratuitos como showcases, espectáculos 
            de artes escénicas, mercado de las artes y otros eventos artísticos.
        </Paragraph>
    </Panel>
    <Panel header="¿QUIÉNES PUEDEN PARTICIPAR?" key="4" className="site-collapse-custom-panel">
        <Paragraph align={'justify'} style={{color:''}}>
            Pueden postular artistas escénicos y artistas visuales de la Región del Maule. Como artistas escénicos se 
            considera a los artistas provenientes del ámbito de la música, la ópera, el teatro, la danza, la narración 
            oral, el circo, los títeres, la performance u otras. Como artistas visuales se considera a quienes se desempeñen 
            en disciplinas como pintura, escultura, muralismo, grabado, dibujo, instalación, performance, vitrales, técnicas 
            integradas, fotografía.        
        </Paragraph>
        <Paragraph align={'justify'} style={{color:''}}>
            Asimismo, podrán participar programadores de espacios culturales regionales, nacionales e internacionales; 
            programadores de festivales, productores y gestores culturales regionales, nacionales y extranjeros. 
            Por último, este llamado está igualmente abierto para representantes de organizaciones ligadas al campo de 
            las artes escénicas, instituciones públicas y privadas, distribuidores, managers, proveedores de transporte, 
            técnicos,  fotógrafos, diseñadores, audiovisualistas y comunicadores.
        </Paragraph>
    </Panel>
    
  </Collapse>

                        
                        
                </Card>
        </Row>
    )

}


const styles = {
    row: {
       
        marginBottom: '100px',
    },
    card: {
        width: '900px',
        boxShadow:'25px 25px 5px rgba(0, 0, 0, 0.2)',
        marginBottom: '100px'
    }
    
}


export default InfoSection
