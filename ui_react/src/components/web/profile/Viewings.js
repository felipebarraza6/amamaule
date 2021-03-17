import React, { useContext, useEffect, useState} from 'react'
import { AuthContext } from '../../../App'
import { Tag, Form, message,Button, Select, Card, Input, Col, Row, Typography  } from 'antd'
import { SmileTwoTone, FilePdfOutlined  } from '@ant-design/icons'
import api from '../../../api/endpoints'
import pdf from '../../../assets/bases.pdf'
const { Option } = Select
const { TextArea } = Input
const { Paragraph } = Typography

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
         <Button type='link' style={{backgroundColor:'#CE3D4B', color:'white'}}><a href={pdf} target='__blank' style={{color:'white'}} >
            <FilePdfOutlined style={{fontSize:'20px', marginRight:'10px'}}/> DESCARGAR BASES</a>
          </Button>                                      
          <Col>
            <Paragraph style={{marginTop:'30px'}}>
            Esta es una invitación exclusiva para artistas del Maule:
            </Paragraph>
            <Paragraph style={{marginTop:'10px'}}>              
              ¿Tienes producciones que quieras dar a conocer a los distintos programadores de AMA 2021?             
            </Paragraph>
            <Paragraph>
              Podrán participar artistas o elencos, con propuestas de teatro, performance, música, circo, danza, títeres, narración oral, ópera u otras similares. 
              Los elencos deben estar compuestos mayoritariamente por integrantes oriundos de la Región del Maule (pueden residir fuera de ella) y sus producciones 
              deben estar en condiciones de circular presencial y/o virtualmente durante 2021. Más detalles en las bases descargables.
            </Paragraph>
          </Col>
      {profileData &&
        <Col span={24}>
          {!profileData.is_send_visio ? 
          <Form layout='vertical' onFinish={(values)=> postView(values)  }>
            <Form.Item name='resena_postulante' style={{marginTop:'20px'}} 
              rules={[{ required: true, message: 'Debes llenar este campo' }]}

            label='Reseña del postulante o elenco (5 líneas max.)'>
              <TextArea />
            </Form.Item>
            <Form.Item name='nombre_propuesta'  label='Nombre de la propuesta'
              rules={[{ required: true, message: 'Debes llenar este campo' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name='resena_propuesta'  label='Reseña de la propuesta (10 líneas max.)'
              rules={[{ required: true, message: 'Debes llenar este campo' }]}
            >
              <TextArea />
            </Form.Item>
            <Form.Item name='resena_nombre_integrantes'  label='Nombres de integrantes del elenco y roles de c/u (si corresponde)'>
              <TextArea />
            </Form.Item>
            <Form.Item name='anio_creacion_propuesta'  label='Año de creación de la propuesta (indicar año de creación o si es trabajo en progreso)'
              rules={[{ required: true, message: 'Debes llenar este campo' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name='anio_estreno'
              rules={[{ required: true, message: 'Debes llenar este campo' }]}
            label='Año en el que fue estrenada o publicada (en caso de no haber sido estrenada, indicarlo):'>
              <Input />
            </Form.Item>
            <Form.Item name='formato_ex' label='Formato de exhibición (indicar si es una obra para circular en forma virtual, presencial o en ambas modalidades): '>
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
          </Form>: <Card title='¡Solicitud Enviada!' style={{textAlign:'center'}}   >
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
