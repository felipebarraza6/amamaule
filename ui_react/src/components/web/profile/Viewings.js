import React, { useContext, useEffect, useState} from 'react'
import api from '../../../api/endpoints'
import { Tag, Form, message,Button, Select, Card, Input, Col, Row, Typography  } from 'antd'
const { Title, Paragraph} = Typography



const Viewings = () => {
  
    const initialState = {
        data: null,
        is_loading: false
    }

    const [state, setState] = useState(initialState)

    useEffect(()=> {

        async function getViewings(){
            setState({...state, is_loading: true})
            const request = await api.viewings.list_viewings().then((response)=> {
                setState({...state, data:response.results, is_loading: false})
            })
            console.log(request)
        }

        getViewings()

    }, [])

    console.log(state)
    return(
        <><div style={{'marginTop':'20px', 'marginLeft':'20px'}}><Title>Visionados seleccionados 2021</Title></div>
      <Row style={{backgroundColor:'white', padding:'30px'}}>
          {state.data &&
            <>
                {state.data.map((obj)=>
                    <Col xs={24} lg={6}><Card hoverable style={{margin:'5px'}}  title={`${obj.user.first_name} ${obj.user.last_name}`}>
                    <Row>
                        <Col lg={12} xs={24}>
                            <center>
                                <img src={obj.user.principal_image} width={'50%'} style={{marginBottom:'30px'}} />
                            </center>
                        </Col>
                        <Col xs={24} lg={12} ><a target='__blank' href={obj.url_vw}><Button type={'dashed'}>URL Contenido</Button></a></Col>
                    </Row>
                    <Row style={{marginTop:'20px'}}>
                        <Col lg={24} xs={24}>
                        {obj.message}
                        </Col>
                    </Row>
                </Card></Col>)}
            </>
          }
      </Row>
            </>
    )

}


export default Viewings
