import React, { useContext, useState, useEffect } from 'react'   
import { AuthContext  } from '../../../App'
import { Select, message, Form, Input, Card, 
        Row, Col, Button, Pagination } from 'antd'
import api from '../../../api/endpoints'
const { Option } = Select
const { TextArea  } = Input
  

const Workshops = () => {


  const { state } = useContext(AuthContext)
  const [profile, setProfile] = useState(null)
  const [page, setPage] = useState(1)
  const [formPit, setFormPit] = useState(false)

  async function updateProfile(data, status){
    const request = await api.user.update_profile(state.user.id, data, status).then((response)=> {
        if(status===false){
          message.info('Has cancelar tu inscripción')
        }else{
          message.success('Inscripcion completada!')
        }

    }).catch((error)=> {
        message.error('Ha ocurrido un error intentalo mas tarde')
    })

    const update_data = await api.user.get_profile_center(state.user.id).then((response)=> {
          setProfile(response.data)
    })
  
  }

  useEffect(()=> {
    
    async function getData(){
      const request = await api.user.get_profile_center(state.user.id).then((response)=> {
        setProfile(response.data)
        })
      }

      if(state.user){
        getData()
      }

  }, [])


  return(
    <Row>
      <Pagination defaultCurrent={page} total={6} onChange={(page)=>setPage(page)}  defaultPageSize={2} />
      {page ===1 &&  
        <>
      <Col span={24}>
      <Card hoverable style={styles.card}  title= 'Taller de Pitching' extra='Miércoles 24 y jueves 25 de marzo, 18 horas. '  >
        <p>
          En el marco del Encuentro AMA 2021: Vincular para Crear, te invitamos a participar de nuestro Taller de Pitching, cuyo objetivo será entregar herramientas discursivas para una presentación concreta, concisa y efectiva del proyecto artístico y/o de gestión, previo a tu participación en nuestras Rondas de Vinculación AMA. En ellas, podrás agendar reuniones para ser tú mismo/a quien relate su proyecto al representante con quien te toque reunirte. 
        </p>
        <p>
          Cierre de inscripciones: 21 de marzo, 18 horas.
        </p>
        <p>
          {profile && <>
            {!profile.taller_pitching ? 

            
            <Form layout='vertical' onFinish={(values)=> {

              values = {
                ...values,
                taller_pitching: true
              }

              updateProfile(values)}}>

              <Form.Item label='El formato de tu proyecto artístico o de gestión es:' 
                rules={[{ required: true, message: 'Respuesta Obligatoria' }]}
                name='formato_proyecto'
              >
                <Select>
                  <Option value='Digital para presentaciones virtuales'>Digital para presentaciones virtuales</Option>
                  <Option value='Analógico para presentaciones presenciales '>Analógico para presentaciones presenciales</Option>
                  <Option value='Semi presencial' >Semi presencial</Option>
                </Select>
              </Form.Item>
              <Form.Item label='Tu proyecto artístico o de gestión está en etapa de:' name='etapa_proyecto'  >
                <Select  
                >
                  <Option value='Por estrenar o ejecutar en 2021 '  >Por estrenar o ejecutar en 2021</Option>
                  <Option value=' Estrenado o ejecutado en o antes de 2020, en etapa o búsqueda de circulación' >Estrenado o ejecutado en o antes de 2020, en etapa o búsqueda de circulación</Option>
                  <Option value='Trabajo en progreso (en etapa de creación)'  >Trabajo en progreso (en etapa de creación)</Option>
                  <Option value='Idea de proyecto (aún no iniciado) en búsqueda de alianzas y/o financiamiento'>Idea de proyecto (aún no iniciado) en búsqueda de alianzas y/o financiamiento</Option>
                </Select>
              </Form.Item>
              <Form.Item label='¿Cuál es el elemento diferenciador de tu proyecto artístico o de gestión?' 
                  rules={[{ required: true, message: 'Respuesta Obligatoria' }]}
                  name='elemento_diferenciador'
              >
                <TextArea />
              </Form.Item>
              <Button style={styles.buttonIns} htmlType='submit' >Enviar Inscripción</Button>
            </Form>: <>
                    <Button style={styles.cancelButton}  onClick={ ()=> updateProfile({ taller_pitching: false  },false)  }  >
                       CANCELAR PARTICIPACIÓN
                    </Button>
                  </>
          }</> }

        </p>
       </Card>
      </Col>

      <Col span={24}>
      <Card hoverable style={styles.card}  title= 'Taller de Montaje Site Specific' extra='Miércoles 14 de abril, 19 horas.'  >
        <p>Este taller propone un espacio de investigación para artistas escénicos en torno a tres temáticas:</p>
        <p>1) Espacio doméstico de cada participante como un espacio compartido de co-creación</p>
        <p>2) Herramientas del site specific para crear</p>
        <p>3) Posibilidades performáticas de las plataformas virtuales como Zoom y el espacio online.</p>
        <p>Inscripciones abiertas hasta el día 01 de abril 2021. Cupos limitados.</p> 
        {profile && 
            <>
              {profile.taller_montaje ? 
                <Button style={styles.cancelButton}  onClick={ ()=> updateProfile({ taller_montaje: false  },false)  }  >
                     CANCELAR PARTICIPACIÓN
                </Button>:
                <Button onClick={()=> updateProfile({taller_montaje: true})  } style={styles.buttonIns}>Inscríbete</Button>
              }
            </>
        }
        </Card>
      </Col></>}
      {page ===2 && 
      <>
      <Col span={24}>
        <Card style={styles.card}  hoverable title='Taller Ley de Donaciones Culturales' extra='Miércoles 14 de abril, 19 horas.'  >
        <p>Conoce las claves de esta modalidad de financiamiento y su aplicación un mecanismo mixto que estimula el aporte del Estad            o de Chile y de los contribuyentes a proyectos culturales de instituciones sin fines de lucro, mediante un crédito sobre el Impuesto.</p>

        <p>Inscripciones abiertas hasta el día 01 de abril 2021.Cupos limitados.</p> 
            {profile &&
              <>
                {profile.taller_ley_de_donaciones ? 
                  <Button style={styles.cancelButton}  onClick={ ()=> updateProfile({ taller_ley_de_donaciones: false  },false)  }  >
                      CANCELAR PARTICIPACIÓN
                  </Button>:
                  <Button style={styles.buttonIns} onClick={()=> updateProfile({taller_ley_de_donaciones:true})}  >Inscríbete</Button>
                }
              </>
        }
      
        </Card>
      </Col>
      <Col span={24}>
        <Card hoverable style={styles.card}  title='Taller de Marketing Digital para la industria musical' extra='Jueves 15 de abril, 19 horas.'  >
          <p>
            Se abordará la utilización eficaz de las principales herramientas y plataformas publicitarias y de comunicación para llevar a cabo las estrategias y acciones de marketing estratégico para el desarrollo y difusión de tu proyecto musical en internet, así como herramientas estratégicas para la productividad, redes sociales, plataformas de contenido, entre otras. 
          </p>
          <p>
            Inscripciones abiertas hasta el día 01 de abril 2021. Cupos limitados. 
          </p>
             {profile &&
              <>
                {profile.taller_marketing_digital ? 
                  <Button style={styles.cancelButton}  onClick={ ()=> updateProfile({ taller_marketing_digital: false  },false)  }  >
                      CANCELAR PARTICIPACIÓN
                  </Button>:
                  <Button style={styles.buttonIns} onClick={()=> updateProfile({taller_marketing_digital: true})}  >Inscríbete</Button>
                }
              </>
        }

        </Card>
      </Col>
      </>}
      {page ===3 && 
      <>
      <Col span={24}>
        <Card hoverable style={styles.card}  title='Taller de herramientas para la gestión de proyectos culturales' >
        <p>
            Jueves 15 y Viernes 16 de abril, 19 horas.
        </p>
        <p>
          Herramientas para la planificación y administración cultural, desde la idea hasta la gestión de los recursos. Conoceremos aplicaciones y software: desarrollo, uso y apropiaciones de herramientas digitales para la gestión cultural.
        </p>
        <p>
          Inscripciones abiertas hasta el 04 de abril de 2021. Cupos limitados. 
        </p>
             {profile &&
              <>
                {profile.taller_herr_gestion ? 
                  <Button style={styles.cancelButton}  onClick={ ()=> updateProfile({ taller_herr_gestion: false  },false)  }  >
                    CANCELAR PARTICIPACIÓN</Button>:
                  <Button style={styles.buttonIns} onClick={()=> updateProfile({taller_herr_gestion:true})}  >Inscríbete</Button>
                }
              </>
        }

          
        </Card>
      </Col>
      <Col span={24}>
        <Card hoverable style={styles.card}  title='Taller de financiamiento para la circulación internacional' extra='Sábado 17 de abril, 19 horas.'  >
          <p>
            Se abordarán distintos programas y/o fuentes de financiamiento públicos para la circulación internacional de proyectos creativos en las disciplinas de artes escénicas y música.
          </p>
          <p>
            Inscripciones abiertas hasta el 01 de abril de 2021. Cupos limitados. 
          </p>
              {profile &&
              <>
                {profile.taller_financiamiento ? 
                  <Button style={styles.cancelButton}  onClick={ ()=> updateProfile({ taller_financiamiento: false  },false)  }  >
                    CANCELAR PARTICIPACIÓN</Button>:
                  <Button style={styles.buttonIns} onClick={()=> updateProfile({taller_financiamiento:true})}  >Inscríbete</Button>
                }
              </>
        }
        </Card>
      </Col>
      </>}
    </Row>
  )


}

const styles = {
  button: {
    backgroundColor:'#CE3D4B',
    borderColor:'#CE3D4B',
    color:'white',
    marginRight:'10px',
    marginLeft: '10px'
  },
  cancelButton: {
    backgroundColor:'#CE3D4B',
    color: 'white',
    borderColor: '#CE3D4B'
  },
  buttonIns: {
    backgroundColor:'#61263D',
    borderColor:'#61263D',
    color: 'white',
    marginLeft: '10px',
    marginRight: '10px'
  },
  card: {
      margin:'20px'
  }
}


export default Workshops
