import React, {useState, useEffect} from 'react'
import { Card, Col, Row, Tag, Button } from 'antd'
import api_transmissions from '../../../../api/transmissions/endpoints'

const ListCommentaries = ({ is_live, id_transmission }) => {
    
    const initialState = {
        is_live:is_live,
        id_transmission: id_transmission,
        title: 'Mejores comentarios'        
    }

    const [state, setState] = useState(initialState)
    const [is_loading, setIsloading] = useState(false)
    const [commentaries, setCommentaries] = useState([])
    const [countComennts, setCountComments] = useState(0)

    

    useEffect(()=> {                   
        getComments(id_transmission, is_live)

        if(is_live){
            setState({...state, is_live, title:'Comentarios en vivo...'})
            setInterval(()=>getComments(id_transmission, true), 10000)            
            
        }else{
            getComments(id_transmission, false)            
        }
        async function getComments(id_transmission, is_live){            
            
            var is_active = ''

            if(is_live){
                is_active=''
            }else{
                is_active=true
            }

            const request = await api_transmissions.comments.list(id_transmission, is_active).then((response)=> {
                setCountComments(response.data.count)
                setCommentaries(response.data.results)
                setIsloading(false)
            })
            return request   
        }        
    }, [])

    return(
        <Card extra={countComennts} loading={is_loading} style={{marginLeft:'20px', marginTop:'70px'}} title={state.title}>           
        
            <Row>                                
                {commentaries.map((obj)=>{

                    return(
                        <>
                        <Col span={24} style={{textAlign:'end'}}>
                            <span style={{fontSize:'9px'}}>@{obj.user.username}</span>
                        </Col>
                        <Col span={24}>
                            <p style={{marginTop:'10px', marginBottom:'10px'}}>
                                {obj.message}
                            </p>
                        </Col>                    
                        </>)
                }) }                                                
            </Row>
        </Card>
    )
}


export default ListCommentaries