import React, {useContext, useState, useEffect } from 'react'
import { Menu, Col, Row, Button,
        Descriptions, Card, Tag, 
        Avatar, message, Affix, 
        notification, Input, Tooltip, Typography } from 'antd'
import { RocketOutlined ,UserOutlined, UploadOutlined, 
        CheckOutlined, EditOutlined, ForkOutlined, FileAddFilled,
        EyeOutlined, LaptopOutlined,
        GroupOutlined } from '@ant-design/icons'
import { AuthContext } from '../../App'
import { NavBar } from 'antd-mobile'
import ProfileData from '../../components/web/profile/ProfileData'
import Workshops from '../../components/web/profile/Workshops'
import Workshops2 from '../../components/web/profile/Workshops2'
import WorkshopsFace from '../../components/web/profile/WorkshopsFace'
import Viewings from '../../components/web/profile/Viewings'
import { Link } from 'react-router-dom'
import api from '../../api/endpoints'
import { Footer } from 'antd/lib/layout/layout'
import LinksInstances from './LinksInstances'
import ListTransmissionsPresencial from '../../components/web/transmissions/list/ListTransmissionsPresencial'
import UpdateProfileData from "../../components/web/profile/UpdateProfileData"
import ListTransmissions from "../../components/web/transmissions/list/ListTransmissions"
import LinksInstancesAE from '../../components/web/profile/LinkInstancesAE'
import LinksInstancesAV from '../../components/web/profile/LinkInstancesAV'


