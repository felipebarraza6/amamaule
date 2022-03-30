import React, {useContext, useEffect} from 'react'
import { AuthContext } from '../../../App'
import api_links_instances from '../../../api/links_instances/endpoints'


const MeetWhereby = ({url, user, state}) => {
    var full_name = `${user.first_name} ${user.last_name}`

    const { state:auth} = useContext(AuthContext)

    const evaluateOnline = async()=> {
        if(auth.user.id === state.data.owner.id){
            const request = await api_links_instances.update_meeting(state.data.uuid, { is_owner_online: true})
        } else if(auth.user.id === state.data.invited.id){
            const request = await api_links_instances.update_meeting(state.data.uuid, { is_invited_online: true})
        }

    }

    useEffect(()=> {
        evaluateOnline()
    }, [])
    

    return(<iframe
                src={`${url}?displayName=${full_name}&lang=es`}
                allow="camera; microphone; speaker;"
                style={{minHeight:'660px', minWidth:'100%'}}
    />)

}


export default MeetWhereby