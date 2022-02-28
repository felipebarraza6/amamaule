import React, { useState, useEffect } from 'react'
import { Modal, Typography, Badge, Row, Col, Button } from 'antd'
import { YoutubeOutlined } from '@ant-design/icons'
import YouTube from 'react-youtube'
import FormComment from './FormComment'
import ListCommentaries from './ListCommentaries'
const { Title, Paragraph } = Typography


const ModalYtVideo = ({obj}) => {

    const [visible, setVisible] = useState(false)
    
    const opts = {
        height: '450px',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      }

    return(
        <React.Fragment>
            {obj.is_live ?
            <Button onClick={()=>setVisible(true)}  type='primary' danger >EN VIVO <YoutubeOutlined style={{fontSize:'20px'}} /></Button>:
            <Button onClick={()=>setVisible(true)} type='primary' danger >VER <YoutubeOutlined style={{fontSize:'20px'}} /></Button>
            }
            <Modal  
                onCancel={()=>setVisible(false)} 
                extra={obj.title}
                visible={visible} 
                footer={[]}
                title={<p style={{marginTop:'20px'}}>{obj.title}</p>}
                width='100%' 
                style={{top:'0px', right:'0px'}} >
                    <Row style={{textAlign:'end'}}>
                        <Col span={24}>
                            {obj.is_live ? <>
                                <Badge status='processing' color='volcano' style={{marginBottom:'10px'}} /> EN VIVO
                            </>:
                            <>
                                <Badge status='success' style={{marginBottom:'10px'}} /> GRABADO
                            </> 
                            }
                        </Col>
                    </Row>
                    <Row>   
                        <Col xs={24} lg={15}>
                            <YouTube                                
                                videoId={obj.yt_api_key}
                                opts={opts}
                            />                
                            <Title style={{marginTop:'20px'}} level={3}> {obj.title}</Title>            
                            <Paragraph style={{textAlign:'justify'}} style={styles.p_transmission} strong>
                                {obj.description}
                            </Paragraph>
                        </Col>
                        <Col xs={24} lg={9}>
                            <FormComment obj={obj} />
                            
                            <ListCommentaries is_live={obj.is_live} id_transmission={obj.uuid} />
                            
                            
                        </Col>                        
                    </Row>
                </Modal>
        </React.Fragment>
    )
}

const styles = {
    p_transmission: {
        padding:'10px', 
        textIndent:'40px',                                 
        borderRadius:'10px',
        backgroundColor:'#5c0011',
        color:'white'
    }
}



export default ModalYtVideo