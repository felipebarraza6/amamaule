import React, {useEffect, useState, useContext} from 'react'
import api_transmissions from '../../../../api/transmissions/endpoints'
import {Card, Row, Col, Tag, Badge, Button, Menu, Typography, message} from 'antd'
import { LockOutlined, NotificationOutlined, DesktopOutlined, PlaySquareOutlined } from '@ant-design/icons'
import ModalYtVideo from '../single/ModalYtVideo'
import { AuthContext} from "../../../../App";
import api from "../../../../api/endpoints";
//conferencias
import img1 from "../../../../assets/img/CHARLAS/CHARLA-DELIGHT-LAB.jpg"
import img2 from "../../../../assets/img/CHARLAS/CHARLA-FINANCIAMIENTOS-VINCULANTES.jpg"
import img3 from "../../../../assets/img/CHARLAS/CHARLA-FOMENTO-A-UNA-POLITICA-DE-CREACIÓN.jpg"
import img4  from "../../../../assets/img/CONFERENCIA INAUGURAL/CARTON-INAUGURACIPN.jpg"
//obras
import img5 from "../../../../assets/img/ESPECTÁCULOS/PRESENCIAL/CUERVOS-DE-PANTANO_-CUADRADO (1).jpg"
import img6 from "../../../../assets/img/ESPECTÁCULOS/PRESENCIAL/KPUCHAPO_-CUADRADO.jpg"
import img7 from "../../../../assets/img/ESPECTÁCULOS/PRESENCIAL/LOPEZ_CUADRADO.jpg"
import img8 from "../../../../assets/img/ESPECTÁCULOS/PRESENCIAL/RAM_-CUADRADO.jpg"
import img9 from "../../../../assets/img/ESPECTÁCULOS/PRESENCIAL/YORKA_CUADRADO.jpg"
// mesas
import img10 from "../../../../assets/img/EVENTO SATÉLITE/E_SATELITE_LANZAMIENTO.jpg"
import img11 from "../../../../assets/img/MESAS TEMÁTICAS/PRESENCIAL/MESA-TEMATICA_-LUIS-ARTURO-G.jpg"
import img12 from "../../../../assets/img/MESAS TEMÁTICAS/PRESENCIAL/MESA-TEMATICA_-CLAUDIA-ARAYA_-CUADRADO.jpg"
import img13 from "../../../../assets/img/MESAS TEMÁTICAS/PRESENCIAL/MESA-TEMATICA_-ANDRÉS-MARAGAÑO_-CUADRADO.jpg"

import img14 from "../../../../assets/img/MESAS TEMÁTICAS/VIRTUAL/MESA-TEMATICA_-WUATANAZ_-CUADRADO.jpg"
import img15 from "../../../../assets/img/MESAS TEMÁTICAS/VIRTUAL/MESA-TEMATICA_-LORETO-PEREZ_-CUADRADO.jpg"
import img16 from "../../../../assets/img/MESAS TEMÁTICAS/VIRTUAL/MESA-TEMATICA_-PAOLA-CONTARDO_-CUADRADO.jpg"
import img17 from "../../../../assets/img/MESAS TEMÁTICAS/VIRTUAL/MESA-TEMATICA_-LORETO-MUÑOZ_-CUADRADO.jpg"
import img18 from "../../../../assets/img/MESAS TEMÁTICAS/VIRTUAL/MESA-TEMATICA_-MARCELA-VALDÉS_-CUADRADO.jpg"
import img19 from "../../../../assets/img/MESAS TEMÁTICAS/VIRTUAL/MESA-TEMATICA_-TANIA-GUTIÉRREZ_-CUADRADO.jpg"
import img20 from "../../../../assets/img/MESAS TEMÁTICAS/VIRTUAL/MESA-TEMATICA_-FERNANDO-AMENGUAL_-CUADRADO.jpg"

