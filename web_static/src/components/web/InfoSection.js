import React, { useState, useEffect} from 'react'
import { Row, Col, Collapse,Card, Typography, Tag } from 'antd'
import SignUp from './auth/SignUp'
import CarouselBanner from './CarouselBanner'
import Slide1 from '../../assets/FONDO_WEB.jpg' 
import ListPublic from './transmissions/list/ListPublic'
import HomeQuestion from './HomeQuestion'

const { Title, Paragraph, Text } = Typography

const { Panel } = Collapse;


const InfoSection = () => {

    const [size, setSize] = useState()

    useEffect(()=> {
        setSize(window.innerWidth)
    }, [])

    return(<>
    
        <Row justify='center' style={{backgroundImage:`url(${Slide1})`,backgroundPosition: 'top',
        backgroundSize: '160% auto',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        width: '100%'}} >
          
          <ListPublic /> 
          </Row>
          <Row justify='center'>
            <Col style={{marginTop:'0px'}} >
           
                <Card 
                    style={size > 800 ? styles.card : styles.card2}
                   > 
        
                    <HomeQuestion />

                        
                </Card></Col>
        </Row></>
    )

    

}

const styles = {
    row: {
       
        marginBottom: '100px',
    },
    card: {
        width: '900px',
        boxShadow:'25px 25px 5px rgba(0, 0, 0, 0.2)',
        marginBottom: '100px'
    },
    card2: {
        width: '100%',
        marginBottom: '100px'
    }
    
}





export default InfoSection
