import React from 'react'


import {Col, Row, Typography, Card, Button} from 'antd'

import img1 from '../../../assets/img/BANNER_RONDAS_01.jpg'
import img2 from '../../../assets/img/BANNER_RONDAS_02.jpg'
import img3 from '../../../assets/img/BANNER_RONDAS_03.jpg'

const {Title, Paragraph} = Typography

const LinksInstancesAE = () => {

    return(<><Row style={{paddingTop:'20px', margin:'20px', marginLeft:'40px'}}>
        <Col span={24} style={{paddingTop:'30px'}}>
            <Title level={3}>RONDAS DE VINCULACIÓN - ARTES ESCÉNICAS</Title>
        </Col><Col span={20} style={{margin:'25px'}}>
            <Paragraph style={{textAlign:'justify'}}> 
                Las Rondas de Vinculación en formato presencial consisten en reuniones previamente agendadas entre un grupo de programadores u 
                organizaciones que tengan programas de apoyo y/o colaboración con el sector artístico escénico con artistas escénicos y visuales. 
                Principalmente programadores y artistas son quienes participarán de estas rondas. 
            </Paragraph>
            <Paragraph style={{textAlign:'justify'}}> 
                Dichas rondas se realizarán en el foyer del Teatro Regional del Maule, por lo que debes cumplir con el protocolo de acceso, 
                es decir, portar tu pase de movilidad habilitado, uso de alcohol gel, mascarilla obligatoria y distancia física mínima.
            </Paragraph>
        </Col></Row>
       
        
        
        <Row style={{marginBottom:'60px', marginTop:'20px'}} justify='center'>
            <Col  lg={8} xs={24} >
                <Card hoverable cover={<img src={img1} />} style={{ width: 500, margin:'20px' }} >
                    
                    <Button size='large' type='primary' style={styles.btn} >Participar</Button>                 
                </Card>                
            </Col>
            <Col  lg={8}  xs={24}>
                 <Card hoverable cover={<img src={img2} />} style={{ width: 500, margin:'20px' }}>
                                                 
                        
                    <Button size='large' type='primary' style={styles.btn} >Participar</Button>                   
                                              
                </Card>
                
            </Col>           
            <Col  lg={8}  xs={24}>
                 <Card hoverable cover={<img src={img3} />} style={{ width: 500, margin:'20px' }}>
                                                    
                         
                    <Button size='large' type='primary' style={styles.btn} >Participar</Button>                   
                                              
                </Card>
                
            </Col>
    </Row>
   
    </>)


}

const styles = {
    btn: {
        backgroundColor:'rgb(176, 93, 185)', 
        borderColor: 'rgb(176, 93, 185)', 
        marginTop:'10px',      
        width:'100%'   
    }
}

export default LinksInstancesAE