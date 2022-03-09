import React, { createContext, useReducer, useState,useEffect, useContext } from 'react'
import {Col, Row, Card, Tag, Button, Collapse, Table, Modal, Input,Form, TimePicker, Select, Affix } from 'antd'
import { MailOutlined, CalendarOutlined,
		CoffeeOutlined, SendOutlined, ClockCircleOutlined  } from '@ant-design/icons'
import { groups_reducer } from "../../reducers/groups"
import ListUsers from "../../components/web/links_instances/ListUsers"
import Calendar from "../../components/web/links_instances/Calendar"
import {AuthContext} from '../../App'
import {getUsers, getCalendarData, getInvitations} from '../../actions/meetings_rounds/getData'
import { updateInvitation } from '../../actions/meetings_rounds/getData'
import ListInvitations from "../../components/web/links_instances/ListInvitations"
import { FormProvider } from 'rc-field-form'
const { Panel } = Collapse
const { Option } = Select
export const GroupsContext = createContext()


const LinksInstances = () => {

	const { state:auth } = useContext(AuthContext)
	const [size, setSize] = useState()
	const [dateN, setDate] = useState(null)

	const initialState = {
		list_users: null,
		meetings: [],
		my_invitations: null,
		my_invitations_sends: null,
		reload: false,
	}

	const [state, dispatch] = useReducer(groups_reducer, initialState)

	useEffect(()=> {
		getCalendarData({dispatch, auth})
		getUsers({dispatch})
		getInvitations({dispatch, auth})
		setSize(window.innerWidth)
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
						<ListUsers per_page={30} />
					</Card>
			</Col>			
			<Col lg={14} xs={24} style={{padding:'10px'}}>
			<Collapse style={{marginBottom:'10px'}}>
			<Panel header={<><h3><MailOutlined style={styles.icon} />Invitaciones enviadas</h3></>} key="2">
				<Table bordered columns={ [
                            {
                                title: 'HORARIO',
                                
                                render: (x) => {
									return(`Dia ${x.date_meeting.slice(8,10)} / ${x.date_meeting.slice(11,16)} hrs`)
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
										txt = 'ESPERANDO RESPUESTA...'
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
				<Panel header={<><h3><MailOutlined style={styles.icon} />Invitaciones recibidas</h3></>} key="1">
				<Table bordered columns={ [
                            {
                                title: 'HORARIO',
                                ellipsis: true,
                                render: (x) => {
									return(`Dia ${x.date_meeting.slice(8,10)} / ${x.date_meeting.slice(11,16)} hrs`)
								}
                            },
                            {
                                title: 'USUARIO',                                
                                render: (x) => {
									return(`${x.owner.first_name} ${x.owner.last_name}`)
								}
                            },
                            {
                                title: 'ESTADO',
								ellipsis: true,
                                render: (x) => {
									let txt = ''
									if(x.answer && !x.is_active){
										txt = 'CONFIRMADA'
									}else if(!x.answer && x.is_active){
										txt = 'ESPERANDO RESPUESTA...'
									} else if(!x.answer && !x.is_active && !x.rescheduled){
										txt= 'RECHAZADO'
									}  
									else if(x.rescheduled && !x.answer){
										txt = 'RE-AGENDADA'
									}
									return(<Tag color='magenta'>{txt}</Tag>)
								}                                
                            }, 
							{
								render: (x)=> {
									return(<>
										{x.is_active && <Row>
											<Col span={24} style={{margin:'2px'}}>
												<Button  onClick={()=> {
													//updateInvitation({}, x.id, dispatch, auth, setLoad)													
													updateInvitation({answer:true}, x, dispatch, auth)
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
        													var date_formated = `2022-03-${values.day}T${format_time}`																																						
															
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
																<Option value={'29'}>Martes 29</Option>
																<Option value={'30'}>Miércoles 30</Option>
															</Select>
														</Form.Item>
														<Form.Item name='hour_minutes' rules={[{ required: true, message: 'Selecciona un horario'}]}>
															<TimePicker
															size={'large'}
															disabledHours={() => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ,10,11, 14, 17, 18, 19, 20, 21, 22, 23, 24]}
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
        

			</Collapse>
				<Card title={<><CalendarOutlined style={styles.icon} /> Calendario</>} extra={<>
				<Button type={'dashed'} style={{backgroundColor: '#b05db9', color:'white', borderColor:'white', marginLeft:'10px'}}>
					Ver turorial
				</Button>
				</>}>
					{!state.reload &&  <Calendar /> }
				</Card>
			</Col>
			<Col lg={4} xs={24} style={{padding:'0px'}}>
				<Affix offsetTop={80}>
				<Card hoverable title={<><CoffeeOutlined style={styles.icon} /> Soporte</>} style={{marginBottom:'0px'}}>
					Si tienes alguna duda o problema, escríbenos a soporte@amamaule.cl
				</Card>				
				</Affix>
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
