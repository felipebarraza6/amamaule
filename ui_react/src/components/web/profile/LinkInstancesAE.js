import React, { useEffect, useState, useContext } from 'react'


import {Col, Row, Typography, Card, Button, message, Modal,notification} from 'antd'

import img1 from '../../../assets/img/BANNER_RONDAS_01.jpg'
import img2 from '../../../assets/img/BANNER_RONDAS_02.jpg'
import img3 from '../../../assets/img/BANNER_RONDAS_03.jpg'
import api from '../../../api/endpoints'
import api_links_instances from '../../../api/links_instances/endpoints'
import { AuthContext } from '../../../App'

const {Title, Paragraph} = Typography

const LinksInstancesAE = () => {

    const { state:authContext, dispatch } = useContext(AuthContext)
    const [blockDay1, setBlockDay1] = useState(false)
    const [blockDay2, setBlockDay2] = useState(false)
    const [blockDay3, setBlockDay3] = useState(false)
    const [countUpdate, setCountUpdate] = useState(0)
    const [tables1, setTables1] = useState([])
    const [tables2, setTables2] = useState([])
    const [tables3, setTables3] = useState([])
    const [listInscribed, setListInscribed] = useState([])

    const profile = authContext.user.profile
    const [size, setSize] = useState(0)    


    const createTableDay1 = async() => {
        setBlockDay1(true)
        const rq = await api_links_instances.create_table({'programmer': authContext.user.id, 'day1':true}).then((r)=> {
            notification.success({message:'HAS CREADO UNA MESA! PARA EL DIA MARTES 18'})
        })
        setCountUpdate(countUpdate+1)
    }

    const createTableDay2 = async() => {
        setBlockDay2(true)
        const rq = await api_links_instances.create_table({'programmer': authContext.user.id, 'day2':true}).then((r)=> {
            notification.success({message:'HAS CREADO UNA MESA! PARA EL DIA MIERCOLES 19'})
        })
        setCountUpdate(countUpdate+1)
    
        
    }

    const createTableDay3 = async() => {
        setBlockDay3(true)
        const rq = await api_links_instances.create_table({'programmer': authContext.user.id, 'day3':true}).then((r)=> {
            notification.success({message:'HAS CREADO UNA MESA! PARA EL DIA JUEVES 20'})
        })
        setCountUpdate(countUpdate+1)
    }

    const checkExistDay1 = async() => {
        const rq = await api_links_instances.check_tabled1(authContext.user.id, true)
        if(rq.data.count>0){
            setBlockDay1(true)
        } else {
            setBlockDay1(false) 
        }
    }

    const checkExistDay2 = async() => {
        const rq = await api_links_instances.check_tabled2(authContext.user.id, true)
        if(rq.data.count>0){
            setBlockDay2(true)
        } else {
            setBlockDay2(false) 
        }
    }

    const checkExistDay3 = async() => {
        const rq = await api_links_instances.check_tabled3(authContext.user.id, true)
        if(rq.data.count>0){
            setBlockDay3(true)
        } else {
            setBlockDay3(false) 
        }
    }

    const getTables = async() => {
        const rq = await api_links_instances.list_tables(true,false,false)
        const rq2 = await api_links_instances.list_tables(false,true,false)
        const rq3 = await api_links_instances.list_tables(false,false,true)
  
        const results1 = rq.data.results.slice(0, 30); // slice the first 30 elements
  const results2 = rq2.data.results.slice(0, 30); // slice the first 30 elements
  const results3 = rq3.data.results.slice(0, 30); // slice the first 30 elements
  
  setTables1(results1);
  setTables2(results2);
  setTables3(results3);

        
        
    }

    
    useEffect(()=> {
      
      setSize(window.innerWidth)
      checkExistDay2()
      checkExistDay1()
      
      checkExistDay3()
      getTables()
  
    }, [countUpdate])

    const updateProfile = async() => {
        const rq = await api.user.get_profile_center(authContext.user.id).then((x)=> {
            let userobj = {
                ...x.data.user,
                profile: x.data
            }
            dispatch({type:'UPDATE_USER', user:userobj})
        })
    }

    const addInscribed = async(x, list)=> {
        let id = authContext.user.id.toString()
        
        if(list.includes(id)){        
          }else{            
            list.push(authContext.user.id)        
          }
        
             
        const rq = await api_links_instances.add_inscribed(x.id, list)
        notification.success({message:`¡Ya agendaste tu ronda! El Equipo AMA te contactará para darte la hora de tu reunión.`, duration: 5})                
        setCountUpdate(countUpdate+1)
    }

    const getUserData = async(list) => {

        const list_b = [];
await Promise.all(list.map(async (x) => {
  const rq = await api.user.get_profile_center(x);
  list_b.push(rq.data.user);
}));
console.log(list_b);

Modal.success(({content:<>
    {list_b.map((x)=><p>{x.first_name.toUpperCase()} {x.last_name.toUpperCase()}</p>)}
</>}))


    }



    return(<><Row justify='center'  style={{height:'30vh'}}>
        <Col span={24} style={{paddingTop:''}}>
            <Title style={{textAlign:'center'}} level={3}>RONDAS DE VINCULACIÓN - PRESENCIALES</Title>
        </Col >
        <Col span={24}>
            <Paragraph style={{textAlign:'center'}}>
            Si eres programador/a: Pincha los días que vas a venir para crear tu mesa y así, quienes dessen reunirse contigo, verán tu nombre en la lista. 
            </Paragraph>
            <Paragraph style={{textAlign:'center'}}>
            Si eres artista u otro que quiere reunirse con un programador/a: Pincha en el nombre con quieres reunirte y listo. 
            </Paragraph>
            <Paragraph style={{textAlign:'center'}}>
            Son 8 cupos por mesa (programador/a)
            </Paragraph>
            <Paragraph style={{textAlign:'center'}}>
            Recuerda que tu Ronda de Vinculación tiene una duración de 15 minutos por reunión.
            </Paragraph>
        </Col>
        </Row>
       
    
        
        <Row  justify='space-around' >
            <Col  lg={8} xs={24} >
                
                <Card hoverable cover={<img src={img1} />} style={{ width: size > 800 ? '400px':'100%', margin: size > 800 ? '20px': '0 0 20px 0' }} >
                    {authContext.user.type_user=='GES' && 
                        <Button disabled={blockDay1} size='large' type='primary' style={styles.btn} onClick={createTableDay1} >Participar como programador</Button>     
                    }                    
                    
                    {authContext.user.type_user!=='GES' ? <>{tables1.map((x)=> {
                        return(<Row>
                            <Col span={4} style={{paddingRight:'5px'}}>
                            {x.programmer.id !== authContext.user.id && <Button style={styles.btn} disabled={x.inscribed.length>=8} onClick={()=>addInscribed(x, x.inscribed)} icon={<>+ </>} type='primary'>
                             ({8-x.inscribed.length})</Button> }
                            
                            </Col>
                            <Col span={20}>
                            <Button type='primary' onClick={()=> {
                                Modal.info({
                                    icon:<></>,
                                    footer: [],
                                    content: <>
                                        <Row>
                                            {console.log(x)}
                                            {x.programmer.profile.avatar && <Col span={24}>
                                                    <center><img style={{borderRadius:'10px', marginBottom:'15px'}} width={'200px'} src={x.programmer.profile.avatar} /></center>
                                                </Col>}
                                            <Col span={24}>Nombre: {x.programmer.first_name.toUpperCase()} {x.programmer.last_name.toUpperCase()}</Col>
                                            <Col span={24}>Región: {x.programmer.region.toUpperCase()} </Col>
                                            <Col span={24}>Comuna: {x.programmer.commune.toUpperCase()} </Col>
                                            <Col span={24}>Email: {x.programmer.email.toUpperCase()} </Col>
                                            <Col span={24} style={{marginTop:'10px'}}>Descripción: {x.programmer.profile.review}</Col>                                       
                                        </Row>
                                    </>
                                })
                            }} style={styles.btn}>                                
                                {x.programmer.first_name.toUpperCase()} {x.programmer.first_name.length > 20 ? ' ':' '}                                 
                                {x.programmer.last_name.toUpperCase()} {x.programmer.last_name.length > 20 ? ' ':' '}                                                                 
                            </Button>
                            </Col>
                            </Row>) 
                    })}</>:<>{tables1.map((x)=> {
                                
                        return(<Button style={styles.btn} onClick={()=>getUserData(x.inscribed)} icon={<></>} type='primary'>
                            {x.programmer.first_name.toUpperCase().slice(0,6)}{x.programmer.first_name.length > 6 ? '... ':' '} 
                                {x.programmer.last_name.toUpperCase().slice(0,6)}{x.programmer.last_name.length > 6 ? '...': ' '}  (quedan {8-x.inscribed.length} cupos)</Button>)
                    })}</>}                    
                    
                    
                    
                </Card>                
            </Col>
            <Col  lg={8}  xs={24}>

            <Card hoverable cover={<img src={img2} />} style={{ width: size > 800 ? '400px':'100%', margin: size > 800 ? '20px': '0 0 20px 0' }} >
                    {authContext.user.type_user=='GES' && <>
                        
                        <Button disabled={blockDay2} size='large' type='primary' style={styles.btn} onClick={createTableDay2} >Participar como programador</Button>                             
                        </> 
                    }                    
                    {authContext.user.type_user!=='GES' ? <>{tables2.map((x)=> {
                        return(<Row>
                            <Col span={4} style={{paddingRight:'5px'}}>
                            {x.programmer.id !== authContext.user.id && <Button style={styles.btn} disabled={x.inscribed.length>=8} onClick={()=>addInscribed(x, x.inscribed)} icon={<>+ </>} type='primary'>
                             ({8-x.inscribed.length})</Button> }
                            </Col>
                            <Col span={20}>
                            <Button type='primary' onClick={()=> {
                                Modal.info({
                                    icon:<></>,
                                    footer: [],
                                    content: <>
                                        <Row>
                                        {x.programmer.profile.avatar && <Col span={24}>
                                                    <center><img style={{borderRadius:'10px', marginBottom:'15px'}} width={'200px'} src={x.programmer.profile.avatar} /></center>
                                                </Col>}
                                            <Col span={24}>Nombre: {x.programmer.first_name.toUpperCase()} {x.programmer.last_name.toUpperCase()}</Col>
                                            <Col span={24}>Región: {x.programmer.region.toUpperCase()} </Col>
                                            <Col span={24}>Comuna: {x.programmer.commune.toUpperCase()} </Col>
                                            <Col span={24}>Email: {x.programmer.email.toUpperCase()} </Col>
                                            <Col span={24} style={{marginTop:'10px'}}>Descripción: {x.programmer.profile.review}</Col>                                           
                                        </Row>
                                    </>
                                })
                            }} style={styles.btn}>
                                {x.programmer.first_name.toUpperCase()}
                                {' '}
                                {x.programmer.last_name.toUpperCase()} </Button>
                            </Col>
                            </Row>) 
                    })}</>:<>{tables2.map((x)=> {                                
                        return(<Button style={styles.btn} onClick={()=>getUserData(x.inscribed)} icon={<></>} type='primary'>
                            {x.programmer.first_name.toUpperCase()} 
                            {x.programmer.last_name.toUpperCase()} ({8-x.inscribed.length})</Button>)
                    })}</>}                    
                    
                </Card>                          
                
            </Col>           
            <Col  lg={8}  xs={24}>
            <Card hoverable cover={<img src={img3} />} style={{ width: size > 800 ? '400px':'100%', margin: size > 800 ? '20px': '0 0 20px 0' }} >
                    {authContext.user.type_user=='GES' && 
                        <Button disabled={blockDay3} size='large' type='primary' style={styles.btn} onClick={createTableDay3} >Participar como programador</Button>     
                    }                    
                    {authContext.user.type_user!=='GES' ? <>{tables3.map((x)=> {
                        return(<Row>
                            <Col span={4} style={{paddingRight:'5px'}}>
                            <Button style={styles.btn} disabled={x.inscribed.length>=8} onClick={()=>addInscribed(x, x.inscribed)} icon={<>+ </>} type='primary'>
                             ({8-x.inscribed.length})</Button>
                            </Col>
                            <Col span={20}>
                            <Button type='primary' onClick={()=> {
                                Modal.info({
                                    icon:<></>,
                                    footer: [],
                                    content: <>
                                        <Row>
                                        {x.programmer.profile.avatar && <Col span={24}>
                                                    <center><img style={{borderRadius:'10px', marginBottom:'15px'}} width={'200px'} src={x.programmer.profile.avatar} /></center>
                                                </Col>}
                                            <Col span={24}>Nombre: {x.programmer.first_name.toUpperCase()} {x.programmer.last_name.toUpperCase()}</Col>
                                            <Col span={24}>Región: {x.programmer.region.toUpperCase()} </Col>
                                            <Col span={24}>Comuna: {x.programmer.commune.toUpperCase()} </Col>
                                            <Col span={24}>Email: {x.programmer.email.toUpperCase()} </Col>
                                            <Col span={24} style={{marginTop:'10px'}}>Descripción: {x.programmer.profile.review}</Col>                                    
                                        </Row>
                                    </>
                                })
                            }} style={styles.btn}>
                                {x.programmer.first_name.toUpperCase()}
                                {' '}
                            {x.programmer.last_name.toUpperCase()} </Button>
                            </Col>
                            </Row>) 
                    })}</>:<>{tables3.map((x)=> {                                
                        return(<Button style={styles.btn} onClick={()=>getUserData(x.inscribed)} icon={<></>} type='primary'>
                            {x.programmer.first_name.toUpperCase()}
                            {' '} 
                            {x.programmer.last_name.toUpperCase()}
                            ({8-x.inscribed.length})</Button>
                                )
                    })}</>}                    
                    
                </Card>    

            </Col>           
            
    </Row>
   
    </>)


}

const styles = {
    btn: {
        backgroundColor:'rgb(176, 93, 185)', 
        borderColor: 'rgb(176, 93, 185)', 
        margin:'5px',    
        width:'100%'   
    }
}

export default LinksInstancesAE
