import React, { useContext, useEffect, useState} from 'react'
import api from '../../../api/endpoints'
import { Tag, Form, message,Button, Result, Card, Input, Col, Row, Typography, Avatar  } from 'antd'
import { YoutubeOutlined } from '@ant-design/icons'
import {AuthContext} from '../../../App'
const { Title, Paragraph, Text} = Typography




const Viewings = () => {

    const {state:user} = useContext(AuthContext)
    console.log(user)
    const initialState = {
        data: null,
        is_loading: false,
        profile: null
    }

    const [state, setState] = useState(initialState)

    useEffect(()=> {

        async function getViewings(){
            setState({...state, is_loading: true})
            const request = await api.viewings.list_viewings().then((response)=> {
                console.log(response)
                setState({...state, data:response.results, is_loading: false})
            })

            const request_user = await api.user.get_profile_center(user.user.id).then((response)=> {
                setState({...state, profile:response.data})
            })

        }

        getViewings()

    }, [])

    console.log(state)
    return(
        <><Row style={{'marginBottom':'20px', 'marginLeft':'20px'}}>
            <Col lg={18} xs={24}>
            <Title>Visionados seleccionados 2021</Title>
                </Col>
            <Col lg={6} xs={24}>
                {state.profile &&
                <>
                    {!state.profile.is_aproved_visio &&
                    <Card hoverable bordered={true} style={{backgroundColor:'rgb(97, 38, 61)', color:'white', borderRadius:'20px'}} width={'10px'} >
                        <Title level={4} style={{textAlign:'center', color:'white'}}>
                        ¡Tu visionado ha sido seleccionado!
                            </Title>

                    </Card>
                    }
                </>
                }
            </Col>
        </Row>
      <Row style={{backgroundColor:'white', padding:'30px'}}>{state.data && <>
          {state.data.length > 0 ?
            <>
                {state.data.map((obj, index)=>
                    <Col xs={24} lg={6}><Card hoverable style={{margin:'5px', borderRadius:'20px',backgroundColor:'rgb(97, 38, 61)'}} extra={<Text style={{color:'white', borderRadius:'10%',padding:'7px',backgroundColor:'rgb(206, 61, 75'}}>{index + 1}</Text>}  title={<Text style={{color:'white'}}>{obj.user.first_name} {obj.user.last_name}</Text>}>
                    <Row>
                        <Col lg={12} xs={24} align={'center'}>
                            {obj.user.principal_image ?
                               <Avatar shape={'square'} size={100}  src={obj.user.principal_image} />:
                               <Avatar shape={'square'} size={80} />
                            }
                        </Col>
                        <Col xs={24} lg={12} ><a target='__blank' href={obj.url_vw}>
                            <Button
                                style={{backgroundColor:'rgb(206, 61, 75)',
                                    borderColor:'white',color:'white'}} type={'dashed'}><YoutubeOutlined style={{fontSize:'18px'}} /> Reproducir</Button></a></Col>
                    </Row>
                    <Row style={{marginTop:'20px'}}>
                        <Col lg={24} xs={24}>
                            <Paragraph style={{color:'white'}} align={'justify'} ellipsis={{tooltip:obj.message, rows:5}} >
                                {obj.message}
                            </Paragraph>
                        </Col>
                    </Row>
                </Card></Col>)}
                    </>:<Col lg={24} xs={24} ><Result
                  status="500"
                  title="No disponible"
                  subTitle="Lo sentimos, aún no hay información disponible."
              /></Col>
          }
           </>}
      </Row>
            </>
    )

}


export default Viewings
