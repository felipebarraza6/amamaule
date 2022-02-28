import React, {useState, useContext, useEffect} from 'react'
import {Row, Col, Tag, Divider, Affix, Typography, Table, Button} from 'antd'
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


    return(
        <>
            <Affix offsetTop={48} >
                <Row style={{textAlign:'center', backgroundColor:'white'}}>
                    <Col span={24}>
                        <Table bordered expandable={true} columns={ [
                            {
                                title: 'HORA',
                                ellipsis:true,
                                render: (x) => {
                                    return(`${x.start_date.slice(11,16)} hrs`)
                                }
                            },
                            {
                                title: 'USUARIO',                                
                                render: (x)=> {
                                    return(`${x.participans_invited[0].first_name} ${x.participans_invited[0].last_name}`)
                                }
                            },
                            {   ellipsis:true,
                                render: (x)=> {
                                    return(<Row>
                                        {!x.is_end ? <>
                                            <Col span={12}>
                                                <Button type='primary' style={{marginBottom:'5px',marginRight:'5px', backgroundColor:'rgb(176, 93, 185)', borderColor:'rgb(176, 93, 185)'}}
                                                    onClick={()=> {
                                                        window.open(`http://localhost:3000/profile/meetings/${x.uuid}`)
                                                    }}
                                                >Ingresar</Button>
                                            </Col>
                                            <Col span={12}>

                                            <Button onClick={()=> {
                                                
                                                deleteMeeting({uuid_meeting: x.uuid, dispatch: dispatch, auth: auth})
                                            }} danger type='primary'>Cancelar</Button></Col>
                                            </>: <center><Tag color='pink'>FINALIZADA</Tag></center>}
                                            
                                    </Row>)
                                }
                            }
                            ]}
                            
                            dataSource={state.meetings}>

                        </Table>
                        </Col>              
                </Row>
            </Affix> <Divider />

        </>        



    )
}



export default Calendar
