import React, {useState, useEffect} from 'react'
import { Modal, Button, Tooltip, Row, Col, Tag, Avatar, Typography, Divider } from 'antd'
import {ProfileOutlined, FileImageOutlined, DownloadOutlined, ProfileFilled} from '@ant-design/icons'
import api from '../../../api/endpoints'
const {Text, Paragraph, Title} = Typography


const SingleUser = ({user, is_invitations}) => {


    if(user.type_user==='GES'){
        user.type_user = 'Gestor/a cultural, programador/a o similar'
    }else if(user.type_user==='AR'){
        user.type_user = 'Artista escénico o representante'
    }else if(user.type_user==='AV'){
        user.type_user= 'Artista de la visualidad'
    }else if(user.type_user==='PT'){
        user.type_user= 'Profesional o trabajador relacionado a las artes escénicas o de la visualidad'
    }else if(user.type_user=='PS'){
        user.type_user = 'Proveedor/a de bienes y servicios asociados'
    }else if(user.type_user =='OPP'){
        user.type_user = 'Organización pública o privada' 
    }

    const initialState = {
        visible:false,
        user: user,
        profile:null
    }

    const [state, setState] = useState(initialState)

    useEffect(()=> {
        async function getProfile(user_id){

            const request = await api.user.get_profile_center(user_id).then((response)=> {
                setState({
                    ...state,
                    profile: response.data
                })
            })
        }
        getProfile(state.user.id)
    },[])

    const openModal = () => {
        setState({...state,
            visible: true
        })
    }

    const closeModal = () => {
        setState({...state,
            visible: false
        })
    }


    return(<>

        {state.user &&
            <>
                <Modal width={'800px'} style={{top:25}} visible={state.visible} onCancel={closeModal} footer={[ <Tag color={'pink'}>{user.country}</Tag>, <Tag color={'pink'}>{user.region}</Tag>]} title={`${user.first_name} ${user.last_name}`} >
                    <Row>
                        <Col lg={6} xs={24} style={{textAlign:'center'}} >
                            {user.profile ?
                            <img src={user.profile.avatar} width={'100px'} style={{marginBottom: '10px',}} />:
                                <Avatar shape={'square'} icon={<FileImageOutlined style={{marginTop:'16px',marginBottom:'10px', fontSize:'70px'}} />} style={{width:'120px', height:'100px'}} />
                            }
                        </Col>
                        <Col lg={17}>
                            <Title level={3} style={{marginTop:'20px'}}>{user.type_user}</Title>
                        </Col>
                    </Row>
                    <Divider />
                    <Row>
                        
                        <Col lg={24} xs={24}>
                                <Paragraph stlye={{align:'justify'}}>
                                  {state.profile && <>{state.profile.what_looking.map((x)=>
                                <>{window.innerWidth > 800 ?  
                                  <Tag color={'pink'} style={{margin:'5px'}}>{x}</Tag>
                                   : <div style={{marginBottom:'10px'}}><Text mark>{x}</Text></div>}
                                </>

                                )}</> }
                            </Paragraph>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} xs={24}>
                            <strong><Text>Reseña</Text></strong>
                        </Col>
                        <Col lg={18} xs={24}>
                                <Paragraph style={{align:'justify'}}>
                                {state.profile && <>{state.profile.review}</> }
                            </Paragraph>
                        </Col>
                    </Row>
                    <Row style={{marginTop:'0%'}} >
                        <Col lg={6} xs={24}>
                            <strong><Text>Categorías</Text></strong>
                        </Col>
                        <Col lg={18} xs={24}>
                                <Paragraph>
                                {state.profile && <>{state.profile.options_profile.map((x)=> 
                                  <>{window.innerWidth > 800 ? 
                                    <Tag color={'pink'}>{x}</Tag>:
                                    <div style={{marginBottom:'15px'}}>
                                      <Text mark> {x} </Text>
                                    </div>
                                  }
                                  </>
                                )}</> }
                            </Paragraph>
                        </Col>
                    </Row>
                    <Row style={{marginTop:'0%'}} >
                        
                        <Col lg={18} xs={24}>
                                <Paragraph align={'justify'}>
                                {state.profile && <>{state.profile.website}</> }
                            </Paragraph>
                        </Col>
                    </Row>
                    <Row style={{marginTop:'0%'}}  justify='end'>
                        <Col >{state.profile && <>
                            {state.profile.dossier_file &&                            
                          <Button onClick={()=> {
                              if(state.profile){
                              window.open(`${state.profile.dossier_file}`)
                                  }
                          }} icon={<DownloadOutlined />} style={{backgroundColor:'rgb(176, 93, 185)', borderColor:'rgb(176, 93, 185)'}} type={'primary'} >DESCARGAR DOSSIER</Button>}
                          </>}
                        </Col>
                    </Row>
                </Modal>
                {is_invitations ? <>

                    <Tooltip title={`Perfil @${user.username}`} color={'#ff6d3c'}>
                    <Button shape={'circle'} type={'link'} onClick={openModal} size={'medium'} icon={<ProfileFilled />} style={{backgroundColor:'white', marginTop:'10px'}}/>
                </Tooltip>

                    </>:
                    <Tooltip title={`Perfil @${user.username}`}  color={'#ff6d3c'}>
                    <Button shape={'square'} onClick={openModal} size={'medium'} icon={<ProfileOutlined />} style={styles.button}/>
                </Tooltip>
                }



            </>
        }
        </>)

}


const styles = {
    button: {
         borderColor:'#18c5cc' ,
          backgroundColor:'#18c5cc',
          color:'white',
          marginRight:'10px'
    }
}


export default SingleUser
