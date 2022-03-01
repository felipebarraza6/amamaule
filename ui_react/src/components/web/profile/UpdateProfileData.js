import React, {useEffect, useState} from 'react'
import { Button, Form, Input, 
        Row, Col, notification, 
        Checkbox, Select, Card, Typography } from "antd"
import api from '../../../api/endpoints'
const {TextArea} = Input
const {Title, Text} = Typography


const UpdateProfileData = ({user, type_user, txt_type_user}) => {

    const [state, setState] = useState(null)
    const [ama2021, setAma2021] = useState(false)
    const [profileType, setProfileType] = useState(null)
    const [file, setFile] = useState(null)
    const [needScholarship, setneedScholarship] = useState(false)
    const [valueNeed, setValueNeed] = useState(null)
    
    

    async function UpdateData (values){
        
        
        values = {
            ...values,
            participated_in_last_edition: ama2021,                        
        }

        if(!needScholarship){
            values = {
                ...values,
                need_cholarship: null
            }
        }

        
        const rq = await api.user.update_user(user.username, {'type_user': values.type_user, 'is_verified': 'true'}).then((res)=> {            
            if(res.data.is_verified){
                notification.success({message:'Perfil verificado'})  
            }           
        })
        const request = await api.user.update_profile(user.id, values).then((response)=> {            
            notification.success({message:'Perfil actualizado'})
            if(file){ 
                const rq = api.user.UPLOAD_FILE_OR_IMG(`users/profile/${user.id}/`, 'dossier_file', file).then((res)=> {
                    notification.success({message: 'Dossier actualizado!'})    
                    window.location.reload()
                })
                window.location.reload()
            }
        }).catch((error)=> {
            console.log(error)
        })

        

        getUserData(user.id)

    }

    console.log(state)

    async function getUserData(user) {
        const request = await api.user.get_profile_center(user).then((response)=> {
            setState(response.data)
            setProfileType(response.data.user.type_user)
            setAma2021(response.data.participated_in_last_edition)
            if(response.data.need_cholarship === '1' || response.data.need_cholarship==='2'){
                setneedScholarship(true)
            }else{
                setneedScholarship(false) 
            }
        }).catch((error)=> {
            console.log(error)
        })        
        return request
    }

    useEffect(()=> {
        getUserData(user.id)      
        
    },[])

    return(<>{state && <Card>
        <Form 
            layout={'vertical'} 
            style={styles.form} 
            name='update_data' 
            onFinish={UpdateData} 
            initialValues={{
                'type_user': state.user.type_user, 
                'options_profile': state.options_profile,
                'preference_ges': state.preference_ges,
                'how_do_you_participate': state.how_do_you_participate,                
                'participated_in_last_edition': state.participated_in_last_edition,
                'review': state.review,
                'what_looking': state.what_looking,
                'website': state.website,                
                'you_made_rounds': state.you_made_rounds,
                'need_cholarsh': state.need_cholarsh
            }}>
                    
            <Row justify={'center'} >
                <Col lg={24} xs={24}>
                    <Form.Item name='participated_in_last_edition' valuePropName="checked" label={'¿Participaste en Ama 2021?'} >
                                    <Checkbox checked={ama2021} onChange={(x)=>{
                                        if(x.target.checked===true){
                                            setAma2021(true)
                                        }else{setAma2021(false)}
                                    }}/> SI
                                    <Checkbox checked={!ama2021} onChange={(x)=>{
                                        if(x.target.checked===false){
                                            setAma2021(false)
                                        }else{setAma2021(false)}
                                    }}/> NO
                                </Form.Item>
                                {ama2021 && 
                                    <Form.Item name='you_made_rounds' 
                                            label={'¿Concretaste algún resultado luego de tus rondas de vinculación? Describe si contrataste artistas o fuiste contactado y contratado por algún espacio.'} 
                                            rules={[{required:true, message:'Descripcion...'}]}>
                                        <TextArea rows={3} />
                    </Form.Item>}
                    <Form.Item name='type_user' label={'Selecciona la categoría que más identifica tu participación en AMA 2022'} rules={[{required:true, message:'Debes seleccionar al menos una opcion'},]}>
                        <Select placeholder='Selecciona una opcion...' onChange={(x)=>setProfileType(x)}>
                            <Select value='GES'>Gestor/a cultural, programador/a o similar</Select>
                            <Select value='AR'>Artista escénico o representante</Select>
                            <Select value='AV'>Artista de la visualidad</Select>
                            <Select value='PT'>Profesional o trabajador relacionado a las artes escénicas o de la visualidad</Select>
                            <Select value='PS'>Proveedor/a de bienes y servicios asociados</Select>
                            <Select value='OPP'>Organización pública o privada</Select>                            
                        </Select>
                    </Form.Item>
                   {profileType &&   
                    <Form.Item name='options_profile' label={`Selecciona la o las alternativas que representen a tu perfil`} 
                        rules={[{required:true, message:'Debes seleccionar al menos una opcion'},]}>
                            <Select mode='multiple' placeholder='Selecciona una opcion...'>
                                {profileType === 'GES' &&  
                                    <>
                                        <Select.Option value='centro cultural autogestionado'>
                                            Centro cultural autogestionado
                                        </Select.Option>
                                        <Select.Option value='conocer artistas de la visualidad para programar o hacer redes'>
                                            Conocer artistas de la visualidad para programar o hacer redes
                                        </Select.Option>
                                        <Select.Option value='Espacio expositivo (museos, galerías, etc)'>
                                            espacio expositivo (museos, galerías, etc)
                                        </Select.Option>
                                        <Select.Option value='sala de conciertos'>
                                            Sala de conciertos
                                        </Select.Option>
                                        <Select.Option value='salón de eventos'>
                                            Salón de eventos
                                        </Select.Option>
                                        <Select.Option value='festival'>
                                            Festival
                                        </Select.Option>
                                        <Select.Option value='Otra'>
                                            Otra...
                                        </Select.Option>
                                    </>}
                                {profileType === 'AR' && 
                                    <>
                                        <Select.Option value='teatro'>
                                            Teatro
                                        </Select.Option>
                                        <Select.Option value='danza'>
                                            Danza
                                        </Select.Option>
                                        <Select.Option value='circo'>
                                            Circo
                                        </Select.Option>
                                        <Select.Option value='narracion_oral'>
                                            Narración oral
                                        </Select.Option>
                                        <Select.Option value='canto'>
                                            Canto
                                        </Select.Option>
                                        <Select.Option value='musica_orquestada'>
                                            Musica orquestada
                                        </Select.Option>
                                        <Select.Option value='musica_popular'>
                                            Musica popular
                                        </Select.Option>
                                        <Select.Option value='folclore'>
                                            Folclore
                                        </Select.Option>
                                        <Select.Option value='opera'>
                                            Opera
                                        </Select.Option>
                                        <Select.Option value='titeres_o_marionetas'>
                                            Títeres o marionetas
                                        </Select.Option>
                                        <Select.Option value='performance'>
                                            Performance
                                        </Select.Option>
                                        <Select.Option value='musica_docta'>
                                            Música docta
                                        </Select.Option>
                                        <Select.Option value='otra...'>
                                            Otra...
                                        </Select.Option>
                                    </>
                                }
                                {profileType === 'AV' && 
                                    <>
                                        <Select.Option value='pintura'>
                                            Pintura
                                        </Select.Option>
                                        <Select.Option value='escultura'>
                                            Escultura
                                        </Select.Option>
                                        <Select.Option value='muralismo'>
                                            Muralismo
                                        </Select.Option>
                                        <Select.Option value='grabado'>
                                            Grabado
                                        </Select.Option>
                                        <Select.Option value='dibujo'>
                                            Dibujo
                                        </Select.Option>
                                        <Select.Option value='instalacion'>
                                            Instalación
                                        </Select.Option>
                                        <Select.Option value='performance'>
                                            Performance
                                        </Select.Option>
                                        <Select.Option value='vitrales'>
                                            Vitrales
                                        </Select.Option>
                                        <Select.Option value='tecnicas_integradas'>
                                            Técnicas integradas
                                        </Select.Option>
                                        <Select.Option value='fotografía'>
                                            Fotografía
                                        </Select.Option>                                       
                                        <Select.Option value='otra...'>
                                            Otra...
                                        </Select.Option>
                                    </>
                                }
                                {profileType === 'PT' && 
                                    <>
                                        <Select.Option value='disenador_a_gráfico'>
                                            Diseñador/a gráfico
                                        </Select.Option>
                                        <Select.Option value='disenador_a_escénico'>
                                            Diseñador/a escénico
                                        </Select.Option>
                                        <Select.Option value='sonidista'>
                                            Sonidista
                                        </Select.Option>
                                        <Select.Option value='iluminador_a'>
                                            Iluminador/a
                                        </Select.Option>
                                        <Select.Option value='maquillador_a'>
                                            Maquillador/a
                                        </Select.Option>
                                        <Select.Option value='arquitecto_a'>
                                            Arquitecto/a
                                        </Select.Option>
                                        <Select.Option value='curador_a'>
                                            Curador/a
                                        </Select.Option>
                                        <Select.Option value='museografo_a'>
                                            Museógrafo/a
                                        </Select.Option>
                                        <Select.Option value='museologo_a'>
                                            Museólogo/a
                                        </Select.Option>
                                        <Select.Option value='montajista'>
                                            Montajista
                                        </Select.Option>                                       
                                        <Select.Option value='docente_o_educador_artistico'>
                                            Docente o educador artístico
                                        </Select.Option>
                                        <Select.Option value='coleccionista'>
                                            Coleccionista
                                        </Select.Option>
                                        <Select.Option value='fotografo_a'>
                                            Fotógrafo/a
                                        </Select.Option>
                                        <Select.Option value='comunicador_a'>
                                            Comunicador/a
                                        </Select.Option>
                                        <Select.Option value='otra...'>
                                            Otra...
                                        </Select.Option>
                                    </>
                                }
                                {profileType === 'PS' && 
                                    <>
                                        <Select.Option value='proveedor_servicios_de_transporte'>
                                            Proveedor servicios de transporte
                                        </Select.Option>
                                        <Select.Option value='proveedor_servicios_técnicos'>
                                            Proveedor servicios técnicos (iluminación, sonido, etc)
                                        </Select.Option>
                                        <Select.Option value='proveedor_de_servicios_de_catering'>
                                            Proveedor de servicios de catering
                                        </Select.Option>
                                        <Select.Option value='productora_de_eventos'>
                                            Productora de eventos
                                        </Select.Option>
                                        <Select.Option value='otra...'>
                                            Otra...
                                        </Select.Option>
                                </> }
                                {profileType === 'OPP' && 
                                    <>
                                        <Select.Option value='organismo_estatal'>
                                            Organismo estatal (corfo, prochile, dirac, otras)
                                        </Select.Option>
                                        <Select.Option value='organismos_privados'>
                                            Organismos privados (corporaciones, fundaciones, empresas, otros)
                                        </Select.Option>
                                        <Select.Option value='establecimientos_educacionales'>
                                            Establecimientos educacionales (escuelas, institutos, universidades, otros)
                                        </Select.Option>
                                        <Select.Option value='organizaciones_con_fines_sociales'>
                                            Organizaciones con fines sociales (ongs, juntas de vecinos, organizaciones sociales, otras)                                            
                                        </Select.Option>
                                        <Select.Option value='museos_galerías_públicas_o_privadas_bibliotecas'>
                                            Museos, galerías públicas o privadas, bibliotecas
                                        </Select.Option>
                                        <Select.Option value='otra...'>
                                            Otra...
                                        </Select.Option>
                                </> }
                        </Select>
                    </Form.Item>}
                    <Form.Item name='review' label={'Reseña de tu perfil. Si eres persona natural, empresa, artista, programador/a, organización, elenco, etc; cuéntanos cómo te llamas, a qué te dedicas y en qué territorio trabajas.'} rules={[{required:true, message:'Debes ingresar tu reseña'},
                                {max:800, message:'Has superado los 800 caracteres'}]}>
                                    <TextArea rows={4} />
                    </Form.Item>
                    <Form.Item name='what_looking' label={'¿Qué buscas en AMA 2022? Puedes marcar todas las alternativas que te representen.'} rules={[{required:true, message:'Debes seleccionar al menos una opcion'},]}>
                                    <Select mode='multiple'>
                                        <Select.Option value='Conocer artistas escénicos para programar o hacer redes'>
                                        Conocer artistas escénicos para programar o hacer redes
                                        </Select.Option>
                                        <Select.Option value='Conocer artistas de la visualidad para programar o hacer redes'>
                                        Conocer artistas de la visualidad para programar o hacer redes
                                        </Select.Option>
                                        <Select.Option value='Dar a conocer mi trabajo como artista escénico o de la visualidad'>
                                        Dar a conocer mi trabajo como artista escénico o de la visualidad
                                        </Select.Option>
                                        <Select.Option value='Conocer alternativas de financiamiento'>
                                        Conocer alternativas de financiamiento
                                        </Select.Option>
                                        <Select.Option value='Conocer otros programadores/as-gestores/as para generar proyectos conjuntos'>
                                        Conocer otros programadores/as-gestores/as para generar proyectos conjuntos
                                        </Select.Option>
                                        <Select.Option value='Participar de conferencias, mesas temáticas o talleres que fortalezcan mi trabajo'>
                                        Participar de conferencias, mesas temáticas o talleres que fortalezcan mi trabajo
                                        </Select.Option>                                        
                                    </Select>
                    </Form.Item>

                    {profileType === 'GES' && <Form.Item name='preference_ges' label={'Si eres programador/a o gestor/a selecciona las alternativas que te representen (si corresponde)'} rules={[{required:true, message:'Selecciona al menos una opcion'}]}>
                                    <Select mode='multiple'>
                                        <Select.Option value='mi_espacio_tiene_programacion_habitual_o_esporadica_de_artes_escenicas'>
                                            Mi espacio tiene programación habitual o esporádica de Artes Escénicas
                                        </Select.Option>
                                        <Select.Option value='mi_espacio_tiene_programacion_habitual_o_esporadica_de_artes_visuales'>
                                            Mi espacio tiene programación habitual o esporádica de Artes Visuales
                                        </Select.Option>
                                        <Select.Option value='mi_espacio_tiene_salas_o_lugares_para_ensayar'>
                                            Mi espacio tiene salas o lugares para ensayar
                                        </Select.Option>
                                        <Select.Option value='mi_espacio_tiene_infraestructura_especialmente_dedicada_a_las_artes_visuales'>
                                            Mi espacio tiene infraestructura especialmente dedicada a las artes visuales                                            
                                        </Select.Option>
                                        <Select.Option value='mi_espacio_posee_infraestructura_y_equipamiento_para_artes_escenicas'>
                                            Mi espacio posee infraestructura y equipamiento para artes escénicas
                                        </Select.Option>
                                        <Select.Option value='mi_espacio_cuenta_con_financiamiento_publico'>
                                            Mi espacio cuenta con financiamiento público
                                        </Select.Option>
                                    </Select>
                                </Form.Item>}
                                <Form.Item name='how_do_you_participate' label={'¿Como participaras en Ama 2022?'} rules={[{required:true, message:'Describe seleccionar una opcion...'}]}>
                                    <Select placeholder='Selecciona una opcion...'>
                                        <Select.Option value='digital'>Digital</Select.Option>
                                        <Select.Option value='presencial'>Presencial</Select.Option>
                                        <Select.Option value='ambas'>Ambas</Select.Option>
                                    </Select>
                                </Form.Item>
                                {profileType === 'AR'  && <>
                                <div>
                                <Text >¿Necesitas beca para alojamiento y alimentación? (*Cupos limitados. Se priorizarán comunas alejadas de Talca)</Text>
                                </div>
                                <Checkbox style={{marginTop:'10px', marginBottom:'10px'}} checked={needScholarship} onChange={(x)=>{
                                        if(x.target.checked===true){
                                            setneedScholarship(true)
                                        }else{setneedScholarship(false)}
                                    }}/> SI
                                    <Checkbox style={{marginTop:'10px', marginBottom:'10px'}} checked={!needScholarship} onChange={(x)=>{
                                        if(x.target.checked===false){
                                            setneedScholarship(false)
                                        }else{setneedScholarship(false)}
                                    }}/> NO
                                    
                                    {needScholarship ? <Form.Item name='need_cholarship' rules={[{required:true, message:'Selecciona al menos una opcion'}]}>
                                    <Select style={{marginTop:'10px'}} defaultValue={state.need_cholarship} placeholder='¿Para cuantos días?'>
                                        <Select.Option value='1'>
                                            1 Día
                                        </Select.Option>
                                        <Select.Option value='2'>
                                            2 Días
                                        </Select.Option>                                        
                                    </Select></Form.Item>:''}
                                    </>}
                                {profileType === 'AV'  && <>
                                <Text level={3}>¿Necesitas beca para alojamiento y alimentación? (*Cupos limitados. Se priorizarán comunas alejadas de Talca)</Text>
                                <Checkbox style={{marginTop:'10px', marginBottom:'10px'}} checked={needScholarship} onChange={(x)=>{
                                        if(x.target.checked===true){
                                            setneedScholarship(true)
                                        }else{setneedScholarship(false)}
                                    }}/> SI
                                    <Checkbox style={{marginTop:'10px', marginBottom:'10px'}} checked={!needScholarship} onChange={(x)=>{
                                        if(x.target.checked===false){
                                            setneedScholarship(false)
                                        }else{setneedScholarship(false)}
                                    }}/> NO
                                    {needScholarship ? <Form.Item name='need_cholarship' label={''} rules={[{required:true, message:'Selecciona al menos una opcion'}]}>
                                    <Select style={{marginTop:'10px'}} placeholder='¿Para cuantos días?'>
                                        <Select.Option value='1'>
                                            1 Dia
                                        </Select.Option>
                                        <Select.Option value='1'>
                                            2 Dias
                                        </Select.Option>                                        
                                    </Select></Form.Item>:''}
                                </>}                                
                                <Form.Item name='website' label={'Página web o perfil en redes sociales'} >
                                    <Input />
                                </Form.Item>                                
                                <Form.Item label='Adjunta tu dossier' onChange={(evt)=> {
                                    setFile(evt.target.files[0])
                                }}>
                                    {state.dossier_file && <Button onClick={()=> {
                                        window.open(state.dossier_file)
                                    }} type='primary' style={{marginBottom:'10px', backgroundColor:'rgb(24, 197, 204)'}}>Ver Dossier</Button>}
                                    <input type='file' />
                                </Form.Item>
                                <Form.Item>
                                    <Button htmlType='submit' style={{backgroundColor:'rgb(206, 61, 75)', borderColor:'rgb(206, 61, 75)'}} type={'primary'}>ACTUALIZAR PERFIL </Button>
                                </Form.Item>
                                
                </Col>
                </Row>
        </Form></Card>}</>
    )
}

const styles = {
    form: {
        paddingRight:'100px', paddingLeft:'100px', paddingTop:'30px'
    }
}


export default UpdateProfileData