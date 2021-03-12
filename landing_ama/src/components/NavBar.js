import React, {useContext} from 'react'


// Antd
import { Layout, Menu, Button, Tooltip } from 'antd'
import Login from '../components/auth/Login'
import { LogoutOutlined } from '@ant-design/icons'
import { AuthContext } from '../Home'
import { Link } from 'react-router-dom'
const { Header } = Layout
const { Item } = Menu


const NavBar = () => {
    
    const { state, dispatch } = useContext(AuthContext)

    return(
        <Header style={styles.header}>
           <Menu mode="horizontal" theme='dark' style={styles.menu} > 
            {state.isAuthenticated ? 
            <>
                <Item style={styles.item}><Link to='/profile'><Tooltip title='Perfil de Usuario'> @{state.user.username} </Tooltip></Link></Item>
                <Item style={styles.itemLogOut}> 
                    <Button type='link' onClick={()=> {dispatch({type:'LOGOUT'})}}>
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
    header: {      
        width:'100%',   
        backgroundColor: '#61263D'       
    }, 
    menu: {
        textAlign:'end',
        marginRight: '20%',
        backgroundColor: '#61263D'
    }, 
    item: {
        backgroundColor: '#CE3D4B',
        marginRight:'10px',
        marginLeft: '10px'
    }, 
    itemLogOut: {
        backgroundColor: '#61263D',
    }
}


export default NavBar