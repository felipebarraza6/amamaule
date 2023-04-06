import React from 'react'
import { Row, Col } from 'antd'

const CalendarWeb = ({ 
          copy_data, 
          ProcessUser,
          ProcessBtn
           }) => {
  
    
  return(<>
            <Row style={{textAlign:'center', backgroundColor:'white'}}>
                    <Col span={24}>
                    <table className="ant-table-thead" style={{width:'100%'}}>
                        <tr style={{width:'100%'}}>
                            <th>HORA</th>
                            <th >Usuario</th>
                            <th >25 de Abril</th>
                            <th >Usuario</th>
                            <th >26 de Abril</th>
                        </tr>
                        <tr>
                            <th>12:00</th>
                            <td style={{border:'1px solid #f0f0f0'}}>                             
                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T12:00'){
                                        return ProcessUser(x.participans_invited) 
                                    }                                                   
                                })
                                }
                              </td>    
                              <td style={{border:'1px solid #f0f0f0'}}>                            
                              {copy_data.map((x)=> {                                    
                                  if(x.start_date.slice(8,16)==='25T12:00'){
                                      return ProcessBtn(x)
                                    }                                                   
                                })
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T12:00'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T12:00'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>                                                            
                        </tr>
                        <tr>
                            <th>12:20</th>
                            <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T12:20'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T12:20'){
                                        return ProcessBtn(x)                                   }                                                   
                                })
                                
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T12:20'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T12:20'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>                                                            
                                                          
                        </tr>
                        <tr>
                            <th>12:40</th>
                            <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T12:40'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T12:40'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T12:40'){
                                        return ProcessUser(x.participans_invited)                                           }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T12:40'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>                                                     
                        </tr>
                        <tr style={{}}>
                            <th>13:00</th>
                            <td style={{border:'1px solid #f0f0f0'}}>                             
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T13:00'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T13:00'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T13:00'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='30T26:00'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>                                                            
                        </tr>
                        <tr>
                            <th>13:20</th>
                            <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='T13:20'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='T13:20'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='30T13:20'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='30T13:20'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>                                                            
                                                          
                        </tr>
                        <tr>
                            <th>13:40</th>
                            <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='T13:40'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='T13:40'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='30T13:40'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='30T13:40'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>                                                     
                        </tr>
                        <tr>
                            <th>15:00</th>
                            <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='T15:00'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='T15:00'){
                                        return ProcessBtn(x)
                                    }                                                  
                                })
                                
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='30T15:00'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='30T15:00'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>                                                       
                        </tr>
                        <tr>
                            <th>15:20</th>
                            <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='T15:20'){
                                        return ProcessUser(x.participans_invited)                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='T15:20'){
                                        return ProcessBtn(x)
                                    } 
                                })  }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='30T15:20'){
                                        return ProcessUser(x.participans_invited)                                    
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='30T15:20'){
                                        return ProcessBtn(x)                                    
                                    }                                                   
                                })
                                
                                }
                                </td>                                                   
                        </tr>
                        <tr>
                            <th>15:40</th>
                            <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='T15:40'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='T15:40'){
                                        return ProcessBtn(x)                                            
                                }
                               }) }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='30T15:40'){
                                        return ProcessUser(x.participans_invited) 
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='30T15:40'){
                                        return ProcessBtn(x)
                                
                                  }
                                })}
                                </td>                                                                                                                                                 
                        </tr>
                        <tr>
                            <th>16:00</th>
                            <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='T16:00'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='T16:00'){
                                        return ProcessBtn(x)                                    
                                    }                                                   
                                })
                                
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='30T16:00'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='30T16:00'){
                                        return ProcessBtn(x)                                    
                                    }                                                   
                                })
                                
                                }
                                </td>                               
                        </tr>
                        <tr>
                            <th>16:20</th> 
                            <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='T16:20'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='T16:20'){
                                        return ProcessBtn(x)
                                
                                }  }) }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='30T16:20'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='30T16:20'){
                                        return ProcessBtn(x)
                                
                                }  }) }
                                </td>                           
                        </tr>
                        </table>
                    </Col>                    
                </Row>
        

    
  </>)

}


export default CalendarWeb