//showcases
import img21 from "../../../../assets/img/SHOWCASES/SHOWCASES_-ADRIKCALEIDOSCOPIO.jpg"
import img22 from "../../../../assets/img/SHOWCASES/SHOWCASES_-IDEABLANCO.jpg"
import img23 from "../../../../assets/img/SHOWCASES/SHOWCASES_-INVIERNO_NUCLEAR.jpg"
import img24 from "../../../../assets/img/SHOWCASES/SHOWCASES_-MANDIGOMEZ.jpg"
import img25 from "../../../../assets/img/SHOWCASES/SHOWCASES_-ODIASLASJAULAS.jpg"
import img26 from "../../../../assets/img/SHOWCASES/SHOWCASES_-TOMINOMEAMA.jpg"
import img27 from "../../../../assets/img/SHOWCASES/SHOWCASES_-WINTERSOFBLUE.jpg"

//talleres
import img28 from "../../../../assets/img/TALLERES/PRESENCIALES/TALLER-ADTRES_-CUADRADO.jpg"
import img29 from "../../../../assets/img/TALLERES/PRESENCIALES/TALLER-JOSÉ-VIDAL_-01_CUADRADO.jpg"
import img30 from "../../../../assets/img/TALLERES/PRESENCIALES/TALLER-JOSÉ-VIDAL_-02_CUADRADO.jpg"
import img31 from "../../../../assets/img/TALLERES/PRESENCIALES/TALLER-NATALIA-ROCA_-CUADRADO.jpg"
import img32 from "../../../../assets/img/TALLERES/PRESENCIALES/TALLER-NATALIA-SUAZO_-NATISÚ_-CUADRADO.jpg"
import img33 from "../../../../assets/img/TALLERES/VIRTUALES/TALLER-FERNARDO-COSTA_-CUADRADO.jpg"
import img34 from "../../../../assets/img/TALLERES/VIRTUALES/TALLER-LASTESIS_-CUADRADO.jpg"
import img35 from "../../../../assets/img/TALLERES/VIRTUALES/TALLER-LEONARDO-MOSSO_-CUADRADO.jpg"

