import React, {useEffect,useState, useContext} from 'react'
import {Card, Typography, Row, Col, Tooltip, Button, Skeleton, Divider, Modal} from 'antd'
import SingleUser from "./SinglesUser";
import {DislikeFilled, LikeFilled, MessageFilled} from "@ant-design/icons"
import {updateInvitation} from '../../../actions/meetings_rounds/getData'
import {AuthContext} from "../../../App"
import {GroupsContext} from "../../../containers/web/LinksInstances"

const { Text } = Typography



const ListInvitations = ({invitations}) => {

    const {state:userContext} = useContext(AuthContext)
    const {state:groupsContext, dispatch} = useContext(GroupsContext)

    const [loading, setLoading] = useState(true)
    const [loadingCard, setLoadingCard] = useState(false)

    useEffect(()=>{

        setTimeout(()=>setLoading(false),
                   2000)


    }, [])


    return(<> {invitations && <>
        {invitations.map((obj) => {

            return(<>
                {loading ? <Skeleton active /> :
                    <>
                <Card  loading={loadingCard} hoverable title={ <><Text style={{color:'white'}} > {obj.start_date.slice(0,10)} {obj.meeting.start_date.slice(11,16)} hrs</Text></> }
                      style={{backgroundColor:'#1890ff', borderRadius:'30px'}}>
                    {console.log(obj.message)}
                    <Row>
                        <Col span={24}>
                            <Text style={{color:'white'}}>{obj.meeting.owner.first_name} {obj.meeting.owner.last_name}</Text>
                        </Col>
                        <Col style={{ textAlign:'center'}} span={6}>
                            <Tooltip title ='Aceptar invitacón'>
                                <Button onClick={()=>{ updateInvitation({answer:true}, obj, dispatch, userContext, setLoadingCard) } } shape={'circle'} style= {{color:'#1890ff', marginTop:'10px'}} icon={<LikeFilled />} />
                            </Tooltip>
                        </Col>
                        <Col style={{ textAlign:'center'}} span={6}>
                            <Tooltip title ='Rechazar invitacón'>
                                <Button onClick={()=>{ updateInvitation({answer:false}, obj, dispatch, userContext, setLoadingCard) } }  danger shape={'circle'} icon={<DislikeFilled/>} style={{marginTop:'10px'}} />
                            </Tooltip>
                        </Col>
                        <Col span={6} style={{textAlign:'center'}}>
                            <SingleUser user={obj.meeting.owner} is_invitations={true} />
                        </Col>
                        <Col span={6} style={{textAlign:'center'}}>
                            <Tooltip title={'Ver mensaje'} color={'green'}>
                                <Button onClick={()=>Modal.info({ icon:< MessageFilled />,content:obj.message})} icon={<MessageFilled style={{color:'green', borderColor:'green'}} />} shape={'circle'} style={{backgroundColor:'white', marginTop:'10px'}}></Button>
                            </Tooltip>
                        </Col>
                    </Row>
                </Card>
                    <Divider />
                    </>}
            </>)
        })}
        </>}
    </>)
}


export default ListInvitations