import React, {useEffect, useState} from 'react'
import api_links_instances from "../../api/links_instances/endpoints";
import {Button, Row, Col, Typography, message, Spin, Badge} from 'antd'
import MeetWhereby from "../../components/web/links_instances/MeetWhereby"
import {POST_CRAETE_MEET} from '../../api/config'
const { Title } = Typography

const MeetingVideoChat = ({match})=> {

    const uuidMeet = match.params.id

    const initialState = {
        data: null,
        is_loading: false,
        url_meet: ''
    }

    const [state, setState] = useState(initialState)

    async function createMeet(){
        var date = new Date()
        var date_day = date.getDate()
        var date_year = date.getFullYear()
        var date_month = date.getMonth() + 1
        var date_hour = date.getHours()
        var date_min = date.getMinutes()

        var incrementent_date = new Date(date)
        var add_minutes = incrementent_date.getMinutes() + 10
        incrementent_date.setMinutes(add_minutes)

        if(date_min<10){
        date_min = `0${date.getMinutes()}`
        }
        if(date_month<10){
            date_month = `0${date.getMonth()+1}`
        }
        if(date_hour<10){
            date_hour = `0${date.getHours()}`
        }
        if(date_day<10) {
            date_day = `0${date.getDate()}`
        }

       date = new Date(`${date_year}-${date_month}-${date_day}T${date_hour}:${date_min}`)
        const request = await POST_CRAETE_MEET('meetings', {
                                        "isLocked": true,
                                        "roomNamePrefix": `/${uuidMeet}`,
                                        "roomNamePattern": "uuid",
                                        "roomMode": "normal",
                                        "startDate": date,
                                        "endDate": incrementent_date,
                                        "fields": [
                                            "hostRoomUrl"
                                        ]
                                        }).then((response)=> {
                                            console.log(response)
        }).catch((error)=>console.log({error}))
         }

    useEffect(()=>{
        setState({...state, is_loading:true})
        const token = JSON.parse(localStorage.getItem('access_token'))
        const user = JSON.parse(localStorage.getItem('user'))

        async function getMeetData(){
            const request = await api_links_instances.retrieve_meeting({uuid:uuidMeet}).then((response)=> {
                setState({
                    ...state,
                    data: response.data,
                    is_loading: false
                })
                var participans = response.data.participans_invited
                console.log(participans)
                var is_authorized = false
                participans.map((obj)=> {
                    if(obj.id===user.id){
                        is_authorized = true

                    }
                })
                if(is_authorized){
                    message.success('Puedes acceder a está reunión')
                }else{
                    window.location.assign('/')
                }


            }).catch((error)=> {
                window.location.assign('/profile')
            })
            return request
        }
        if(user && token){
            getMeetData()
        }else{
            window.location.assign('/')
        }


    }, [])



    console.log(state)
    return(<Row justify={'center'} style={{width:'100%', height:'100%'}} align={'center'} >{state.data && <>
        {state.is_loading ? <Col style={{textAlign:'center',padding:'100px'}} ><Spin size={'large'}/></Col>:<>
        {state.data.src_host ? <MeetWhereby url={state.url_meet} /> :<Col style={{textAlign:'center',padding:'100px'}}>
                <Title> ID REUNION: {state.data.uuid} </Title>
                <Button onClick={createMeet} type={'primary'} size={'large'} icon={<Badge status={'processing'} color={'white'} />}>Iniciar reunión</Button>
            </Col>
        }

        </>}
    </>}</Row>)

}


export default MeetingVideoChat