import React from 'react'
import { InstagramOutlined, TwitterOutlined, FacebookOutlined } from '@ant-design/icons' 
import { Row, Col } from 'antd' 
import logo1 from '../../assets/logos_tren/LOGO-TRM.png'
import logo2 from '../../assets/logos_tren/LOGO-GORE.png'
import logo3 from '../../assets/logos_tren/LOGO-SEREMI.png'
import trenImage from '../../assets/img/tren01.png'
import tresnImage2 from '../../assets/img/tren-media-partners.jpg'

const TrenSection = () => {
    return(<>
        <Row justify="space-around" align='center' style={{paddingTop:'40px'}}>
          <Col>
            <center>
            <img src={logo3} style={styles.trenImg} />
            </center>
          </Col>
          <Col>
            <center>
            <img src={logo2} style={styles.trenImg} />
            </center>
          </Col>
          <Col>
            <center>
            <img src={logo1} style={styles.trenImg} />
            </center>
          </Col>
        </Row>
            
        <Row style={styles.container} justify='center'>
          <a target='__blank' href='https://www.facebook.com/ama.maule'>
            <FacebookOutlined style={{fontSize: '30px', margin:'17px', color:'white'}} />
            </a>
            <a target='__blank' href='https://www.instagram.com/ama.maule/'>  <InstagramOutlined style={{fontSize: '30px', margin:'17px', color:'white'}} /></a>
            <a target='__blank' href='https://twitter.com/AmaMaule?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'>  <TwitterOutlined style={{fontSize: '30px', margin:'17px', color:'white'}} /></a>
        </Row>
        
        </>
    )
}


const styles = {
    container: {
        backgroundColor: '#ff6d3c',
        paddingTop: '20px'
    },
    trenImg: {
        width:'50%',
        height:'50%'


    },
    trenImg2: {
        width:'100%',
        height:'100%'

    }
}


export default TrenSection
