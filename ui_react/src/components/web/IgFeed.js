import React from 'react'

import Feed from "react-instagram-authless-feed"
import { InstagramOutlined } from '@ant-design/icons'
import InstaLogo from '../../assets/img/insta_fonts.png'
import { Row, Col, Typography } from 'antd'

const { Title } = Typography

//<Feed userName={'ama.maule'} className="Feed" classNameLoading="Loading" limit={8}/>
const IgFeed = () => {

    return(
        <Row justify={'center'} style={{marginRight:'130px',marginLeft:'130px', marginBottom:'130px', marginTop:'60px', textAlign:'center'}} >
            <InstagramOutlined style={{fontSize:'90px'}} />
            <img src={InstaLogo} width={'220px'} height={'110px'} />

        </Row>
    )

}



export default IgFeed