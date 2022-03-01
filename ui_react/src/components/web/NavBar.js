import React, {useContext} from 'react'
import { Layout, Menu, Button, Tooltip } from 'antd'
import { LogoutOutlined, FilePdfFilled, TeamOutlined, InstagramOutlined, TwitterOutlined, FacebookOutlined } from '@ant-design/icons'
import { AuthContext } from '../../App'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo/01B.png'
import Login from '../../components/web/auth/Login'
import TeamModal from './TeamModal' 
import Questions from './Questions'
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
                   <Questions />
                </Item>                                               
                {state.isAuthenticated ? <Item style={styles.item}><Link to='/profile'>@{state.user.username}</Link></Item>:<Item style={styles.item}>
                  <Login />
                </Item>}
                <Item style={styles.itemS}>
              <a target='__blank' href='https://www.facebook.com/ama.maule'>
              <FacebookOutlined style={{fontSize: '30px', margin:'12px'}} />
              </a></Item> 
              <Item style={styles.itemS}>
              <a target='__blank' href='https://www.instagram.com/ama.maule/'>
              <InstagramOutlined style={{fontSize: '30px', margin:'12px'}} />
              </a></Item>
              <Item style={styles.itemS}>
              <a target='__blank' href='https://twitter.com/AmaMaule?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'>
              <TwitterOutlined style={{fontSize: '30px', margin:'12px'}} />
              </a></Item>
                             
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
        marginLeft:'5px',
        fontSize:'18px'
    }, 
    itemS: {
      backgroundColor: '#b05db9',
      marginRight:'-10px',
      marginLeft:'-10px'
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
