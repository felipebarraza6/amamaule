import React, { createContext, useReducer, useState,useEffect, useContext } from 'react'
import {Col, Card, Tag, Button } from 'antd'
import { MailOutlined, CalendarOutlined,
		CoffeeOutlined, SendOutlined, ClockCircleOutlined } from '@ant-design/icons'
import { groups_reducer } from "../../reducers/groups"
import ListUsers from "../../components/web/links_instances/ListUsers"
import Calendar from "../../components/web/links_instances/Calendar"
import {AuthContext} from '../../App'
import {getUsers, getCalendarData, getInvitations} from '../../actions/meetings_rounds/getData'
import ListInvitations from "../../components/web/links_instances/ListInvitations"

export const GroupsContext = createContext()


const LinksInstances = () => {

	const { state:auth } = useContext(AuthContext)
	const [size, setSize] = useState()

	const initialState = {
		list_users: null,
		morning_meetings: {
			thursday: [],
			friday: [],
			saturday: []
		},
		evening_meetings: {
			thursday: [],
			friday: [],
			saturday: []
		},
		my_invitations: null,
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
			<Col lg={7} xs={24} style={{padding:'10px'}}>
					<Card hoverable title={<><SendOutlined style={styles.icon} /> Agenda tu reunión</>} >
						<ListUsers per_page={30} />
					</Card>
			</Col>
			<Col lg={12} xs={24} style={{padding:'10px'}}>
				<Card title={<><CalendarOutlined style={styles.icon} /> Calendario</>} extra={<><Button onClick={()=> {
					getCalendarData({dispatch, auth})
					getInvitations({dispatch, auth})
				}} type={'primary'} icon ={<ClockCircleOutlined/>} >Actualizar</Button>
				<Button type={'dashed'} style={{backgroundColor: 'rgb(206, 61, 75)', color:'white', borderColor:'white', marginLeft:'10px'}}>
					Ver turorial
				</Button>
				</>}>
					{!state.reload &&  <Calendar /> }
				</Card>
			</Col>
			<Col lg={5} xs={24} style={{padding:'10px'}}>
				<Card hoverable title={<><CoffeeOutlined style={styles.icon} /> Mesa de ayuda</>} style={{marginBottom:'10px'}}>
					Si tienes alguna duda o problema para agendar tu reunión, escríbenos a <Tag style={{fontSize: '15px'}}>ama@qualitynet.cl</Tag>
				</Card>
				{size > 800 ?

				<Card title={<><MailOutlined style={styles.icon} /> Invitaciones</>} style={{marginBottom:'10px'}}>
					<ListInvitations invitations={state.my_invitations} />
				</Card>
				 : <Card title={<><MailOutlined style={styles.icon} /> Invitaciones</>} style={{marginBottom:'10px'}}>
					<ListInvitations invitations={state.my_invitations} />
				</Card>}
			</Col>

		</GroupsContext.Provider>
	)
}


const styles = {
	icon: {
		backgroundColor: 'rgb(206, 61, 75)',
		color: 'white',
		borderRadius: '10%',
		padding: '8px',
		fontSize: '20px',
		marginRight: '10px',
	}
}


export default LinksInstances