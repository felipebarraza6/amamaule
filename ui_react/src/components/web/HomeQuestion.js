import React from 'react'
import { Collapse, Typography, Row, Col } from 'antd'

const { Title, Paragraph } = Typography


const HomeQuestion = () => {

    const regularTasksList = [
        {
            "question": "¿QUÉ ES AMA?",
            "answer": `AMA es un encuentro de vinculación para Artistas Escénicos y Visuales de la Región del Maule, 
            pensado bajo la modalidad de plataforma de intercambio junto a otros actores del ecosistema, como 
            lo son gestores culturales, programadores, profesionales asociados, entre otros. `,
            "answer2": `Del 24 al 30 de marzo de 2022, celebramos la segunda edición de AMA, bajo la consigna #VincularParaCrear. 
            De forma presencial y virtual, incluyendo las Artistas de la Visualidad de la región del Maule.`
        },
        {
            "question": "¿QUÉ PUEDES HACER EN AMA?",
            "answer": `Los participantes de AMA (artistas, programadores, y otros mencionados) podrán sostener 
            reuniones en rondas de vinculación tanto presenciales como en modalidad on line para presentar 
            proyectos, planes de trabajo, esbozar potenciales alianzas, conocer procesos creativos y experiencias 
            de otros centros culturales, informarse de fuentes de financiamiento posible, entre otros temas que convoquen 
            el interés de las partes involucradas.`,
            "answer2": `AMA también es una instancia para asistir a conferencias y mesas de conversación sobre temas 
            atingentes a la gestión cultural y al trabajo artístico, así como para participar en talleres de formación 
            en ámbitos de interés para quienes se inscriban en esta versión. `
        },
        {
            "question": "¿QUIÉNES PUEDEN PARTICIPAR?",
            "answer": `Pueden postular artistas escénicos y artistas visuales de la Región del Maule. Como artistas escénicos se 
            considera a los artistas provenientes del ámbito de la música, la ópera, el teatro, la danza, la narración 
            oral, el circo, los títeres, la performance u otras. Como artistas visuales se considera a quienes se desempeñen 
            en disciplinas como pintura, escultura, muralismo, grabado, dibujo, instalación, performance, vitrales, técnicas 
            integradas, fotografía.`,
            "answer2": `Asimismo, podrán participar programadores de espacios culturales regionales, nacionales e internacionales; 
            programadores de festivales, productores y gestores culturales regionales, nacionales y extranjeros. 
            Por último, este llamado está igualmente abierto para representantes de organizaciones ligadas al campo de 
            las artes escénicas, instituciones públicas y privadas, distribuidores, managers, proveedores de transporte, 
            técnicos,  fotógrafos, diseñadores, audiovisualistas y comunicadores.`
        }        

    ]


    return(
        <React.Fragment>            
            <Row justify='center' style={{margin:'20px'}}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>            
                    <Collapse style={styles.collapse} tabPosition='left' defaultActiveKey={['0']}  >   
                        {regularTasksList.map((obj, index)=> {
                                return(
                                    <Collapse.Panel header={<p style={styles.collapseP}>{obj.question}</p>} key={index} >
                                        <Paragraph>{obj.answer}</Paragraph>                                        
                                        <Paragraph>{obj.answer2}</Paragraph>                                        
                                    </Collapse.Panel>
                                )
                        })}                     
                    </Collapse>
        </Col>
        </Row>
        </React.Fragment>

    )

}


const styles = {
    title: {
        textAlign:'center'
    },
    collapse: {        
        backgroundColor:'rgb(176, 93, 185)',
        textColor:'white',           
    },
    collapseP: {
        color:'white',
        textColor:'white',           
    }
}

export default HomeQuestion