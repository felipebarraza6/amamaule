import React, {useContext} from "react";
import api_links_instances from "../../api/links_instances/endpoints";
import {message, notification} from "antd";
import api from "../../api/endpoints";


export const getUsers =  async({dispatch}) =>{
                const request = await api.user.list_users('')
				 			  .then((response)=> {
				 			  	console.log(response)
								dispatch({
									type:'SET_USERS',
									list_users: response.data.results
								})
				 			  })

                return request
}

export const getInvitations = async({dispatch, auth}) => {

	const request = await api_links_instances.list_invitations({user:auth.user.id})
				.then((response)=> {
					dispatch({
						type:'SET_INVITATIONS',
						payload: response.data.results
					})
				})

	return request
}

export const getCalendarData = async ({dispatch, auth}) => {
			console.log(auth)
			const getMeetingThursdayMorning = await api_links_instances.list_meetings({
				invited:auth.user.id, year:'2021', month:'04', range_hour:'10,12', day:'15', is_active:'true'})
				.then((response)=> {
					dispatch({
						type:'SET_MORNING_THURSDAY',
						payload: response.data.results
					})
				})

			const getMeetingFridayMorning = await api_links_instances.list_meetings({
				invited:auth.user.id, year:'2021', month:'04', range_hour:'10,12', day:'16', is_active:'true'})
				.then((response)=> {
					dispatch({
						type:'SET_MORNING_FRIDAY',
						payload: response.data.results
					})
				})

			const getMeetingSaturdayMorning = await api_links_instances.list_meetings({
				invited:auth.user.id, year:'2021', month:'04', range_hour:'10,12', day:'17', is_active:'true'})
				.then((response)=> {
					dispatch({
						type:'SET_MORNING_SATURDAY',
						payload: response.data.results
					})
				})

            const getMeetingThursdayAfternoon = await api_links_instances.list_meetings({
				invited:auth.user.id, year:'2021', month:'04', hour:'16', range_minute:'0,30',day:'15', is_active:'true'})
				.then((response)=> {
					dispatch({
						type:'SET_AFTERNOON_THURSDAY',
						payload: response.data.results
					})
				})

            const getMeetingFridayAfternoon = await api_links_instances.list_meetings({
				invited:auth.user.id, year:'2021', month:'04', hour:'16', range_minute:'0,30',day:'16', is_active:'true'})
				.then((response)=> {
					dispatch({
						type:'SET_AFTERNOON_FRIDAY',
						payload: response.data.results
					})
				})

			const getMeetingSaturdayAfternoon = await api_links_instances.list_meetings({
				invited:auth.user.id, year:'2021', month:'04', hour:'16', range_minute:'0,30',day:'17', is_active:'true'})
				.then((response)=> {
					dispatch({
						type:'SET_AFTERNOON_SATURDAY',
						payload: response.data.results
					})
				})



            return {
			    getMeetingThursdayMorning,
                getMeetingFridayMorning,
                getMeetingSaturdayMorning,

                getMeetingThursdayAfternoon,
                getMeetingFridayAfternoon,
                getMeetingSaturdayAfternoon
            }
}

export const postMeeting = async(data, state, dispatch, invited) => {

	var uuid_meeting = ''

	const request_meeting = await api_links_instances.create_meeting(data).then((response)=> {
		uuid_meeting = response.data.uuid
		dispatch({type:'SET_RELOAD', value: true})
		getCalendarData({dispatch:dispatch, auth:state})
		dispatch({type:'SET_RELOAD', value: false})
	})

	const send_invitation = await api_links_instances.send_invitation({
		meeting: uuid_meeting,
		invited: invited.id,
		message: data.message
	}).then((response)=> {
		console.log(response)
		getInvitations({dispatch:dispatch, auth:state})
	})

	return request_meeting
}

export const updateInvitation = async(data, invitation, dispatch, auth) => {

	const request = await api_links_instances.answer_invitation(data, invitation).then((response)=>{
		message.success('Invitacion aceptada!')

		console.log(response)
		getInvitations({dispatch, auth})
		getCalendarData({dispatch, auth})

	})

}


export const deleteMeeting = async ({uuid_meeting='', dispatch, auth}) => {
	const request = api_links_instances.delete_meeting({id_meeting:uuid_meeting}).then((response)=> {
		console.log(response)
		notification.success({message:'Reunion cancelado, se ha eliminado la invitación enviada.'})
		getCalendarData({dispatch:dispatch, auth:auth})
	}).catch((response)=> {console.log(response)})
	return request
}

