import React from 'react'

import { Flex } from 'antd-mobile'
import img1 from '../../assets/logos_tren/trm.png'
import img2 from '../../assets/logos_tren/gore.png'
import img3 from '../../assets/logos_tren/mincap.png'


const TrenSectionM = () => {
    return(
        <Flex justify='center' wrap='wrap'  style={styles.container}>
          <img style={{width:'50%', height:'50%'}} src={img1} />
          <img style={{width:'50%', height:'50%'}}  src={img2} />
          <img style={{width:'50%', height:'50%'}}  src={img3} />
        </Flex>
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


    }
}


export default TrenSectionM
