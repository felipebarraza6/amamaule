import React, { useState, useContext } from 'react'


import {Col, Row, Typography, Card, Button, message} from 'antd'

import img1 from '../../../assets/img/BANNER_RONDAS_01.jpg'
import img2 from '../../../assets/img/BANNER_RONDAS_02.jpg'
import img3 from '../../../assets/img/BANNER_RONDAS_03.jpg'
import api from '../../../api/endpoints'
import { AuthContext } from '../../../App'

const {Title, Paragraph} = Typography

const LinksInstancesAE = () => {

    const { state:authContext, dispatch } = useContext(AuthContext)

    const profile = authContext.user.profile

    const [state, setState] = useState({
        ae_24_inscribed: profile.ae_24_inscribed,
        ae_25_inscribed: profile.ae_25_inscribed,
        ae_26_inscribed: profile.ae_26_inscribed
    })

    const postData = async(data) => {
        console.log(data)
        const rq = await api.user.update_profile(authContext.user.id, {
            ae_24_inscribed: state.ae_24_inscribed,
            ae_25_inscribed: state.ae_25_inscribed,
            ae_26_inscribed: state.ae_26_inscribed 
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

    return(<><Row style={{paddingTop:'20px', margin:'20px', marginLeft:'40px'}}>
        <Col span={24} style={{paddingTop:'30px'}}>
            <Title level={3}>RONDAS DE VINCULACIÓN - ARTES ESCÉNICAS</Title>
        </Col><Col span={20} style={{margin:'25px'}}>
            <Paragraph style={{textAlign:'justify'}}> 
                Las Rondas de Vinculación en formato presencial consisten en reuniones previamente agendadas entre un grupo de programadores u 
                organizaciones que tengan programas de apoyo y/o colaboración con el sector artístico escénico con artistas escénicos y visuales. 
                Principalmente programadores y artistas son quienes participarán de estas rondas. 
            </Paragraph>
            <Paragraph style={{textAlign:'justify'}}> 
                Dichas rondas se realizarán en el foyer del Teatro Regional del Maule, por lo que debes cumplir con el protocolo de acceso, 
                es decir, portar tu pase de movilidad habilitado, uso de alcohol gel, mascarilla obligatoria y distancia física mínima.
            </Paragraph>
        </Col></Row>
       
        
        
        <Row style={{marginBottom:'60px', marginTop:'20px'}} justify='center'>
            <Col  lg={8} xs={24} >
                <Card hoverable cover={<img src={img1} />} style={{ width: 400, margin:'20px' }} >
                    {profile.ae_24_inscribed.length > 0 ? 
                    <Button size='large' type='primary' style={styles.btn} onClick={async()=>{
                        const rq = await api.user.update_profile(authContext.user.id, {
                            ae_24_inscribed: [],                            
                        }).then((x)=> {
                            message.error('Participación cancelada')
                            updateProfile()
                        })
                    }} >Cancelar participación</Button>:
                    <Button disabled={!authContext.user.is_verified} size='large' type='primary' style={styles.btn} onClick={async()=>{
                        const rq = await api.user.update_profile(authContext.user.id, {
                            ae_24_inscribed: ['si'],                            
                        }).then((x)=> {
                            message.success('Participación confirmada')
                            updateProfile()
                        })
                    }} >Participar</Button>}     
                    
                </Card>                
            </Col>
            <Col  lg={8}  xs={24}>
                 <Card hoverable cover={<img src={img2} />} style={{ width: 400, margin:'20px' }}>
                 {profile.ae_25_inscribed.length > 0 ? 
                    <Button  size='large' type='primary' style={styles.btn} onClick={async()=>{
                        const rq = await api.user.update_profile(authContext.user.id, {
                            ae_25_inscribed: [],                            
                        }).then((x)=> {
                            message.error('Participación cancelada')
                            updateProfile()
                        })
                    }} >Cancelar Participación</Button>:
                    <Button disabled={!authContext.user.is_verified} size='large' type='primary' style={styles.btn} onClick={async()=>{
                        const rq = await api.user.update_profile(authContext.user.id, {
                            ae_25_inscribed: ['si'],                            
                        }).then((x)=> {
                            message.success('Participación confirmada')
                            updateProfile()
                        })
                    }} >Participar</Button>}                                                 
                                              
                </Card>
                
            </Col>           
            <Col  lg={8}  xs={24}>
                 <Card hoverable cover={<img src={img3} />} style={{ width: 400, margin:'20px' }}>
                                                    
                         
                 {profile.ae_26_inscribed.length > 0 ? 
                    <Button size='large' type='primary' style={styles.btn} onClick={async()=>{
                        const rq = await api.user.update_profile(authContext.user.id, {
                            ae_26_inscribed: [],                            
                        }).then((x)=> {
                            message.success('Participación cancelada')
                            updateProfile()
                        })
                    }} >Cancelar Participación</Button>:
                    <Button disabled={!authContext.user.is_verified} size='large' type='primary' style={styles.btn} onClick={async()=>{
                        const rq = await api.user.update_profile(authContext.user.id, {
                            ae_26_inscribed: ['si'],                            
                        }).then((x)=> {
                            message.error('Participación confirmada')
                            updateProfile()
                        })
                    }} >Participar</Button>}                      
                                              
                </Card>
                
            </Col>
    </Row>
   
    </>)


}

const styles = {
    btn: {
        backgroundColor:'rgb(176, 93, 185)', 
        borderColor: 'rgb(176, 93, 185)', 
        marginTop:'10px',      
        width:'100%'   
    }
}

export default LinksInstancesAE