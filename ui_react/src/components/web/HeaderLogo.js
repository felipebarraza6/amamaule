import React from 'react'

// Assets
import Logo from '../../assets/logo/01B.png'

// Antd
import { Row, Col } from 'antd'


const HeaderLogo = () => {

    return (
        <Row>
            <Col style={styles.col}>
                <img alt='logo' src={Logo} style={styles.logo} />
            </Col>
        </Row>                
    )
}


const styles = {
    logo: {
        width: '0%',
        margin:'20px'
    },
    col: {
        textAlign:'center',
    }    
}


export default HeaderLogo
