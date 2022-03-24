import React, { useState, useEffect, useContext } from 'react'


import {Col, Row, Typography, Card, Button, Select, message} from 'antd'
import img1 from '../../../assets/img/BANNER_RONDAS_04.jpg'
import img2 from '../../../assets/img/BANNER_RONDAS_05.jpg'
import api from '../../../api/endpoints'
import { AuthContext } from '../../../App'
const {Title, Paragraph} = Typography

const LinksInstancesAV = () => {

    const { state:authContext, dispatch } = useContext(AuthContext)

    const profile = authContext.user.profile

    const [size, setSize] = useState(0)

    const [state, setState] = useState({
        av_pitch: profile.av_programmers,
        av_artists: profile.av_25_artists 
    })

    const postData = async(data) => {
        console.log(data)
        const rq = await api.user.update_profile(authContext.user.id, {
            av_25_artists: state.av_artists,
            av_programmers: state.av_pitch
        }).then((x)=> {
            message.success('Registro actualizado')
            updateProfile()
        })

    }

    const updateProfile = async() => {
        const rq = await api.user.get_profile_center(authContext.user.id).then((x)=> {
            let userobj = {
                ...x.data.user,
                profile: x.data
            }
            dispatch({type:'UPDATE_USER', user:userobj})
        })
    }

    useEffect(()=> {

      setSize(window.innerWidth)

    }, [])


    return(<><Row style={{paddingTop:'0px', margin:'20px'}}>        
        <Row style={{paddingTop:'20px', margin:'20px', marginLeft:'40px'}}>
        <Col span={24} style={{paddingTop:'30px'}}>
            <Title level={3}>RONDAS DE VINCULACIÓN -  ARTES DE LA VISUALIDAD</Title>
        </Col><Col span={20} style={{margin:'25px'}}>
            <Paragraph style={{textAlign:'justify'}}> 
            Las rondas de vinculación son parte de las actividades existentes en lo que se ha denominado Espacio Digital de Artistas de la Visualidad. Este último es un 
            espacio dentro del estacionamiento del Teatro Regional del Maule (Zócalo) que contempla un montaje a manera de galería con exhibición en pantallas de obras visuales. 
            En el mismo espacio a algunos metros, se considera un pequeño escenario dotado de pantalla, para efectuar estas rondas de vinculación con artistas de la visualidad, en un 
            formato más expositivo.            
            </Paragraph>
            <Paragraph style={{textAlign:'justify'}}> 
            En ese sentido el que sube al escenario es el artista previamente inscrito, quien tendrá una presentación de su trabajo y un tiempo aprox de 5 minutos para un primer pitch, y otros 5 minutos para conversar y responder consultas de los programadores que estarán sentados al aire libre, considerando la cantidad de personas que admita el aforo. 
            Si te inscribiste en las rondas de vinculación de artistas de la visualidad para presentar tu propuesta artística, envíanos tu presentación en formato pdf al correo comunica@teatroregional.cl hasta el 22 de marzo.
            </Paragraph>
        </Col></Row>
        </Row>
        <Row style={{marginBottom:'60px', marginTop:'0px'}} justify='center'>
            <Col span={12} lg={12} xs={24} >
                <Card hoverable cover={<img src={img1} />} style={{ width: size > 800 ? '430px': '100%', margin: size > 800 ? '20px':'0px' }} >
                    <Typography.Paragraph style={{fontSize:'18px'}}>¿Te gustaría asistir a la presentación de proyectos de Artistas Visuales?</Typography.Paragraph>
                    <Select onSelect={(x)=> {
                        setState({
                            ...state,
                            av_pitch: [...state.av_pitch, x]
    
                        })
                        
                    }} 
                    onDeselect={(x)=> {
                        var deleteElement = state.av_pitch.filter((item) => item !== x.toString())
                        setState({
                            ...state,
                            av_pitch: deleteElement
    
                        })
                    }}
                    defaultValue={state.av_pitch}
                    mode='multiple' size='large' style={{width:'100%', marginTop:'20px'}} placeholder='Selecciona uno o más días'>

                        <Select.Option value='24 marzo 17.00 a las 19.00 hrs'>24 marzo 17.00 a las 19.00 hrs</Select.Option>
                        <Select.Option value='25 marzo 15.00 a las 18.30 hrs'>25 marzo 15.00 a las 18.30 hrs</Select.Option>
                        <Select.Option value='26 marzo 15.00 a las 18.30 hrs'>26 marzo 15.00 a las 18.30 hrs</Select.Option>
                    </Select> 
                    <Button disabled={!authContext.user.is_verified} size='large' type='primary' onClick={()=> postData(state)} style={styles.btn} >Aceptar</Button>                 
                </Card>                
            </Col>
            <Col span={12} lg={12}  xs={24}>
                 <Card hoverable cover={<img src={img2} />} style={{ width: size > 800 ? '430px':'100%', margin: size > 800 ? '20px':'0px' }}>                    
                        <Typography.Paragraph style={{fontSize:'18px'}}>
                            ¿Quieres presentar tu propuesta artística a los programadores?
                        </Typography.Paragraph>
                        <Select onSelect={(x)=> {
                        setState({
                            ...state,
                            av_artists: [...state.av_artists, x]
    
                        })
                        
                    }} 
                    onDeselect={(x)=> {
                        var deleteElement = state.av_artists.filter((item) => item !== x.toString())
                        setState({
                            ...state,
                            av_artists: deleteElement
    
                        })
                    }}
                    defaultValue={state.av_artists} mode='multiple' size='large' style={{width:'100%', marginTop:'20px'}} placeholder='Selecciona uno o más días'>
                            <Select.Option value='25 marzo 15.00 a las 18.30 hrs'>25 marzo 15.00 a las 18.30 hrs</Select.Option>
                            <Select.Option value='26 marzo 15.00 a las 18.30 hrs'>26 marzo 15.00 a las 18.30 hrs</Select.Option>
                        </Select>  
                    <Button disabled={!authContext.user.is_verified} size='large' type='primary' onClick={()=> postData(state)} style={styles.btn} >Aceptar</Button>                   
                                              
                </Card>
                
            </Col>       
    </Row></>)


}

const styles = {
    btn: {
        backgroundColor:'rgb(176, 93, 185)', 
        borderColor: 'rgb(176, 93, 185)', 
        marginTop:'10px', 
        float: 'right'
    }
}

export default LinksInstancesAV
