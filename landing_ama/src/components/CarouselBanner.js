import React from 'react'

import { Carousel } from 'antd'


const CarouselBanner = () => {

    return(
        <Carousel>
            <div >
                <h1 style={styles.banner}>Banner 1</h1>
            </div>            
            <div >
                <h1 style={styles.banner}>Banner 2</h1>
            </div>            
            <div >
                <h1 style={styles.banner}>Banner 3</h1>
            </div>            
        </Carousel>
    )
}


const styles = {
    banner: {        
        height: '460px',
        color: '#fff',        
        lineHeight: '160px',
        textAlign: 'center',
        background: '#f58b88',
    }
}

export default CarouselBanner