import React from 'react'

import { Carousel } from 'antd'
import Img1 from '../assets/slider/img1.jpg'

const CarouselBanner = () => {

    return(
        <Carousel>
            <div>
                <img src={Img1} alt='AMA' style={styles.img1}  />
            </div>                                    
        </Carousel>
    )
}


const styles = {    
    img1: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
}

export default CarouselBanner