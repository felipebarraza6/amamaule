import React from 'react'

// Antd
import { Layout } from 'antd'

// Components
import NavBar from '../components/NavBar'
import HeaderLogo from '../components/HeaderLogo'
import CarouselBanner from '../components/CarouselBanner'
import InfoSection from '../components/InfoSection'
import TrenSecion from '../components/TrenSection'
import Services from '../components/Services'
const { Content, Footer } = Layout


const Home = () => {

    return(
        <Layout>
            <HeaderLogo />
            <NavBar />
            <Content style={styles.content}>
                <CarouselBanner />
                <InfoSection />
                <Services />
            </Content>
            <TrenSecion />
            <Footer style={styles.footer}>AMA - Vincular para crear 2021</Footer>
        </Layout>
    )
}


const styles = {
    footer: {
        textAlign:'center',
        backgroundColor: '#61263D',
        color: 'white',                
    },
    content: {        
        marginBottom:'0px'
    }
}


export default Home
