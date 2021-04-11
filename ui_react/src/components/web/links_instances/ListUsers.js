import React, { useState, useContext} from 'react'
import api from '../../../api/endpoints'
import { Skeleton, Table, Avatar,
        Tooltip, Row, Col, Select, Typography } from "antd"
import { FileImageOutlined } from '@ant-design/icons'
import SingleUser from "./SinglesUser"
import {GroupsContext} from "../../../containers/web/LinksInstances"
import CreateMeeting from "./CreateMeeting"

const { Option } = Select
const { Paragraph, Text } = Typography

const ListUsers = ({per_page}) => {

    const { state: ContextInstances, dispatch } = useContext(GroupsContext)

    const [state, setState] = useState({
        users:ContextInstances.list_users,
        loading: false,
        loadingTable: false
    })

    async function filterUsers(filter){
        setState({...state,
            loadingTable: true
        })
        const request = await api.user.list_users(filter).then((response)=> {
            dispatch({...state,
                type: 'SET_USERS',
                list_users: response.data.results

            })
            setState({
                state,
                loadingTable: false
            })
        })
        return request
    }

    const columns = [
            {
                key: 'id',
                render: (obj)=> <Row justify={'center'}><Avatar icon={<FileImageOutlined />} shape='square' src={obj.principal_image} /></Row>,
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
                <Select placeholder='Filtrar por perfil...' style={{width:'100%' }} onChange={(value)=>filterUsers(value)}>
                    <Option value=''>Todos</Option>
                    <Option value='AM'>Artista / Manager</Option>
                    <Option value='PROV'>Proveedor (transporte, técnica, catering, otros)</Option>
                    <Option value='PRO' >Profesional a las artes escénicas</Option>
                    <Option value='RE' >Representante de organización o empresa, pública o privada</Option>
                    <Option value='GES' >Gestor Cultural / Producción / Programación</Option>
                </Select>
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