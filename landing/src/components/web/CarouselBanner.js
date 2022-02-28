import React from 'react'

import { Carousel } from 'antd'

import Img1 from '../../assets/slider/img1.jpg'
import Img2 from '../../assets/slider/2.jpg'
import Img3 from '../../assets/slider/3.jpg'
import Img4 from '../../assets/slider/4.jpg'
import Img5 from '../../assets/slider/5.jpg'
import Img6 from '../../assets/slider/6.jpg'

const CarouselBanner = () => {

    return(

        <Carousel autoplay dotPosition='right' effect='fade'>
            <div><a target='__blank' href='https://docs.google.com/forms/d/e/1FAIpQLSftXyc40eAOF9rDA8CpN4v31PBOP0_ZhQXzmzOFRfxgtHCIEg/viewform?usp=sf_link'>
                <img src={Img1} alt='AMA' style={styles.img1} />
                </a>
            </div>                                    
            <div><a target='__blank' href='https://docs.google.com/forms/d/e/1FAIpQLScMGeO4gYVyd5466grmH_mvrHj53qrXxLz17zjOG8-Wdra27Q/viewform?usp=sf_link'>
                <img src={Img2} alt='AMA' style={styles.img1}  />
                </a>
            </div>                                                
        </Carousel>
        
    )
}


const styles = {    
    img1: {
        display: 'block',
        width:'75%',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
}

export default CarouselBanner
