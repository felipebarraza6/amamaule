import { GET, POST, UPDATE, DELETE } from "../config"


const list_meetings = ({
                           user = '',
                           invited = '',
                           year = '',
                           month = '',
                           hour = '',
                           day = '',
                           is_active = '',
                           minute = '',
                           is_dialog = '',
                           range_hour = '',
                           range_minute = ''
                       }) => {


    var participants = ``
    if(invited){
        participants =`participans_invited=${invited}&`
    }
    const request = GET(`meetings/?is_active=${is_active}&owner=${user}&${participants}start_date__year=${year}&start_date__month=${month}&start_date__day=${day}&start_date__hour=${hour}&start_date__minute=${minute}&is_programmatic_dialogues=${is_dialog}&start_date__hour__range=${range_hour}&start_date__minute__range=${range_minute}`)
    return request
}

const list_invitations = ({user=''}) => {
    const request = GET(`meetings-invitations/?invited=${user}`)
    return request
}

const retrieve_meeting = ({uuid = ''}) => {
    const request = GET(`meetings/${uuid}/`)
    return request
}

const delete_meeting = ({id_meeting= ''}) => {
    const request = DELETE(`meetings/${id_meeting}/`)
    return request
}

const create_meeting = (data) => {

    const request = POST('meetings/', data)
    return request
}

const send_invitation = (data) => {
    const request = POST('/meetings-invitations/', data)
    return request
}

const answer_invitation = (data, invitation) => {
    const request = UPDATE(`/meetings-invitations/${invitation}/`, data)
    return request
}

const api_links_instances = {
    list_meetings: list_meetings,
    list_invitations: list_invitations,
    create_meeting: create_meeting,
    send_invitation: send_invitation,
    answer_invitation: answer_invitation,
    delete_meeting: delete_meeting,
    retrieve_meeting: retrieve_meeting
}


export default api_links_instances


