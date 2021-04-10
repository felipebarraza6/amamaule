import React from 'react'


const MeetWhereby = ({url}) => {

    return(<iframe
                src={url}
                allow="camera; microphone; fullscreen; speaker; display-capture"
                height="100%" width="100%"
    />)

}


export default MeetWhereby