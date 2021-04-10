import React, { useState, useContext } from 'react'
import ListTransmissions from '../list/ListTransmissions'
import {AuthContext} from '../../../../App'


const HomeTransmissions = () => {

    const {state:user_es} = useContext(AuthContext)

    const initialState = {
        is_retrieve:false,
        transmission_selected: null
    }    

    const [state, setState] = useState(initialState)

    return(<>{!state.is_retrieve &&
           <ListTransmissions is_public={false} changeState={setState} globalState={state} />
        }
        </>
    )
}


export default HomeTransmissions