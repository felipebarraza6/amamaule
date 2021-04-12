import React, {useContext, useState} from 'react'

import {Avatar, Badge, Button, Card, Col, Row, Tag, Divider, Typography, Space, Modal, Descriptions} from "antd";
import {CheckCircleOutlined, ClockCircleOutlined, LikeFilled, TeamOutlined} from "@ant-design/icons";
import {Link} from 'react-router-dom'
import {AuthContext} from "../../../App"
import {GroupsContext} from "../../../containers/web/LinksInstances"
import SingleUser from "./SinglesUser"
import {deleteMeeting} from "../../../actions/meetings_rounds/getData"

const { Title, Text } = Typography


const MeetingCalendar = ({meeting}) => {

    const [visible, setVisible] = useState(false)

    const {state} = useContext(AuthContext)
    const {state:groupsContext, dispatch} = useContext(GroupsContext)

    const start_date_meet = new Date(meeting.start_date.slice(0,16))

    var incrementent_date = new Date(start_date_meet)
    var add_minutes = incrementent_date.getMinutes() + 10
    incrementent_date.setMinutes(add_minutes)

    var nowDate = new Date()
    var day = nowDate.getDate()
    var month = nowDate.getMonth() + 1
    var year = nowDate.getFullYear()
    var hours = nowDate.getHours()
    var minutes = nowDate.getMinutes()

    if(minutes<10){
        minutes = `0${nowDate.getMinutes()}`
    }
    if(month<10){
        month = `0${nowDate.getMonth()+1}`
    }
    if(hours<10){
        hours = `0${nowDate.getHours()}`
    }
    if(day<10) {
        day = `0${nowDate.getDate()}`
    }

    //var now = new Date(`2021-04-16T11:11`)
    var now = new Date(`${year}-${month}-${day}T${hours}:${minutes}`)
    console.log(`${year}-${month}-${day}T${hours}:${minutes}`)

    const nowMeeting = (obj) => (<Link to={`profile/meetings/${meeting.uuid}`} ><Modal visible={visible}></Modal><Card hoverable style={{width:'200px', marginBottom:'10px',borderColor:'#1890ff', borderRadius:'20px'}}>
                   <Row>
                       <Col span={6}>
                        {obj.participans_invited.map((person)=> {
                               console.log(person)
                               if(person.id !== state.user.id){
                                return( <Avatar shape={'square'} src={person.principal_image} />)
                               }
                           })}
                       </Col>
                       <Col span={18}>
                           {obj.participans_invited.map((person)=> {
                               console.log(person)
                               if(person.id !== state.user.id){
                                return( <p>{person.first_name} {person.last_name}</p>)
                               }
                           })}

                       </Col>
                       <Col span={12}>
                           <Tag color={'#1890ff'}>{obj.start_date.slice(11,16)} hrs</Tag>
                       </Col>
                       <Col span={12}>
                            <Button size={'small'} type={'primary'}> <Badge status={'processing'} color={'white'} /> acceder</Button>
                       </Col>
                   </Row>
                </Card>
                <Divider style={{width:'200px'}} />
                </Link>)


    const confiirmMeeting = (obj) => {

        return(<div onClick={() => {
            setVisible(true)
        }}><Card hoverable
                 style={{width: '200px', marginBottom: '10px', borderColor: '#52c41a', borderRadius: '20px'}}>
            <Row>
                <Col span={6}>
                    {obj.participans_invited.map((person) => {
                        console.log(person)
                        if (person.id !== state.user.id) {
                            return (<Avatar shape={'square'} src={person.principal_image}/>)
                        }
                    })}
                </Col>
                <Col span={18}>
                    {obj.participans_invited.map((person) => {
                        console.log(person)
                        if (person.id !== state.user.id) {
                            return (<p>{person.first_name} {person.last_name}</p>)
                        }
                    })}
                </Col>
                <Col span={10}>
                    <Tag color={'#52c41a'}>{obj.start_date.slice(11, 16)} hrs</Tag>
                </Col>
                <Col span={14}>
                    <Button style={{color: '#52c41a'}} size={'small'} type={'link'}> <LikeFilled/>confirmada</Button>

                </Col>
            </Row>
        </Card>
            <Divider style={{width: '200px'}}/>
        </div>)
    }

    const waitingMeeting = (obj) => (<><Card style={{ width:'200px', marginBottom:'10px',borderColor:'#ffc53d', borderRadius:'20px'}}
                                             title={<Row justify={'center'}>
                                                 <Button style={{backgroundColor:'rgb(255, 197, 61)', borderColor:'rgb(255, 197, 61)', color:'white'}}
                                                    onClick={()=>{
                                                        deleteMeeting({uuid_meeting:obj.uuid,dispatch:dispatch,auth:state})
                                                    }}
                                                 >
                                                     CANCELAR
                                                 </Button>
                                             </Row>}
                                            >

                   <Row>
                       <Col span={6}>
                        {obj.participans_invited.map((person)=> {
                               console.log(person)
                               if(person.id !== state.user.id){
                                return( <Avatar shape={'square'} src={person.principal_image} />)
                               }
                           })}
                       </Col>
                       <Col span={18}>
                           {obj.participans_invited.map((person)=> {
                               console.log(person)
                               if(person.id !== state.user.id){
                                return( <p>{person.first_name} {person.last_name}</p>)
                               }
                           })}

                       </Col>
                       <Col span={10}>
                           <Tag color={'#ffc53d'}>{obj.start_date.slice(11,16)} hrs</Tag>
                       </Col>
                       <Col span={14}>
                            <Button style={{color:'#ffc53d'}} size={'small'} type={'link'} > <ClockCircleOutlined />esperando</Button>
                       </Col>
                   </Row>
               </Card>
                <Divider style={{width:'200px'}} />
                </>)

    const finishMeeting = (obj) => (<div  onClick={() => {
            setVisible(true)
        }}><Card  hoverable style={{width:'200px',  marginBottom:'10px',backgroundColor:'#1890ff', borderRadius:'20px'}}>
                   <Row>
                       <Col span={6}>
                        <Avatar shape={'square'} src={meeting.owner.principal_image} />
                       </Col>
                       <Col span={18}>
                           <p style={{color:'white'}}>{obj.owner.first_name} {obj.owner.last_name}</p>
                       </Col>
                       <Col span={10}>
                           <Tag color={'white'} style={{color:'#1890ff'}} >{obj.start_date.slice(11,16)} hrs</Tag>
                       </Col>
                       <Col span={14}>
                            <Button style={{color:'white'}} size={'small'} type={'link'}> <CheckCircleOutlined />finalizada</Button>
                       </Col>
                   </Row>
               </Card>
                <Divider style={{width:'200px'}} />
                </div>)

    const confirmDialoges = (obj) => (<div  onClick={() => {
            setVisible(true)
        }}><Card hoverable style={{width:'200px', marginBottom:'10px',borderColor:'#a8071a', borderRadius:'20px'}}>
                   <Row>
                        <Col span={6}>
                           <TeamOutlined style={{fontSize:'22px', color:'#a8071a'}} />
                       </Col>
                       <Col span={18}>
                           <Space>
                           <Text style={{color:'#a8071a'}}>dialogo programático</Text>
                           </Space>
                       </Col>
                       <Col span={10} >
                           <Tag style={{marginTop:'5px'}} color={'#a8071a'}>{obj.start_date.slice(11,16)} hrs</Tag>
                       </Col>
                       <Col span={14}>
                            <Button  style={{color:'#a8071a', marginTop:'5px'}} size={'small'} type={'link'}> <LikeFilled />confirmada</Button>
                       </Col>

                   </Row>
               </Card>
                <Divider style={{width:'200px'}} />
                </div>)

    const nowDialoges = (obj) => (<><Card  hoverable style={{width:'200px',  marginBottom:'10px',borderColor:'#a8071a', borderRadius:'20px'}}>
                   <Row>
                        <Col span={24}>
                           <Button style={{color:'#a8071a', marginBottom:'10px'}} size={'small'} type={'link'}> <TeamOutlined />dialogo programático</Button>
                       </Col>
                       <Col span={12}>
                           <Tag color={'#a8071a'}>{obj.start_date.slice(11,16)} hrs</Tag>
                       </Col>
                       <Col span={12}>
                            <Button style={{backgroundColor:'#a8071a', color:'white', borderColor:'white'}} size={'small'} type={'link'}><Badge status={'processing'} color={'white'} />en vivo</Button>
                       </Col>

                   </Row>
               </Card>
                <Divider style={{width:'200px'}} />
                </>)

    const finishDialoges = (obj) => (<div  onClick={() => {
            setVisible(true)
        }}><Card hoverable style={{width:'200px',  marginBottom:'10px',backgroundColor:'#a8071a', borderRadius:'20px'}}>
                   <Row>
                        <Col span={24}>
                           <Button style={{color:'white', marginBottom:'10px'}} size={'small'} type={'link'}> <TeamOutlined />dialogo programático</Button>
                       </Col>
                       <Col span={10}>
                           <Tag color={'white'} style={{color:'#a8071a'}}>{obj.start_date.slice(11,16)} hrs</Tag>
                       </Col>
                       <Col span={14}>
                            <Button style={{ color:'white', marginLeft:'10px'}} size={'small'} type={'link'}><CheckCircleOutlined /> finalizada</Button>
                       </Col>

                   </Row>
               </Card>
                <Divider style={{width:'200px'}} />
                </div>)


    return(<Col span={8}>
        <Modal
                visible={visible}
                width={'100%'}
                style={{top:0}}
                title={<>{meeting.is_programmatic_dialogues ? <>Dialogo programático: {meeting.start_date.slice(0, 10)} {meeting.start_date.slice(11, 16)} hrs</>:<>{meeting.start_date.slice(0, 10)} {meeting.start_date.slice(11, 16)} hrs</>}

                </>}
                onCancel={()=>setVisible(false)} footer= {[]} >
            <Title>Participantes</Title>
            <Row justify="center" align="top">

                {meeting.participans_invited.map((obj)=><Col lg={8} xs={24} >
                    <Card hoverable title={`${obj.first_name} ${obj.last_name}`} style={{margin:'20px', backgr:'green', borderRadius:'30px'}} >
                        <Descriptions >
                            <Descriptions.Item label={'Email'} span={3}>
                                {obj.email}
                            </Descriptions.Item>
                            <Descriptions.Item label={'Telefono'} span={3}>
                                {obj.phone_number}
                            </Descriptions.Item>
                            <Descriptions.Item label={'Perfil'}>
                                <SingleUser  user={obj}/>
                            </Descriptions.Item>
                        </Descriptions>
                    </Card>
                </Col>)}
                <Row>
                </Row>
            </Row>
        </Modal>
        {start_date_meet <=now & meeting.is_validated ?<>
            {meeting.is_programmatic_dialogues ?
                <>
                    {meeting.is_end ? <>
                        {finishDialoges(meeting)}
                    </>:<>
                        {nowDialoges(meeting)}
                    </>}
                </>:
                <>  {now > incrementent_date ? <>
                    <>{meeting.is_validated ? <>{finishMeeting(meeting)}</>:<></> }
                    </>
                </>:<>
                    {nowMeeting(meeting)}
                    </>}
                </> }  </>:<>
            {meeting.is_validated ? <>
                {meeting.is_programmatic_dialogues ?
            <> {confirmDialoges(meeting)} </> :
                    <>{confiirmMeeting(meeting)}</>}
                    </> :
                <>
                    {now < incrementent_date  && <>{waitingMeeting(meeting)}</> }
                </>}
        </>}
        </Col>)
}


export default MeetingCalendar