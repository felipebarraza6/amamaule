import React from "react";
import api_links_instances from "../../api/links_instances/endpoints";
import {message, notification} from "antd";
import api from "../../api/endpoints";


export const getUsers =  async({dispatch}) =>{
                const request = await api.user.list_users('')
				 			  .then((response)=> {
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

			const getMeetingThursdayMorning = await api_links_instances.list_meetings({
				invited:auth.user.id, year:'2021', month:'04', range_hour:'10,12', day:'15', is_active:'true'})
				.then((response)=> {
					dispatch({
						type:'SET_MORNING_THURSDAY',
						payload: response.data.results
					})
				})

			const getMeetingFridayMorning = await api_links_instances.list_meetings({
				invited:auth.user.id, year:'2021', month:'04', range_hour:'11,12', day:'16', is_active:'true'})
				.then((response)=> {
					dispatch({
						type:'SET_MORNING_FRIDAY',
						payload: response.data.results
					})
				})

			const getMeetingSaturdayMorning = await api_links_instances.list_meetings({
				invited:auth.user.id, year:'2021', month:'04', range_hour:'11,12', day:'17', is_active:'true'})
				.then((response)=> {
					dispatch({
						type:'SET_MORNING_SATURDAY',
						payload: response.data.results
					})
				})

            const getMeetingThursdayAfternoon = await api_links_instances.list_meetings({
				invited:auth.user.id, year:'2021', month:'04', range_hour:'16,16',day:'15', is_active:'true'})
				.then((response)=> {
					dispatch({
						type:'SET_AFTERNOON_THURSDAY',
						payload: response.data.results
					})
				})

            const getMeetingFridayAfternoon = await api_links_instances.list_meetings({
				invited:auth.user.id, year:'2021', month:'04', range_hour:'16,16', day:'16', is_active:'true'})
				.then((response)=> {
					dispatch({
						type:'SET_AFTERNOON_FRIDAY',
						payload: response.data.results
					})
				})

			const getMeetingSaturdayAfternoon = await api_links_instances.list_meetings({
				invited:auth.user.id, year:'2021', month:'04', range_hour:'16,16', day:'17', is_active:'true'})
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

export const postMeeting = async(data, state, dispatch, invited, setLoading, closeDrawer, form) => {

	let start_date = new Date(data.start_date)
	var day = start_date.getDate()
    var month = start_date.getMonth() + 1
    var year = start_date.getFullYear()
    var hours = start_date.getHours()
    var minutes = start_date.getMinutes()

	if(minutes<10){
        minutes = `0${start_date.getMinutes()}`
    }
    if(month<10){
        month = `0${start_date.getMonth()+1}`
    }
    if(hours<10){
        hours = `0${start_date.getHours()}`
    }
    if(day<10) {
        day = `0${start_date.getDate()}`
    }

	let owner = data.owner

	const validate_is_exist = await api_links_instances.list_meetings({
		invited:state.user.id,
		day: day,
		hour:hours,
		minute: minutes,
		is_validated: true
	}).then(async(response)=> {
		if(response.data.count > 0){
			notification.warning({duration:10,message:'PROBLEMAS DE DISPONIBILIDAD', description:'No es posible agendar una nueva reunión en este horario, pues ya tienes una reunión en tu agenda en dicho instante.'})
			setLoading(false)
		}else{
			const validated_invited = await api_links_instances.list_meetings({
				invited: invited.id,
				day: day,
				hour:hours,
				minute: minutes,
				is_validated: true
			}).then(async(response)=> {
				if(response.data.count > 0){
					notification.warning({duration:10,message:'PROBLEMAS DE DISPONIBILIDAD', description:'No es posible agendar una reunión con este usuario, pues ya tiene reservada la fecha. Selecciona una horario diferente.'})
					setLoading(false)
				}else{
					const request_meeting = await api_links_instances.create_meeting(data)
					.then(async(response)=> {
						uuid_meeting = response.data.uuid
						dispatch({type:'SET_RELOAD', value: true})
						getCalendarData({dispatch:dispatch, auth:state})
						dispatch({type:'SET_RELOAD', value: false})
						notification.success({duration:10,message:'REUNIÓN CREADA CORRECTAMENTE ',
								description:'Ahora solo debes esperar la respuesta de tu invitado, recibiras un correo electrónico con la notificación'})

						const send_invitation = await api_links_instances.send_invitation({
							meeting: uuid_meeting,
							invited: invited.id,
							message: data.message
						}).then((response)=> {
							getInvitations({dispatch:dispatch, auth:state})
							notification.success({duration:10,message:'INVITACIÓN ENVÍADA CORRECTAMENTE ',
								description:'Hemos envíado correctamente tu invitación'})
							setLoading(false)
							closeDrawer(false)
							form.resetFields()
						}).catch((response)=> {
							notification.error({message:'ERROR EN ENVIAR INVITACION'})
							setLoading(false)
						})
				}).catch((error)=> {
						notification.error({message:'ERROR EN CREAR REUNION'})
							setLoading(false)
				})
				}
			})
		}
	})
	var uuid_meeting = ''
}


export const updateInvitation = async(data, invitation, dispatch, auth, setLoadingCard) => {
	setLoadingCard(true)
	let start_date = new Date(invitation.meeting.start_date)
	var day = start_date.getDate()
    var month = start_date.getMonth() + 1
    var year = start_date.getFullYear()
    var hours = start_date.getHours()
    var minutes = start_date.getMinutes()

	if(minutes<10){
        minutes = `0${start_date.getMinutes()}`
    }
    if(month<10){
        month = `0${start_date.getMonth()+1}`
    }
    if(hours<10){
        hours = `0${start_date.getHours()}`
    }
    if(day<10) {
        day = `0${start_date.getDate()}`
    }

	if(data.answer){
		const validate_is_exist = await api_links_instances.list_meetings({
		invited:auth.user.id,
		day: day,
		hour:hours,
		minute: minutes,
		is_validated: true
	}).then(async(response)=> {
		if(response.data.count > 0){
			notification.warning({duration:10,message:'PROBLEMAS DE DISPONIBILIDAD', description:'No es aceptar una reunión en este horario, pues ya tienes una reunión en tu agenda en dicho instante.'})
		}else{
			const validated_invited = await api_links_instances.list_meetings({
				invited: invitation.meeting.owner.id,
				day: day,
				hour:hours,
				minute: minutes,
				is_validated: true
			}).then(async(response)=> {
				if(response.data.count > 0){
					notification.warning({duration:10,message:'PROBLEMAS DE DISPONIBILIDAD', description:'No es aceptar una reunión de este usuario, pues ya tiene reservada la fecha.'})
					setLoadingCard(false)
				}else{
					const request_confirm = await api_links_instances.answer_invitation(data, invitation.id)
				.then(async(response)=>{
					message.info('Has aceptado participar en la reunión')
					setLoadingCard(false)

				})
				}
			})
		}
	}).catch((response)=> {
		setLoadingCard(false)
		})

	}else{
		const request_cancel = await api_links_instances.answer_invitation(data, invitation.id)
				.then(async(response)=>{
					message.info('Has cancelado la reunión')
					deleteMeeting({uuid_meeting: invitation.meeting.uuid, dispatch:dispatch, auth:auth})
						.then((response)=> {
							notification.info(
								{
									duration:6,
									message:'Reunión eliminada',
									description:'Hemos eliminado la reunión'
								})
						})
				})
	}


	getInvitations({dispatch, auth})
	getCalendarData({dispatch, auth})

}


export const deleteMeeting = async ({uuid_meeting='', dispatch, auth}) => {
	const request = api_links_instances.delete_meeting({id_meeting:uuid_meeting})
		.then((response)=> {
			notification.success({duration:6,message:'Reunión cancelada, se ha eliminado la invitación enviada.'})
			getCalendarData({dispatch:dispatch, auth:auth})
			getInvitations({dispatch:dispatch, auth:auth})
		}).catch((error)=> {message.error('Error al eliminar la reunion')})
	return request
}

