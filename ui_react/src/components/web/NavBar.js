import React, {useContext} from 'react'
import { Layout, Menu, Button, Tooltip } from 'antd'
import { LogoutOutlined, FilePdfFilled, TeamOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons'
import { AuthContext } from '../../App'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo/01B.png'
import Login from '../../components/web/auth/Login'
import TeamModal from './TeamModal' 
const { Header } = Layout
const { Item } = Menu

const NavBar = () => {
    
    const { state, dispatch } = useContext(AuthContext)


    return(
        <Header style={styles.header}>            
        <div style={styles.item1}>
                <img alt='logo' src={Logo} style={{width:'285px'}} />
        </div>
           <Menu mode="horizontal" theme='dark' style={styles.menu} >            
            <Item style={styles.item}>
                <TeamModal />
            </Item>            
               <Item style={styles.item}>
                    <a>                        
                    ¿QUIÉNES PUEDEN PARTICIPAR?
                    </a>
                </Item>                               
                <Item style={styles.item}>
                  <Login />
                </Item>
                {state.isAuthenticated && <Item style={styles.itemuser}><Link to='/profile'>@{state.user.username}</Link></Item>}
                <Item style={styles.item}>
                    <InstagramOutlined style={{fontSize: '20px', height:'42px'}} />
                    <TwitterOutlined style={{fontSize: '20px', margin:'12px'}} />
                </Item>                  

           </Menu>
        </Header>
    )
}


const styles = {
    header: {      
        width:'100%',   
        backgroundColor: '#b05db9'       
    }, 
    menu: {
        textAlign:'end',
        backgroundColor: '#b05db9'
    }, 
    item: {
        backgroundColor: '#b05db9',
        marginRight:'5px',
        marginLeft:'5px'
    }, 
    itemuser: {
      backgroundColor: '#b05db9',
      fontSize:'18px',
    },
    item1: {
        backgroundColor: '#b05db9',
        marginRight:'5px',
        marginLeft:'5px',
        float: 'left'
    }, 
    itemLogOut: {
        backgroundColor: '#b05db9',
    },logo: {
        width: '10%',       
    },
}


export default NavBar
