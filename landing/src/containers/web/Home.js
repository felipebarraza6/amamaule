import React, {useContext} from 'react'
import { Layout, Typography, Row, Col } from 'antd'
import ProfileUser from './ProfileUser'
import '../../assets/css/web.css'
import NavBar from '../../components/web/NavBar'
import InfoSection from '../../components/web/InfoSection'
import TrenSection from '../../components/web/TrenSection'
import Services from '../../components/web/Services'
import NavBarClient from '../../components/web/NavBarClient'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MeetingVideoChat from "./MeetingVideoChat"
import {AuthContext} from "../../App";
import OldAma from '../../components/web/OldAma'

const { Content, Footer } = Layout
const { Title, Paragraph } = Typography

const Home = () => {

    const {state} = useContext(AuthContext)
    console.log(state)
  return(
    <Router>
      <Layout>
        <Switch>  
          <Route exact path='/' render={()=><><NavBar/></>}  />
          <Route exact path='/profile' render={()=> <NavBarClient />}  />
          <Route exact path='/profile/meetings/:id' render={({match})=> {
              return(<>
              <NavBarClient/>
              <MeetingVideoChat match={match} />
              </>)
          }
          }  />
        </Switch>
        <Content>
          <Switch>
            <Route exact path='/' render = {()=> {
              return(
                <React.Fragment>
                  <InfoSection />
                    <Services />
                  <TrenSection />
                  <Footer style = {styles.footer}  >AMA - Vincular para crear 2022</Footer>
                </React.Fragment>
              )
            }}  />
            <Route exact path='/profile' render={ ()=> <><ProfileUser />              
            </>} />
          </Switch>
        </Content>
      </Layout>
    </Router>
  )
}


const styles = {
  footer: {       
    textAlign: 'center',
    backgroundColor: '#ff6d3c',
    color: 'white',    
  },
  footerFix: {
    position:'fixed',
    left:0,
    bottom:0,
    width:'100%',     
    textAlign: 'center',
    backgroundColor: '#ff6d3c',
    color: 'white',    
  }  
}


export default Home
