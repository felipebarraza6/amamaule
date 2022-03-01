import React, { useState, useContext} from 'react'
import api from '../../../api/endpoints'
import { Skeleton, Table, Avatar,
        Tooltip, Row, Col, Select, Typography, Input, Button } from "antd"
import { FileImageOutlined, SearchOutlined, CloseSquareOutlined } from '@ant-design/icons'
import SingleUser from "./SinglesUser"
import {GroupsContext} from "../../../containers/web/LinksInstances"
import CreateMeeting from "./CreateMeeting"
import { geo, geo_re_ci } from '../../../resources/geo'
import { countries } from '../../../resources/countries'

const { Option } = Select
const {Search} = Input
const { Paragraph, Text } = Typography

const ListUsers = ({per_page}) => {

    const { state: ContextInstances, dispatch } = useContext(GroupsContext)

    const [state, setState] = useState({
        users:ContextInstances.list_users,
        type_user: '',
        first_name: '',
        last_name: '',
        region:'',
        city: '',
        country: '',
        loading: false,
        loadingTable: false
    })

    const [cities, setCities] = useState([])

    async function filterUsers(filter, first_name, last_name, region, city){
        setState({...state,
            loadingTable: true
        })

        const request = await api.user.list_users({filter: filter, first_name:first_name ,last_name:last_name, region: region, city: city}).then((response)=> {
            dispatch({...state,
                type: 'SET_USERS',
                list_users: response.data.results

            })
            setState({
                ...state,
                loadingTable: false
            })
        })
        return request
    }

    const columns = [
            {
                render: (obj)=> {
                    return(
                    <Row justify={'center'}>
                        
                                <Avatar icon={<FileImageOutlined />} shape='square' src={obj.profile.avatar} />            
                        
                    </Row>)
                },
            },
            {
                key:'id',
                title: 'Nombre',
                render: (obj)=><Text ellipsis={{tooltip:`${obj.first_name} ${obj.last_name}`}} >{obj.first_name} {obj.last_name}</Text>
            },
            {
                key:'id',
                render:(obj)=><Row>
                    <Col span={12} >
                        <Tooltip title={'Perfil'}>
                            <SingleUser user={obj} />
                        </Tooltip>
                    </Col>
                    <Col span={12} >
                        <Tooltip title={'Envíar invitación'}  color={'cyan'} >
                            <CreateMeeting invited={obj} />
                        </Tooltip>
                    </Col>
                </Row>
            }
        ]


    return(<>
        {state.loading ?
            <Skeleton active />:
            <>{state && <>
                <Row>
                    <Col lg={24} xs={24}>
                <Input placeholder={'Buscar por nombre'} onChange={(input)=>{
                    setState({...state, first_name:input.target.value })


                }} />
                </Col>
                <Col lg={24} xs={24}>
                <Input placeholder={'Buscar por apellido'}  onChange={(input)=>{
                    setState({...state, last_name:input.target.value })

                }} />
                </Col>
                <Col lg={24} xs={24}>
                
                </Col>
                    <Col lg={24} xs={24}>
                        <Select showSearch placeholder='Tipo por perfil...' style={{width:'100%', marginBottom:'0px' }} onChange={(value)=> {
                    setState({...state, type_user:value })

                }}>               
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
                        <Select showSearch placeholder='Region...' style={{width:'100%', marginBottom:'0px' }} onChange={(value)=> {
                    setState({...state, region:geo[value].region})
                    setCities(geo_re_ci[value].provincias)

                }}>
                    {geo.map((x, p)=> <Select.Option value={p}> {x.region} </Select.Option>)}
                      </Select>
                </Col>
                {cities.length > 0 && 
                <Col lg={24} xs={24}>
                        <Select showSearch placeholder='Ciudad...' style={{width:'100%', marginBottom:'0px' }} onChange={(value)=> {
                    setState({...state, city:value })

                }}>
                    <Option value=''>Todos</Option>
                    {cities.map((x)=><Select.Option value={x.name}> {x.name} </Select.Option>)}
                      </Select>
                </Col>}

                <Col lg={24} xs={24}>
                        <Select showSearch placeholder='Pais...' style={{width:'100%', marginBottom:'5px' }} onChange={(value)=> {
                    setState({...state, country:value })
                    

                }}>
                    <Option value=''>Todos</Option>
                    {countries.map((x)=> <Select.Option value={x}> {x} </Select.Option>)}
                    
                </Select>
                    </Col>
                    <Col lg={24} xs={24}>
                        <Button style={{width:'100%', marginBottom:'5px', color:'white',backgroundColor:'#b05db9', borderColor:'#b05db9'}} 
                            icon={<SearchOutlined style={{fontSize:'20px', color:'white'}} />} 
                            onClick={()=>{
                                filterUsers(state.type_user, state.first_name, state.last_name, state.region, state.city)
                                console.log(state)
                            }} >
                        Realizar busqueda
                        </Button>
                </Col>

                </Row>

                <Table loading={state.loadingTable} size={'small'} columns={columns}
                       title={()=>'Escoge junto a quienes deseas vincularte y espera que la otra persona acepte para que tu reunión se haga efectiva.'}
                       dataSource={ContextInstances.list_users}
                       pagination = {{ defaultPageSize:per_page }}
                       rowKey={'id'}
                       style={{margin:'0px'}}
                />
                </>
            }
            </>
        }
    </>)

}


const styles = {
    col:{
        marginRight:'3px',
        marginLeft:'3px'
    }
}


export default ListUsers
