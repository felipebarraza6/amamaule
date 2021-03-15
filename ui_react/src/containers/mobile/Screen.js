import React from 'react'
import { NavBar as navModile, Card,  Icon, WingBlank, WhiteSpace} from 'antd-mobile'
import '../../assets/css/mobile.css'
import { BrowserRouter , Switch, Route  } from 'react-router-dom'
import Logo from '../../assets/logo/01B.png'
import Slider from '../../assets/slider/img1.jpg'
import NavBar from '../../components/web/NavBar'
import SignUp from '../../components/web/auth/SignUp'
import Services from '../../components/web/Services'
import TrenSectionM from '../../components/mobile/TrenSectionM'
import ProfileUser from '../../containers/web/ProfileUser'


const Screen = () => {
  
  return(
     <div>
          <img src={Logo} style={{width:'100%'}} alt='logo'  />
          <BrowserRouter>
              <NavBar />
              <Switch>
                <Route exact path='/profile' render={()=><>
                <ProfileUser />
                </>} />
                <Route exact path='/' render={()=><>
                  <img src={Slider} style={{width:'100%'}}  />
                  <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                      <Card>
                        <Card.Header
                          title="Vincular para Crear"
                        />
                        <Card.Body>
                        <p style={{textAlign:'justify'}}>AMA es el primer encuentro de vinculación online de Artistas Escénicos del Maule, Impulsado por el Teatro Regional del Maule y la Seremi de las Culturas, las Artes y el Patrimonio de la Región del Maule.</p>
                        <p style={{textAlign:'justify'}}>
                          Inscríbete y participa en nuestras conferencias, mesas de conversación, talleres y rondas de vinculación con programadores nacionales. Además, tendrás acceso exclusivo a nuestros showcases y visionados durante esta edición.

                        </p>
                        </Card.Body>
                        <Card.Footer content={<SignUp />} extra={<div>Del 14 al 17 de abril del 2021</div>} />
                      </Card>
                  </WingBlank>
                    <WhiteSpace size="lg" />
                    <Services />
                   
                    <TrenSectionM />
                    <div style={{color:'white', backgroundColor:'#61263d', textAlign:'center', padding:'20px'}}>
                    AMA - Vincular para crear 2021
                    </div>
                </>}  />
              </Switch>
          </BrowserRouter>
        

     </div>
  )
  
}


export default Screen
