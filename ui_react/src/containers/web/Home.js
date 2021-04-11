import React from 'react'
import { Layout, Typography, Row, Col } from 'antd'
import ProfileUser from './ProfileUser'
import '../../assets/css/web.css'
import NavBar from '../../components/web/NavBar'
import HeaderLogo from '../../components/web/HeaderLogo'
import CarouselBanner from '../../components/web/CarouselBanner'
import InfoSection from '../../components/web/InfoSection'
import TrenSection from '../../components/web/TrenSection'
import Services from '../../components/web/Services'
import NavBarClient from '../../components/web/NavBarClient'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MeetingVideoChat from "./MeetingVideoChat"
import IgFeed from "../../components/web/IgFeed";
import ListTransmissions from "../../components/web/transmissions/list/ListTransmissions";
import HomeTransmissions from '../../components/web/transmissions/home/HomeTransmissions'
import BannerRondas from '../../assets/img/banner_rondas.jpg'

const { Content, Footer } = Layout
const { Title, Paragraph } = Typography

const Home = () => {

  return(
    <Router>
      <Layout>
        <Switch>  
          <Route exact path='/' render={()=><><HeaderLogo/><NavBar/></>}  />
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
                <Row justify="center">
                  <ListTransmissions is_public={true} />
                  </Row>
                  <Row style={{ padding:'80', marginTop:'50px', backgroundColor:'white'}}>

                    <Col span={8} style={{padding:'40px'}}>
                        <Paragraph align={'justify'}><b>AMA</b> es el primer encuentro de vinculación online para Artistas Escénicos de la
                            Región del Maule. Durante cuatro jornadas, las y los artistas tendrán la oportunidad de reunirse junto a actores del
                            mundo público y privado, con el objetivo de reactivar redes a nivel regional para la programación de
                            Artes Escénicas en el Maule y el resto del país.
                    </Paragraph>
                    </Col>
                    <Col span={8} style={{padding:'40px'}}>
                        <Paragraph align={'justify'}><b>AMA, Vincular Para Crear</b>, propone una agenda de reuniones bilaterales y grupales que
                            permitan a programadores y creadores conocerse, abriendo la oportunidad de ver trabajos estrenados, en progreso y
                            proyectos de creación con sello local.

                    </Paragraph>
                    </Col>
                    <Col span={8} style={{padding:'40px'}}>
                            <Paragraph align={'justify'}>Además, esperamos encontrarnos en el marco de conferencias y mesas de conversación en
                                torno a los nuevos desafíos de la gestión cultural y el acceso trabajo artístico. Finalmente, propociaremos
                                instancias de formación que inciten a la educación continua y sirvan de inspiración para todas y todos los
                                participantes.

                    </Paragraph>
                    </Col>

                    </Row>
                    <Row>
                        <img src={BannerRondas} width={'100%'} />
                    </Row>
                    <Services />
                  <IgFeed />
                  <TrenSection />
                  <Footer style = {styles.footer}  >AMA - Vincular para crear 2021</Footer>
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
    backgroundColor: '#61263D',
    color: 'white',    
  },
  footerFix: {
    position:'fixed',
    left:0,
    bottom:0,
    width:'100%',     
    textAlign: 'center',
    backgroundColor: '#61263D',
    color: 'white',    
  }  
}


export default Home
