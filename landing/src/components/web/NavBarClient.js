import React, {useContext} from 'react'
import { Layout, Menu, Button, Tooltip, Badge } from 'antd'
import Login from '../../components/web/auth/Login'
import { LogoutOutlined, NotificationOutlined } from '@ant-design/icons'
import { AuthContext } from '../../App'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo/white.png'
const { Header } = Layout
const { Item } = Menu


const NavBarClient = () => {
    
    const { state, dispatch } = useContext(AuthContext)


    return(
        <Header style={styles.header}>
            <div style={styles.logo}>
              <img src={Logo} width='300%'  />
            </div>
           <Menu mode="horizontal" theme='dark' style={styles.menu} onClick={(key)=>console.log(key)} > 
            <Item style={styles.item}>
                <Link to='/'>Inicio</Link>
            </Item>            
            {state.isAuthenticated ? 
            <>
                <Item style={styles.item}>
                    <Link to='/profile'>
                            @{state.user.username} 
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
        </Header>
    )
}


const styles = {
    logo: {
      float: 'left',
      width: '100px',
    },
    header: {      
        width:'100%',   
        backgroundColor: '#61263D',
        paddingTop: '20px',
        paddingBottom:'90px'    

    }, 
    menu: {
        textAlign:'end',
        backgroundColor: '#61263D',
    }, 
    item: {
        backgroundColor: '#CE3D4B',
        marginRight:'5px',
        marginLeft:'5px'
    }, 
    itemLogOut: {
        backgroundColor: '#61263D',
    }
}


export default NavBarClient
