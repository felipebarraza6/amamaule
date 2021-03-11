import React from 'react'

// Antd
import { Layout, Menu } from 'antd'
import { UserOutlined } from '@ant-design/icons'
const { Header } = Layout
const { Item } = Menu



const NavBar = () => {

    return(
        <Header style={styles.header}>
           <Menu mode="horizontal" theme='dark' style={styles.menu} > 
                <Item style={styles.item}> <UserOutlined style={{fontSize:'20px'}} /> Ingresar</Item>
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
        backgroundColor: '#CE3D4B'
    }   
}


export default NavBar