const ProfileUser = () => {

    const { state, dispatch } = useContext(AuthContext)    
    const [profile, setProfile] = useState(null)
    const [currentNavigation, setCurrentNavigation] = useState('1')
    const [currentNavigationT, setCurrentNavigationT] = useState('6')
    const [imageFile, setImageFile] = useState(null)    

    const [isDigital, setIsDigital] = useState(true)
    const [txtName, SetTxtName] = useState('')
    
    const [size, setSize] = useState()

    function setNavigator(current) {
        setCurrentNavigation(current.key)
  
    }
    function setNavigatorT(current) {
      setCurrentNavigationT(current.key)

  }


  

  

  if(state.user){        
    var type_user = state.user.type_user
    var txt_type = ''
    var disabled = true
    
    if(type_user === 'GES'){
      txt_type = 'Gestor/a cultural, programador/a o similar'
    }else if(type_user === 'AR'){
      txt_type = 'Artista escénico o representante'        
    }else if(type_user === 'AV'){
      txt_type = 'Artista de la visualidad'        
    }else if(type_user === 'PT'){
      txt_type = 'Profesional o trabajador relacionado a las artes escénicas o de la visualidad'
    }else if(type_user === 'PS'){
      txt_type = 'Proveedor/a de bienes y servicios asociados'
    }else if(type_user === 'OPP'){
      txt_type = 'Organización pública o privada' 
    }else if(type_user === 'ADM'){
      txt_type = 'Administrador de sistema'      
      disabled = false
    }else{
     txt_type = 'NOT'
    }

  }

  async function getUserData(user) {
    const request = await api.user.get_profile_center(user).then((response)=> {
        //setState(response.data)
        setProfile(response.data)
        
    }).catch((error)=> {
        console.log(error)
    })        
    return request
}
   
    
   

    useEffect(()=> {            
      
      setSize(window.innerWidth)           
    },[])

    

    return(<>
              {size < 800 ? <>
                <NavBar back={null} mode='dark'
               style={{backgroundColor:'#18c5cc'}}               
            > {state.user && <>

              
                
              <Button shape={'round'} type='link' style={currentNavigationT === '6' ?  styles.buttonAct : styles.menuItemT } onClick={()=>{
              setCurrentNavigationT('6') 
              setIsDigital(true)}}>
                  <LaptopOutlined  style={currentNavigationT === '6' ?  styles.iconActive : styles.menuItemT } />{currentNavigationT === '6' && 'Digital'}
              </Button>              
                  <Button shape={'round'} type='link' style={currentNavigationT === '7' ?  styles.buttonAct : styles.menuItemT } onClick={()=>{
                    setCurrentNavigationT('7')
                    setIsDigital(false)
                    
                    }}>
                  <UserOutlined style={styles.icon} />{currentNavigationT === '7' && 'Presencial'}
              </Button>

              </>}
            </NavBar>
            
            {currentNavigationT == 6 ? <NavBar back={null} mode='dark'
               style={{backgroundColor:'#b05db9'}}               
            > {state.user && <>
                <Button disabled={false} shape={'round'} type='link' style={currentNavigation === '0' ?  styles.buttonAct : styles.buttonNo } onClick={()=>setCurrentNavigation('0')}>
                  <RocketOutlined style={styles.icon} />{currentNavigation === '0' && 'Contenido'}
              </Button>
              <Button shape={'round'} type='link' style={currentNavigation === '1' ?  styles.buttonAct : styles.buttonNo } onClick={()=>setCurrentNavigation('1')}>
                  <UserOutlined  style={currentNavigation === '1' ?  styles.iconActive : styles.icon } />{currentNavigation === '1' && 'Perfil'}
              </Button>
              <Button disabled={false} shape={'round'} type='link' style={currentNavigation === '2' ?  styles.buttonAct : styles.buttonNo } onClick={()=>setCurrentNavigation('2')}>
                  <CheckOutlined style={styles.icon} />{currentNavigation === '2' && 'Talleres'}
              </Button>
             {state.user.type_user === 'ADM' &&
              <Button  shape={'round'} type='link' style={currentNavigation === '3' ?  styles.buttonAct : styles.buttonNo } onClick={()=>setCurrentNavigation('3')}>
                  <EyeOutlined style={styles.icon} />{currentNavigation === '3' && 'Soporte'}
              </Button>
              } 
                    <Button disabled={!state.user.is_verified} shape={'round'} type='link' style={currentNavigation === '5' ?  styles.buttonAct : styles.buttonNo } onClick={()=>setCurrentNavigation('5')}>
                  <Link to='/profile/myrounds/'><ForkOutlined style={styles.icon} />{currentNavigation === '5' && 'Rondas'}</Link>
              </Button>

              </>}
            </NavBar>: <NavBar back={null} mode='dark'
               style={{backgroundColor:'#b05db9'}}               
            > {state.user && <>
              <Button disabled={false} shape={'round'} type='link' style={currentNavigation === '0' ?  styles.buttonAct : styles.buttonNo } onClick={()=>setCurrentNavigation('0')}>
                  <RocketOutlined style={styles.icon} />{currentNavigation === '0' && 'Contenido'}
              </Button> 
              <Button shape={'round'} type='link' style={currentNavigation === '1' ?  styles.buttonAct : styles.buttonNo } onClick={()=>setCurrentNavigation('1')}>
                  <UserOutlined  style={currentNavigation === '1' ?  styles.iconActive : styles.icon } />{currentNavigation === '1' && 'Perfil'}
              </Button>
              <Button disabled={false} shape={'round'} type='link' style={currentNavigation === '2' ?  styles.buttonAct : styles.buttonNo } onClick={()=>setCurrentNavigation('2')}>
                  <CheckOutlined style={styles.icon} />{currentNavigation === '2' && 'Talleres'}
              </Button>              
              <Button disabled={false} shape={'round'} type='link' style={currentNavigation === '12' ?  styles.buttonAct : styles.buttonNo } onClick={()=>setCurrentNavigation('12')}>
                  <ForkOutlined style={styles.icon} />{currentNavigation === '12' && 'Rondas AE'}
              </Button> 
              <Button disabled={false} shape={'round'} type='link' style={currentNavigation === '11' ?  styles.buttonAct : styles.buttonNo } onClick={()=>setCurrentNavigation('11')}>
                  <ForkOutlined style={styles.icon} />{currentNavigation === '11' && 'Rondas AV'}
              </Button> 
              </>}
            </NavBar>}
                
            </>
              :
              <Affix>
              <Menu 
                    mode='horizontal'                   
                    theme='dark'
                    style={styles.menuT}
                >
                  <Button icon={<LaptopOutlined />}  type='link' onClick={()=> setIsDigital(true)}
                      style={isDigital ?  styles.hoverItemT : styles.menuItemT }>
                    Digital
                  </Button>                                    
                  <Button  icon={<UserOutlined/>} type='link' onClick={()=> setIsDigital(false)} 
                      style={!isDigital ?  styles.hoverItemT : styles.menuItemT }>
                    Presencial
                  </Button>
                  
              </Menu>
              
            <Menu 
                mode='horizontal'
                selectedKeys={[currentNavigation]} 
                onClick={(current)=> setNavigator(current)}
                theme='dark'
                style={styles.menuOv}
            >
              {isDigital ? <>
              {state.user && 
             <Menu.Item disabled={false} icon={<LaptopOutlined />} key={'0'} 
                  style={currentNavigation === '0' ?  styles.hoverItem : styles.menuItem }>
                Contenido
              </Menu.Item> }                                   
              <Menu.Item  icon={<UserOutlined/>} key={'1'} 
                  style={currentNavigation === '1' ?  styles.hoverItem : styles.menuItem }>
                Perfil
              </Menu.Item>
              {state.user &&
              <Menu.Item disabled={false} icon={<CheckOutlined/>} key={'2'} 
                  style={ currentNavigation === '2' ?  styles.hoverItem : styles.menuItem  }  >
                Talleres
              </Menu.Item>}              
              {state.user && <>
                {state.user.type_user === 'ADM' &&                                         
                  <Menu.Item   icon={<EyeOutlined/>} key={'3'}
                    style={ currentNavigation === '3' ?  styles.hoverItem : styles.menuItem  } >
                      Soporte
                  </Menu.Item>                    
                }
              </>}
              {state.user &&
              <>
              <Menu.Item disabled={!state.user.is_verified} icon={<GroupOutlined />} key={'5'}
                  style={currentNavigation === '5' ?  styles.hoverItem : styles.menuItem } >
                <Link to='profile/myrounds/'>Rondas de Vinculación</Link>
              </Menu.Item>

              </>
              }
              </>  :
              <>
           
            {state.user && <>
              <Menu.Item disabled={false} icon={<LaptopOutlined />} key={'0'} 
                  style={currentNavigation === '0' ?  styles.hoverItem : styles.menuItem }>
                Contenido
              </Menu.Item>    
            <Menu.Item  icon={<UserOutlined/>} key={'1'} 
                  style={currentNavigation === '1' ?  styles.hoverItem : styles.menuItem }>
                Perfil
              </Menu.Item>
              <Menu.Item disabled={false} icon={<GroupOutlined />} key={'12'}
                  style={currentNavigation === '12' ?  styles.hoverItem : styles.menuItem }>
                Rondas de Vinculación / artistas escénicos
                
              
              </Menu.Item>
              <Menu.Item disabled={false} icon={<GroupOutlined />} key={'11'}
                  style={currentNavigation === '11' ?  styles.hoverItem : styles.menuItem }>
                Rondas de Vinculación / artistas de la visualidad
                
              </Menu.Item>
            <Menu.Item disabled={false} icon={<CheckOutlined/>} key={'2'} 
                style={ currentNavigation === '2' ?  styles.hoverItem : styles.menuItem  }  >
              Talleres
            </Menu.Item></>}            
            
            </>
              }</Menu>
              </Affix>}
              <Row align={'center'} >
                  {currentNavigation === '0' &&
                    <>{isDigital ? <ListTransmissions />:<ListTransmissionsPresencial />}                      
                    </>
                  }
                  {currentNavigation === '5' && 
                    <LinksInstances />
                  }                     
                  {currentNavigation === '12' && 
                    <LinksInstancesAE />
                  }  
                  {currentNavigation === '11' && 
                    <LinksInstancesAV />
                  }  
                  
                  {currentNavigation === '1' &&
                    <>
                    <Col lg={{span:14}}  xs={{span:24}}  style={{padding:'0px'}}  >
                    {state.user && 
                      <UpdateProfileData user={state.user} />
                    }
                    </Col>
                    </>
                  }
                  {currentNavigation === '2' && <>
                    {isDigital ? <Workshops is_digital={true} />:<Workshops2 is_digital={false} />}                    
                  </>
                  
                  
                  }
                  {currentNavigation === '3' &&
                  <Col lg={{span:24}}  xs={{span:24}}  style={{padding:'10px'}}  >
                      <Viewings />
                  </Col>
                  }
                
                {currentNavigation === '1' &&
                <Col lg={{span:10}} xs={{span:24}}  style={{padding:'10px'}}>
                {state.user && <><Row>
                  <Col span={7} style={{backgroundColor:'white', padding:'10px'}}>                    
                  {state.user.profile.avatar ? <>                      
                      <label for='file' labe='asd'><>                                   
                      <Tooltip color='rgb(24, 197, 204)' title='Subir foto de perfil'>
                            <Avatar shape='square' style={styles.uploadAvatar} src={state.user.profile.avatar}>
                             <UploadOutlined style={{fontSize:'50px', paddingTop:'40px'}} /> 
                            </Avatar>                                                          
                            </Tooltip>
                            </>
                        </label>
                        <input id='file' type='file'  accept='image/*' style={styles.uploadFile} onChange={async(evt)=>{
                                          setImageFile(evt.target.files[0])           
                                          const request = await api.user.UPLOAD_FILE_OR_IMG(`users/profile/${state.user.id}/`, 'avatar', evt.target.files[0]).then((response)=> {
                                            message.success('Imagen actualizada!')  
                                            window.location.reload()                                                                                      
                                          }).catch((error)=>{
                                            message.error('Intentalo más tarde')
                                          })
                                                                                                                                                                                                         
                              } }  />                    
                      </>:
                      <>
                        <label for='file' labe='asd'><>                                   
                        <Tooltip color='rgb(24, 197, 204)' title='Actualizar foto de perfil'>
                            <Avatar shape='square' style={styles.uploadAvatar} >
                              <UploadOutlined style={{fontSize:'50px', paddingTop:'40px'}} />
                            </Avatar>                                      
                            </Tooltip>
                            </>
                        </label>
                        <input id='file' type='file' accept='image/*' style={styles.uploadFile} onChange={async(evt)=>{
                                          setImageFile(evt.target.files[0])           
                                          const request = await api.user.UPLOAD_FILE_OR_IMG(`users/profile/${state.user.id}/`, 'avatar', evt.target.files[0]).then((response)=> {
                                            message.success('Imagen actualizada!')                                                                                        
                                            window.location.reload()                                                                                      
                                          }).catch((error)=>{
                                            message.error('Intendalo más tarde')
                                          })                                                                                                                                                                 
                              } }   />                    
                    </>}   
                  </Col>
                  <Col span={17}>
                      <Descriptions                     
                        bordered={true}                                             
                        style={{backgroundColor:'white', padding:'5px'}} 
                        layout='vertical'>
                          <Descriptions label={`Perfil: @${state.user.username}`} span={3}><Tag color='pink'>{txt_type.slice(0,35)}...</Tag></Descriptions>
                          <Descriptions.Item label="Nombre" span={2}> {state.user.first_name} {state.user.last_name} </Descriptions.Item>
                          <Descriptions.Item label="Teléfono"> {state.user.phone_number} </Descriptions.Item>
                          
                          <Descriptions.Item span={3} label="Correo Electrónico"> {state.user.email} </Descriptions.Item>
                          <Descriptions.Item label="País" >
                            {state.user.country}
                          </Descriptions.Item>
                          <Descriptions.Item label="Región" span={2}>
                            {state.user.region}
                          </Descriptions.Item>
                            {state.user.country === 'Chile' &&
                              <>                                
                                <Descriptions.Item label="Ciudad">
                                  {state.user.commune}
                                </Descriptions.Item>
                              </>
                            }
                      </Descriptions>
                      
                  </Col>
                </Row>       
                <Row style={{padding:'20px', backgroundColor:'white'}}>
                    <Col>
                            <Typography.Title level={5}>ESTADO INSCRIPCIÓN RONDAS DE VINCULACIÓN(PRESENCIAL)</Typography.Title>
                    </Col>
                    <Col span={24}>
                    <Descriptions                     
                        bordered={true} 
                        title='ARTES ESCÉNICAS'                                            
                        style={{backgroundColor:'white', paddingTop:'25px'}} 
                        layout='horizontal'>
                          <Descriptions label={`24 de Marzo, 11.30 a 13.00 hrs`} span={3}>
                            {state.user.profile.ae_24_inscribed.length > 0 ? 'SI': 'NO'}
                          </Descriptions>
                          <Descriptions label={`25 de Marzo, 13.00 a 14.00 hrs`} span={3}>
                            {state.user.profile.ae_25_inscribed.length > 0 ? 'SI': 'NO'}
                          </Descriptions>
                          <Descriptions label={`26 de Marzo, 13.00 a 14.00 hrs`} span={3}>
                            {state.user.profile.ae_26_inscribed.length > 0 ? 'SI': 'NO'}  
                          </Descriptions>
                          
                      </Descriptions>
                      
                    </Col>
                    <Col span={24}>
                    <Descriptions                     
                        bordered={true} 
                        title='ARTES DE LA VISUALIDAD'                                            
                        style={{backgroundColor:'white', paddingTop:'25px'}} 
                        layout='vertical'>
                          <Descriptions label={`¿Te gustaria presenciar los pitch de artistas visuales?`} span={3}>
                             {state.user.profile.av_programmers.length ? <>                                                         
                            {state.user.profile.av_programmers.map((x)=> {                                
                                  return(<p> {x} </p>)                                                              
                                }                            
                              )}
                            </>: <>SIN INSCRIPCIÓN</>}
                          </Descriptions>
                          <Descriptions label={`¿Quieres presentar tu propuesta artística a los programadores?`} span={3}>
                            {state.user.profile.av_25_artists.length ? <>                                                         
                            {state.user.profile.av_25_artists.map((x)=> {                                
                                  return(<p> {x} </p>)                                                              
                                }                            
                              )}
                            </>: <>SIN INSCRIPCIÓN</>}
                          </Descriptions>
                          
                      </Descriptions>
                      
                    </Col>
                </Row>
                </>
                         
                 
                }
                </Col>}
              </Row>
</>)
}


