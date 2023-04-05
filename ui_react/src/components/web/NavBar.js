import React, {useContext, useState, useEffect} from 'react'
import { Layout, Menu, Button, Tooltip } from 'antd'
import { LogoutOutlined, FilePdfFilled, WhatsAppOutlined, InstagramOutlined, TwitterOutlined, FacebookOutlined } from '@ant-design/icons'
import { AuthContext } from '../../App'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo/01B.png'
import Logo1 from '../../assets/logo/logom.png'
import Login from '../../components/web/auth/Login'
import TeamModal from './TeamModal' 
import Questions from './Questions'
import pdf from '../../assets/PROGRAMA_2022.jpg'
import OldAma from './OldAma'
const { Header } = Layout
const { Item } = Menu

const NavBar = () => {
    
    const { state, dispatch } = useContext(AuthContext)
    const [size, setSize] = useState(0)

    useEffect(()=> {
        setSize(window.innerWidth)
    },[])

    return(<>
        {size > 800 && <><Header style={styles.headerS}>
                <Menu mode="horizontal" theme='dark' style={styles.menu} >
            {state.isAuthenticated ? 
                <Item style={styles.itemS2}>
                  <Button type='primary' style={{backgroundColor:'rgb(24, 197, 204)', borderColor:'rgb(24, 197, 204)'}}>
                    <Link to='/profile'>
                      Has click para ingresar como: " {state.user.first_name} {state.user.last_name} "
                    </Link>
                  </Button>
                </Item>:<Item style={styles.item}>
                  <Login />
                </Item>}

                <Item style={styles.itemS}>
              <a target='__blank' href='https://www.facebook.com/ama.maule'>
              <FacebookOutlined style={{fontSize: '20px', margin:'12px'}} />
              </a></Item> 
              <Item style={styles.itemS}>
              <a target='__blank' href='https://www.instagram.com/ama.maule/'>
              <InstagramOutlined style={{fontSize: '20px', margin:'12px'}} />
              </a></Item>
              <Item style={styles.itemS}>
              <a target='__blank' href='https://twitter.com/AmaMaule?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'>
              <TwitterOutlined style={{fontSize: '20px', margin:'12px'}} />
              </a></Item>
                             
         </Menu> </Header><Header style={styles.header}>            
        <div style={styles.item1}>
                <img alt='logo' src={Logo} style={{width:'155px', marginTop:'-40px'}} />                
        </div><Menu mode="horizontal" theme='dark' style={styles.menu} >            
                <Item style={styles.item}>
                    <Button style={{paddingBottom:'40px', paddingTop:'12px', color:'white'}} type='link'>
                        <a href={pdf} target='__blank'>PROGRAMA 2023</a></Button>
                </Item>
            </Menu>  
                </Header>
                </>     }                     
        {size <800 && 
            <div style={styles.header}><img style={{width:'150px',paddingLeft:'20px', paddingTop:'20px'}} src={Logo1} />
            <Menu mode="horizontal" theme='dark' style={styles.menu} >                 
            <Item style={styles.item}>
                    <Button style={{paddingBottom:'32px', paddingTop:'12px', color:'white'}} type='link'>
                        <a href={pdf} target='__blank'>PROGRAMA 2022</a></Button>
                </Item>
        {state.isAuthenticated ? <Item style={styles.item}><Link to='/profile'>@{state.user.username}</Link></Item>:<Item style={styles.item}>
                  <Login />

                </Item>}</Menu> 
            
            </div>}
        </>
    )
}


const styles = {
    header: {      
        width:'100%',   
        backgroundColor: '#b05db9'       
    }, 
    headerS: {      
        width:'100%',         
        backgroundColor: '#b05db9'       
    }, 
    menu: {
        textAlign:'end',
        backgroundColor: '#b05db9'
    }, 
    item: {
        backgroundColor: '#b05db9',
        marginRight:'0px',
        marginLeft:'0px',
        fontSize:'18px'
    }, 
    itemS: {
      backgroundColor: '#b05db9',
      marginRight:'-10px',
      marginLeft:'-10px',
      marginBottom:'10px'
  },
  itemS2: {
      backgroundColor: '#b05db9',
      marginRight:'0px',
      marginLeft:'0px',
      marginBottom:'15px'
  },
    item1: {
        backgroundColor: '#b05db9',
        marginRight:'0px',
        marginLeft:'0px',
        float: 'left'
    }, 
    itemE: {
      backgroundColor: 'rgb(24, 197, 204)',
      marginRight:'30px',
      marginTop:'0px',
      borderRadius: '5px',
      fontSize:'15px'
    },
    itemLogOut: {
        backgroundColor: '#b05db9',
    },logo: {
        width: '10%',       
    },
}


export default NavBar
