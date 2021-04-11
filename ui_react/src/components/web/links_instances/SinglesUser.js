import React, {useState, useEffect} from 'react'
import { Modal, Button, Tooltip, Row, Col, Tag, Avatar, Typography, Divider } from 'antd'
import {ProfileOutlined, FileImageOutlined, DownloadOutlined, ProfileFilled} from '@ant-design/icons'
import api from '../../../api/endpoints'
const {Text, Paragraph} = Typography


const SingleUser = ({user, is_invitations}) => {
    console.log(user)
    if(user.type_user1==='AM'){
        user.type_user1 = 'Artista / Manager'
    }else if(user.type_user1==='PROV'){
        user.type_user1 = 'Proveedor (transporte, técnica, catering, otros)'
    }else if(user.type_user1==='RE'){
        user.type_user1= 'Representante de organización o empresa, pública o privada'
    }else if(user.type_user1==='GES'){
        user.type_user1= 'Gestor Cultural / Producción / Programación'
    }else if(user.type_user1=='PRO'){
        user.type_user1 = 'Profesional asociado a las artes escénicas'
    }

    if(user.type_user2==='AM'){
        user.type_user2 = 'Artista / Manager'
    }else if(user.type_user2==='PROV'){
        user.type_user2 = 'Proveedor (transporte, técnica, catering, otros)'
    }else if(user.type_user2==='RE'){
        user.type_user2= 'Representante de organización o empresa, pública o privada'
    }else if(user.type_user2==='GES'){
        user.type_user2= 'Gestor Cultural / Producción / Programación'
    }else if(user.type_user2=='PRO'){
        user.type_user2 = 'Profesional asociado a las artes escénicas'
    }

    if(user.type_user3==='AM'){
        user.type_user3 = 'Artista / Manager'
    }else if(user.type_user3==='PROV'){
        user.type_user3 = 'Proveedor (transporte, técnica, catering, otros)'
    }else if(user.type_user3==='RE'){
        user.type_user3= 'Representante de organización o empresa, pública o privada'
    }else if(user.type_user3==='GES'){
        user.type_user3= 'Gestor Cultural / Producción / Programación'
    }else if(user.type_user3=='PRO'){
        user.type_user3 = 'Profesional asociado a las artes escénicas'
    }

    const initialState = {
        visible:false,
        user: user,
        profile:null
    }

    const [state, setState] = useState(initialState)

    useEffect(()=> {
        async function getProfile(user_id){
            console.log(user_id)
            const request = await api.user.get_profile_center(user_id).then((response)=> {
                console.log(response)
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
                <Modal width={'800px'} style={{top:0}} visible={state.visible} onCancel={closeModal} footer={[ <Tag color={'volcano'}>{user.country}</Tag>, <Tag color={'volcano'}>{user.region}</Tag>]} title={`${user.first_name} ${user.last_name}`} >
                    <Row>
                        <Col lg={6} xs={24} style={{textAlign:'center'}} >
                            {user.principal_image ?
                            <img src={user.principal_image} width={'100px'} style={{marginBottom: '10px',}} />:
                                <Avatar shape={'square'} icon={<FileImageOutlined style={{marginTop:'16px',marginBottom:'10px', fontSize:'70px'}} />} style={{width:'120px', height:'100px'}} />
                            }
                        </Col>
                        <Col lg={17}>
                            <Paragraph style={{marginTop:'20px'}}><Text mark>{user.type_user1}</Text></Paragraph>
                            <Paragraph><Text mark>{user.type_user2}</Text></Paragraph>
                            <Paragraph><Text mark>{user.type_user3}</Text></Paragraph>
                        </Col>
                    </Row>
                    <Divider />
                    <Row>
                        <Col lg={6} xs={24}>
                            <Text mark>Nombre Entidad</Text>
                        </Col>
                        <Col lg={18} xs={24}>
                                <Paragraph>
                                {state.profile && <>{state.profile.nombre_entidad}</> }
                            </Paragraph>
                        </Col>
                    </Row>
                    <Row style={{marginTop:'0%'}} >
                        <Col lg={6} xs={24}>
                            <Text mark>Cargo</Text>
                        </Col>
                        <Col lg={18} xs={24}>
                                <Paragraph>
                                {state.profile && <>{state.profile.cargo}</> }
                            </Paragraph>
                        </Col>
                    </Row>
                    <Row style={{marginTop:'0%'}} >
                        <Col lg={6} xs={24}>
                            <Text mark>Perfil Profesional</Text>
                        </Col>
                        <Col lg={18} xs={24}>
                                <Paragraph align={'justify'}>
                                {state.profile && <>{state.profile.perfil_profesional}</> }
                            </Paragraph>
                        </Col>
                    </Row>
                    <Row style={{marginTop:'0%'}} >
                        <Col span={6}>{state.profile && <>
                            {state.profile.dossier_archivo &&
                          <Button onClick={()=> {
                              if(state.profile){
                              window.open(`${state.profile.dossier_archivo}`)
                                  }
                          }} icon={<DownloadOutlined />} type={'primary'} >DESCARGAR DOSSIER</Button>}
                          </>}
                        </Col>
                    </Row>
                </Modal>
                {is_invitations ? <>

                    <Tooltip title={`Perfil @${user.username}`} color={'volcano'}>
                    <Button shape={'circle'} type={'link'} onClick={openModal} size={'medium'} icon={<ProfileFilled />} style={{backgroundColor:'white', marginTop:'10px'}}/>
                </Tooltip>

                    </>:
                    <Tooltip title={`Perfil @${user.username}`}  color={'volcano'}>
                    <Button shape={'square'} onClick={openModal} size={'medium'} icon={<ProfileOutlined />} style={styles.button}/>
                </Tooltip>
                }



            </>
        }
        </>)

}


const styles = {
    button: {
         borderColor:'rgb(97, 38, 61)' ,
          backgroundColor:'rgb(97, 38, 61)',
          color:'white',
          marginRight:'10px'
    }
}


export default SingleUser