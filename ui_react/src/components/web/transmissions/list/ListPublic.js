import React, {useEffect, useState, useContext} from 'react'
import api_transmissions from '../../../../api/transmissions/endpoints'
import {Card, Row, Col, Tag, Badge, Button, Menu, Typography, message} from 'antd'
import { LockOutlined, NotificationOutlined, DesktopOutlined, PlaySquareOutlined } from '@ant-design/icons'
import ModalYtVideo from '../single/ModalYtVideo'
import { AuthContext} from "../../../../App";
import api from "../../../../api/endpoints";


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

        async function get_transmissions(){
            const request  = await api_transmissions.transmissions.list('true', 'C', '')
                        .then(async (response)=> {
                                    if(!is_public){
                                    if(response.data.count > 0){
                                        setState({...state, transmissions: response.data.results, no_live:false})
                                    } else {
                                        const getData = await api_transmissions.transmissions.list('', 'C', '').then((response)=> {
                                          setState({...state, transmissions: response.data.results, no_live:true})
                                        })
                                    }
                                    }else{
                                        const getData = await api_transmissions.transmissions.list('', 'C', '').then(async(response)=> {
                                            if(response.data.count > 0){
                                                setState({...state, transmissions: response.data.results, no_live:false})
                                            }else {
                                                const getData = await api_transmissions.transmissions.list('', 'C', '').then((response)=> {
                                                  setState({...state, transmissions: response.data.results, no_live:true})
                                                })
                                            }
                                        })
                                    }

                        })
            return request
        }
        get_transmissions()

    }, [])

    
    return(
        <React.Fragment>

            <Menu theme='dark' mode='horizontal' style={{ width:'100%' ,textAlign:'center', backgroundColor:'#A659B3', color:'white'}} onClick={async(current)=>{
                if(current.key==='0'){
                const request  = await api_transmissions.transmissions.list('true', '', '').then((response)=> {
                    if(response.data.count > 0){                                                
                        setState({...state, transmissions: response.data.results, no_live:false})                                
                    }else{
                        setState({...state, transmissions: response.data.results, no_live:true})                                
                    }
                })
                }
                if(current.key==='1'){
                    const request  = await api_transmissions.transmissions.list('', 'C', '').then((response)=> {                
                        
                        if(response.data.count === 0){
                            setState({...state, transmissions: response.data.results})
                        }else{
                            setState({...state, transmissions: response.data.results})
                        }
                    })
                }
                if(current.key==='2'){
                
                    const request  = await api_transmissions.transmissions.list('', 'SC', '').then((response)=> {                
                        if(response.data.count === 0){
                            setState({...state, transmissions: response.data.results})
                        }else{
                            setState({...state, transmissions: response.data.results})
                        }
                    })
                }
                if(current.key==='3'){
                    const request  = await api_transmissions.transmissions.list('', 'MT', '').then((response)=> {                
                        if(response.data.count === 0){
                            setState({...state, transmissions: response.data.results})
                        }else{
                            setState({...state, transmissions: response.data.results})
                        }
                        console.log(response)
                    })
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

                    const request  = await api_transmissions.transmissions.list('', 'O', '').then((response)=> {
                        if(response.data.count === 0){
                            setState({...state, transmissions: response.data.results})
                        }else{
                            setState({...state, transmissions: response.data.results})
                        }
                    })
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
                               
                <Menu.Item style={{backgroundColor:'#A659B3', color:'white'}} key='7' >
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
                            style={{width:'400px'}}
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
                                    {obj.category === 'Obras y espectáculos' & obj.yt_url !== null ? <>
                                        <Button onClick={()=> {window.open(obj.yt_url)}} type='primary' style={{backgroundColor:'rgb(176, 93, 185)', borderColor:'rgb(176, 93, 185)'}}>Inscribirse</Button>
                                    </>:''}
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