import React, {useState, useContext, useEffect} from 'react'
import { Button, Typography } from 'antd'
import { GroupsContext } from '../../../containers/web/LinksInstances'
import CalendarWeb from './calendar_view/CalendarWeb'
import CalendarMobil from './calendar_view/CalendarMobil'
import { deleteMeeting } from '../../../actions/meetings_rounds/getData'
import { AuthContext } from '../../../App'

const { Paragraph } = Typography

const Calendar = () => {

    const { state, dispatch } = useContext(GroupsContext)
    const {state:auth} = useContext(AuthContext)
    const [size, setSize] = useState()

    const copy_data = state.meetings.slice()

    useEffect(()=> {
      setSize(window.innerWidth)      
    }, [])

    const ButtonsOptionsMeeting = (date, is_end) => {
      const [disabled, setDisabled] = useState(false)
      /* crear script para validar la funcionalidad del boton */
      return(<Button disabled={disabled}>Aceptar</Button>)
    }

    const ParticipantsTxt = (first_name, last_name) => {

      return(<Paragraph>{first_name} {last_name}</Paragraph>)
    }

    return(
        <>{size > 800 ? 
            <CalendarWeb 
              copy_data={copy_data} 
              delete_meeting={deleteMeeting} 
                />:
            <CalendarMobil 
              copy_data={copy_data}
              delete_meeting={deleteMeeting}
            />
        }
        </>        
    )
    
}



export default Calendar