const ListPublic = ({globalState, changeState, is_public}) => {

    const initialState = {
        transmissions: null,
        transmission_selected: null,
        is_retrieve_transmission: false,
        no_live: true
    }


    const [state, setState] = useState(initialState)

    async function createInvitationAndAccess(transmission) {

        const create_invitation = await api_transmissions.invitations.create({"transmission": transmission})
                        .then((response)=> {
                            message.success('Encriptando...')
                            window.location.href = `https://webinarsdk.amamaule.cl/${response.data.uuid}/`
                        })
                        .catch((error)=> {
                            message.error('Error al ingresar... intentalo más tarde')
                        })
        return create_invitation
    }

    useEffect(()=> {
        
        setState({...state, transmissions:[
            {'main_image': img4, 'category': 'C' },
            {'main_image': img2, 'category': 'C' },
            {'main_image': img3, 'category': 'C' },
            {'main_image': img1, 'category': 'C' },
            {'main_image': img5, 'category': 'O'},
            {'main_image': img6, 'category': 'O'},
            {'main_image': img7, 'category': 'O'},
            {'main_image': img8, 'category': 'O'},
            {'main_image': img9, 'category': 'O'},
            {'main_image': img21, 'category': 'SC' },
            {'main_image': img22, 'category': 'SC' }, 
            {'main_image': img23, 'category': 'SC' }, 
            {'main_image': img24, 'category': 'SC' }, 
            {'main_image': img25, 'category': 'SC' },
            {'main_image': img26, 'category': 'SC' },
            {'main_image': img27, 'category': 'SC' },
            {'main_image': img10, 'category': 'MT' },
            {'main_image': img11, 'category': 'MT' }, 
            {'main_image': img12, 'category': 'MT' }, 
            {'main_image': img13, 'category': 'MT' }, 
            {'main_image': img14, 'category': 'MT' },
            {'main_image': img15, 'category': 'MT' },
            {'main_image': img16, 'category': 'MT' },
            {'main_image': img17, 'category': 'MT' },
            {'main_image': img18, 'category': 'MT' },
            {'main_image': img19, 'category': 'MT' },
            {'main_image': img20, 'category': 'MT' },

        ]})            

    }, [])

    
    return(
        <React.Fragment>

            <Menu theme='dark' mode='horizontal' style={{ width:'100%' ,textAlign:'center', backgroundColor:'#A659B3', color:'white'}} onClick={async(current)=>{
                if(current.key==='0'){
                  setState({...state, transmissions: [
            {'main_image': img4, 'category': 'C' },
            {'main_image': img2, 'category': 'C' },
            {'main_image': img3, 'category': 'C' },
            {'main_image': img1, 'category': 'C' },
            {'main_image': img5, 'category': 'O'},
            {'main_image': img6, 'category': 'O'},
            {'main_image': img7, 'category': 'O'},
            {'main_image': img8, 'category': 'O'},
            {'main_image': img9, 'category': 'O'},
            {'main_image': img21, 'category': 'SC' },
            {'main_image': img22, 'category': 'SC' }, 
            {'main_image': img23, 'category': 'SC' }, 
            {'main_image': img24, 'category': 'SC' }, 
            {'main_image': img25, 'category': 'SC' },
            {'main_image': img26, 'category': 'SC' },
            {'main_image': img27, 'category': 'SC' },
            {'main_image': img10, 'category': 'MT' },
            {'main_image': img11, 'category': 'MT' }, 
            {'main_image': img12, 'category': 'MT' }, 
            {'main_image': img13, 'category': 'MT' }, 
            {'main_image': img14, 'category': 'MT' },
            {'main_image': img15, 'category': 'MT' },
            {'main_image': img16, 'category': 'MT' },
            {'main_image': img17, 'category': 'MT' },
            {'main_image': img18, 'category': 'MT' },
            {'main_image': img19, 'category': 'MT' },
            {'main_image': img20, 'category': 'MT' },

                  ]})
                }
                if(current.key==='1'){
                  setState({...state, transmissions: [
                    {'main_image': img4, 'category': 'C' },
                    {'main_image': img2, 'category': 'C' }, 
                    {'main_image': img3, 'category': 'C' }, 
                    {'main_image': img1, 'category': 'C' },
                  ]})
                }
                if(current.key==='2'){
                  setState({...state, transmissions: [
                    {'main_image': img21, 'category': 'SC' },
                    {'main_image': img22, 'category': 'SC' }, 
                    {'main_image': img23, 'category': 'SC' }, 
                    {'main_image': img24, 'category': 'SC' }, 
                    {'main_image': img25, 'category': 'SC' },
                    {'main_image': img26, 'category': 'SC' },
                    {'main_image': img27, 'category': 'SC' },
                  ]})
                }
                if(current.key==='3'){
                    setState({...state, transmissions: [
                      {'main_image': img10, 'category': 'MT' },
                      {'main_image': img11, 'category': 'MT' }, 
                      {'main_image': img12, 'category': 'MT' }, 
                      {'main_image': img13, 'category': 'MT' }, 
                      {'main_image': img14, 'category': 'MT' },
                      {'main_image': img15, 'category': 'MT' },
                      {'main_image': img16, 'category': 'MT' },
                      {'main_image': img17, 'category': 'MT' },
                      {'main_image': img18, 'category': 'MT' },
                      {'main_image': img19, 'category': 'MT' },
                      {'main_image': img20, 'category': 'MT' },
                    ]})

                }
                if(current.key==='4'){
                
                    const request  = await api_transmissions.transmissions.list('', 'IC', '').then((response)=> {                
                        if(response.data.count === 0){
                            setState({...state, transmissions: response.data.results})
                        }else{
                            setState({...state, transmissions: response.data.results})
                        }
                    })
                }
                if(current.key==='5'){
                
                    const request  = await api_transmissions.transmissions.list('', 'S', '').then((response)=> {                
                        if(response.data.count === 0){
                            setState({...state, transmissions: response.data.results})
                        }else{
                            setState({...state, transmissions: response.data.results})
                        }
                    })
                }
                if(current.key==='6'){
                  setState({...state, 
                    transmissions: [
                      {'main_image': img5, 'category': 'O'},
                      {'main_image': img6, 'category': 'O'},
                      {'main_image': img7, 'category': 'O'},
                      {'main_image': img8, 'category': 'O'},
                      {'main_image': img9, 'category': 'O'}
                  ]})
                }
                if(current.key==='7'){

                    const request  = await api_transmissions.transmissions.list('', '', '').then((response)=> {
                        if(response.data.count === 0){
                            setState({...state, transmissions: response.data.results})
                        }else{
                            setState({...state, transmissions: response.data.results})
                        }
                    })
                }

            }} >
                {!state.no_live && 
                <Menu.Item style={{backgroundColor:'#A659B3', color:'white'}} key='0' >
                    
                <Badge status='processing' color='gold' style={{marginLeft:'10px'}} />  EN VIVO
                </Menu.Item>  }
                <Menu.Item style={{backgroundColor:'#A659B3', color:'white'}} key='0' >
                    Todos
                </Menu.Item>
                <Menu.Item style={{backgroundColor:'#A659B3', color:'white'}} key='3' >
                        Mesas temáticas
                </Menu.Item>
                <Menu.Item style={{backgroundColor:'#A659B3', color:'white'}} key='6' >
                    Obras y espectáculos
                </Menu.Item>
                <Menu.Item style={{backgroundColor:'#A659B3', color:'white'}} key='1' >
                   Conferencias
                </Menu.Item>
                <Menu.Item style={{backgroundColor:'#A659B3', color:'white'}} key='2' >
                    Showcases
                </Menu.Item>
                    
           

            </Menu>

            {state.transmissions && <>

                {state.transmissions.map((obj)=> {
                    let category = obj.category
                    var color = 'volcano'
                    let is_public_content = false
                    if(category === 'T'){
                        obj.category = 'Talleres'
                        color = 'cyan'
                        is_public_content =false
                    }
                    if(category === 'S'){
                        obj.category = 'Evento Satélite'
                        color = 'geekblue'
                        is_public_content =false
                    }
                    if(category === 'C'){
                        obj.category = 'Conferencías'
                        color = 'gold'
                        is_public_content =true
                    }
                    if(category === 'MT'){
                        obj.category = 'Mesas temáticas'
                        color = 'pink'
                        is_public_content =false
                    }
                    if(category === 'IC'){
                        obj.category = 'Intercambios crativos'
                        color = 'magenta'
                        is_public_content =false
                    }
                    if(category === 'SC'){
                        obj.category = 'Showcases'
                        color = 'orange'
                        is_public_content =true
                    }
                    if(category === 'O'){
                        obj.category = 'Obras y espectáculos'
                        color = 'purple'
                        is_public_content =true
                    }

                    return (<>
                            <Row>
                        <Col xs={24} lg={6} style={{padding:'20px'}}>
                        <Card hoverable={true}
                            style={{width:'300px'}}
                            cover={<img width={'100%'} src={obj.main_image} />}>
                            <Card.Meta
                                    description={<Row>
                                        <Col span={24}>
                                        <Typography.Paragraph style={{fontSize:'16px'}}> {obj.title} </Typography.Paragraph>
                                        </Col>
                                    <Col xs={{ span: 24}} lg={{ span: 14 }} >
                                    <Tag color={color} style={{marginBottom:'10px'}}>
                                {obj.category}
                                </Tag></Col>
                                    {obj.is_zoom_stream  &&
                                    <Col xs={{ span: 24}} lg={{ span: 6 }}>
                                     <Button  size={'small'} type='primary' style={{backgroundColor:'black', borderColor:'black', color:'Highlight'}}
                                             onClick={()=> createInvitationAndAccess(obj.uuid)} >
                                         EN VIVO <Badge status='processing' color='blue' style={{marginLeft:'10px'}} />
                                    </Button>
                                    </Col>
                                    }
                                    {obj.is_yt_stream &&
                                    <Col xs={{ span: 24}} lg={{ span: 6 }}>
                                        <ModalYtVideo obj={obj} />
                                        </Col>
                                    }
                                    {!obj.is_live & !obj.is_yt_stream ?
                                    <Col xs={{ span: 24}} lg={{ span: 6 }}>
                                        </Col>:''
                                    }
                                    </Row>}
                                >
                                </Card.Meta>
                        </Card>
                        </Col></Row>
                        </>
                    )
                })}
            </>}
        </React.Fragment>
    )
}


export default ListPublic
