import React, {useContext, useState, useEffect} from 'react'
import { Layout, Menu, Button, Tooltip, Badge } from 'antd'
import Login from '../../components/web/auth/Login'
import { LogoutOutlined, NotificationOutlined, WhatsAppOutlined } from '@ant-design/icons'
import { AuthContext } from '../../App'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo/01B.png'

import Logo1 from '../../assets/logo/logom.png'
import pdf from '../../assets/PROGRAMA_2022.jpg'
const { Header } = Layout
const { Item } = Menu


const NavBarClient = () => {

    const {pathname} = window.location
    
    const { state, dispatch } = useContext(AuthContext)
    const [size, setSize] = useState(0)

    useEffect(()=> {
        setSize(window.innerWidth)
    },[])

    return(<>{size > 800 ? 
        <Header style={styles.header}>
            <div style={styles.logo}>
              <img src={Logo} width='300%'  />
            </div>
           <Menu mode="horizontal" theme='dark' style={styles.menu} onClick={(key)=>console.log(key)} > 
            <Item style={styles.item}>
                <Link to='/'>Inicio</Link>
            </Item>   
            <Item style={styles.item}>
                    <Button  style={{paddingBottom:'40px', paddingTop:'12px', color:'white'}} type='link'>
                        <a style={{color:'white'}} href={pdf} target='__blank'>PROGRAMA 2023</a></Button>
                </Item>         
                     
            {state.isAuthenticated ? 
            <>
                <Item style={styles.item}>
                    <Link to='/profile'>
                        {pathname !== '/profile' ? <Button 
                            style={{marginBottom:'12px', backgroundColor:'rgb(24, 197, 204)', borderColor:'rgb(24, 197, 204)'}} 
                            type='primary'>Volver a mi perfil</Button>:<div style={{fontSize:'16px', color:'white'}}> @{state.user.username} </div>}
                         
                    </Link>
                </Item>
                <Item style={styles.itemLogOut}> 
                    <Button type='link' onClick={()=> {
                        dispatch({type:'LOGOUT'})
                        window.location.replace('/')
                    }}>
                        <Tooltip title='Cerrar Sesión'>
                            <LogoutOutlined style={{fontSize:'20px', color:'white',}} />
                        </Tooltip>
                    </Button> 
                </Item>
            </>:
            
                <Item style={styles.item}> <Login /> </Item>
            }
            
            
           </Menu>
        </Header>: <> <div style={styles.headerM2}>
            <div style={styles.logo}>
              <img src={Logo1} width='120%' style={{paddingLeft:'20px', paddingTop:'20px'}}  />
            </div></div><div style={styles.headerM}>
           <Menu mode="horizontal" theme='dark' style={styles.menu} onClick={(key)=>console.log(key)} > 
            <Item style={styles.item}>
                <Link to='/'>Inicio</Link>
            </Item>            
            {state.isAuthenticated ? 
            <>
                <Item style={styles.item}>
                    <Link to='/profile'>
                          {pathname==='/profile/myrounds/' ? <Button>Volver a mi perfil</Button>: `@${state.user.username}` }
                    </Link>
                </Item>
                <Item style={styles.itemLogOut}> 
                    <Button type='link' onClick={()=> {
                        dispatch({type:'LOGOUT'})
                        window.location.replace('/')
                    }}>
                        <Tooltip title='Cerrar Sesión'>
                            <LogoutOutlined style={{fontSize:'20px', color:'white'}} />
                        </Tooltip>
                    </Button> 
                </Item>
            </>:
            
                <Item style={styles.item}> <Login /> </Item>
            }
            
           </Menu>
        </div></>}</>
    )
}


const styles = {
    logo: {
      float: 'left',
      width: '100px',
    },
    header: {      
        width:'100%',   
        backgroundColor: 'rgb(176, 93, 185)',
        paddingTop: '20px',
        paddingBottom:'90px'    

    }, 
    header: {      
        width:'100%',   
        backgroundColor: 'rgb(176, 93, 185)',
        paddingTop: '20px',
        paddingBottom:'80px'    

    }, 
    headerM: {      
        width:'100%',   
        backgroundColor: 'rgb(176, 93, 185)',
        paddingTop: '0px',
        paddingBottom:'5px'    

    }, 
    headerM2: {      
        width:'100%',   
        backgroundColor: 'rgb(176, 93, 185)',
        paddingTop: '0px',
        paddingBottom:'10px'    

    }, 
    menu: {
        textAlign:'end',
        backgroundColor: 'rgb(176, 93, 185)',
    }, 
    item: {
        backgroundColor: 'rgb(176, 93, 185)',
        marginRight:'5px',
        marginLeft:'5px'
    }, 
    itemLogOut: {
        backgroundColor: 'rgb(176, 93, 185)',
        marginBottom:'12px'
    }
}


export default NavBarClient
