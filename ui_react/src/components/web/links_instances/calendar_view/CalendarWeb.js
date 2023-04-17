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
                            <th >Usuario</th>
                            <th >27 de Abril</th>
                        </tr>
                        <tr>
                            <th>09:00</th>
                            <td style={{border:'1px solid #f0f0f0'}}>                             
                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T09:00'){
                                        return ProcessUser(x.participans_invited) 
                                    }                                                   
                                })
                                }
                              </td>    
                              <td style={{border:'1px solid #f0f0f0'}}>                            
                              {copy_data.map((x)=> {                                    
                                  if(x.start_date.slice(8,16)==='25T09:00'){
                                      return ProcessBtn(x)
                                    }                                                   
                                })
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T09:00'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T09:00'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>                                                            
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T09:00'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T09:00'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>      
                        </tr>
                        <tr>
                            <th>09:20</th>
                            <td style={{border:'1px solid #f0f0f0'}}>                             
                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T09:20'){
                                        return ProcessUser(x.participans_invited) 
                                    }                                                   
                                })
                                }
                              </td>    
                              <td style={{border:'1px solid #f0f0f0'}}>                            
                              {copy_data.map((x)=> {                                    
                                  if(x.start_date.slice(8,16)==='25T09:20'){
                                      return ProcessBtn(x)
                                    }                                                   
                                })
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T09:20'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T09:20'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>                                                            
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T09:20'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T09:20'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>      
                        </tr>
                        <tr>
                            <th>09:40</th>
                            <td style={{border:'1px solid #f0f0f0'}}>                             
                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T09:40'){
                                        return ProcessUser(x.participans_invited) 
                                    }                                                   
                                })
                                }
                              </td>    
                              <td style={{border:'1px solid #f0f0f0'}}>                            
                              {copy_data.map((x)=> {                                    
                                  if(x.start_date.slice(8,16)==='25T09:40'){
                                      return ProcessBtn(x)
                                    }                                                   
                                })
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T09:40'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T09:40'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>                                                            
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T09:40'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td> 
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T09:40'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T09:40'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>      
                        </tr>
                        <tr>
                            <th>10:00</th>
                            <td style={{border:'1px solid #f0f0f0'}}>                             
                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='24T10:00'){
                                        return ProcessUser(x.participans_invited) 
                                    }                                                   
                                })
                                }
                              </td>    
                              <td style={{border:'1px solid #f0f0f0'}}>                            
                              {copy_data.map((x)=> {                                    
                                  if(x.start_date.slice(8,16)==='24T10:00'){
                                      return ProcessBtn(x)
                                    }                                                   
                                })
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T10:00'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T10:00'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>                                                            
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T10:00'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T10:00'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>      
                        </tr>
                        <tr>
                            <th>10:20</th>
                            <td style={{border:'1px solid #f0f0f0'}}>                             
                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T10:20'){
                                        return ProcessUser(x.participans_invited) 
                                    }                                                   
                                })
                                }
                              </td>    
                              <td style={{border:'1px solid #f0f0f0'}}>                            
                              {copy_data.map((x)=> {                                    
                                  if(x.start_date.slice(8,16)==='25T10:20'){
                                      return ProcessBtn(x)
                                    }                                                   
                                })
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T10:20'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T10:20'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>                                                            
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T10:20'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T10:20'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>      
                        </tr>
                        <tr>
                            <th>10:40</th>
                            <td style={{border:'1px solid #f0f0f0'}}>                             
                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T10:40'){
                                        return ProcessUser(x.participans_invited) 
                                    }                                                   
                                })
                                }
                              </td>    
                              <td style={{border:'1px solid #f0f0f0'}}>                            
                              {copy_data.map((x)=> {                                    
                                  if(x.start_date.slice(8,16)==='25T10:40'){
                                      return ProcessBtn(x)
                                    }                                                   
                                })
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T10:40'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T10:40'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>                                                            
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T10:40'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T10:40'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>      
                        </tr>
                        <tr>
                            <th>11:00</th>
                            <td style={{border:'1px solid #f0f0f0'}}>                             
                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T11:00'){
                                        return ProcessUser(x.participans_invited) 
                                    }                                                   
                                })
                                }
                              </td>    
                              <td style={{border:'1px solid #f0f0f0'}}>                            
                              {copy_data.map((x)=> {                                    
                                  if(x.start_date.slice(8,16)==='25T11:00'){
                                      return ProcessBtn(x)
                                    }                                                   
                                })
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T11:00'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T11:00'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>                                                            
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T11:00'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T11:00'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>      
                        </tr>
                        <tr>
                            <th>11:00</th>
                            <td style={{border:'1px solid #f0f0f0'}}>                             
                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T11:00'){
                                        return ProcessUser(x.participans_invited) 
                                    }                                                   
                                })
                                }
                              </td>    
                              <td style={{border:'1px solid #f0f0f0'}}>                            
                              {copy_data.map((x)=> {                                    
                                  if(x.start_date.slice(8,16)==='25T11:00'){
                                      return ProcessBtn(x)
                                    }                                                   
                                })
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T11:00'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T11:00'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>                                                            
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T11:00'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T11:00'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>      
                        </tr>
                        <tr>
                            <th>11:20</th>
                            <td style={{border:'1px solid #f0f0f0'}}>                             
                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T11:20'){
                                        return ProcessUser(x.participans_invited) 
                                    }                                                   
                                })
                                }
                              </td>    
                              <td style={{border:'1px solid #f0f0f0'}}>                            
                              {copy_data.map((x)=> {                                    
                                  if(x.start_date.slice(8,16)==='25T11:20'){
                                      return ProcessBtn(x)
                                    }                                                   
                                })
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T11:20'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T11:20'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>                                                            
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T11:20'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T11:20'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>      
                        </tr>
                        <tr>
                            <th>11:40</th>
                            <td style={{border:'1px solid #f0f0f0'}}>                             
                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T11:40'){
                                        return ProcessUser(x.participans_invited) 
                                    }                                                   
                                })
                                }
                              </td>    
                              <td style={{border:'1px solid #f0f0f0'}}>                            
                              {copy_data.map((x)=> {                                    
                                  if(x.start_date.slice(8,16)==='25T11:40'){
                                      return ProcessBtn(x)
                                    }                                                   
                                })
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T11:40'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T11:40'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>                                                            
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T11:40'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T11:40'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>      
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
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T12:00'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T12:00'){
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
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T12:20'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T12:20'){
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
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T12:40'){
                                        return ProcessUser(x.participans_invited)                                           }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T12:40'){
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
                                    if(x.start_date.slice(8,16)==='26T13:00'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>                                                            
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T13:00'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T13:00'){
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
                                    if(x.start_date.slice(8,16)==='25T13:20'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T13:20'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T13:20'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T13:20'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>                                                            
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T13:20'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T13:20'){
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
                                    if(x.start_date.slice(8,16)==='25T13:40'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T13:40'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T13:40'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T13:40'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>                                                     
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T13:40'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T13:40'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>
                        </tr>
                        <tr>
                            <th>14:00</th>
                            <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T14:00'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T14:00'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T14:00'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T14:00'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>                                                     
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T14:00'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T14:00'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>
                        </tr>
                        <tr>
                            <th>14:20</th>
                            <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T14:20'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T14:20'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T14:20'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T14:20'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>                                                     
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T14:20'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T14:20'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>
                        </tr>
                        <tr>
                            <th>14:40</th>
                            <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T14:40'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T14:40'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T14:40'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T14:40'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>                                                     
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T14:40'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T14:40'){
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
                                    if(x.start_date.slice(8,16)==='25T15:00'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T15:00'){
                                        return ProcessBtn(x)
                                    }                                                  
                                })
                                
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T15:00'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T15:00'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>                                                       
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T15:00'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T15:00'){
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
                                    if(x.start_date.slice(8,16)==='25T15:20'){
                                        return ProcessUser(x.participans_invited)                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T15:20'){
                                        return ProcessBtn(x)
                                    } 
                                })  }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T15:20'){
                                        return ProcessUser(x.participans_invited)                                    
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T15:20'){
                                        return ProcessBtn(x)                                    
                                    }                                                   
                                })
                                
                                }
                                </td>                                                   
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T15:20'){
                                        return ProcessUser(x.participans_invited)                                    
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T15:20'){
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
                                    if(x.start_date.slice(8,16)==='25T15:40'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T15:40'){
                                        return ProcessBtn(x)                                            
                                }
                               }) }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T15:40'){
                                        return ProcessUser(x.participans_invited) 
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T15:40'){
                                        return ProcessBtn(x)
                                
                                  }
                                })}
                                </td>                                                                                                                                                 
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T15:40'){
                                        return ProcessUser(x.participans_invited) 
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='27T15:40'){
                                        return ProcessBtn(x)
                                
                                  }
                                })}
                                </td>
                        </tr>
                        <tr>
                            <th>16:00</th>
                            <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T16:00'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T16:00'){
                                        return ProcessBtn(x)                                    
                                    }                                                   
                                })
                                
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T16:00'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T16:00'){
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
                                    if(x.start_date.slice(8,16)==='25T16:20'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T16:20'){
                                        return ProcessBtn(x)
                                
                                }  }) }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T16:20'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T16:20'){
                                        return ProcessBtn(x)
                                
                                }  }) }
                                </td>                           
                        </tr>
                        <tr>
                            <th>16:40</th>
                            <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T16:40'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T16:40'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T16:40'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T16:40'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>                                                     
                        </tr>
                        <tr>
                            <th>17:00</th>
                            <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T17:00'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T17:00'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T17:00'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T17:00'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>                                                     
                        </tr>
                        <tr>
                            <th>17:20</th>
                            <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T17:20'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T17:20'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T17:20'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T17:20'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>                                                     
                        </tr>
                        <tr>
                            <th>17:40</th>
                            <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T17:40'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='25T17:40'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>
                                <td style={{border:'1px solid #f0f0f0'}}>                                                         
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T17:40'){
                                        return ProcessUser(x.participans_invited)
                                    }                                                   
                                })
                                
                                }</td>    
                                <td style={{border:'1px solid #f0f0f0'}}>                            
                                {copy_data.map((x)=> {                                    
                                    if(x.start_date.slice(8,16)==='26T17:40'){
                                        return ProcessBtn(x)
                                    }                                                   
                                })
                                
                                }
                                </td>                                                     
                        </tr>
                        </table>
                    </Col>                    
                </Row>
        

    
  </>)

}


export default CalendarWeb
