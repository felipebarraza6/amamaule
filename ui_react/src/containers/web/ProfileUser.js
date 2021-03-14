import React, {useContext, useState } from 'react'
import { Menu, Col, Row, Descriptions, Card, Tag } from 'antd'
import { UserOutlined, CheckOutlined, EditOutlined, LikeTwoTone } from '@ant-design/icons'
import { AuthContext } from '../../App'

import ProfileData from '../../components/web/profile/ProfileData'
import Workshops from '../../components/web/profile/Workshops'
import Viewings from '../../components/web/profile/Viewings'

const ProfileUser = () => {

    const { state } = useContext(AuthContext)
    const [currentNavigation, setCurrentNavigation] = useState('0')

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

    return(<>
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
                    <>
                    {state.user.region === 'Región del Maule' && 
                    <Menu.Item disabled={!state.user.is_verified}  icon={<EditOutlined/>} key={'2'} 
                       style={ currentNavigation === '2' ?  styles.hoverItem : styles.menuItem  } >
                      Visionados
                    </Menu.Item>}
                    </>
                  }
              </Menu>
              <Row style={{padding:'30px'}}>
                <Col span={14} style={{padding:'10px'}}  >
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
                </Col>
                <Col span={10} style={{padding:'10px'}}>
                {state.user &&
                 <Descriptions 
                    title="DATOS DE INCRIPCIÓN"
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
    }
}


export default ProfileUser
