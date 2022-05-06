import React from 'react'

import { InstagramOutlined } from '@ant-design/icons'
import InstaLogo from '../../assets/img/insta_fonts.png'
import { Row, Col, Typography } from 'antd'
import img1 from '../../assets/insta/1.png'
import img2 from '../../assets/insta/2.png'
import img3 from '../../assets/insta/3.png'
import img4 from '../../assets/insta/4.png'
import img5 from '../../assets/insta/5.png'
import img6 from '../../assets/insta/6.png'

const { Title } = Typography

//<Feed userName={'ama.maule'} className="Feed" classNameLoading="Loading" limit={8}/>
const IgFeed = () => {

    return(
        <Row justify={'space-around'} style={{paddingBottom:'120px', paddingTop:'60px', textAlign:'center', backgroundColor:'white'}} >
            <Col lg={24} style={{marginBottom:'20px'}}>
            <InstagramOutlined style={{fontSize:'90px'}} />
            <img  src={InstaLogo} width={'220px'} height={'110px'} />
            </Col>
            <Col lg={5}>
            <img onClick={()=> window.open("https://www.instagram.com/p/CaneCfRBlBl/")} src={img1} style={{marginBottom:'20px'}} />
            </Col>
            <Col lg={5}>
            <img onClick={()=> window.open("https://www.instagram.com/p/CanHooHrq_e/")} src={img2} style={{marginBottom:'20px'}} />
            </Col>
            <Col lg={5}>
            <img onClick={()=> window.open("https://www.instagram.com/p/CakOg7qMh-f/")} src={img3} style={{marginBottom:'20px'}} />
            </Col>
            <Col lg={5}>
            <img onClick={()=> window.open("https://www.instagram.com/p/CajxKaPrsuX/")} src={img4} style={{marginBottom:'20px'}} />
            </Col>            
        </Row>
    )
}


export default IgFeed
