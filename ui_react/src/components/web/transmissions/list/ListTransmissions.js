import React, {useEffect, useState} from 'react'
import api_transmissions from '../../../../api/transmissions/endpoints'
import {Card, Row, Col, Tag, Badge, Button, Menu, Result, message} from 'antd'
import { LockOutlined, NotificationOutlined, DesktopOutlined, PlaySquareOutlined } from '@ant-design/icons'
import ModalYtVideo from '../single/ModalYtVideo'
import api from "../../../../api/endpoints";


const ListTransmissions = ({globalState, changeState, is_public}) => {

    const initialState = {
        transmissions: null,
        transmission_selected: null,
        is_retrieve_transmission: false,
        no_live: false
    }

    const [navigationNum, setNavigationNum] = useState(0)
    const [invitation, setInvitation] = useState(null)
    const [page, setPage] = useState(null)

    const [state, setState] = useState(initialState)

    async function createInvitationAndAccess(transmission) {
        const create_invitation = await api_transmissions.invitations.create({"transmission": transmission})
                        .then((response)=> {
                            setInvitation(response.data.uuid)
                            message.success('Estamos creando tu acceso privado...')
                            window.location.href = `http://localhost:3001/${response.data.uuid}/`
                        })
                        .catch((error)=> {
                            message.error('Error al ingresar... intentalo más tarde')
                        })
        return create_invitation
    }

    useEffect(()=> {

        async function get_transmissions(){
            const request  = await api_transmissions.transmissions.list(false, 'C').then((response)=> {
                if(response.data.count > 0){
                setState({...state, transmissions: response.data.results, no_live:false})                                
            }else{
                setState({...state, transmissions: response.data.results, no_live:true})                                
            }
            })
            return request
        }
        get_transmissions()

    }, [])

    
    return(
        <React.Fragment>
            <Col span={24}>
            <Menu theme='dark' mode='horizontal' style={{ textAlign:'center', backgroundColor:is_public ? '#F58B88': 'rgb(97, 38, 61)', color:'white'}} onClick={async(current)=>{
                if(current.key==='0'){
                setPage(0)
                const request  = await api_transmissions.transmissions.list(true, '').then((response)=> {
                    if(response.data.count > 0){                                                
                        setState({...state, transmissions: response.data.results, no_live:false})                                
                    }else{
                        setState({...state, transmissions: response.data.results, no_live:true})                                
                    }
                    
                })
                }
                if(current.key==='1'){
                
                    const request  = await api_transmissions.transmissions.list('', 'C').then((response)=> {                
                        
                        if(response.data.count === 0){
                            setState({...state, transmissions: response.data.results, no_live:true})    
                        }else{
                            setState({...state, transmissions: response.data.results, no_live:false})
                        }
                    })
                }
                if(current.key==='2'){
                
                    const request  = await api_transmissions.transmissions.list('', 'SC').then((response)=> {                
                        if(response.data.count === 0){
                            setState({...state, transmissions: response.data.results, no_live:true})    
                        }else{
                            setState({...state, transmissions: response.data.results, no_live:false})
                        }
                    })
                }
                if(current.key==='3'){
                
                    const request  = await api_transmissions.transmissions.list('', 'MT').then((response)=> {                
                        if(response.data.count === 0){
                            setState({...state, transmissions: response.data.results, no_live:true})    
                        }else{
                            setState({...state, transmissions: response.data.results, no_live:false})
                        }
                        
                        console.log(response)
                    })
                }
                if(current.key==='4'){
                
                    const request  = await api_transmissions.transmissions.list('', 'IC').then((response)=> {                
                        if(response.data.count === 0){
                            setState({...state, transmissions: response.data.results, no_live:true})    
                        }else{
                            setState({...state, transmissions: response.data.results, no_live:false})
                        }
                    })
                }
                if(current.key==='5'){
                
                    const request  = await api_transmissions.transmissions.list('', 'S').then((response)=> {                
                        if(response.data.count === 0){
                            setState({...state, transmissions: response.data.results, no_live:true})    
                        }else{
                            setState({...state, transmissions: response.data.results, no_live:false})
                        }
                    })
                }
                if(current.key==='6'){

                    const request  = await api_transmissions.transmissions.list('', 'O').then((response)=> {
                        if(response.data.count === 0){
                            setState({...state, transmissions: response.data.results, no_live:true})
                        }else{
                            setState({...state, transmissions: response.data.results, no_live:false})
                        }
                    })
                }

            }} >
            { is_public ? <>


                <Menu.Item style={{backgroundColor:'#F58B88', color:'white'}} key='1' >
                   <NotificationOutlined style={{fontSize:'20px'}} /> Conferencias
                </Menu.Item>
                <Menu.Item style={{backgroundColor:'#F58B88', color:'white'}} key='2' >
                    <DesktopOutlined style={{fontSize:'20px'}} /> Showcases
                </Menu.Item>
                <Menu.Item style={{backgroundColor:'#F58B88', color:'white'}} key='6' >
                    <PlaySquareOutlined style={{fontSize:'20px'}} /> Obras
                </Menu.Item>


                </>:
                <>

                    <Menu.Item style={{backgroundColor:'rgb(97, 38, 61)', color:'white'}} key='1' >
                        Conferencias
                    </Menu.Item>
                    <Menu.Item style={{backgroundColor:'rgb(97, 38, 61)', color:'white'}} key='2' >
                        Showcases
                    </Menu.Item>
                     <Menu.Item style={{backgroundColor:'rgb(97, 38, 61)', color:'white'}} key='6' >
                    Obras
                </Menu.Item>
                    <Menu.Item style={{backgroundColor:'rgb(97, 38, 61)', color:'white'}} key='3' >
                        Mesas temáticas
                    </Menu.Item>
                    <Menu.Item style={{backgroundColor:'rgb(97, 38, 61)', color:'white'}} key='4' >
                        Foro Intercambios crativos
                    </Menu.Item>
                    <Menu.Item style={{backgroundColor:'rgb(97, 38, 61)', color:'white'}} key='5' >
                        Evento Satelite
                    </Menu.Item>
                </>
            }

            </Menu>
                </Col>

            {state.transmissions && <>
                {state.no_live &&
                    <Col xs={24} lg={24} style={{padding:'10px'}}>
                        <Result
                  status="500"
                  title="No disponible"
                  subTitle="Lo sentimos, aún no hay información disponible."
                        /></Col>
                    }
                {state.transmissions.map((obj)=> {
                    let category = obj.category
                    var color = 'volcano'    
                    if(category === 'T'){
                        obj.category = 'Talleres'
                        color = 'cyan'
                    }
                    if(category === 'S'){
                        obj.category = 'Evento Satélite'
                        color = 'geekblue'
                    }
                    if(category === 'C'){
                        obj.category = 'Conferencías'
                        color = 'gold'
                    }
                    if(category === 'MT'){
                        obj.category = 'Mesas temáticas'
                        color = 'green'
                    }
                    if(category === 'IC'){
                        obj.category = 'Intercambios crativos'
                        color = 'magenta'
                    }
                    if(category === 'SC'){
                        obj.category = 'Showcases'
                        color = 'orange'
                    }
                    if(category === 'O'){
                        obj.category = 'Obras'
                        color = 'blue'
                    }

                    return (

                        <Col xs={24} lg={6} style={{padding:'10px'}}>
                        <Card hoverable={true}
                            cover={<img width={'100%'} src={obj.main_image} />}>
                            <Card.Meta
                                    description={<Row>
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
                                        <Button size={'small'} disabled style={{float:'right'}}><LockOutlined/></Button></Col>:''
                                    }
                                    </Row>}
                                >
                                </Card.Meta>
                        </Card>
                        </Col>
                    )
                })}
            </>}
        </React.Fragment>
    )
}


export default ListTransmissions