import React, {useEffect, useState, useContext} from 'react'
import { Button, Form, Input, 
        Row, Col, notification, Tag,
        Checkbox, Select, Card, Typography } from "antd"
import api from '../../../api/endpoints'
import { AuthContext } from '../../../App'
const {TextArea} = Input
const {Title, Text} = Typography


const UpdateProfileData = ({user, type_user, txt_type_user}) => {

    const [state, setState] = useState(null)
    const { dispatch } = useContext(AuthContext)
    const [ama2021, setAma2021] = useState(false)
    const [profileType, setProfileType] = useState(null)
    const [file, setFile] = useState(null)
    const [needScholarship, setneedScholarship] = useState(false)
    const [subcate, setSubCate] = useState(true)
    
    const [form] = Form.useForm()

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
            setSubCate(true)
            form.resetFields(['options_profile'])
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
            console.log(response)
            setState(response.data)
            setProfileType(response.data.user.type_user)
            let userobj = {
                ...response.data.user,
                profile: response.data
            }
            console.log(userobj)
            dispatch({type:'UPDATE_USER', user:userobj})
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
            form={form}
            name='update_data' 
            onFinish={UpdateData} 
            initialValues={{
                'type_user': state.user.type_user,                 
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
                                            label={'¿Concretaste algún resultado luego de tus rondas de vinculación? Describe si contrataste artistas o fuiste contactado y/o contratado por algún espacio.'} 
                                            rules={[{required:true, message:'Descripcion...'}]}>
                                        <TextArea rows={3} />
                    </Form.Item>}
                    <Form.Item name='type_user' label={'Selecciona la categoría que más identifica tu participación en AMA 2022'} rules={[{required:true, message:'Debes seleccionar al menos una opcion'},]}>
                        <Select placeholder='Selecciona una opcion...' onChange={(x)=>{ 
                            setProfileType(x) 
                            setSubCate(false)
                            form.resetFields(['options_profile'])
                            } }>
                            <Select value='GES'>Gestor/a cultural, programador/a o similar</Select>
                            <Select value='AR'>Artista escénico o representante</Select>
                            <Select value='AV'>Artista de la visualidad</Select>
                            <Select value='PT'>Profesional o trabajador relacionado a las artes escénicas o de la visualidad</Select>
                            <Select value='PS'>Proveedor/a de bienes y servicios asociados</Select>
                            <Select value='OPP'>Organización pública o privada</Select>                            
                        </Select>
                    </Form.Item>
                    {subcate  && <>
                        Subcategorías:
                        <div style={{marginBottom: '10px'}}>
                            {state.options_profile.map((x)=> <Tag color={'pink'} value={x} selected>{x}</Tag>)}
                        </div>
                    </>}
                   {profileType &&   
                    <Form.Item name='options_profile' label={`Selecciona la o las alternativas que representen a tu perfil`} 
                        rules={[{required:true, message:'Debes seleccionar al menos una opcion'},]}>                            
                            <Select mode='multiple'  placeholder='Selecciona una opcion...'>                                
                                {profileType === 'GES' &&  
                                    <>
                                        <Select.Option value='Centro cultural autogestionado'>
                                            Centro cultural autogestionado
                                        </Select.Option>
                                        <Select.Option value='Centro cultural dependiente de una organización público y/o privada'>
                                            Centro cultural dependiente de una organización público y/o privada
                                        </Select.Option>
                                        <Select.Option value='Espacio expositivo (museos, galerías, etc)'>
                                            Espacio expositivo (museos, galerías, etc)
                                        </Select.Option>
                                        <Select.Option value='Sala de conciertos'>
                                            Sala de conciertos
                                        </Select.Option>
                                        <Select.Option value='Salón de eventos'>
                                            Salón de eventos
                                        </Select.Option>
                                        <Select.Option value='Festival'>
                                            Festival
                                        </Select.Option>
                                        <Select.Option value='Otra'>
                                            Otra...
                                        </Select.Option>
                                    </>}
                                {profileType === 'AR' && 
                                    <>
                                        <Select.Option value='Teatro'>
                                            Teatro
                                        </Select.Option>
                                        <Select.Option value='Danza'>
                                            Danza
                                        </Select.Option>
                                        <Select.Option value='Circo'>
                                            Circo
                                        </Select.Option>
                                        <Select.Option value='Narración oral oral'>
                                            Narración oral
                                        </Select.Option>
                                        <Select.Option value='Canto'>
                                            Canto
                                        </Select.Option>
                                        <Select.Option value='Musica orquestada'>
                                            Musica orquestada
                                        </Select.Option>
                                        <Select.Option value='Musica popular'>
                                            Musica popular
                                        </Select.Option>
                                        <Select.Option value='Folclore'>
                                            Folclore
                                        </Select.Option>
                                        <Select.Option value='Opera'>
                                            Opera
                                        </Select.Option>
                                        <Select.Option value='Títeres o marionetas'>
                                            Títeres o marionetas
                                        </Select.Option>
                                        <Select.Option value='Performance'>
                                            Performance
                                        </Select.Option>
                                        <Select.Option value='Música docta'>
                                            Música docta
                                        </Select.Option>
                                        <Select.Option value='Otra'>
                                            Otra...
                                        </Select.Option>
                                    </>
                                }
                                {profileType === 'AV' && 
                                    <>
                                        <Select.Option value='Pintura'>
                                            Pintura
                                        </Select.Option>
                                        <Select.Option value='Escultura'>
                                            Escultura
                                        </Select.Option>
                                        <Select.Option value='Muralismo'>
                                            Muralismo
                                        </Select.Option>
                                        <Select.Option value='Grabado'>
                                            Grabado
                                        </Select.Option>
                                        <Select.Option value='Dibujo'>
                                            Dibujo
                                        </Select.Option>
                                        <Select.Option value='Instalación'>
                                            Instalación
                                        </Select.Option>
                                        <Select.Option value='Performance'>
                                            Performance
                                        </Select.Option>
                                        <Select.Option value='Vitrales'>
                                            Vitrales
                                        </Select.Option>
                                        <Select.Option value='Técnicas integradas'>
                                            Técnicas integradas
                                        </Select.Option>
                                        <Select.Option value='Fotografía'>
                                            Fotografía
                                        </Select.Option>                                       
                                        <Select.Option value='Otra'>
                                            Otra...
                                        </Select.Option>
                                    </>
                                }
                                {profileType === 'PT' && 
                                    <>
                                        <Select.Option value='Diseñador/a gráfico'>
                                            Diseñador/a gráfico
                                        </Select.Option>
                                        <Select.Option value='Diseñador/a escénico'>
                                            Diseñador/a escénico
                                        </Select.Option>
                                        <Select.Option value='Sonidista'>
                                            Sonidista
                                        </Select.Option>
                                        <Select.Option value='Iluminador/a'>
                                            Iluminador/a
                                        </Select.Option>
                                        <Select.Option value='Maquillador/a'>
                                            Maquillador/a
                                        </Select.Option>
                                        <Select.Option value='Arquitecto'>
                                            Arquitecto/a
                                        </Select.Option>
                                        <Select.Option value='Curador/a'>
                                            Curador/a
                                        </Select.Option>
                                        <Select.Option value='Museógrafo/a'>
                                            Museógrafo/a
                                        </Select.Option>
                                        <Select.Option value='Museólogo/a'>
                                            Museólogo/a
                                        </Select.Option>
                                        <Select.Option value='Montajista'>
                                            Montajista
                                        </Select.Option>                                       
                                        <Select.Option value='Docente o educador artístico'>
                                            Docente o educador artístico
                                        </Select.Option>
                                        <Select.Option value='Coleccionista'>
                                            Coleccionista
                                        </Select.Option>
                                        <Select.Option value='Fotógrafo/a'>
                                            Fotógrafo/a
                                        </Select.Option>
                                        <Select.Option value='Comunicador/a'>
                                            Comunicador/a
                                        </Select.Option>
                                        <Select.Option value='Otra'>
                                            Otra...
                                        </Select.Option>
                                    </>
                                }
                                {profileType === 'PS' && 
                                    <>
                                        <Select.Option value='Proveedor servicios de transporte'>
                                            Proveedor servicios de transporte
                                        </Select.Option>
                                        <Select.Option value='Proveedor servicios técnicos (iluminación, sonido, etc)'>
                                            Proveedor servicios técnicos (iluminación, sonido, etc)
                                        </Select.Option>
                                        <Select.Option value='Proveedor de servicios de catering'>
                                            Proveedor de servicios de catering
                                        </Select.Option>
                                        <Select.Option value='Productora de eventos'>
                                            Productora de eventos
                                        </Select.Option>
                                        <Select.Option value='otra'>
                                            Otra...
                                        </Select.Option>
                                </> }
                                {profileType === 'OPP' && 
                                    <>
                                        <Select.Option value='Organismo estatal (corfo, prochile, dirac, otras)'>
                                            Organismo estatal (corfo, prochile, dirac, otras)
                                        </Select.Option>
                                        <Select.Option value='Organismos privados (corporaciones, fundaciones, empresas, otros)'>
                                            Organismos privados (corporaciones, fundaciones, empresas, otros)
                                        </Select.Option>
                                        <Select.Option value='Establecimientos educacionales (escuelas, institutos, universidades, otros)'>
                                            Establecimientos educacionales (escuelas, institutos, universidades, otros)
                                        </Select.Option>
                                        <Select.Option value='Organizaciones con fines sociales (ongs, juntas de vecinos, organizaciones sociales, otras)                                            '>
                                            Organizaciones con fines sociales (ongs, juntas de vecinos, organizaciones sociales, otras)                                            
                                        </Select.Option>
                                        <Select.Option value='Museos, galerías públicas o privadas, bibliotecas'>
                                            Museos, galerías públicas o privadas, bibliotecas
                                        </Select.Option>
                                        <Select.Option value='otra'>
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
                                        <Select.Option value='Mi espacio tiene programación habitual o esporádica de Artes Escénicas'>
                                            Mi espacio tiene programación habitual o esporádica de Artes Escénicas
                                        </Select.Option>
                                        <Select.Option value='Mi espacio tiene programación habitual o esporádica de Artes Visuales'>
                                            Mi espacio tiene programación habitual o esporádica de Artes Visuales
                                        </Select.Option>
                                        <Select.Option value='Mi espacio tiene salas o lugares para ensayar'>
                                            Mi espacio tiene salas o lugares para ensayar
                                        </Select.Option>
                                        <Select.Option value='Mi espacio tiene infraestructura especialmente dedicada a las artes visuales                                            '>
                                            Mi espacio tiene infraestructura especialmente dedicada a las artes visuales                                            
                                        </Select.Option>
                                        <Select.Option value='Mi espacio posee infraestructura y equipamiento para artes escénicas'>
                                            Mi espacio posee infraestructura y equipamiento para artes escénicas
                                        </Select.Option>
                                        <Select.Option value='Mi espacio cuenta con financiamiento público'>
                                            Mi espacio cuenta con financiamiento público
                                        </Select.Option>
                                    </Select>
                                </Form.Item>}
                                <Form.Item name='how_do_you_participate' label={'¿Cómo participarás en Ama 2022?'} rules={[{required:true, message:'Describe seleccionar una opcion...'}]}>
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