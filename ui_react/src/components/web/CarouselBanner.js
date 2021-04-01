import React from 'react'

import { Carousel } from 'antd'
import Img1 from '../../assets/slider/img1.jpg'
import Img2 from '../../assets/slider/img2.jpg'
import Img3 from '../../assets/slider/img3.jpg'
import Img4 from '../../assets/slider/img4.jpg'
const CarouselBanner = () => {

    return(

        <Carousel autoplay dotPosition='right' effect='fade'>
            <div>
                <img src={Img1} alt='AMA' style={styles.img1} />
            </div>                                    
            <div>
                <img src={Img2} alt='AMA' style={styles.img1}  />
            </div>                                    
            <div>
                <img src={Img3} alt='AMA' style={styles.img1}  />
            </div>                                    
            <div>
                <img src={Img4} alt='AMA' style={styles.img1}  />
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
