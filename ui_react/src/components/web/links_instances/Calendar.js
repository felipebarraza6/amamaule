import React, {useState, useContext, useEffect} from 'react'
import {Row, Col, Tag, Divider, 
        Affix, Typography, Table, 
        Button, List} from 'antd'
import SekeletonCalendar from './SkeletonCalendar'
import {GroupsContext} from '../../../containers/web/LinksInstances'
import MeetingCalendar from './MeetingCalendar'
import { deleteMeeting } from '../../../actions/meetings_rounds/getData'
import { AuthContext } from '../../../App'
const { Title } = Typography

const Calendar = () => {

    const { state, dispatch } = useContext(GroupsContext)
    const {state:auth} = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    const [size, setSize] = useState()
    console.log(state)
    useEffect(()=>{

        setTimeout(()=>setLoading(false),
                   2000);
        setSize(window.innerWidth)

    }, [])
    const copy_data = state.meetings.slice()
    useEffect(()=> {
        
    }, [])


    return(
        <>
                <Row style={{textAlign:'center', backgroundColor:'white'}}>

                <Col span={4}>                
                    </Col>
                    <Col span={24}>
                    <table className="ant-table-thead" style={{width:'100%'}}>
                        <tr style={{width:'100%'}}>
                            <th>HORA</th>
                            <th >Usuario</th>
                            <th >29 de Marzo</th>
                            <th >Usuario</th>
                            <th >30 de Marzo</th>
                        </tr>
                        
                        <tr style={{}}>
                            <th>12:00</th>
                            <td style={{border:'1px solid #f0f0f0'}}>                             
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='29T12:00'){
                                        return(<>
                                            {x.invited.first_name} {x.invited.last_name}                                                                                       
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='29T12:00'){
                                        return(<>                                            
                                            
                                            {!x.is_end ? <Row justify='center'>
                                            <Col>
                                                <Button disabled={true} size='small' type='primary' style={{marginBottom:'5px',marginRight:'5px', backgroundColor:'rgb(176, 93, 185)', borderColor:'rgb(176, 93, 185)'}}
                                                    onClick={()=> {
                                                        window.open(`https://amamaule.cl/profile/meetings/${x.uuid}`)
                                                    }}
                                                >Ingresar</Button>
                                            </Col>
                                            <Col >

                                            <Button size='small' onClick={()=> {
                                                
                                                deleteMeeting({uuid_meeting: x.uuid, dispatch: dispatch, auth: auth})
                                            }} danger type='primary'>Cancelar</Button></Col>
                                            </Row>: <center><Tag color='pink'>FINALIZADA</Tag></center>}
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='30T12:00'){
                                        return(<>
                                            {x.invited.first_name} {x.invited.last_name}                                                                                       
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='30T12:00'){
                                        return(<>                                            
                                            
                                            {!x.is_end ? <Row justify='center'>
                                            <Col>
                                                <Button disabled={true} size='small' type='primary' style={{marginBottom:'5px',marginRight:'5px', backgroundColor:'rgb(176, 93, 185)', borderColor:'rgb(176, 93, 185)'}}
                                                    onClick={()=> {
                                                        window.open(`https://amamaule.cl/profile/meetings/${x.uuid}`)
                                                    }}
                                                >Ingresar</Button>
                                            </Col>
                                            <Col >

                                            <Button size='small' onClick={()=> {
                                                
                                                deleteMeeting({uuid_meeting: x.uuid, dispatch: dispatch, auth: auth})
                                            }} danger type='primary'>Cancelar</Button></Col>
                                            </Row>: <center><Tag color='pink'>FINALIZADA</Tag></center>}
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }
                                </td>                                                            
                        </tr>
                        <tr>
                            <th>12:20</th>
                            <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='29T12:20'){
                                        return(<>
                                            {x.invited.first_name} {x.invited.last_name}                                                                                       
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='29T12:20'){
                                        return(<>                                            
                                            
                                            {!x.is_end ? <Row justify='center' >
                                            <Col span={12}>
                                                <Button disabled={true} size='small' type='primary' style={{marginBottom:'5px',marginRight:'5px', backgroundColor:'rgb(176, 93, 185)', borderColor:'rgb(176, 93, 185)'}}
                                                    onClick={()=> {
                                                        window.open(`https://amamaule.cl/profile/meetings/${x.uuid}`)
                                                    }}
                                                >Ingresar</Button>
                                            </Col>
                                            <Col span={12}>

                                            <Button size='small' onClick={()=> {
                                                
                                                deleteMeeting({uuid_meeting: x.uuid, dispatch: dispatch, auth: auth})
                                            }} danger type='primary'>Cancelar</Button></Col>
                                            </Row>: <center><Tag color='pink'>FINALIZADA</Tag></center>}
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='30T12:20'){
                                        return(<>
                                            {x.invited.first_name} {x.invited.last_name}                                                                                       
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='30T12:20'){
                                        return(<>                                            
                                            
                                            {!x.is_end ? <Row justify='center'>
                                            <Col>
                                                <Button disabled={true} size='small' type='primary' style={{marginBottom:'5px',marginRight:'5px', backgroundColor:'rgb(176, 93, 185)', borderColor:'rgb(176, 93, 185)'}}
                                                    onClick={()=> {
                                                        window.open(`https://amamaule.cl/profile/meetings/${x.uuid}`)
                                                    }}
                                                >Ingresar</Button>
                                            </Col>
                                            <Col >

                                            <Button size='small' onClick={()=> {
                                                
                                                deleteMeeting({uuid_meeting: x.uuid, dispatch: dispatch, auth: auth})
                                            }} danger type='primary'>Cancelar</Button></Col>
                                            </Row>: <center><Tag color='pink'>FINALIZADA</Tag></center>}
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }
                                </td>                                                            
                                                          
                        </tr>
                        <tr>
                            <th>12:40</th>
                            <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='29T12:40'){
                                        return(<>
                                            {x.invited.first_name} {x.invited.last_name}                                                                                       
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='29T12:40'){
                                        return(<>                                            
                                            
                                            {!x.is_end ? <Row justify='center'>
                                            <Col span={12}>
                                                <Button disabled={true} size='small' type='primary' style={{marginBottom:'5px',marginRight:'5px', backgroundColor:'rgb(176, 93, 185)', borderColor:'rgb(176, 93, 185)'}}
                                                    onClick={()=> {
                                                        window.open(`https://amamaule.cl/profile/meetings/${x.uuid}`)
                                                    }}
                                                >Ingresar</Button>
                                            </Col>
                                            <Col span={12}>

                                            <Button size='small' onClick={()=> {
                                                
                                                deleteMeeting({uuid_meeting: x.uuid, dispatch: dispatch, auth: auth})
                                            }} danger type='primary'>Cancelar</Button></Col>
                                            </Row>: <center><Tag color='pink'>FINALIZADA</Tag></center>}
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='30T12:40'){
                                        return(<>
                                            {x.invited.first_name} {x.invited.last_name}                                                                                       
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='30T12:40'){
                                        return(<>                                            
                                            
                                            {!x.is_end ? <Row justify='center'>
                                            <Col>
                                                <Button disabled={true} size='small' type='primary' style={{marginBottom:'5px',marginRight:'5px', backgroundColor:'rgb(176, 93, 185)', borderColor:'rgb(176, 93, 185)'}}
                                                    onClick={()=> {
                                                        window.open(`https://amamaule.cl/profile/meetings/${x.uuid}`)
                                                    }}
                                                >Ingresar</Button>
                                            </Col>
                                            <Col >

                                            <Button size='small' onClick={()=> {
                                                
                                                deleteMeeting({uuid_meeting: x.uuid, dispatch: dispatch, auth: auth})
                                            }} danger type='primary'>Cancelar</Button></Col>
                                            </Row>: <center><Tag color='pink'>FINALIZADA</Tag></center>}
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }
                                </td>                                                     
                        </tr>
                        <tr style={{}}>
                            <th>13:00</th>
                            <td style={{border:'1px solid #f0f0f0'}}>                             
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='29T13:00'){
                                        return(<>
                                            {x.invited.first_name} {x.invited.last_name}                                                                                       
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='29T13:00'){
                                        return(<>                                            
                                            
                                            {!x.is_end ? <Row justify='center'>
                                            <Col>
                                                <Button disabled={true} size='small' type='primary' style={{marginBottom:'5px',marginRight:'5px', backgroundColor:'rgb(176, 93, 185)', borderColor:'rgb(176, 93, 185)'}}
                                                    onClick={()=> {
                                                        window.open(`https://amamaule.cl/profile/meetings/${x.uuid}`)
                                                    }}
                                                >Ingresar</Button>
                                            </Col>
                                            <Col >

                                            <Button size='small' onClick={()=> {
                                                
                                                deleteMeeting({uuid_meeting: x.uuid, dispatch: dispatch, auth: auth})
                                            }} danger type='primary'>Cancelar</Button></Col>
                                            </Row>: <center><Tag color='pink'>FINALIZADA</Tag></center>}
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='30T13:00'){
                                        return(<>
                                            {x.invited.first_name} {x.invited.last_name}                                                                                       
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='30T13:00'){
                                        return(<>                                            
                                            
                                            {!x.is_end ? <Row justify='center'>
                                            <Col>
                                                <Button disabled={true} size='small' type='primary' style={{marginBottom:'5px',marginRight:'5px', backgroundColor:'rgb(176, 93, 185)', borderColor:'rgb(176, 93, 185)'}}
                                                    onClick={()=> {
                                                        window.open(`https://amamaule.cl/profile/meetings/${x.uuid}`)
                                                    }}
                                                >Ingresar</Button>
                                            </Col>
                                            <Col >

                                            <Button size='small' onClick={()=> {
                                                
                                                deleteMeeting({uuid_meeting: x.uuid, dispatch: dispatch, auth: auth})
                                            }} danger type='primary'>Cancelar</Button></Col>
                                            </Row>: <center><Tag color='pink'>FINALIZADA</Tag></center>}
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }
                                </td>                                                            
                        </tr>
                        <tr>
                            <th>13:20</th>
                            <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='29T13:20'){
                                        return(<>
                                            {x.invited.first_name} {x.invited.last_name}                                                                                       
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='29T13:20'){
                                        return(<>                                            
                                            
                                            {!x.is_end ? <Row justify='center' >
                                            <Col span={12}>
                                                <Button disabled={true} size='small' type='primary' style={{marginBottom:'5px',marginRight:'5px', backgroundColor:'rgb(176, 93, 185)', borderColor:'rgb(176, 93, 185)'}}
                                                    onClick={()=> {
                                                        window.open(`https://amamaule.cl/profile/meetings/${x.uuid}`)
                                                    }}
                                                >Ingresar</Button>
                                            </Col>
                                            <Col span={12}>

                                            <Button size='small' onClick={()=> {
                                                
                                                deleteMeeting({uuid_meeting: x.uuid, dispatch: dispatch, auth: auth})
                                            }} danger type='primary'>Cancelar</Button></Col>
                                            </Row>: <center><Tag color='pink'>FINALIZADA</Tag></center>}
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='30T13:20'){
                                        return(<>
                                            {x.invited.first_name} {x.invited.last_name}                                                                                       
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='30T13:20'){
                                        return(<>                                            
                                            
                                            {!x.is_end ? <Row justify='center'>
                                            <Col>
                                                <Button disabled={true} size='small' type='primary' style={{marginBottom:'5px',marginRight:'5px', backgroundColor:'rgb(176, 93, 185)', borderColor:'rgb(176, 93, 185)'}}
                                                    onClick={()=> {
                                                        window.open(`https://amamaule.cl/profile/meetings/${x.uuid}`)
                                                    }}
                                                >Ingresar</Button>
                                            </Col>
                                            <Col >

                                            <Button size='small' onClick={()=> {
                                                
                                                deleteMeeting({uuid_meeting: x.uuid, dispatch: dispatch, auth: auth})
                                            }} danger type='primary'>Cancelar</Button></Col>
                                            </Row>: <center><Tag color='pink'>FINALIZADA</Tag></center>}
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }
                                </td>                                                            
                                                          
                        </tr>
                        <tr>
                            <th>13:40</th>
                            <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='29T13:40'){
                                        return(<>
                                            {x.invited.first_name} {x.invited.last_name}                                                                                       
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='29T13:40'){
                                        return(<>                                            
                                            
                                            {!x.is_end ? <Row justify='center'>
                                            <Col span={12}>
                                                <Button disabled={true} size='small' type='primary' style={{marginBottom:'5px',marginRight:'5px', backgroundColor:'rgb(176, 93, 185)', borderColor:'rgb(176, 93, 185)'}}
                                                    onClick={()=> {
                                                        window.open(`https://amamaule.cl/profile/meetings/${x.uuid}`)
                                                    }}
                                                >Ingresar</Button>
                                            </Col>
                                            <Col span={12}>

                                            <Button size='small' onClick={()=> {
                                                
                                                deleteMeeting({uuid_meeting: x.uuid, dispatch: dispatch, auth: auth})
                                            }} danger type='primary'>Cancelar</Button></Col>
                                            </Row>: <center><Tag color='pink'>FINALIZADA</Tag></center>}
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='30T13:40'){
                                        return(<>
                                            {x.invited.first_name} {x.invited.last_name}                                                                                       
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='30T13:40'){
                                        return(<>                                            
                                            
                                            {!x.is_end ? <Row justify='center'>
                                            <Col>
                                                <Button disabled={true} size='small' type='primary' style={{marginBottom:'5px',marginRight:'5px', backgroundColor:'rgb(176, 93, 185)', borderColor:'rgb(176, 93, 185)'}}
                                                    onClick={()=> {
                                                        window.open(`https://amamaule.cl/profile/meetings/${x.uuid}`)
                                                    }}
                                                >Ingresar</Button>
                                            </Col>
                                            <Col >

                                            <Button size='small' onClick={()=> {
                                                
                                                deleteMeeting({uuid_meeting: x.uuid, dispatch: dispatch, auth: auth})
                                            }} danger type='primary'>Cancelar</Button></Col>
                                            </Row>: <center><Tag color='pink'>FINALIZADA</Tag></center>}
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }
                                </td>                                                     
                        </tr>
                        <tr>
                            <th>15:00</th>
                            <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='29T15:00'){
                                        return(<>
                                            {x.invited.first_name} {x.invited.last_name}                                                                                       
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='29T15:00'){
                                        return(<>                                            
                                            
                                            {!x.is_end ? <Row justify='center'>
                                            <Col span={12}>
                                                <Button disabled={true} size='small' type='primary' style={{marginBottom:'5px',marginRight:'5px', backgroundColor:'rgb(176, 93, 185)', borderColor:'rgb(176, 93, 185)'}}
                                                    onClick={()=> {
                                                        window.open(`https://amamaule.cl/profile/meetings/${x.uuid}`)
                                                    }}
                                                >Ingresar</Button>
                                            </Col>
                                            <Col span={12}>

                                            <Button size='small' onClick={()=> {
                                                
                                                deleteMeeting({uuid_meeting: x.uuid, dispatch: dispatch, auth: auth})
                                            }} danger type='primary'>Cancelar</Button></Col>
                                            </Row>: <center><Tag color='pink'>FINALIZADA</Tag></center>}
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='30T15:00'){
                                        return(<>
                                            {x.invited.first_name} {x.invited.last_name}                                                                                       
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='30T15:00'){
                                        return(<>                                            
                                            
                                            {!x.is_end ? <Row justify='center'>
                                            <Col>
                                                <Button disabled={true} size='small' type='primary' style={{marginBottom:'5px',marginRight:'5px', backgroundColor:'rgb(176, 93, 185)', borderColor:'rgb(176, 93, 185)'}}
                                                    onClick={()=> {
                                                        window.open(`https://amamaule.cl/profile/meetings/${x.uuid}`)
                                                    }}
                                                >Ingresar</Button>
                                            </Col>
                                            <Col >

                                            <Button size='small' onClick={()=> {
                                                
                                                deleteMeeting({uuid_meeting: x.uuid, dispatch: dispatch, auth: auth})
                                            }} danger type='primary'>Cancelar</Button></Col>
                                            </Row>: <center><Tag color='pink'>FINALIZADA</Tag></center>}
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }
                                </td>                                                       
                        </tr>
                        <tr>
                            <th>15:20</th>
                            <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='29T15:20'){
                                        return(<>
                                            {x.invited.first_name} {x.invited.last_name}                                                                                       
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='29T15:20'){
                                        return(<>                                            
                                            
                                            {!x.is_end ? <Row justify='center'>
                                            <Col span={12}>
                                                <Button disabled={true} size='small' type='primary' style={{marginBottom:'5px',marginRight:'5px', backgroundColor:'rgb(176, 93, 185)', borderColor:'rgb(176, 93, 185)'}}
                                                    onClick={()=> {
                                                        window.open(`https://amamaule.cl/profile/meetings/${x.uuid}`)
                                                    }}
                                                >Ingresar</Button>
                                            </Col>
                                            <Col span={12}>

                                            <Button size='small' onClick={()=> {
                                                
                                                deleteMeeting({uuid_meeting: x.uuid, dispatch: dispatch, auth: auth})
                                            }} danger type='primary'>Cancelar</Button></Col>
                                            </Row>: <center><Tag color='pink'>FINALIZADA</Tag></center>}
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='30T15:20'){
                                        return(<>
                                            {x.invited.first_name} {x.invited.last_name}                                                                                       
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='30T15:20'){
                                        return(<>                                            
                                            
                                            {!x.is_end ? <Row justify='center'>
                                            <Col>
                                                <Button disabled={true} size='small' type='primary' style={{marginBottom:'5px',marginRight:'5px', backgroundColor:'rgb(176, 93, 185)', borderColor:'rgb(176, 93, 185)'}}
                                                    onClick={()=> {
                                                        window.open(`https://amamaule.cl/profile/meetings/${x.uuid}`)
                                                    }}
                                                >Ingresar</Button>
                                            </Col>
                                            <Col >

                                            <Button size='small' onClick={()=> {
                                                
                                                deleteMeeting({uuid_meeting: x.uuid, dispatch: dispatch, auth: auth})
                                            }} danger type='primary'>Cancelar</Button></Col>
                                            </Row>: <center><Tag color='pink'>FINALIZADA</Tag></center>}
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }
                                </td>                                                   
                        </tr>
                        <tr>
                            <th>15:40</th>
                            <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='29T15:40'){
                                        return(<>
                                            {x.invited.first_name} {x.invited.last_name}                                                                                       
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='29T15:40'){
                                        return(<>                                            
                                            
                                            {!x.is_end ? <Row justify='center'>
                                            <Col span={12}>
                                                <Button disabled={true} size='small' type='primary' style={{marginBottom:'5px',marginRight:'5px', backgroundColor:'rgb(176, 93, 185)', borderColor:'rgb(176, 93, 185)'}}
                                                    onClick={()=> {
                                                        window.open(`https://amamaule.cl/profile/meetings/${x.uuid}`)
                                                    }}
                                                >Ingresar</Button>
                                            </Col>
                                            <Col span={12}>

                                            <Button size='small' onClick={()=> {
                                                
                                                deleteMeeting({uuid_meeting: x.uuid, dispatch: dispatch, auth: auth})
                                            }} danger type='primary'>Cancelar</Button></Col>
                                            </Row>: <center><Tag color='pink'>FINALIZADA</Tag></center>}
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='30T15:40'){
                                        return(<>
                                            {x.invited.first_name} {x.invited.last_name}                                                                                       
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='30T15:40'){
                                        return(<>                                            
                                            
                                            {!x.is_end ? <Row justify='center'>
                                            <Col>
                                                <Button disabled={true} size='small' type='primary' style={{marginBottom:'5px',marginRight:'5px', backgroundColor:'rgb(176, 93, 185)', borderColor:'rgb(176, 93, 185)'}}
                                                    onClick={()=> {
                                                        window.open(`https://amamaule.cl/profile/meetings/${x.uuid}`)
                                                    }}
                                                >Ingresar</Button>
                                            </Col>
                                            <Col >

                                            <Button size='small' onClick={()=> {
                                                
                                                deleteMeeting({uuid_meeting: x.uuid, dispatch: dispatch, auth: auth})
                                            }} danger type='primary'>Cancelar</Button></Col>
                                            </Row>: <center><Tag color='pink'>FINALIZADA</Tag></center>}
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }
                                </td>                                                                                                                                                 
                        </tr>
                        <tr>
                            <th>16:00</th>
                            <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='29T16:00'){
                                        return(<>
                                            {x.invited.first_name} {x.invited.last_name}                                                                                       
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='29T16:00'){
                                        return(<>                                            
                                            
                                            {!x.is_end ? <Row justify='center'>
                                            <Col span={12}>
                                                <Button disabled={true} size='small' type='primary' style={{marginBottom:'5px',marginRight:'5px', backgroundColor:'rgb(176, 93, 185)', borderColor:'rgb(176, 93, 185)'}}
                                                    onClick={()=> {
                                                        window.open(`https://amamaule.cl/profile/meetings/${x.uuid}`)
                                                    }}
                                                >Ingresar</Button>
                                            </Col>
                                            <Col span={12}>

                                            <Button size='small' onClick={()=> {
                                                
                                                deleteMeeting({uuid_meeting: x.uuid, dispatch: dispatch, auth: auth})
                                            }} danger type='primary'>Cancelar</Button></Col>
                                            </Row>: <center><Tag color='pink'>FINALIZADA</Tag></center>}
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='30T16:00'){
                                        return(<>
                                            {x.invited.first_name} {x.invited.last_name}                                                                                       
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='30T16:00'){
                                        return(<>                                            
                                            
                                            {!x.is_end ? <Row justify='center'>
                                            <Col>
                                                <Button disabled={true} size='small' type='primary' style={{marginBottom:'5px',marginRight:'5px', backgroundColor:'rgb(176, 93, 185)', borderColor:'rgb(176, 93, 185)'}}
                                                    onClick={()=> {
                                                        window.open(`https://amamaule.cl/profile/meetings/${x.uuid}`)
                                                    }}
                                                >Ingresar</Button>
                                            </Col>
                                            <Col >

                                            <Button size='small' onClick={()=> {
                                                
                                                deleteMeeting({uuid_meeting: x.uuid, dispatch: dispatch, auth: auth})
                                            }} danger type='primary'>Cancelar</Button></Col>
                                            </Row>: <center><Tag color='pink'>FINALIZADA</Tag></center>}
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }
                                </td>                               
                        </tr>
                        <tr>
                            <th>16:20</th> 
                            <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='29T16:20'){
                                        return(<>
                                            {x.invited.first_name} {x.invited.last_name}                                                                                       
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='29T16:20'){
                                        return(<>                                            
                                            
                                            {!x.is_end ? <Row justify='center'>
                                            <Col span={12}>
                                                <Button disabled={true} size='small' type='primary' style={{marginBottom:'5px',marginRight:'5px', backgroundColor:'rgb(176, 93, 185)', borderColor:'rgb(176, 93, 185)'}}
                                                    onClick={()=> {
                                                        window.open(`https://amamaule.cl/profile/meetings/${x.uuid}`)
                                                    }}
                                                >Ingresar</Button>
                                            </Col>
                                            <Col span={12}>

                                            <Button size='small' onClick={()=> {
                                                
                                                deleteMeeting({uuid_meeting: x.uuid, dispatch: dispatch, auth: auth})
                                            }} danger type='primary'>Cancelar</Button></Col>
                                            </Row>: <center><Tag color='pink'>FINALIZADA</Tag></center>}
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='30T16:20'){
                                        return(<>
                                            {x.invited.first_name} {x.invited.last_name}                                                                                       
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='30T16:20'){
                                        return(<>                                            
                                            
                                            {!x.is_end ? <Row justify='center'>
                                            <Col>
                                                <Button disabled={true} size='small' type='primary' style={{marginBottom:'5px',marginRight:'5px', backgroundColor:'rgb(176, 93, 185)', borderColor:'rgb(176, 93, 185)'}}
                                                    onClick={()=> {
                                                        window.open(`https://amamaule.cl/profile/meetings/${x.uuid}`)
                                                    }}
                                                >Ingresar</Button>
                                            </Col>
                                            <Col >

                                            <Button size='small' onClick={()=> {
                                                
                                                deleteMeeting({uuid_meeting: x.uuid, dispatch: dispatch, auth: auth})
                                            }} danger type='primary'>Cancelar</Button></Col>
                                            </Row>: <center><Tag color='pink'>FINALIZADA</Tag></center>}
                                            </>
                                        )
                                    }                                                   
                                })
                                
                                }
                                </td>                           
                        </tr>
                            
                        
                        
                        </table>
                       
                                                

                    </Col>                    
                </Row>
            <Divider />

        </>        



    )

    const styles = {
        rowCalendar: {
            padding: '10px'
        }
    }
}



export default Calendar
