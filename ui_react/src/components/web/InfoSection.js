import React, { useState, useEffect, useContext} from 'react'
import { Row, Col, Collapse, 
        Card, Typography, Steps  } from 'antd'
import SignUp from './auth/SignUp'
import Slide1 from '../../assets/FONDO_WEB.jpg' 
import { UserAddOutlined, ProfileOutlined, CheckCircleFilled,
        ArrowUpOutlined  } from '@ant-design/icons'
import UpdateProfileDataHome from './profile/UpdateProfileDataHome'
import { AuthContext } from '../../App'
import Login from './auth/Login'
const { Title, Paragraph, Text } = Typography

const { Panel } = Collapse;


const InfoSection = () => {
    const { state } = useContext(AuthContext)   
    const [size, setSize] = useState()
    const [current, setCurrent] = useState(0)
    const [userData, setUserData] = useState(null) 
    
    

    useEffect(()=> {
        setSize(window.innerWidth)        
    }, [])

    return(<>
    
        <Row justify='center' style={{backgroundImage:`url(${Slide1})`,backgroundPosition: 'top',
        backgroundSize: '100% auto',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        width: '100%'}} >
          
          </Row>
          <Row justify='space-around' align='top' style={{marginTop:'50px', marginBottom:'50px'}}>
            <Col >
                <Steps current={current} direction='vertical' size="small" style={{border:'3px solid rgb(176, 93, 185)', backgroundColor:'white', padding:'20px', margin:'10px', borderRadius:'10px'}}>
                    <Steps.Step  icon={current===1?<CheckCircleFilled style={{color: 'rgb(176, 93, 185)'}} />:<UserAddOutlined style={{color: 'rgb(176, 93, 185)'}} />} title='Crear usuario' />
                    <Steps.Step icon={<ProfileOutlined style={{color: current>=1&&'rgb(176, 93, 185)'}} />} title='Completar perfil' />                    
                    <Steps.Step icon={<></>}  title={<Login />} />                    
                </Steps>
            </Col>
            <Col>
                <Card 
                    style={size > 800 ? styles.card : styles.card2}> 
                    {current === 0 && <SignUp setStep={setCurrent} setUser = {setUserData} /> }
                    {current === 1 ? <> {userData && <UpdateProfileDataHome user={state.user} />} </>:<></> }
                </Card>
            </Col>
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
