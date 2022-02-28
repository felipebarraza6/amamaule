import React from 'react'


const MeetWhereby = ({url, user}) => {
    var full_name = `${user.first_name} ${user.last_name}`
    return(<iframe
                src={`${url}?displayName=${full_name}&lang=es`}
                allow="camera; microphone; speaker;"
                style={{minHeight:'660px', minWidth:'100%'}}
    />)

}


export default MeetWhereby