const styles = {
    uploadAvatar:{
      width:'140px', 
      height:'140px', 
      border:'#B05DB9',
      backgroundColor: '#B05DB9',
      cursor:'pointer',
      margin:'5px'
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
      backgroundColor: '#FFBA31',
      textAlign:'right',
    },
    menuT: {
      backgroundColor: '#18c5cc',
      textAlign:'left',
    },
    menuItem: {
      color:'white',
      backgroundColor:'#FFBA31',
      marginRight:'10px',      
      marginLeft:'10px'

    },
    menuItemT: {
      color:'white',
      backgroundColor:'#18c5cc',
      marginRight:'10px',      
      marginLeft:'10px'

    },
    hoverItem: {
      color:'white',
      backgroundColor: '#FF6D3C',
      marginRight:'10px',
      marginLeft:'10px'
    },
    hoverItemT: {
      color:'white',
      backgroundColor: '#3a1f33',
      marginRight:'10px',
      marginLeft:'10px'
    },
    icon: {
      fontSize: '18px'
    },
    iconActive: {
      fontSize: '20px',            
    },
    buttonNo: {
      backgroundColor: '#B05DB9',
      color:'white'
    },
    buttonAct: {
      backgroundColor: '#3A1F33',
      color:'white'
    }
}


export default ProfileUser
