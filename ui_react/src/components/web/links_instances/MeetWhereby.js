import React from 'react'


const MeetWhereby = ({url}) => {

    return(<iframe
                src={url}
                allow="camera; microphone; speaker;"
                style={{minHeight:'660px', minWidth:'100%'}}
    />)

}


export default MeetWhereby