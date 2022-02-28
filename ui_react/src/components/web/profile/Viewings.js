import React, { useContext, useEffect, useState} from 'react'
import api from '../../../api/endpoints'
import { Tag, Form, message,Button, Result, Card, Input, Col, Row, Typography, Avatar, Select, Table  } from 'antd'
import { MailOutlined, CalendarOutlined,
    CoffeeOutlined, SendOutlined, ClockCircleOutlined, SearchOutlined } from '@ant-design/icons'
    import ListUsers from "../links_instances/ListUsers"
import {AuthContext} from '../../../App'
const { Title, Paragraph, Text} = Typography
const { Option} = Select




const Viewings = () => {

    const {state:user} = useContext(AuthContext)

    const [data, setData] = useState()
    const [profile, setProfile]= useState()


    useEffect(()=> {

        async function getViewings(){


            const request_viewings = await api.viewings.list_viewings().then((response)=> {
                console.log(response.count)
                setData(response.results)
            })
            const request_user = await api.user.get_profile_center(user.user.id).then((response)=> {
                setProfile(response.data)
            })

            return {
                request_viewings,
                request_user
            }

        }

        getViewings()

    }, [])

    return(
        <><Row style={{'marginBottom':'20px', 'marginLeft':'20px'}}>
            <Col lg={18} xs={24}>
            <Title level={3}>Gestion de soporte</Title>
                </Col>
        </Row>
      <Row style={{backgroundColor:'white', padding:'30px'}}>
                    <Col xs={24} lg={6}><Card hoverable style={{margin:'5px', borderRadius:'20px'}} title={<Text style={{borderRadius:'10%',padding:'7px'}}>Filtrar Usuarios</Text>} >
                    <Row>
                        <Col lg={12} xs={24}>
                            <Input placeholder={'Buscar por nombre'} onChange={(input)=>{}} />
                        </Col>
                        <Col lg={12} xs={24}>
                            <Input placeholder={'Buscar por apellido'}  onChange={(input)=>{}} />
                        </Col>
                        <Col lg={24} xs={24}>
                            <Input placeholder={'Buscar por email'}  onChange={(input)=>{}} />
                        </Col>
                    <Col lg={24} xs={24}>
                        <Select placeholder='Filtrar por perfil...' style={{width:'100%', marginBottom:'0px' }} onChange={(value)=> {}}>
                            <Option value=''>Todos</Option>
                                <Option value='AM'>Artista / Manager</Option>
                                <Option value='PROV'>Proveedor (transporte, técnica, catering, otros)</Option>
                                <Option value='PRO' >Profesional a las artes escénicas</Option>
                                <Option value='RE' >Representante de organización o empresa, pública o privada</Option>
                                <Option value='GES' >Gestor Cultural / Producción / Programación</Option>
                        </Select>
                    </Col>
                    <Col lg={24} xs={24}>
                        <Select placeholder='Filtrar por region...' style={{width:'100%', marginBottom:'0px' }} onChange={(value)=> {}}>
                      </Select>
                </Col>
                
                <Col lg={24} xs={24}>
                        <Select placeholder='Filtrar por comuna...' style={{width:'100%', marginBottom:'0px' }} onChange={(value)=> {}}>
                      </Select>
                </Col>

                <Col lg={24} xs={24}>
                        <Select placeholder='Filtrar por pais...' style={{width:'100%', marginBottom:'5px' }} onChange={(value)=> {}}>
                    
                </Select>
                    </Col>
                    <Col lg={24} xs={24}>
                        <Button style={{width:'100%', marginBottom:'5px', color:'white',backgroundColor:'#b05db9', borderColor:'#b05db9'}} icon={<SearchOutlined style={{fontSize:'20px', color:'white'}} />} >
                        Realizar busqueda
                        </Button>
                </Col>
                    </Row>
                
                </Card>
                <Card hoverable style={{margin:'5px', borderRadius:'20px'}} title={<Text style={{borderRadius:'10%',padding:'7px'}}>Filtrar multiples usuarios</Text>} >
                    <Row>
                        
                    <Col lg={24} xs={24}>
                        <Select placeholder='Filtrar por usuarios...' mode='multiple' style={{width:'100%', marginBottom:'0px' }} onChange={(value)=> {}}>
                            <Option value=''>Todos</Option>
                                <Option value='A'>@usuario</Option>
                                <Option value='B'>@usuario</Option>
                                <Option value='C'>@usuario</Option>
                                <Option value='D'>@usuario</Option>
                                <Option value='E'>@usuario</Option>
                        </Select>
                    </Col>
                    <Col lg={24} xs={24}>
                        <Button style={{width:'100%', marginBottom:'5px', color:'white',backgroundColor:'#b05db9', borderColor:'#b05db9'}} icon={<SearchOutlined style={{fontSize:'20px', color:'white'}} />} >
                        Realizar busqueda
                        </Button>
                </Col>
                                    

                
                                        </Row>
                
                </Card>
                </Col>
                <Col span={18} style={{padding:'30px'}}>
                <Table columns={ [
                            {
                                title: 'HORA',
                                dataIndex: 'hour',
                                key: 'hour',
                            },
                            {
                                title: 'DIA #1',
                                dataIndex: 'day1',
                                key: 'day2',
                            },
                            {
                                title: 'DIA #2',
                                dataIndex: 'day2',
                                key: 'day2',
                            },
                            {
                                title: 'DIA #3',
                                dataIndex: 'day3',
                                key: 'day3',
                            },
                            ]}
                            
                            dataSource={[
                                {
                                    hour: '11:00',
                                    day1: <><p>@usuario1 - @usuario2</p> <Button>Ingresar</Button><Button>Editar</Button><Button>Cancelar</Button></>,
                                    day2: <><p>@usuario1 - @usuario2</p> <Button>Ingresar</Button><Button>Editar</Button><Button>Cancelar</Button></>,
                                    day3: <><p>@usuario1 - @usuario2</p> <Button>Ingresar</Button><Button>Editar</Button><Button>Cancelar</Button></>,
                                },
                                {
                                  hour: '11:20',
                                  day1: <><p>@usuario1 - @usuario2</p> <Button>Ingresar</Button><Button>Editar</Button><Button>Cancelar</Button></>,
                                  day2: <><p>@usuario1 - @usuario2</p> <Button>Ingresar</Button><Button>Editar</Button><Button>Cancelar</Button></>,
                                  day3: <><p>@usuario1 - @usuario2</p> <Button>Ingresar</Button><Button>Editar</Button><Button>Cancelar</Button></>,
                                },
                                {
                                    hour: '11:40',
                                    day1: <><p>@usuario1 - @usuario2</p> <Button>Ingresar</Button><Button>Editar</Button><Button>Cancelar</Button></>,
                                    day2: <><p>@usuario1 - @usuario2</p> <Button>Ingresar</Button><Button>Editar</Button><Button>Cancelar</Button></>,
                                    day3: <><p>@usuario1 - @usuario2</p> <Button>Ingresar</Button><Button>Editar</Button><Button>Cancelar</Button></>,
                                },
                                {
                                    hour: '12:0',
                                    day1: <><p>@usuario1 - @usuario2</p> <Button>Ingresar</Button><Button>Editar</Button><Button>Cancelar</Button></>,
                                    day2: <><p>@usuario1 - @usuario2</p> <Button>Ingresar</Button><Button>Editar</Button><Button>Cancelar</Button></>,
                                    day3: <><p>@usuario1 - @usuario2</p> <Button>Ingresar</Button><Button>Editar</Button><Button>Cancelar</Button></>,
                                },
                              ]}>

                        </Table>
                </Col>
          
      </Row>
            </>
    )

}
const styles = {
	icon: {
		
		fontSize: '20px',		
	}
}

export default Viewings
