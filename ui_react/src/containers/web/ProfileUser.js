import React, {useContext, useState, useEffect } from 'react'
import { Menu, Result, Col, Row, Button, Descriptions, Card, Tag } from 'antd'
import { RocketOutlined ,UserOutlined, FilePdfFilled, 
        CheckOutlined, EditOutlined, LikeTwoTone, 
        QuestionCircleFilled } from '@ant-design/icons'
import { AuthContext } from '../../App'
import { NavBar } from 'antd-mobile'
import ProfileData from '../../components/web/profile/ProfileData'
import Workshops from '../../components/web/profile/Workshops'
import Viewings from '../../components/web/profile/Viewings'

const ProfileUser = () => {

    const { state } = useContext(AuthContext)
    
    const [currentNavigation, setCurrentNavigation] = useState('0')
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
    
    if(state.user){
      var type1 = state.user.type_user1
      var type2 = state.user.type_user2
      var type3 = state.user.type_user3
      
      if(type1 === 'AM'){
        type1 = 'Artista / Manager'
      }else if(type1 === 'GES'){
        type1 = 'Gestion Cultural'
      }else if(type1 === 'RE'){
        type1 = 'Representante'
      }else if(type1 === 'PROV'){
        type1 = 'Proveedor'
      }else if(type1 === 'PRO'){
        type1 = 'Profesional Asociado'
      }

       if(type2 === 'AM'){
        type2 = 'Artista / Manager'
      }else if(type2 === 'GES'){
        type2 = 'Gestion Cultural'
      }else if(type2 === 'RE'){
        type2 = 'Representante'
      }else if(type2 === 'PROV'){
        type2 = 'Proveedor'
      }else if(type2 === 'PRO'){
        type2 = 'Profesional Asociado'
      }

 if(type3 === 'AM'){
        type3 = 'Artista / Manager'
      }else if(type3 === 'GES'){
        type3 = 'Gestion Cultural'
      }else if(type3 === 'RE'){
        type3 = 'Representante'
      }else if(type3 === 'PROV'){
        type3 = 'Proveedor'
      }else if(type3 === 'PRO'){
        type3 = 'Profesional Asociado'
      }

    }


   

    useEffect(()=> {
      setSize(window.innerWidth)
      
    },[])

    return(<>
              {size < 800 ? 
                <NavBar mode='dark'  
                style={{backgroundColor:'#F58B88'}}               
            > {state.user && <>
              <Button shape={'round'} type='link' style={currentNavigation === '0' ?  styles.buttonAct : styles.buttonNo } onClick={()=>setCurrentNavigation('0')}>
                  <UserOutlined  style={currentNavigation === '0' ?  styles.iconActive : styles.icon } />{currentNavigation === '0' && 'Perfil'}
              </Button>
              <Button disabled={!state.user.is_verified} shape={'round'} type='link' style={currentNavigation === '1' ?  styles.buttonAct : styles.buttonNo } onClick={()=>setCurrentNavigation('1')}>
                  <CheckOutlined style={styles.icon} />{currentNavigation === '1' && 'Talleres'}
              </Button>
              
              <Button disabled={!state.user.is_verified && isMaule===true} disabled={isMaule} shape={'round'} type='link' style={currentNavigation === '2' ?  styles.buttonAct : styles.buttonNo } onClick={()=>setCurrentNavigation('2')}>
                  <EditOutlined style={styles.icon} />{currentNavigation === '2' && 'Visionados'}
              </Button>
              <Button disabled={!state.user.is_verified} shape={'round'} type='link' style={currentNavigation === '3' ?  styles.buttonAct : styles.buttonNo } onClick={()=>setCurrentNavigation('3')}>
                  <RocketOutlined style={styles.icon} />{currentNavigation === '3' && 'E.Satelite'}
              </Button>
              </>}
            </NavBar>
              : 
              <Menu 
                    mode='horizontal' 
                    selectedKeys={[currentNavigation]} 
                    onClick={(current)=> setNavigator(current)}
                    theme='dark'
                    style={styles.menuOv}
                >
                 <Menu.Item  icon={<UserOutlined/>} key={'0'} 
                      style={currentNavigation === '0' ?  styles.hoverItem : styles.menuItem }>
                    Perfil
                  </Menu.Item>
                  {state.user &&
                  <Menu.Item disabled={!state.user.is_verified} icon={<CheckOutlined/>} key={'1'} 
                      style={ currentNavigation === '1' ?  styles.hoverItem : styles.menuItem  }  >
                    Talleres
                  </Menu.Item>}
                  {state.user &&                                         
                    <Menu.Item disabled={isMaule}  icon={<EditOutlined/>} key={'2'} 
                       style={ currentNavigation === '2' ?  styles.hoverItem : styles.menuItem  } >
                      Visionados
                    </Menu.Item>                    
                  }
                  {state.user &&
                  <Menu.Item disabled={!state.user.is_verified}  key={'3'} icon={<RocketOutlined />}

                    style={ currentNavigation === '3' ?  styles.hoverItem : styles.menuItem  } >
                      Evento Satélite 
                  </Menu.Item>}
              </Menu>}
              <Row style={{padding:'0px'}}>
                <Col lg={{span:14}}  xs={{span:24}}  style={{padding:'10px'}}  >
                  {currentNavigation === '0' &&
                    <>
                    {state.user && 
                      <>
                      {!state.user.is_verified ?
                        <ProfileData />:
                        <Card style={{textAlign:'center'}}  title='PERFIL COMPLETADO' >
                          <LikeTwoTone style={{fontSize:'200px'}}  twoToneColor='#CE3D4B'  />
                        </Card>
                      }
                      </>
                    }
                    </>
                  }
                  {currentNavigation === '1' && 
                      <Workshops />
                  }
                  {currentNavigation === '2' &&
                      <Viewings />
                  }
                  {currentNavigation === '3' && 
                      <Card title='Evento Satélite'>
                          <Result
                          icon={<QuestionCircleFilled style={{color:'#CE3D4B'}}  />}
                          title="Pronto más información..."
                          extra={[
                                /*<Button style={{backgroundColor:'#61263d', borderColor:'#61263d'}}  type="primary" key="console">
                                    Descargar
                                  </Button>*/
                                ]}
                        />
                      </Card>
                  } 
                </Col>
                <Col lg={{span:10}} xs={{span:24}}  style={{padding:'10px'}}>
                {state.user &&
                 <Descriptions 
                    title="DATOS DE INSCRIPCIÓN"
                    bordered={true} 
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
                </Col>
              </Row>
</>)
}


const styles = {
    container: {
        padding:'30px'
    },
    menuOv: {
      backgroundColor: '#F58B88'
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
