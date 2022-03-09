import React, { useState } from 'react'
import { Row, Col, Typography, Carousel, Modal, Button } from 'antd'
import img1 from '../../assets/ama2021/1.jpeg'
import img2 from '../../assets/ama2021/2.jpeg'
import img3 from '../../assets/ama2021/3.jpeg'
import img4 from '../../assets/ama2021/4.jpeg'
import img5 from '../../assets/ama2021/5.jpeg'
import v1 from '../../assets/voces/1.jpeg'
import v2 from '../../assets/voces/2.jpeg'
import v3 from '../../assets/voces/3.jpeg'
import v4 from '../../assets/voces/4.jpeg'
import v5 from '../../assets/voces/5.jpeg'
import v6 from '../../assets/voces/6.jpeg'
import YouTube from 'react-youtube'

const { Title, Paragraph } = Typography

const OldAma = () => {
  
  const [visibleModal, setVisibleModal] = useState(false)

  const opts = {
    height: '290',
    width: '540',    
    
  }

  return(<>
    <Modal visible={visibleModal} onCancel={()=>setVisibleModal(false)} width={'100%'} style={{top:'15px'}} footer={[<Button onClick={()=>setVisibleModal(false)} style={{borderColor: '#ff6d3c',backgroundColor:'#ff6d3c', color:'white'}}>Cerrar</Button>]}
 >
      <Row justify='center' style={styles.container}>
      <Title level={2}>AMA 2021</Title>
    </Row>
    <Row>
    <Col span={24}>
      <Paragraph style={{padding:'30px'}}>El Encuentro AMA - I versión fue una iniciativa que impulsó la vinculación de artistas del Maule con agentes culturales de la región, el país y el mundo. El encuentro se llevó a cabo entre el 14 y el 17 de abril, adaptado en un ciento por ciento al formato online producto de la crisis sanitaria y logró convocar a más de 519 artistas, gestores culturales y representantes de organizaciones nacionales e internacionales, que en conjunto corroboraron la urgencia de pensar nuevas relaciones entre los actores diversos del ecosistema artístico y cultural.
</Paragraph>
    </Col>
    
    <Col span={8}>
      <Carousel autoplay>
      <div>
        <img src={img1} style={styles.img1} />
      </div>
      <div>
        <img src={img3} style={styles.img1} />
      </div>  
      <div>
        <img src={img4} style={styles.img1} />
      </div>
      <div>
        <img src={img5} style={styles.img1} />
      </div>
      </Carousel>
    </Col>
    <Col span={8}>    
      <img src={img2} style={styles.img2} />
    </Col>
    <Col span={8}>
      <Carousel autoplay>
      <div>
        <img src={v1} style={styles.img1} />
      </div>
      <div>
        <img src={v2} style={styles.img1} />
      </div>  
      <div>
        <img src={v3} style={styles.img1} />
      </div>
      <div>
        <img src={v4} style={styles.img1} />
      </div>
      <div>
        <img src={v5} style={styles.img1} />
      </div>
      <div>
        <img src={v6} style={styles.img1} />
      </div>
      </Carousel>
    </Col>

    </Row>
    <Row style={{marginTop:'60px'}}>
    <Col span={8}>
        <YouTube style={{margin:'20px'}} videoId="G0PB-ulHUE4" opts={opts} /><br />
        <YouTube videoId="Gm8pyBXHH4M" opts={opts} /><br />
        <YouTube videoId="K9dExQAX04M" opts={opts} /><br />
      
    </Col>
    <Col span={8}>
        <YouTube videoId="wgz2eNHj5gc" opts={opts} /><br />
        <YouTube videoId="PL9zE5EqUsQ" opts={opts} /><br />
        <YouTube videoId="NNljOvKCuoA" opts={opts} /> <br />
        
    </Col>
    <Col span={8}>
        <YouTube videoId="tqAUTwzBSQw" opts={opts} /><br />
        <YouTube videoId="Fs3tYV8uobo" opts={opts} /><br />
        <YouTube videoId="CaheOjSbf6Y" opts={opts} />  <br />
      
    </Col>
    </Row>
    </Modal>
    <Button style={{paddingBottom:'40px', paddingTop:'12px', color:'white'}} type='link' onClick={()=>setVisibleModal(true)}>
             AMA 2021
        </Button>

    </>)
}

const styles = {
  container: {
    marginTop: '40px'
  },
  img1: {
        display: 'block',
        width:'100%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
img2: {
        display: 'block',
        width:'100%',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
}

export default OldAma