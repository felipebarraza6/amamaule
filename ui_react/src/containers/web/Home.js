import React from 'react'
import { Carousel, Layout } from 'antd'
import ProfileUser from './ProfileUser'

import NavBar from '../../components/web/NavBar'
import HeaderLogo from '../../components/web/HeaderLogo'
import CarouselBanner from '../../components/web/CarouselBanner'
import InfoSection from '../../components/web/InfoSection'
import TrenSection from '../../components/web/TrenSection'
import Services from '../../components/web/Services'
import NavBarClient from '../../components/web/NavBarClient'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const { Content, Footer } = Layout

const Home = () => {
  
  return(
    <Router>
      <Layout>
        <Switch>  
          <Route exact path='/' render={()=><><HeaderLogo/><NavBar/></>}  />
          <Route exact path='/profile' render={()=> <NavBar />}  /> 
        </Switch>
        <Content>
          <Switch>
            <Route exact path='/' render = {()=> {
              return(
                <React.Fragment>
                  <CarouselBanner />
                  <InfoSection />
                  <Services />
                </React.Fragment>
              )
            }}  />
            <Route exact path='/profile' component={ProfileUser} />
          </Switch>
        </Content>
        <TrenSection />
        <Footer style = {styles.footer}  >AMA - Vincular para crear 2021</Footer>
      </Layout>
    </Router>
  )
}


const styles = {
  footer: {
    textAlign: 'center',
    backgroundColor: '#61263D',
    color: 'white',
  }
}


export default Home
