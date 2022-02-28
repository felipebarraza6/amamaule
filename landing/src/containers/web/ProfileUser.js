import React, {useContext, useState, useEffect } from 'react'
import { Menu, Result, Col, Row, Button, Badge,
        Descriptions, Card, Tag, Avatar, message, Affix, Form, Inpu, notification, Input } from 'antd'
import { RocketOutlined ,UserOutlined, UploadOutlined, 
        CheckOutlined, EditOutlined, ForkOutlined, FileAddFilled,
        EyeOutlined, LaptopOutlined,
        GroupOutlined, CalendarOutlined } from '@ant-design/icons'
import { AuthContext } from '../../App'
import { NavBar } from 'antd-mobile'
import ProfileData from '../../components/web/profile/ProfileData'
import Workshops from '../../components/web/profile/Workshops'
import Viewings from '../../components/web/profile/Viewings'
import api from '../../api/endpoints'
import UserProfileData from '../../components/web/profile/UpdateProfileData'
import { Footer } from 'antd/lib/layout/layout'
import LinksInstances from './LinksInstances'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomeTransmissions from '../../components/web/transmissions/home/HomeTransmissions'
import UpdateProfileData from "../../components/web/profile/UpdateProfileData";
import ListTransmissions from "../../components/web/transmissions/list/ListTransmissions";
const { TextArea } = Input

