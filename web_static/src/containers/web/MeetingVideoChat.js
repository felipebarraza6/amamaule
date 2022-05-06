import React, {useEffect, useState, useContext} from 'react'
import api_links_instances from "../../api/links_instances/endpoints";
import {Button, Row, Col, Typography, message, Spin, Badge} from 'antd'
import { FullscreenExitOutlined } from '@ant-design/icons'
import MeetWhereby from "../../components/web/links_instances/MeetWhereby"
import { AuthContext } from '../../App';
import api from "../../api/endpoints";
const { Title } = Typography

const MeetingVideoChat = ({match})=> {

    const { state:auth } = useContext(AuthContext)

    const uuidMeet = match.params.id

    const initialState = {
        data: null,
        is_loading: false,
        user: ''
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
        var add_minutes = incrementent_date.getMinutes() + 20
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
        var mode ='normal'
       date = new Date(`${date_year}-${date_month}-${date_day}T${date_hour}:${date_min}`)
        if(state.data){
            if(state.data.is_programmatic_dialogues){
                mode = 'group'
                var add_minutess_max = incrementent_date.getMinutes() + 100
                incrementent_date.setMinutes(add_minutess_max)
            }
        }


        setState({...state, is_loading: true})
        console.log(auth.user.id)
        console.log(state.data.owner.id)
        
        if(auth.user.id === state.data.owner.id){
            const request = await api_links_instances.update_meeting(state.data.uuid, { is_owner_online: true})
        } else if(auth.user.id === state.data.invited.id){
            const request = await api_links_instances.update_meeting(state.data.uuid, { is_invited_online: true})
        }
       
        
        const request = await api_links_instances.create_meeting_whereby({
            "uuid_meeting":state.data.uuid,
            "start_date": date,
            "end_date": incrementent_date,
            "mode": mode,            
        }).then((response)=> {
            window.location.reload()
            setState({...state, is_loading: false})
        }).catch((error)=> {
            window.location.reload()
        })


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
                    is_loading: false,
                    user: user
                })
                var is_dialogue = response.data.is_programmatic_dialogues
                            var time_conunt = 0
                            if(is_dialogue){
                                time_conunt = 30 * 60 * 10000
                            }else {
                                time_conunt = 1000 * 60 * 20
                            }
                setInterval(async() => {

                            const request =  await api_links_instances.delete_meeting_whereby({
                                "id_meeting": response.data.message_invited,
                                "uuid_meeting": response.data.uuid

                            }).then((response)=> {
                                window.location.assign('/profile/myrounds/')
                            })
                            }, time_conunt)

                var participans = response.data.participans_invited
                var is_authorized = false
                participans.map((obj)=> {
                    if(obj.id===user.id){
                        is_authorized = true

                    }
                })
                if(is_authorized & !response.data.is_end){
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



    return(<Row justify={'center'} style={{width:'100%', height:'100%'}} align={'center'} >
        {state.data && <>
            {state.is_loading ?
                <Col style={{textAlign:'center',padding:'100px'}} ><Spin size={'large'}/>
                </Col>
                :<>
                    {state.data.src_host ? <>
                        <Button onClick={async()=> {
                            const request =  await api_links_instances.delete_meeting_whereby({
                                "id_meeting": state.data.message_invited,
                                "uuid_meeting": state.data.uuid
                            }).then((response)=> {
                                window.location.assign('/')
                            })
                        }
                        } size={'large'} style={{ margin:'4px' }} icon = { <FullscreenExitOutlined/> } danger>TERMINAR REUNIÓN</Button>
                        <MeetWhereby url={state.data.src_host} user={state.user} state={state} /> </>:
                        <Col style={{textAlign:'center',padding:'100px'}}>
                            <Title> ID REUNION: {state.data.uuid} </Title>
                            <Button style={{backgroundColor:'rgb(176, 93, 185)', borderColor:'rgb(176, 93, 185)'}} onClick={createMeet} type={'primary'} size={'large'} icon={<Badge status={'processing'} color={'white'} />}>Iniciar reunión</Button>
               </Col>
        }

        </>}
    </>}</Row>)

}


export default MeetingVideoChat
