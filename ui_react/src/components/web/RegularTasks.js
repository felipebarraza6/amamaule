import React from 'react'
import { Collapse, Typography, Row, Col } from 'antd'
const { Title } = Typography


const RegularTasks = () => {

    const regularTasksList = [
        {
            "question": "¿Quiénes pueden participar?",
            "answer": `Pueden postular artistas escénicos de la Región del Maule, 
            provenientes del ámbito de la música, la ópera, el teatro, la danza, la narración oral, 
            el circo, los títeres, la performance u otras. Asimismo, programadores de espacios culturales regionales, nacionales e 
            internacionales; programadores de festivales, productores y gestores culturales regionales, nacionales y extranjeros. 
            Por último, este llamado está igualmente abierto para representantes de organizaciones ligadas al campo de las artes escénicas, 
            instituciones públicas y privadas, distribuidores, managers, proveedores de transporte, técnicos,  fotógrafos, diseñadores, 
            audiovisualistas y comunicadores.`
        },
        {
            "question": "Si soy artista, ¿debo tener un trabajo terminado para participar?",
            "answer": `Pueden postular artistas con trabajos terminados del presente periodo y 
             de años anteriores, así como también artistas y colectivos con proyectos en curso. 
             Durante tu inscripción, tendrás la posibilidad de adjuntar tu dossier de trabajo para 
             más detalles.`
        },
        {
            "question": "Si soy profesional asociado, ¿qué requisitos debo cumplir?",
            "answer": `Puede participar todo profesional ligado a las artes escénicas 
            desde sus respectivos oficios, estén estos nombrados en el primer punto o 
            bien se relacionen directamente con la creación, desarrollo y/o difusión de 
            las artes escénicas en la región o a nivel nacional.`
        },
        {
            "question": "¿Debo crear un perfil para poder ingresar?",
            "answer": `Para participar, debes ingresar a amamaule.cl y completar el formulario con tus
             datos para generar tu perfil personal. Luego, podrás acceder a tu perfil y completarlo con 
             tu información específica, seas artista, programador, representante de organización pública 
             o privada, proveedor o profesional asociado. Además, con tu perfil podrás inscribirte en 
             cualquiera de los talleres que ofrecerá AMA durante esta versión.`
        },
        {
            "question": "¿Cuáles son los plazos de inscripción?",
            "answer": `Para participar del encuentro, el plazo de postulación 
            se mantendrá abierto hasta el 1 de abril vía www.amamaule.cl, mismo 
            periodo en el cual podrás inscribirte en los diferentes talleres online.`
        },
        {
            "question": "¿Qué es un visionado y cómo participar?",
            "answer": `Los visionados son instancias creadas para que los programadores puedan revisar trabajos de 
            las y los artistas escénicos del Maule y conocer en mayor profundidad las propuestas existentes en la región. 
            Pueden participar artistas con trabajos producidos entre los años 2018 y 2020, o bien, que estén en proceso de 
            estreno en 2021. Dichas producciones deben estar en condiciones de circular presencial y/o virtualmente durante 
            2021 y los requisitos para participar se explicitan en las bases descargables de amamaule.cl`
        },
        {
            "question": "¿Cómo se desarrollará el Encuentro AMA 2021?",
            "answer": `Producto de la crisis sanitaria y como estrategia para resguardar el bienestar
             de todos los participantes de AMA, la primera versión de este encuentro se realizará completamente 
             en formato on line, a través del sitio web amamaule.cl`
        }

    ]


    return(
        <React.Fragment>
            <Title style={styles.title}>Preguntas Frecuentes</Title>
            <Row justify='center'>
                <Col xs={24} sm={4} md={6} lg={8} xl={10}>            
                    <Collapse style={styles.collapse} tabPosition='left' defaultActiveKey={['0']}  >   
                        {regularTasksList.map((obj, index)=> {
                                return(
                                    <Collapse.Panel header={<p style={styles.collapseP}>{obj.question}</p>} key={index} >
                                        {obj.answer}
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
        margin:'40px',
        backgroundColor:'rgb(206, 61, 75)',
        textColor:'white',           
    },
    collapseP: {
        color:'white',
        textColor:'white',           
    }
}

export default RegularTasks