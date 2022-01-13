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
    <Panel header="¿QUÉ ES AMA?" key="1" className="site-collapse-custom-panel">
    <Paragraph align={'justify'} style={{color:''}}> AMA es un encuentro impulsado por el Teatro Regional del Maule y la Seremía de las Culturas, las Artes y el Patrimonio para vincular a artistas del Maule con programadores/as regionales y nacionales y otros agentes del campo artístico-cultural. AMA se realiza desde el año 2021, constituyéndose como una plataforma para diálogos, intercambios y alianzas entre artistas, representantes de entidades públicas y privadas con programas establecidos o potenciales instancias para el financiamiento del trabajo artístico; proveedores de bienes y servicios relacionados a la creación, producción y circulación de obra; y con otros profesionales o trabajadores/as relacionados o asociados al sector.</Paragraph>
    <Paragraph align={'justify'} style={{color:''}}>AMA-Vincular para Crear se desarrollará en formato presencial y virtual.</Paragraph>

    </Panel>
    <Panel header="¿QUÉ PUEDES HACER EN AMA?" key="2" className="site-collapse-custom-panel">
    <Paragraph align={'justify'} style={{color:''}}>Los participantes de AMA (artistas, programadores, y otros mencionados) podrán sostener reuniones en rondas de vinculación tanto presenciales como en modalidad on line para presentar proyectos, planes de trabajo, esbozar potenciales alianzas, conocer procesos creativos y experiencias de otros centros culturales, informarse de fuentes de financiamiento posible, entre otros temas que convoquen el interés de las partes involucradas. </Paragraph>

    <Paragraph align={'justify'} style={{color:''}}>AMA también es una instancia para asistir a conferencias y mesas de conversación sobre temas atingentes a la gestión cultural y al trabajo artístico, así como para participar en talleres de formación en ámbitos de interés para quienes se inscriban en esta versión. </Paragraph>

    <Paragraph align={'justify'} style={{color:''}}>AMA está abierta a público general a través de espectáculos gratuitos como showcases, espectáculos de artes escénicas, mercado de las artes y otros eventos artísticos.</Paragraph>

    </Panel>
    <Panel header="¿QUIÉNES PUEDEN PARTICIPAR EN AMA?" key="3" className="site-collapse-custom-panel">
    <Paragraph align={'justify'} style={{color:''}}> Pueden participar artistas, programadores y todas aquellas personas que forman parte del ecosistema artístico relacionado a las artes escénicas y de la visualidad, tales como organizaciones que llevan a cabo programas artísticos, culturales o patrimoniales; establecimientos educacionales que contemplan asignaturas artísticas o actividades extracurriculares relacionadas a las artes, coleccionistas y galeristas, y personas que se desarrollan en diversos ámbitos de acción que se detallan a continuación: </Paragraph>
    <Paragraph align={'justify'} style={{color:''}}><b>Artistas Escénicos o representantes</b> de las disciplinas de teatro, danza, circo, narración oral, canto, música orquestada, docta, popular; folclore, ópera, títeres o marionetas, performance, u otras correspondientes.</Paragraph>
    <Paragraph align={'justify'} style={{color:''}}><b>Artistas de la visualidad</b>, de disciplinas como pintura, escultura, muralismo, grabado, dibujo, instalación, performance, vitrales, y técnicas integradas, estos últimos entendidos como proyectos que sumen más de una de las expresiones y géneros anteriormente descritos.</Paragraph>
    <Paragraph align={'justify'} style={{color:''}}><b>Gestores/as culturales; programadores/as o similares</b> de centros culturales autogestionados; centros culturales dependientes de una organización público y/o privada; espacios expositivos (museos, galerías, etc), sala de conciertos, salón de eventos, festival u otro tipo de instancia que mantenga parrillas programáticas periódicas o esporádicas; o desarrolle programación cultural.</Paragraph>
    <Paragraph align={'justify'} style={{color:''}}><b>Profesionales o trabajadores relacionados a las artes escénicas o de la visualidad</b>, tales como diseñador/a gráfico, diseñador/a escénico, sonidista, iluminador/a, maquillador/a, arquitecto/a, curador/a, museógrafo/a, museólogos/a, montajistas, docente o educador artístico, coleccionistas, fotógrafo/a, comunicador/a, u otra actividad afín a las artes mencionadas. </Paragraph>
    <Paragraph align={'justify'} style={{color:''}}><b>Proveedor/a de bienes y servicios asociados</b>, tales como proveedor servicios de transporte, proveedor servicios técnicos (iluminación, sonido, etc), proveedor de servicios de catering, productora de eventos u otro similar. </Paragraph>
    <Paragraph align={'justify'} style={{color:''}}><b>Organizaciones públicas o privadas tales como</b>: Organismos estatales (corfo, prochile, dirac, otras), organismos privados (corporaciones, fundaciones, empresas, otros), establecimientos educacionales (escuelas, institutos, universidades, otros), organizaciones con fines sociales (ong's, juntas de vecinos, organizaciones sociales, otras); museos, galerías públicas o privadas, bibliotecas y cualquier organización cuyo trabajo requiera de la participación de artistas escénicos o de la visualidad, u otras de las categorías participantes.
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
