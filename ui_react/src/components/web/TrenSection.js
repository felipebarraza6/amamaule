import React from 'react'
import { InstagramOutlined, TwitterOutlined } from '@ant-design/icons' 
import { Row } from 'antd' 

import trenImage from '../../assets/img/tren01.png'
import tresnImage2 from '../../assets/img/tren-media-partners.jpg'

const TrenSection = () => {
    return(<>
        <Row justify='center' style={{padding:'40px'}}>
            <img src={tresnImage2} alt='tren' style={styles.trenImg2} />
        </Row>
            
        <Row style={styles.container} justify='center'>
            <InstagramOutlined style={{fontSize: '30px', margin:'17px', color:'white'}} />
            <TwitterOutlined style={{fontSize: '30px', margin:'17px', color:'white'}} />
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
