import React from 'react'

// Antd
import { Layout } from 'antd'

// Components
import NavBar from '../components/NavBar'
import HeaderLogo from '../components/HeaderLogo'
import CarouselBanner from '../components/CarouselBanner'
const { Content } = Layout


const Home = () => {

    return(
        <Layout>
            <HeaderLogo />
            <NavBar />
            <Content>
                <CarouselBanner />
            </Content>
        </Layout>
    )
}


export default Home
