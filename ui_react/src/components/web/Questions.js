import React, { useState } from 'react'
import { Modal, Button, Collapse, Typography } from 'antd'
const {Title, Paragraph}=Typography
const {Panel}=Collapse

const Questions = () => {

    const [visible, setVisible] = useState(false)

    return(<>
        <Button style={{color:'white', marginBottom:'15px'}} type='link' onClick={()=> setVisible(true)}>PREGUNTAS FRECUENTES</Button>
        <Modal width={'700px'} footer={[<Button onClick={()=>setVisible(false)} style={{backgroundColor:'rgb(176, 93, 185)',borderColor:'rgb(176, 93, 185)', color:'white'}}>Cerrar</Button>]}
          visible={visible} onCancel={()=>setVisible(false)} title='PREGUNTAS FRECUENTES'>
              
            <Collapse style={{marginTop:'0px'}} defaultActiveKey={['1']} bordered={false} className="site-collapse-custom-collapse">
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
            <Panel header="SI SOY ARTISTA, ¿DEBO TENER UN TRABAJO TERMINADO PARA PARTICIPAR?" key="51" className="site-collapse-custom-panel">
        <Paragraph align={'justify'} style={{color:''}}>
            Pueden participar artistas con trabajos terminados del presente periodo y de años anteriores, 
            así como también artistas y colectivos con proyectos en curso. Durante tu inscripción, tendrás 
            la posibilidad de adjuntar tu dossier de trabajo para más detalles.
        </Paragraph>       
    </Panel>    
    <Panel header="SI SOY PROFESIONAL ASOCIADO, ¿QUÉ REQUISITOS DEBO CUMPLIR?" key="5" className="site-collapse-custom-panel">
        <Paragraph align={'justify'} style={{color:''}}>
            Puede participar todo profesional ligado a las artes escénicas y a las artes visuales, 
            desde sus respectivos oficios, si están estos nombrados en el primer punto o bien si se 
            relacionan directamente con la creación, desarrollo y/o difusión de las artes escénicas 
            en la región o a nivel nacional.
        </Paragraph>       
    </Panel> 
    <Panel header="¿DEBO CREAR UN PERFIL PARA PODER INGRESAR?" key="6" className="site-collapse-custom-panel">
        <Paragraph align={'justify'} style={{color:''}}>
            Para participar, debes ingresar a amamaule.cl y completar el formulario con tus datos para generar tu perfil. 
            Luego, podrás acceder a tu perfil y completarlo con tu información específica, seas artista, programador, 
            representante de organización pública o privada, proveedor o profesional asociado. Además, con tu perfil 
            podrás inscribirte en las diversas actividades que ofrecerá AMA durante esta versión.
        </Paragraph>       
    </Panel>
    <Panel header="¿CUÁLES SON LOS PLAZOS PARA PARTICIPAR?" key="7" className="site-collapse-custom-panel">
        <Paragraph align={'justify'} style={{color:''}}>
            Para participar del encuentro presencial, el plazo de postulación se mantendrá abierto hasta el 
            22 de marzo vía www.amamaule.cl,. Si deseas inscribirte en AMA virtual deberás hacerlo antes del 27 de marzo.
        </Paragraph>       
    </Panel>
    <Panel header="¿QUÉ MODALIDADES CONTEMPLA EL II ENCUENTRO AMA 2021?" key="8" className="site-collapse-custom-panel">
        <Paragraph align={'justify'} style={{color:''}}>
            Modalidad presencial en la ciudad de Talca y modalidad virtual, a través de  amamaule.cl.
        </Paragraph>       
    </Panel>
    <Panel header="¿QUÉ PUEDES HACER EN AMA PRESENCIAL?" key="9" className="site-collapse-custom-panel">
        <Paragraph align={'justify'} style={{color:''}}>
            AMA-Vincular para Crear se desarrollará durante tres días consecutivos en formato presencial en el Teatro Regional del Maule como espacio principal, y asociándose a otros espacios culturales para la exhibición de espectáculos escénicos. Durante esos tres días podrás:
        </Paragraph>       
        <Paragraph align={'justify'} style={{color:''}}>
            - Participar en rondas de vinculación grupales con los y las participantes de esta versión que sean de tu interés.
        </Paragraph>
        <Paragraph align={'justify'} style={{color:''}}>
            - Asistir a espectáculos de artes escénicas en forma gratuita.
        </Paragraph>
        <Paragraph align={'justify'} style={{color:''}}>
            - Participar y/o asistir al mercado de las artes; una instancia especialmente diseñada para difundir y dar a conocer el trabajo de artistas de la visualidad de la región del Maule, galeristas, museos y otros espacios con trabajo reconocido en el área de creación y/o exhibición de las artes visuales.
        </Paragraph>
        <Paragraph align={'justify'} style={{color:''}}>
            - Inscribirse en talleres de formación de acuerdo con tu área de trabajo o interés. 
        </Paragraph>
        <Paragraph align={'center'} style={{color:''}}>
            <strong>*Para participar de estas actividades deberás contar con tu pase de movilidad y aceptar el uso de mascarilla y las otras medidas de seguridad establecidas por el espacio.</strong>
        </Paragraph>
    </Panel>
    <Panel header="¿QUÉ PUEDES HACER EN AMA DIGITAL?" key="10" className="site-collapse-custom-panel">
        <Paragraph align={'justify'} style={{color:''}}>
            En la versión on line podrás:
        </Paragraph>       
        <Paragraph align={'justify'} style={{color:''}}>
            - Agendar nuevas reuniones de vinculación bilateral con agentes claves o de interés para tu trabajo.
        </Paragraph>
        <Paragraph align={'justify'} style={{color:''}}>
            - Asistir a mesas de conversación y conferencias con reconocidos invitados regionales, nacionales e internacionales en sintonía con la contingencia y pertinencia de las temáticas artísticas y culturales desde diferentes ámbitos (tendencias, financiamientos, programas, festivales, entre otros).
        </Paragraph>
        <Paragraph align={'justify'} style={{color:''}}>
            - Participar de talleres de formación en modalidad on line.
        </Paragraph>        
        <Paragraph align={'center'} style={{color:''}}>
            <strong>Durante todo el transcurso de AMA (sesiones presenciales y digitales) encontrarás información sobre contactos, calendario de actividades, dossier de participantes y otros, en la página web www.amamaule.cl</strong>
        </Paragraph>
    </Panel>
            </Collapse>
        </Modal>
    </>)

}


export default Questions
