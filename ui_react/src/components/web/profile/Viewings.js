import React, { useContext, useEffect, useState} from 'react'
import { AuthContext } from '../../../App'
import { Tag, Form, message,Button, Select, Card, Input, Col, Row, Tooltip  } from 'antd'
import { SmileTwoTone, FilePdfOutlined  } from '@ant-design/icons'
import api from '../../../api/endpoints'
import pdf from '../../../assets/bases.pdf'
const { Option } = Select
const { TextArea } = Input

const Viewings = () => {
  
  const [profileData, setProfileData] = useState(null)

 

  const { state } = useContext(AuthContext)
  
   async function postView(data){
      
     data = {
        ...data,
        is_send_visio: true
     }

      const request = await api.user.update_profile(state.user.id, data).then((response)=> {
            message.success('Propuesta enviada')
      })
      const requet = await api.user.get_profile_center(state.user.id).then((response)=> {

          setProfileData(response.data)
      })

  }

  useEffect(()=> {

      async function getProfile(user){
          const request = await api.user.get_profile_center(user).then((response)=> {
              setProfileData(response.data)
          })
      }
      
      if(state.user){
        getProfile(state.user.id)
      }

  },[])

    return(
      <Row style={{backgroundColor:'white', padding:'20px'}}>
      <Tooltip title='Descargar Bases'  > 
<a href={pdf} target='__blank' style={{color:'black'}}  >
              <FilePdfOutlined style={{fontSize:'40px', float:'right', paddingBottom:'20px'}} /></a>
            </Tooltip>
      {profileData &&
        <Col span={24}>
          {!profileData.is_send_visio ? 
          <Form layout='vertical' onFinish={(values)=> postView(values)  }>
            <Form.Item name='resena_postulante' style={{marginTop:'20px'}} 
              rules={[{ required: true, message: 'Debes llenar este campo' }]}

            label='Reseña del Postulante o Elenco (5 líneas max.)'>
              <TextArea />
            </Form.Item>
            <Form.Item name='nombre_propuesta'  label='Nombre de la Propuesta'
              rules={[{ required: true, message: 'Debes llenar este campo' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name='resena_propuesta'  label='Reseña de la Propuesta (10 líneas max.)'
              rules={[{ required: true, message: 'Debes llenar este campo' }]}
            >
              <TextArea />
            </Form.Item>
            <Form.Item name='resena_nombre_integrantes'  label='Nombres de Integrantes del elenco y roles de c/u (si corresponde)'>
              <TextArea />
            </Form.Item>
            <Form.Item name='anio_creacion_propuesta'  label='Año de creación de la propuesta (Indicar año de creación o si es trabajo en progreso)'
              rules={[{ required: true, message: 'Debes llenar este campo' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name='anio_estreno'
              rules={[{ required: true, message: 'Debes llenar este campo' }]}
            label='Año en el que fue estrenada o publicada (En caso de no haber sido estrenada, indicarlo):'>
              <Input />
            </Form.Item>
            <Form.Item name='formato_ex' label='Formato de Exhibición (Indicar si es una obra para circular en forma virtual, presencial o en ambas modalidades): '>
              <Select>
                <Option value='Virtual'>Virtual</Option>
                <Option value='Presencial'  >Presencial</Option>
                <Option value='Ambas' >Ambas</Option>
              </Select>
            </Form.Item>
            <Form.Item name='url_descarga'  label='URL de descarga'>
                <Input />
            </Form.Item>
            <Button htmlType='submit'  style={{color:'white', backgroundColor:'#CE3D4B', borderColor: '#CE3D4B'}}  >Enviar Solicitud</Button>
          </Form>: <Card title='Solicitud Enviada!' style={{textAlign:'center'}}   >
                 <SmileTwoTone twoToneColor='#CE3D4B'  style={{fontSize:'140px'}} />
                <div style={{marginTop:'50px'}}>
                  {profileData.is_aproved_visio ? 'SOLICITUD APROBADA':'PROCESANDO...'}
                </div>
                
            </Card> }
        </Col>}
      </Row>
    )

}


export default Viewings
