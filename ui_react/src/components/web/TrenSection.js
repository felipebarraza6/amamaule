import React from 'react'

import { Row } from 'antd'

import trenImage from '../../assets/img/tren01.png'
import tresnImage2 from '../../assets/img/tren-media-partners.jpg'

const TrenSection = () => {
    return(<>
        <Row justify='center'>
            <img src={tresnImage2} alt='tren' style={styles.trenImg2} />
        </Row>
            <Row justify='center' style={styles.container}>
            <img src={trenImage} alt='tren' style={styles.trenImg} />
        </Row>
        </>
    )
}


const styles = {
    container: {
        backgroundColor: '#61263D',
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
