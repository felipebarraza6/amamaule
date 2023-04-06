import React, { useContext, useState, useEffect } from 'react'   
import { AuthContext } from '../../../App'
import {  message, Card,
        Row, Col, Button, Typography, Tag } from 'antd'
import api from '../../../api/endpoints'
import { getUsers } from '../../../actions/meetings_rounds/getData'
  


const Workshops2 = ({is_digital}) => {

  const { state } = useContext(AuthContext)
  const [profile, setProfile] = useState(null)
  const [participans, setParticipans] = useState(null)
  const [page, setPage] = useState(1)
  const [size, setSize] = useState()

  const [ellipsis, setEllipsis] = React.useState(true);

  const [workshops, setWorkshops] = useState([])

  async function getData(is_digital){
    const request = await api.workshops.get(is_digital).then((response)=> {
      setWorkshops(response.data.results)
      console.log(response)
      })
      return request
    }   

  async function updateWorkshop(id, participans){    
    const rq = await api.workshops.update(id,{inscribed: participans}).then((x)=> {
      getData(is_digital)

      message.success('Participación confirmada')
    })
  }

  async function updateWorkshopRest(id, participans){    
    var deleteUserr = participans.filter((item) => item !== state.user.id.toString())
    

    const rq = await api.workshops.update(id,{inscribed: deleteUserr}).then((x)=> {
      getData(is_digital)
      message.error('Participación cancelada')
    })
  }

  

  useEffect(()=> {
    
    setSize(window.innerWidth)
       if(is_digital){
        getData(true)        
       }else{
        getData(false)         
       }

        

  }, [])

  

  return(
    <>   
      {workshops.map((x)=>{
        let participans = x.inscribed        
        let user = state.user.id.toString()
        let quota = x.maximum_quota
        let is_incribed = false    

        
        

        participans.includes(user)
        if(participans.includes(user)){
          is_incribed=true
        }else{
          is_incribed=false
        }

        if(!is_incribed){
          participans.push(user)
        }
        

        return(
          <Col style={styles.col} lg={6} xs={24}>
            <Card hoverable extra={is_digital ? <>              
              <Tag color='volcano'>Cupos limitados: {x.maximum_quota}</Tag><Tag color='pink'>Duración: {x.duration}</Tag></>: <Tag color='volcano'> Duración: {x.duration} </Tag>} 
              style={styles.card}  
                cover={<img alt="example" src={x.principal_image} />}
                title={<>                  
                </>} >
                  
                  <Typography.Paragraph style={styles.paragraph}>{x.title} </Typography.Paragraph> 
                  <Typography.Paragraph  style={styles.description}
                    ellipsis={{ tooltip: x.description, rows:3 }}
                  >{x.description} </Typography.Paragraph>                   
                  <hr style={{color:'rgb(176, 93, 185)'}} />
                  <Typography.Paragraph><Tag color={'pink'}>Relatores</Tag></Typography.Paragraph>
                  <Typography.Paragraph>{x.rapporteurs} </Typography.Paragraph> 
                  <hr style={{color:'rgb(176, 93, 185)'}} /> 
                  {!is_digital && <>                  
                    <Typography.Paragraph><Tag color={'pink'}>Ubicación</Tag></Typography.Paragraph>
                    <Typography.Paragraph>{x.location} </Typography.Paragraph> 
                    <hr style={{color:'rgb(176, 93, 185)'}} /> 
                    </>}   
                  <Typography.Paragraph><Tag color={'pink'}>Fecha</Tag></Typography.Paragraph>
                  <Typography.Paragraph>{x.date_text}</Typography.Paragraph>
                  <hr style={{color:'rgb(176, 93, 185)'}} />                   
                  
                  {!x.is_end ? <>
                  {is_incribed===false ? 
                    <Button disabled={!state.user.is_verified} style={styles.btn} onClick={()=>updateWorkshop(x.id, participans, quota)} type='primary'>PARTICIPAR</Button>:
                  <Button style={styles.btn} onClick={()=>updateWorkshopRest(x.id, participans)} type='primary'>CANCELAR PARTICIPACION</Button>}
                  </>:<Tag color='volcano'>INSCRIPCIONES CERRRADAS</Tag>}
                  
                  {is_digital & x.is_active ? <Button onClick={()=>window.open(x.url_zoom)} style={styles.btn} type='primary'>ZOOM</Button>:''}                  
        </Card>
      </Col>
        )

      })}                         
    </>
  )

  

}
const size = window.innerWidth 
const styles = {
  col: {
    marginTop:'20px',
    margin:'20px'
  },
  btn: {
    margin:'10px', 
    backgroundColor:'rgb(176, 93, 185)', 
    borderColor: 'rgb(176, 93, 185)',
    color:'white'
  },
  paragraph: {
    fontSize: '20px'
  },
  description: {
    fontSize: '17px'
  },
  button: {
    backgroundColor:'#CE3D4B',
    borderColor:'#CE3D4B',
    color:'white',
    marginRight:'10px',
    marginLeft: '10px'
  },
  cancelButton: {
    backgroundColor:'#CE3D4B',
    color: 'white',
    borderColor: '#CE3D4B',
    marginBottom:'10px'
  },
  buttonIns: {
    backgroundColor:'#61263D',
    borderColor:'#61263D',
    color: 'white',
    marginLeft: '10px',
    marginRight: '10px'
  },
  card: {
      padding:'0px',      
      width: size > 800 ? '100%':'100%'
  }
}



export default Workshops2
