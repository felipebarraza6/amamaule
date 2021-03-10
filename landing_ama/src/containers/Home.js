import React from 'react'

// Antd
import { Layout } from 'antd'

// Components
import NavBar from '../components/NavBar'
import HeaderLogo from '../components/HeaderLogo'
import CarouselBanner from '../components/CarouselBanner'
import InfoSection from '../components/InfoSection'
const { Content, Footer } = Layout


const Home = () => {

    return(
        <Layout>
            <HeaderLogo />
            <NavBar />
            <Content style={styles.content}>
                <CarouselBanner />
                <InfoSection />
            </Content>
            <Footer style={styles.footer}>AMA - Vincular para crear</Footer>
        </Layout>
    )
}


const styles = {
    footer: {
        textAlign:'center',
        backgroundColor: '#61263D',
        color: 'white'
    },
    content: {        
        marginBottom:'30px'
    }
}


export default Home
