import React from 'react'

import { Row } from 'antd'

import trenImage from '../assets/img/tren01.png'


const TrenSection = () => {
    return(
        <Row justify='center' style={styles.container}>
            <img src={trenImage} alt='tren' style={styles.trenImg} />
        </Row>
    )
}


const styles = {
    container: {
        backgroundColor: '#61263D',
        marginTop: '60px',
        paddingTop: '20px'
    },
    trenImg: {
        width:'50%'
    }
}


export default TrenSection