const ProfileUser = () => {

    const { state, dispatch } = useContext(AuthContext)
    
    const [currentNavigation, setCurrentNavigation] = useState('0')
    const [imageFile, setImageFile] = useState(null)
    var isMaule = true
    
    if(state.user){
      if(state.user.region === 'Región del Maule' && state.user.is_verified === true){
        isMaule = false
      }
    }

    const [size, setSize] = useState()

    function setNavigator(current) {
        setCurrentNavigation(current.key)
  
    }

    var access_visio = false
    if(state.user){

      var type1 = state.user.type_user1
      var type2 = state.user.type_user2
      var type3 = state.user.type_user3
      
      if(type1 === 'AM'){
        type1 = 'Artista / Manager'
      }else if(type1 === 'GES'){
        type1 = 'Gestion Cultural'
          access_visio = true
      }else if(type1 === 'RE'){
        type1 = 'Representante'
          access_visio = true
      }else if(type1 === 'PROV'){
        type1 = 'Proveedor'
      }else if(type1 === 'PRO'){
        type1 = 'Profesional Asociado'
      }

       if(type2 === 'AM'){
        type2 = 'Artista / Manager'
      }else if(type2 === 'GES'){
        type2 = 'Gestion Cultural'
           access_visio = true
      }else if(type2 === 'RE'){
        type2 = 'Representante'
           access_visio = true
      }else if(type2 === 'PROV'){
        type2 = 'Proveedor'
      }else if(type2 === 'PRO'){
        type2 = 'Profesional Asociado'
      }

 if(type3 === 'AM'){
        type3 = 'Artista / Manager'
      }else if(type3 === 'GES'){
        type3 = 'Gestion Cultural'
        access_visio = true
      }else if(type3 === 'RE'){
        type3 = 'Representante'
     access_visio = true
      }else if(type3 === 'PROV'){
        type3 = 'Proveedor'
      }else if(type3 === 'PRO'){
        type3 = 'Profesional Asociado'
      }

    }

    useEffect(()=> {
      setSize(window.innerWidth)
      if(access_visio){
          notification.info({message:'Propuestas Maulinas para visionar durante AMA 2021. Accede y conoce estas propuestas durante el encuentro',
              description:<Button onClick={()=>setCurrentNavigation('3')} type={'primary'}>REVISAR</Button>
              }
          )
      }
      
    },[])

    return(<>
              {size < 800 ? 
                <NavBar mode='dark'
                style={{backgroundColor:'#F58B88'}}               
            > {state.user && <>
                <Button disabled={!state.user.is_verified} shape={'round'} type='link' style={currentNavigation === '0' ?  styles.buttonAct : styles.buttonNo } onClick={()=>setCurrentNavigation('0')}>
                  <RocketOutlined style={styles.icon} />{currentNavigation === '0' && 'Transmisiones'}
              </Button>
              <Button shape={'round'} type='link' style={currentNavigation === '1' ?  styles.buttonAct : styles.buttonNo } onClick={()=>setCurrentNavigation('1')}>
                  <UserOutlined  style={currentNavigation === '1' ?  styles.iconActive : styles.icon } />{currentNavigation === '1' && 'Perfil'}
              </Button>
              <Button disabled={!state.user.is_verified} shape={'round'} type='link' style={currentNavigation === '2' ?  styles.buttonAct : styles.buttonNo } onClick={()=>setCurrentNavigation('2')}>
                  <CheckOutlined style={styles.icon} />{currentNavigation === '2' && 'Talleres'}
              </Button>
              
              <Button disabled={!access_visio} shape={'round'} type='link' style={currentNavigation === '3' ?  styles.buttonAct : styles.buttonNo } onClick={()=>setCurrentNavigation('3')}>
                  <EyeOutlined style={styles.icon} />{currentNavigation === '3' && 'Visionados'}
              </Button>
                    <Button shape={'round'} type='link' style={currentNavigation === '5' ?  styles.buttonAct : styles.buttonNo } onClick={()=>setCurrentNavigation('5')}>
                  <ForkOutlined style={styles.icon} />{currentNavigation === '5' && 'Rondas'}
              </Button>

              </>}
            </NavBar>
              :
              <Affix>
              <Menu 
                    mode='horizontal'
                    selectedKeys={[currentNavigation]} 
                    onClick={(current)=> setNavigator(current)}
                    theme='dark'
                    style={styles.menuOv}
                >
                 <Menu.Item icon={<LaptopOutlined />} key={'0'} 
                      style={currentNavigation === '0' ?  styles.hoverItem : styles.menuItem }>
                    Transmisiones
                  </Menu.Item>                                    
                  <Menu.Item  icon={<UserOutlined/>} key={'1'} 
                      style={currentNavigation === '1' ?  styles.hoverItem : styles.menuItem }>
                    Perfil
                  </Menu.Item>
                  {state.user &&
                  <Menu.Item disabled={!state.user.is_verified} icon={<CheckOutlined/>} key={'2'} 
                      style={ currentNavigation === '2' ?  styles.hoverItem : styles.menuItem  }  >
                    Talleres
                  </Menu.Item>}
                  {state.user &&                                         
                    <Menu.Item disabled={!access_visio}  icon={<EyeOutlined/>} key={'3'}
                       style={ currentNavigation === '3' ?  styles.hoverItem : styles.menuItem  } >
                      Visionados
                    </Menu.Item>                    
                  }
                  {state.user &&
                  <>
                  <Menu.Item disabled={!state.user.is_verified} icon={<GroupOutlined />} key={'5'}
                      style={currentNavigation === '5' ?  styles.hoverItem : styles.menuItem }>
                    Rondas de Vinculación
                  </Menu.Item>

                  </>
                  }
              </Menu></Affix>}
              <Row align={'center'} >
                  {currentNavigation === '0' &&
                      <ListTransmissions />
                  }
                  {currentNavigation === '5' && 
                    <LinksInstances />
                  }   
                  {currentNavigation === '1' &&
                    <>
                    <Col lg={{span:14}}  xs={{span:24}}  style={{padding:'10px'}}  >
                    {state.user && 
                      <>
                      {!state.user.is_verified ?
                        <ProfileData />:
                        <Card title={<><EditOutlined style={{fontSize:'20px',marginRight:'20px'}} /> Editar perfil</>} >

                            <UpdateProfileData user={state.user} />

                          <Footer style={{marginTop:'20px'}}>
                          <label for='file_dos' ><> 
                            <h4>Actualizar dossier...</h4> 
                            <center>
                              <Avatar shape='square' style={styles.uploadAvatar} >
                                  <FileAddFilled style={{fontSize:'40px', paddingTop:'10px'}} />
                              </Avatar>                                                          
                            </center>                                 
                            </>
                        </label>
                        <input id='file_dos' type='file' style={styles.uploadFile1} onChange={async(evt)=>{
                                          setImageFile(evt.target.files[0])           
                                          const request = await api.user.upload_file('dossier_archivo', evt.target.files[0], state.user.id).then((response)=> {
                                            message.success('Dossier actualizado!')                                                                                        
                                          }).catch((error)=>{
                                            message.error('Intendalo más tarde')
                                          })
                              } }  />    
                          </Footer>
                        </Card>
                      }
                      </>
                    }
                    </Col>
                    </>
                  }
                  {currentNavigation === '2' && 
                  <Col lg={{span:24}}  xs={{span:24}}  style={{padding:'10px'}}  >
                      <Workshops />
                  </Col>
                  }
                  {currentNavigation === '3' &&
                  <Col lg={{span:24}}  xs={{span:24}}  style={{padding:'10px'}}  >
                      <Viewings />
                  </Col>
                  }
                
                {currentNavigation === '1' &&
                <Col lg={{span:10}} xs={{span:24}}  style={{padding:'10px'}}>
                {state.user &&
                 <Descriptions                     
                    bordered={true} 
                    extra={`@${state.user.username}`}
                    title={<>{state.user.principal_image ? <>                      
                      <label for='file' labe='asd'><>                                   
                            <Avatar shape='square' style={styles.uploadAvatar} src={state.user.principal_image}  />                                                          
                            </>
                        </label>
                        <input id='file' type='file'  accept='image/*' style={styles.uploadFile} onChange={async(evt)=>{
                                          setImageFile(evt.target.files[0])           
                                          const request = await api.user.upload_img('principal_image', evt.target.files[0], state.user.username).then((response)=> {
                                            message.success('Imagen actualizada!')                                                                                        
                                          }).catch((error)=>{
                                            message.error('Intendalo más tarde')
                                          })
                                          
                                          let access_token = state.access_token
                                          
                                          const request_user = await api.user.profile(state.user.username).then((response)=> {
                                            const user = response.data
                                            dispatch({
                                              type: 'LOGIN',
                                              payload: {
                                                access_token,
                                                user
                                              }
                                            })
                                        })                                                                                                                                                                 
                              } }  />                    
                      </>:
                      <>
                        <label for='file' labe='asd'><>                                   
                            <Avatar shape='square' style={styles.uploadAvatar}>
                              <UploadOutlined style={{fontSize:'30px', paddingTop:'14px'}} />
                            </Avatar>                                      
                            </>
                        </label>
                        <input id='file' type='file' accept='image/*' style={styles.uploadFile} onChange={async(evt)=>{
                                          setImageFile(evt.target.files[0])           
                                          const request = await api.user.upload_img('principal_image', evt.target.files[0], state.user.username).then((response)=> {
                                            message.success('Imagen actualizada!')                                                                                        
                                          }).catch((error)=>{
                                            message.error('Intendalo más tarde')
                                          })                                          
                                                                                                                                                                 
                              } }   />                    
                    </>
                    }                      
                    </>}
                    style={{backgroundColor:'white', padding:'20px'}} 
                    layout='vertical'>
                      <Descriptions label='Perfil #1'><Tag color='volcano'  >{type1}</Tag></Descriptions>
                      <Descriptions label='Perfil #2'><Tag color='volcano'>{type2}</Tag></Descriptions>
                      <Descriptions label='Perfil #3'><Tag color='volcano' >{type3}</Tag></Descriptions>
                      <Descriptions.Item label="Nombre"> {state.user.first_name} {state.user.last_name} </Descriptions.Item>
                      <Descriptions.Item label="Telefono"> {state.user.phone_number} </Descriptions.Item>
                      <Descriptions.Item label="Usuario"> {state.user.username} </Descriptions.Item>
                      <Descriptions.Item span={3} label="Correo Electrónico"> {state.user.email} </Descriptions.Item>
                      <Descriptions.Item label="País" >
                        {state.user.country}
                      </Descriptions.Item>
                      <Descriptions.Item label="Región" span={2}>
                        {state.user.region}
                      </Descriptions.Item>
                        {state.user.country === 'Chile' &&
                          <>
                            <Descriptions.Item label="Provincia" >
                              {state.user.province}
                            </Descriptions.Item>
                            <Descriptions.Item label="Comuna">
                              {state.user.commune}
                            </Descriptions.Item>
                          </>
                        }
                 </Descriptions>
                }
                </Col>}
              </Row>
</>)
}


const styles = {
    uploadAvatar:{
      width:'70px', 
      height:'70px', 
      border:'3px solid rgb(97, 38, 61)',
      backgroundColor: 'rgb(97, 38, 61)',
      cursor:'pointer'
    },
    uploadFile: {
      opacity: '0',                  
    },
    uploadFile1: {
      opacity: '0',                        
      zIndex:'-1'
    },
    container: {
        padding:'30px'
    },
    menuOv: {
      backgroundColor: '#F58B88',
      textAlign:'right',
    },
    menuItem: {
      color:'white',
      backgroundColor:'#F58B89',
      marginRight:'10px',      
      marginLeft:'10px'

    },
    hoverItem: {
      color:'white',
      backgroundColor: '#CE3D4B',
      marginRight:'10px',
      paddingBottom:'2px',
      marginLeft:'10px'
    },
    icon: {
      fontSize: '18px'
    },
    iconActive: {
      fontSize: '20px',            
    },
    buttonNo: {
      backgroundColor: '#F58B89',
      color:'white'
    },
    buttonAct: {
      backgroundColor: '#CE3D4B',
      color:'white'
    }
}


export default ProfileUser
