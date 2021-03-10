import React from 'react'

// Assets


// Antd
import { Layout, Menu } from 'antd'
const { Header } = Layout
const { Item } = Menu



const NavBar = () => {

    return(
        <Header style={styles.header}>
           <Menu mode="horizontal" theme='dark' style={styles.menu} > 
                <Item style={styles.item}>Visionados 2020</Item>
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