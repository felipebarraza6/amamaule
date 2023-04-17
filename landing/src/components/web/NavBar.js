import React, {useContext, useState, useEffect} from 'react'
import { Layout, Menu, Button, Tooltip } from 'antd'
import { LogoutOutlined, FilePdfFilled, TeamOutlined, InstagramOutlined, TwitterOutlined, FacebookOutlined } from '@ant-design/icons'
import { AuthContext } from '../../App'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo/01B.png'
import TeamModal from './TeamModal' 
import OldAma from './OldAma'

const { Header } = Layout
const { Item } = Menu

const NavBar = () => {
    
    const { state, dispatch } = useContext(AuthContext)
    
    const [size, setSize]=useState(null)

    useEffect(()=> {
      
      setSize(window.innerWidth)

    }, [])

    return(<>
        
        {size < 800 ? <><Header style={styles.header}>
         <div style={styles.item1}>
          <img alt='logo' src={Logo} style={{width:'285px'}} />
        </div> 
        </Header>
        
        </>: <Header style={styles.header}>            
        <div style={styles.item1}>
          <img alt='logo' src={Logo} style={{width:'285px'}} />
        </div>
           <Menu mode="horizontal" theme='dark' style={styles.menu} >            
                  
            <Item style={styles.item}>
              <a target="_blank" href='https://docs.google.com/forms/d/e/1FAIpQLSdaM-um2blDVLazhJ7qjnk4sNsk0d_OAbi9FurItP-9mtQAaw/viewform?vc=0&c=0&w=1&flr=0' style={{color:'white'}}>CONVOCATORIA ARTISTAS VISUALES</a>
            </Item>
            <Item style={styles.item}>
              <OldAma />
            </Item>
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
        </Header> }
        {console.log(size)}
      </>
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
