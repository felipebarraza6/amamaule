import React, { useContext, useEffect, useState} from 'react'
import api from '../../../api/endpoints'
import api_links_instances from '../../../api/links_instances/endpoints'
import { Tag, Form, message,Button, Result, Card, Input, Col, Row, Typography, Avatar, Select, Table, 
          Collapse, 
          Affix} from 'antd'
import Signup from '../../web/auth/SignUp'
import { MailOutlined, CalendarOutlined,
    CoffeeOutlined, SendOutlined, ClockCircleOutlined, SearchOutlined } from '@ant-design/icons'
    import ListUsers from "../links_instances/ListUsers"
import {AuthContext} from '../../../App'
import { geo_re_ci } from '../../../resources/geo'
import { Tab } from 'antd-mobile/es/components/tabs/tabs'
const { Title, Paragraph, Text} = Typography
const { Option} = Select




const Viewings = () => {

    const {state:user} = useContext(AuthContext)
    const [cities, setCities] = useState([])
    const [listUsers, setListUsers] = useState([])
    const [data, setData] = useState()
    const [profile, setProfile]= useState()

    const [meetings, setMeetings] = useState([])

    const [selectedUsers, setSelectedUsers] = useState([])
    const [listidSelected, setidSelected] = useState([])

    const [suser, setSuser] = useState({
      first_name: '',
      last_name: '',
      profile: '',
      region: '',
      city: '',
      email: '',
      phone: ''
    })

    const searchUsers = async() => {
        const rq = await api.user.list_users_suppcxt({
            type:suser.profile,
            first_name: suser.first_name,
            last_name: suser.last_name,
            region: suser.region,
            city: suser.city,
            email:suser.email,
            phone: suser.phone
        })
        setListUsers(rq.data.results)
    }

    const multiSearch = async() => {


        
        listidSelected.map(async(x)=> {
            var arr = []
            const rq =  await api_links_instances.list_meetings({
                invited:x
            })
            setMeetings([...meetings,...rq.data.results])
        }) 
        
    }
    
    console.log(meetings)
    return(
        <>
      <Row style={{backgroundColor:'white', padding:'20px', borderRadius:'10px', margin:'20px'}}>
        <Col lg={24} xs={24}>
            <Title level={3}>Gestión de reuniones e invitaciones</Title>
                </Col>
                    <Col xs={24} lg={8}>
                      <Card hoverable 
                          style={{margin:'5px', borderRadius:'20px'}} title={<Text style={{borderRadius:'10%',padding:'7px'}}></Text>} >
                    <Row>
                    <Collapse style={{width:'100%'}}>
            <Collapse.Panel header='Filtro de Usuarios' style={{width:'100%'}}>
            <Col span={24}>
                            <Input placeholder={'Buscar por nombre'} onChange={(input)=>{setSuser({...suser, first_name: input.target.value})}} />
                        </Col>
                        <Col lg={24} xs={24}>
                            <Input placeholder={'Buscar por apellido'}  onChange={(input)=>{setSuser({...suser, last_name:input.target.value})}} />
                        </Col>
                        <Col lg={24} xs={24}>
                            <Input placeholder={'Buscar por email'}  onChange={(input)=>{ setSuser({...suser, email:input.target.value}) }} />
                        </Col>
                        <Col lg={24} xs={24}>
                            <Input placeholder={'Buscar por telefono'}  onChange={(input)=>{ setSuser({...suser, phone:input.target.value}) }} />
                        </Col>
                    <Col lg={24} xs={24}>
                        <Select placeholder='Filtrar por perfil...' style={{width:'100%', marginBottom:'0px' }} onChange={(value)=> { setSuser({...suser, profile:value}) }}>
                            <Option value=''>Todos</Option>
                            <Option value='GES'>Gestor/a cultural, programador/a o similar</Option>
                            <Option value='AR'>Artista escénico o representante</Option>
                            <Option value='AV' >Artista de la visualidad</Option>
                            <Option value='PT' >Profesional o trabajador relacionado a las artes escénicas o de la visualidad</Option>
                            <Option value='PS' >Proveedor/a de bienes y servicios asociados</Option>
                            <Option value='OPP' >Organización pública o privada</Option>
                        </Select>
                    </Col>
                    <Col lg={24} xs={24}>
                        <Select placeholder='Filtrar por region...' style={{width:'100%', marginBottom:'0px' }} onSelect={(value, x)=> {
                          setSuser({...suser, region: value})
                          setCities(geo_re_ci[x.key].provincias)
                        }}>
                            {geo_re_ci.map((x, index)=> 
                                <Option key={index} value={x.region} >{x.region}</Option>
                            )}
                      </Select>
                </Col>                
                
                <Col lg={24} xs={24}>
                        <Select placeholder='Filtrar por ciudad...' 
                            style={{width:'100%', marginBottom:'0px' }} onSelect={(value)=> {
                                setSuser({...suser, city: value})
                        }}>
                            {cities.map((x)=> <Option value={x.name}> {x.name} </Option>)}
                      </Select>
                </Col>
                <Col lg={24} xs={24}>
                    <Button onClick={()=> searchUsers() } type='primary' style={{marginTop:'20px',backgroundColor:'#b05db9', borderColor:'#b05db9'}}>Buscar...</Button>
                </Col>
                <Col span={24} style={{marginTop:'20px'}}>
                    <Table dataSource={listUsers} columns={[
                        {title:'NOMBRE', render: (x)=><> {x.first_name} {x.last_name} </>},
                        {render: (x)=><><Button style={{backgroundColor:'#b05db9', borderColor:'#b05db9'}} onClick={()=> {
                            setidSelected([...listidSelected, x.id])
                            setSelectedUsers([...selectedUsers, x])                            
                            
                        }} size='small' type='primary'>+</Button></>},

                    ]} pagination={{ simple:true }} />

                </Col>
            </Collapse.Panel>
            </Collapse>
            <Card hoverable style={{marginTop:'10px', borderRadius:'20px'}} title={<Text style={{borderRadius:'10%',padding:'7px'}}>Usuarios seleccionados</Text>} >
                    <Row>
                    <Col lg={24} xs={24}>
                        {selectedUsers.map((x)=><Tag style={{margin:'5px'}} color='geekblue'> {x.first_name} {x.last_name} </Tag>)}  
                    </Col>
                    <Col lg={24} xs={24}>
                        <Button 
                            onClick={()=>multiSearch()}
                            style={{width:'100%',marginTop:'10px', marginBottom:'5px', color:'white',backgroundColor:'#b05db9', borderColor:'#b05db9'}}>
                        CARGAR REUNIONES
                        </Button>
                        <Button type='primary' danger style={{width:'100%',marginTop:'10px', marginBottom:'5px', color:'white'}}
                                onClick={()=> setSelectedUsers([]) }
                        >
                        REINICIAR SELECCIONADOS
                        </Button>
                        <Button type='primary' danger style={{width:'100%',marginTop:'10px', marginBottom:'5px', color:'white'}}
                                onClick={()=> setMeetings([]) }
                        >
                        REINICIAR CALENDARIO
                        </Button>
                        
                </Col>
                </Row>
                
              
                </Card> 
                </Row>
                
                </Card>
                
                </Col>
                <Col span={16} style={{padding:'30px'}}>                    
                  
                <Affix offsetTop={100}><Table 
                            columns={[
                                {title:'Propietario', render: (x)=><>{x.owner.first_name} {x.owner.last_name} </>},
                                {title:'Invitado', render: (x)=><>{x.invited.first_name} {x.invited.last_name} </>},
                                {title:'Fecha', render: (x)=> <> {x.start_date.slice(5,10)} T {x.start_date.slice(11,16)} </>},
                                {render: (x)=><>
                                    <Button size='small' style={{marginRight:'10px'}}>ingresar</Button>
                                    <Button size='small' style={{marginRight:'10px'}}>re-agendar</Button>
                                    <Button size='small' type='primary' danger>cancelar</Button>
                                </> }
                            ]}
                            dataSource={meetings}>
 
                        </Table> </Affix>
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
