import React, { useState} from 'react'
import api from '../../../api/endpoints'
import api_links_instances from '../../../api/links_instances/endpoints'
import { Tag, Button, Card, Input, Col, Row, Typography, Select, Table, 
          Collapse, notification, Modal, Form, TimePicker,
          Affix} from 'antd'
import Signup from '../../web/auth/SignUp'
import {CalendarOutlined} from  '@ant-design/icons'



import { geo_re_ci } from '../../../resources/geo'

const { Title, Text} = Typography
const { Option} = Select




const Viewings = () => {

    const [cities, setCities] = useState([])
    const [listUsers, setListUsers] = useState([])

    const [meetings, setMeetings] = useState([])

   
    const [selectedUsers, setSelectedUsers] = useState([])
    const [userS, setUserS] = useState([])
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
        setUserS(selectedUsers)
        setSelectedUsers([])
        setidSelected([])
        var arr=[]
        for(var i =0; listidSelected.length > i; i++){
            const rq =  await api_links_instances.list_meetings({
                invited:listidSelected[i]
            })            
            arr.push(...rq.data.results)
            
        }
        setMeetings(arr)
        
    }


    const ModalResch = ({ data:x }) => {
        const [visible, setVisible] = useState(false)
        const [usersFilters, setUsersFilters] = useState([])


        return(<>
                <Modal onCancel={()=>setVisible(false)} visible={visible}><Form layout='vertical' initialValues={{owner:x.owner.id, invited:x.invited.id}} onFinish={(values)=>{														
                        var format_time = values.hour_minutes.format('HH:mm:ss')
                        var date_formated = `2022-03-${values.day}T${format_time}`																																						            
                        values = {
                            ...values,
                            date_meeting: date_formated
                        }
                        values = {
                            'owner': values.owner,
                            'start_date': date_formated,
                            'participans_invited': [values.invited, values.owner],
                            'is_active': true,
                            'message': 'Esta invitación es enviada desde el administador'
                        }
                        console.log(values)
                    }}>
                    <Form.Item name='owner' rules={[{ required: true, message: 'Selecciona una persona'}]} label='propietario'>
                            <Select showSearch
                                    allowClear
                                    notFoundContent={null}                                                                       
                                    filterOption={false} onSearch={async(x)=>{                                     
                                        const rq = await api.user.list_users_suppcxt({last_name:x})                                                                
                                        setUsersFilters(rq.data.results)                                                                  
                                        return rq 
                                    }} size={'large'} style={{width:'100%'}} placeholder={'Propietario'}>
                                        <Option value={x.owner.id}><b> {x.owner.first_name} {x.owner.last_name} (id:{x.owner.id}) </b></Option>
                                        {usersFilters.map((obj)=>
                                            <Option key={obj.id} value={obj.id}> {obj.first_name} {obj.last_name} (id:{obj.id}) </Option>)}                            
                            </Select>
                        </Form.Item>                                                        	        
                        <Form.Item name='invited' rules={[{ required: true, message: 'Selecciona una persona'}]} label='invitado'>
                            <Select showSearch
                                        allowClear
                                        notFoundContent={null}                                                                       
                                        filterOption={false} onSearch={async(x)=>{                                     
                                            const rq = await api.user.list_users_suppcxt({last_name:x})                                                                
                                            setUsersFilters(rq.data.results)                                                                  
                                            return rq 
                                        }} size={'large'} style={{width:'100%'}} placeholder={'Propietario'}>
                                            <Option value={x.invited.id}><b> {x.invited.first_name} {x.invited.last_name} (id:{x.invited.id}) </b></Option>
                                            {usersFilters.map((obj)=>
                                                <Option key={obj.id} value={obj.id}> {obj.first_name} {obj.last_name} (id:{obj.id}) </Option>)}                            
                            </Select>
                        </Form.Item>
                        <Form.Item name='day' rules={[{ required: true, message: 'Selecciona un dia'}]}>
                            <Select size={'large'} style={{width:'100%'}} placeholder={'Selecciona el día de la reunión'}>
                                <Option value={'29'}>Martes 29</Option>
                                <Option value={'30'}>Miércoles 30</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name='hour_minutes' rules={[{ required: true, message: 'Selecciona un horario'}]}>
                            <TimePicker
                            size={'large'}
                            disabledHours={() => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ,10,11, 14, 17, 18, 19, 20, 21, 22, 23, 24]}
                            minuteStep={20}
                            hideDisabledOptions = {true}
                            inputReadOnly={true}																																										
                            showNow={false} style={{width:'100%'}} placeholder={'Selecciona la hora(formato 24 hrs)'} format={'HH:mm'} />
                        </Form.Item>
                        <Form.Item>
                            <Button htmlType='submit' 
                                type='primary' 
                                style={{marginTop:'30px',float:'right',backgroundColor:'rgb(255, 186, 49)', borderColor:'rgb(255, 186, 49)'}}>
                                    Re-Agendar</Button>
                        </Form.Item>
                    </Form>
                </Modal>
                <Button size='small' type='primary' style={{backgroundColor:'rgb(176, 93, 185)', borderColor:'rgb(176, 93, 185)'}} onClick={()=>setVisible(true)}>Re-Agendar</Button></>)
    }
   
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
                            notification.success({message:'has agregado un usuario al listado'})                       
                            
                        }} size='small' type='primary' >+</Button></>},

                    ]} pagination={{ simple:true, defaultPageSize:5 }} />

                </Col>
            </Collapse.Panel>
            </Collapse>
            <Card hoverable style={{marginTop:'10px', borderRadius:'20px'}} title={<Text style={{borderRadius:'10%',padding:'7px'}}>Usuarios seleccionados</Text>} >
                    <Row>
                    <Col lg={24} xs={24}>
                        {selectedUsers.map((x)=><Tag style={{margin:'5px'}} color='geekblue'> {x.first_name} {x.last_name} </Tag>)}  
                    </Col>
                    <Col lg={24} xs={24}>
                        {meetings.length > 0 ? 
                            <Button type='primary' danger style={{width:'100%',marginTop:'10px', marginBottom:'5px', color:'white'}}
                            onClick={()=> {
                                setMeetings([])
                                setUserS([])
                            }}
                                >
                                REINICIAR REUNIONES
                                </Button>:<Button 
                            onClick={()=>{
                                multiSearch()
                            
                            }}
                            style={{width:'100%',marginTop:'10px', marginBottom:'5px', color:'white',backgroundColor:'#b05db9', borderColor:'#b05db9'}}>
                        CARGAR REUNIONES
                        </Button>

                        }
                        
                        <Button type='primary' danger style={{width:'100%',marginTop:'10px', marginBottom:'5px', color:'white'}}
                                onClick={()=> setSelectedUsers([]) }
                        >
                        REINICIAR SELECCIONADOS
                        </Button>                        
                        
                </Col>
                </Row>
                
              
                </Card> 
                </Row>
                
                </Card>
                
                </Col>
                <Col span={16} style={{padding:'30px'}}>                                      
                    
                    <Row align='center' style={{marginBottom:'10px'}}>
                        {userS.map((x)=> {
                            return(<Col span={15} style={{padding:'10px'}}><Tag style={{fontSize:'15px'}} color='pink'> {x.first_name} {x.last_name} - {x.email} - {x.phone_number} </Tag></Col>)
                        })}
                        </Row>
                    <Affix offsetTop={0}>
                        <Table 
                                columns={[
                                    {title:'Participantes', render: (x)=><Row>
                                        <Col span={24}><u>
                                        {x.owner.first_name} {x.owner.last_name} 
                                        </u>
                                        </Col>
                                        <Col span={24}>
                                        {x.invited.first_name} {x.invited.last_name}
                                        </Col>
                                        </Row>},                                    
                                    {title:'Fecha', render: (x)=> <> {x.start_date.slice(5,10)} T {x.start_date.slice(11,16)} </>},
                                    {   title:'Operaciones',
                                        render: (x)=><Row>
                                        <Col span={12} style={{padding:'6px'}}>
                                            <Button size='small' type='primary' style={{marginRight:'10px'}}>ingresar</Button>
                                        </Col>
                                        <Col span={12} style={{padding:'6px'}}>
                                        <ModalResch data={x} />
                                               
                                        </Col>                                        
                                        <Col span={12} style={{padding:'6px'}}>
                                            <Button size='small' type='primary' danger>cancelar</Button>
                                        </Col>
                                        <Col span={12} style={{padding:'6px'}}>
                                            <Button size='small' type='primary' onClick={()=>Modal.info({width:'650px',content:`https://amamaule.cl/profile/meetings/${x.uuid}`})}>LINK</Button>
                                        </Col>
                                    </Row> }
                                ]}
                                dataSource={meetings}>
                            </Table>
                    </Affix>
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
