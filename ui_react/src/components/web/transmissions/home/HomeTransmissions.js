import React, { useState, useContext } from 'react'
import ListTransmissions from '../list/ListTransmissions'
import SDKZoom from '../single/SDKZoom'
import {AuthContext} from '../../../../App'

const HomeTransmissions = () => {

    const {state:user_es} = useContext(AuthContext)

    const initialState = {
        is_retrieve:false,
        transmission_selected: null
    }    

    const [state, setState] = useState(initialState)
    console.log(state)
    
    

    return(<>{!state.is_retrieve ? 
        <ListTransmissions changeState={setState} globalState={state} />:
        <SDKZoom transmission={state.transmission_selected} user={user_es.user} />
        }
        </>
    )


}

export default HomeTransmissions