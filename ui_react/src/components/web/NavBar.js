import React, {useContext} from 'react'
import { Layout, Menu, Button, Tooltip } from 'antd'
import Login from '../../components/web/auth/Login'
import { LogoutOutlined } from '@ant-design/icons'
import { AuthContext } from '../../App'
import { Link } from 'react-router-dom'
const { Header } = Layout
const { Item } = Menu


const NavBar = () => {
    
    const { state, dispatch } = useContext(AuthContext)


    return(
        <Header style={styles.header}>
           <Menu mode="horizontal" theme='dark' style={styles.menu} > 
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
        backgroundColor: '#61263D'
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


export default NavBar
