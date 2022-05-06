import React from 'react'

import { Carousel } from 'antd'
import Img1 from '../../assets/img/catalogo.jpg'
import Img2 from '../../assets/img/espectaculos.jpg'
import Img3 from '../../assets/img/ronda.jpg'
import Img4 from '../../assets/img/mercado.jpg'
import Img5 from '../../assets/img/mt.jpg'
import Img6 from '../../assets/img/TALLERES.jpg'


const CarouselBanner = () => {

    return(

        <Carousel autoplay dotPosition='right' effect='fade'>
            <div>
                <img src={Img6} alt='AMA' style={styles.img1} />
            </div>                                    
            <div>
                <img src={Img5} alt='AMA' style={styles.img1}  />
            </div>                                                                                    
            <div>
                <img src={Img3} alt='AMA' style={styles.img1} />
            </div>                                    
            <div>
                <img src={Img2} alt='AMA' style={styles.img1}  />
            </div>
        </Carousel>
        
    )
}


const styles = {    
    img1: {
        display: 'block',
        width:'80%',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
}

export default CarouselBanner
