import React, {useState, useContext, useEffect} from 'react'
import { Button, Typography, Row, Col, Tag } from 'antd'
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

    const ButtonsOptionsMeeting = (x) => {
       const [disabled, setDisabled] = useState(false)
      /* crear script para validar la funcionalidad del boton */
        
        var str_meeting_time = x.start_date.slice(8,16)
        
        useEffect(()=> {
            const timer = setInterval(()=>{
            
            var today = new Date()
            var str_time = `${today.getDate()}T${today.getHours()}:${today.getMinutes()}`  
            
            if(str_time > str_meeting_time){
                 setDisabled(false) 
            }else{
                setDisabled(true)
            }
          }, 1000)


        }, [])

        return(<>{!x.is_end ? <Row>
                <Col span={24}>
                  <Button disabled={disabled} 
                    size='small' type='primary' 
                    style={styles.btnGo}
                    onClick={()=> {
                      window.open(`https://amarondas.cl/profile/meetings/${x.uuid}`)
                    }}>ingresar</Button>
                </Col>
                <Col span={24}>
                  <Button style={styles.btncancel} danger size='small' onClick={()=> {
                            deleteMeeting({
                              uuid_meeting: x.uuid, 
                              dispatch: dispatch, 
                              auth: auth})
                          }} type='primary'>cancelar</Button></Col>
                </Row>: <center><Tag color='pink'>Finalizada</Tag></center>}
          </>)
      }

    const ParticipantsTxt = (x) => {
        var p1 = x[0].id || null
        var p2 = x[1].id || null

        const auth = {
          access_token: JSON.parse(localStorage.getItem('access_token' || null)),
          user: JSON.parse(localStorage.getItem('user' || null))
        }

        var my = auth.user.id
        
        
        if(my !== p1){
          return (<p>{x[0].first_name} {x[0].last_name}</p>)
        }

        if(my !== p2){
          return <p>{x[1].first_name} {x[1].last_name}</p>
        }

    }

    return(
        <>{size > 800 ? 
            <CalendarWeb 
              copy_data={copy_data} 
              delete_meeting={deleteMeeting} 
              ProcessUser={ParticipantsTxt}
              ProcessBtn={ButtonsOptionsMeeting}
                />:
            <CalendarMobil 
              copy_data={copy_data}
              delete_meeting={deleteMeeting}
              ProcessUser={ParticipantsTxt}
              ProcessBtn = {ButtonsOptionsMeeting}
            />
        }
        </>        
    )
    
}


    const styles = {
      btnGo: {
        backgroundColor:'rgb(176, 93, 185)', 
        borderColor:'rgb(176, 93, 185)',
        margin:'5px',
      },
      btncancel: {
        margin:'5px' 
      }
    }


export default Calendar
