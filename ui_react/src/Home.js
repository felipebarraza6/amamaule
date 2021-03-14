import React from 'react'
import { Layout } from 'antd'
import ProfileUser from './containers/web/ProfileUser'
// Components
import NavBar from './components/NavBar'
import HeaderLogo from './components/HeaderLogo'
import CarouselBanner from './components/CarouselBanner'
import InfoSection from './components/InfoSection'
import TrenSecion from './components/TrenSection'
import Services from './components/Services'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
const { Content, Footer } = Layout


const Home = () => {


    return(
        <BrowserRouter>  
        <Layout>            
            <HeaderLogo />
                                      
            <NavBar />
            <Content style={styles.content}>
                <Switch>
                    <Route exact path='/' render={()=> <React.Fragment>
                        <CarouselBanner />
                        <InfoSection />
                        <Services />
                    </React.Fragment>} />     
                    <Route exact path='/profile' component={ProfileUser} />                                   
                </Switch>                
            </Content>
            
            <TrenSecion />
            <Footer style={styles.footer}>AMA - Vincular para crear 2021</Footer>
        </Layout>
        </BrowserRouter>
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
