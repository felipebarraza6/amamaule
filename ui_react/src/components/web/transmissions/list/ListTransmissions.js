import React, {useEffect, useState} from 'react'
import api_transmissions from '../../../../api/transmissions/endpoints'
import { Card, Row, Col, Tag, Badge, Button, Menu, Result } from 'antd'
import { QuestionCircleFilled } from '@ant-design/icons'
import ModalYtVideo from '../single/ModalYtVideo'


const ListTransmissions = ({globalState, changeState}) => {

    const initialState = {
        transmissions: null,
        transmission_selected: null,
        is_retrieve_transmission: false,
        no_live: false
    }

    const [navigationNum, setNavigationNum] = useState(0)

    const [state, setState] = useState(initialState)
    

    useEffect(()=> {

        async function get_transmissions(){
            const request  = await api_transmissions.transmissions.list(true, '').then((response)=> { 
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
            <Menu theme='dark' mode='horizontal' style={{textAlign:'end', backgroundColor:'rgb(97, 38, 61)', color:'white'}} onClick={async(current)=>{
                if(current.key==='0'){
                
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

            }} >                
                <Menu.Item style={{backgroundColor:'rgb(97, 38, 61)', color:'white'}} key='0' >
                    <Badge status='processing' color='orange' />  EN VIVO
                </Menu.Item>
                <Menu.Item style={{backgroundColor:'rgb(97, 38, 61)', color:'white'}} key='1' >
                    Conferencias
                </Menu.Item>
                <Menu.Item style={{backgroundColor:'rgb(97, 38, 61)', color:'white'}} key='2' >
                    Showcases
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
            </Menu>

            {state.transmissions && <Row>
                {state.no_live && <Row ><Col  span={24}>
                        <Result style={{padding:'120px'}}
                            icon={<QuestionCircleFilled style={{color:'rgb(206, 61, 75)'}} />}
                            title="No hay resultados actualmente..."                            
                        />
                    </Col>
                </Row>}    
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

                    return (
                        <Col span={6} style={{padding:'10px', minHeight:'100%'}}> 
                        
                        
                        <Card hoverable={true} 
                            cover={<img width={'100%'} src={obj.main_image} />}                            
                        >
                            <Card.Meta 
                                    description={<Row style={{float:'center'}}>
                                    <Col span={12} >
                                    <Tag color={color} style={{marginTop:'5px'}} >
                                {obj.category}
                                </Tag></Col>

                                    {obj.is_zoom_stream  &&
                                    <Col span={12}>
                                     <Button type='primary' style={{backgroundColor:'black', color:'Highlight'}} onClick={()=> {
                                         changeState({...globalState, is_retrieve:true, transmission_selected: obj})
                                     }}>
                                         EN VIVO <Badge status='processing' style={{marginLeft:'10px'}} />
                                    </Button>                                                                          
                                    </Col>
                                    }
                                    {obj.is_yt_stream && 
                                    <Col span={12} style={{paddingLeft:'36px'}}>
                                        <ModalYtVideo obj={obj} />
                                        </Col>                                        
                                    }                                    
                                    {!obj.is_live & !obj.is_yt_stream ?
                                    <Col span={12} style={{float:'right'}}>
                                        <Button disabled>NO DISPONIBLE</Button></Col>:''
                                    
                                    }
                                    </Row>}
                                >
                            
                                
                                    
                                    
                               
                                </Card.Meta>
                        </Card>                                                    
                        
                        </Col>
                    )                    
                })}
            </Row>}
        </React.Fragment>
    )
}


export default ListTransmissions