import React, { createContext, useReducer, useState,useEffect, useContext } from 'react'
import {Col, Spin,Typography, Row, Card, Tag, Button, Collapse, Table, Modal,Form, TimePicker, Select, Affix } from 'antd'
import { MailOutlined, CalendarOutlined, WarningOutlined, ChromeOutlined,
		CoffeeOutlined,SendOutlined  } from '@ant-design/icons'
import { groups_reducer } from "../../reducers/groups"
import ListUsers from "../../components/web/links_instances/ListUsers"
import Calendar from "../../components/web/links_instances/Calendar"
import {AuthContext} from '../../App'
import {getUsers, getCalendarData, getInvitations} from '../../actions/meetings_rounds/getData'
import { updateInvitation } from '../../actions/meetings_rounds/getData'
import pdf_i from '../../assets/TUTORIAL RONDAS FINAL.pdf'
const { Panel } = Collapse
const { Option } = Select
const { Paragraph } = Typography
export const GroupsContext = createContext()


const LinksInstances = () => {

	const { state:auth } = useContext(AuthContext)
	const [size, setSize] = useState(null)
  const [disabled, setDisabled] = useState(false)
	const [dateN, setDate] = useState(null)
  const {pathname} = window.location

	const initialState = {
		list_users: null,
		meetings: [],
		my_invitations: null,
		my_invitations_sends: null,
		reload: false,
	}

	const [state, dispatch] = useReducer(groups_reducer, initialState)

	useEffect(()=> {
    
    const auth = {
      access_token: JSON.parse(localStorage.getItem('access_token' || null)),
      user: JSON.parse(localStorage.getItem('user' || null))
    }

    setSize(window.innerWidth)
		getCalendarData({dispatch, auth})
		getUsers({dispatch})
		getInvitations({dispatch, auth})
	}, [])



	return(
		<GroupsContext.Provider
			value={{
				state,
				dispatch
			}}
		>
			<Col lg={6} xs={24} style={{padding:'10px'}}>
					<Card hoverable title={<><SendOutlined style={styles.icon} /> Agenda tu reunión</>} >
            <ListUsers />
					</Card>
			</Col>			
			<Col lg={18} xs={24} style={{padding:'0px'}}>
			<Collapse defaultActiveKey={['1']} style={{marginBottom:'10px', marginTop:'10px'}}>
			
				<Panel key='1' header={<><h3><MailOutlined style={styles.icon} />Invitaciones recibidas</h3></>} key="1">
				<Table bordered  columns={ [
                            {
                                title: 'Horario',
                                render: (x) => {
									return(`${x.date_meeting.slice(8,10)} / ${x.date_meeting.slice(11,16)} hrs`)
								}
                            },
                            {
                                title: 'Usuario',                                
                                render: (x) => {
									return(`${x.owner.first_name} ${x.owner.last_name}`)
								}
                            },
                {
                  ellipsis:true,
								render: (x)=> {
                  let txt = ''
									if(x.answer && !x.is_active){
										txt ='CONFIRMADA'
									}else if(!x.answer && x.is_active){
                        txt=''
									} else if(!x.answer && !x.is_active && !x.rescheduled){
										txt= 'RECHAZADO'
									}  
									else if(x.rescheduled && !x.answer){
										txt = 'RE-AGENDADA'
									}
									return(<>
                     
                    {txt !== '' &&  <Row justify='center'><Tag color='volcano'> {txt} </Tag></Row> }   
										{x.is_active && <Row>
											<Col span={24} style={{margin:'2px'}}>
												<Button disabled={disabled}  onClick={()=> {
													//updateInvitation({}, x.id, dispatch, auth, setLoad)													
                          setDisabled(true)
													updateInvitation({answer:true}, x, dispatch, auth).then((x)=> {
                            setDisabled(false) 
      
                          })
												}} type='primary' style={{width:'100%',backgroundColor:'rgb(24, 197, 204)', borderColor:'rgb(24, 197, 204)'}} size='small'>Aceptar</Button>
											</Col>
											<Col onClick={()=> {
													//updateInvitation({}, x.id, dispatch, auth, setLoad)
													updateInvitation({answer:false}, x, dispatch, auth)
												}}  span={24} style={{margin:'2px'}}>
												<Button danger type='primary' style={{width:'100%'}} size='small'>Rechazar</Button>
											</Col>
											<Col span={24} style={{margin:'2px'}}>
												<Button onClick={()=> {
													//updateInvitation({}, x.id, dispatch, auth, setLoad)
													Modal.info({
														title:'NUEVA FECHA DE REUNION',
														icon: <CalendarOutlined />,
															content: <Form onFinish={(values)=>{
															
															var format_time = values.hour_minutes.format('HH:mm:ss')
        													var date_formated = `2023-04-${values.day}T${format_time}`																																						
															
															updateInvitation({
																rescheduled:true, 
																date_meeting: date_formated},
																x, 
																dispatch, 
																auth
															).then((r)=> Modal.destroyAll())
														}}>
														<Form.Item name='day' rules={[{ required: true, message: 'Selecciona un dia'}]}>
															<Select size={'large'} style={{width:'100%'}} placeholder={'Selecciona el día de la reunión'}>
																<Option value={'25'}>Martes 25</Option>
																<Option value={'26'}>Miércoles 26</Option>
																<Option value={'27'}>Jueves 27</Option>
															</Select>
														</Form.Item>
														<Form.Item name='hour_minutes' rules={[{ required: true, message: 'Selecciona un horario'}]}>
															<TimePicker
															size={'large'}
															disabledHours={() => [0, 1, 2, 3, 4, 5, 6, 7, 8, 18, 19, 20, 21, 22, 23, 24]}
															minuteStep={20}
															hideDisabledOptions = {true}
															inputReadOnly={true}																																										
															showNow={false} style={{width:'100%'}} placeholder={'Selecciona la hora(formato 24 hrs)'} format={'HH:mm'} />
														</Form.Item>
														<Form.Item>
															<Button htmlType='submit' 
																type='primary' 
																style={{marginTop:'30px',float:'right',backgroundColor:'rgb(255, 186, 49)', borderColor:'rgb(255, 186, 49)'}}>
																	Re-Agendar</Button>
														</Form.Item>
														</Form>,																												
														okText: 'Volver',
														cancelText: 'Cancelar'
														
													})													
												}} style={{width:'100%',backgroundColor:'rgb(176, 93, 185)', borderColor:'rgb(176, 93, 185)'}} type='primary' size='small'>Re-Agendar</Button>
											</Col>
										</Row>}
									</>)
								}
							}
                            ]}
                            
                            dataSource={state.my_invitations}>

                        </Table>
				</Panel>
      <Panel header={<><h3><MailOutlined style={styles.icon} />Invitaciones enviadas</h3></>} key="2">
				<Table bordered columns={ [
                            {
                                title: 'HORARIO',
                                
                                render: (x) => {
									return(`${x.date_meeting.slice(8,10)} / ${x.date_meeting.slice(11,16)} hrs`)
								}
                            },
                            {
                                title: 'USUARIO',                                
                                render: (x) => {
									return(`${x.invited.first_name} ${x.invited.last_name}`)
								}
                            },
                            {
                                title: 'ESTADO',
                                render: (x) => {
									let txt = ''
									if(x.answer && !x.is_active){
										txt = 'CONFIRMADA'
									}else if(!x.answer && x.is_active){
										txt = 'SIN RESPUESTA'
									} else if(!x.answer && !x.is_active && !x.rescheduled){
										txt= 'RECHAZADO'
									}  
									else if(x.rescheduled && !x.answer){
										txt = 'RE-AGENDADA'
									}
									return(<Tag color='magenta'>{txt}</Tag>)
								}                                
                            }, 
                            ]} dataSource={state.my_invitations_sends}>

                        </Table>
				</Panel>	  

			</Collapse>
				<Card title={<><CalendarOutlined style={styles.icon} /> Calendario</>} >
          
					{!state.reload &&  <Calendar /> }
				</Card>
			</Col>
			

		</GroupsContext.Provider>
	)
}


const styles = {
	icon: {
		backgroundColor: '#ffba31',
		color: 'white',
		borderRadius: '10%',
		padding: '8px',
		fontSize: '20px',
		marginRight: '10px',
	}
}


export default LinksInstances
