import React, {useState, useContext, useEffect} from 'react'
import {Row, Col, Tag, Divider, Affix, Typography} from 'antd'
import SekeletonCalendar from './SkeletonCalendar'
import {GroupsContext} from '../../../containers/web/LinksInstances'
import MeetingCalendar from './MeetingCalendar'
const { Title } = Typography

const Calendar = () => {

    const { state, dispatch } = useContext(GroupsContext)
    const [loading, setLoading] = useState(true)
    const [size, setSize] = useState()
    const MORNINGS = state.morning_meetings
    const EVENING = state.evening_meetings
    console.log(state)
    useEffect(()=>{

        setTimeout(()=>setLoading(false),
                   2000);
        setSize(window.innerWidth)

    }, [])


    return(
        <>{size > 800 ? <>
            <Affix offsetTop={48} >
                <Row style={{textAlign:'center', backgroundColor:'white'}}>
                    <Col span={8} >
                        <Title level={3}>Jueves 15</Title>

                    </Col>
                    <Col span={8} >
                        <Title level={3}>Viernes 16</Title>
                    </Col>
                    <Col span={8} >
                        <Title level={3}>Sábado 17</Title>
                    </Col>
                </Row>
            </Affix> <Divider />
        <Row  style={{marginBottom:'5px', textAlign:'center'}} >
            <Col lg={8}>
                <Tag color={'rgb(206, 61, 75)'} style={{marginBottom:'25px'}}>11:00 - 12:00 hrs</Tag>
            </Col>
            <Col lg={8}>
                <Tag color={'rgb(206, 61, 75)'} style={{marginBottom:'25px'}}>11:00 - 12:00 hrs</Tag>
            </Col>
            <Col lg={8}>
                <Tag color={'rgb(206, 61, 75)'} style={{marginBottom:'25px'}}>11:00 - 12:00 hrs</Tag>
            </Col>
        </Row>
        {loading ?
                <SekeletonCalendar />:
                <Row>
                <Col span={8}>
                    {MORNINGS.thursday.map((obj)=><>
                        <MeetingCalendar meeting={obj} />
                        </>
                    )}
                </Col>
                <Col span={8}>
                    {MORNINGS.friday.map((obj)=><>
                        <MeetingCalendar meeting={obj} />
                        </>
                    )}
                </Col>
                <Col span={8}>
                    {MORNINGS.saturday.map((obj)=><>
                        <MeetingCalendar meeting={obj} />
                        </>
                    )}
                </Col>
                </Row>
        }

        <Row  style={{marginBottom:'5px', textAlign:'center'}} >
            <Col span={8}>
                <Tag color={'rgb(206, 61, 75)'} style={{marginBottom:'25px'}}>16:00 - 16:30 hrs</Tag>
            </Col>
            <Col span={8}>
                <Tag color={'rgb(206, 61, 75)'} style={{marginBottom:'25px'}}>16:00 - 16:30 hrs</Tag>
            </Col>
            <Col span={8}>
                <Tag color={'rgb(206, 61, 75)'} style={{marginBottom:'25px'}}>16:00 - 16:30 hrs</Tag>
            </Col>
        </Row>
        {loading ?
                <SekeletonCalendar />:
                <Row>
                <Col span={8}>
                    {EVENING.thursday.map((obj)=><>
                        <MeetingCalendar meeting={obj} />
                        </>
                    )}
                </Col>
                <Col span={8}>
                    {EVENING.friday.map((obj)=><>
                        <MeetingCalendar meeting={obj} />
                        </>
                    )}
                </Col>
                <Col span={8}>
                    {EVENING.saturday.map((obj)=><>
                        <MeetingCalendar meeting={obj} />
                        </>
                    )}
                </Col>
                </Row>
        }

        </>:<Row style={{textAlign:'center', backgroundColor:'white'}}>
                    <Col span={24} >
                        <Title level={3}>Jueves 15</Title>
                        <Row  style={{marginBottom:'5px', textAlign:'center'}}  justify={'center'}>
                            <Col lg={8}>
                                <Tag color={'rgb(206, 61, 75)'} style={{marginBottom:'25px'}}>11:00 - 12:00 hrs</Tag>
                            </Col>
                            {loading ?
                                    <SekeletonCalendar />:
                                    <Row>
                                    <Col span={24}>
                                        {MORNINGS.thursday.map((obj)=><>
                                            <MeetingCalendar meeting={obj} />
                                            </>
                                        )}
                                    </Col>
                                    </Row>
                            }
                        </Row>
                        <Row  style={{marginBottom:'5px', textAlign:'center'}}  justify={'center'}>
                            <Col lg={8}>
                                <Tag color={'rgb(206, 61, 75)'} style={{marginBottom:'25px'}}>16:00 - 16:30 hrs</Tag>
                            </Col>
                            {loading ?
                                    <SekeletonCalendar />:
                                    <Row>
                                    <Col span={24}>
                                        {EVENING.thursday.map((obj)=><>
                                            <MeetingCalendar meeting={obj} />
                                            </>
                                        )}
                                    </Col>
                                    </Row>
                            }
                        </Row>


                    </Col>
                    <Col span={24} >
                        <Title level={3}>Viernes 16</Title>
                        <Row  style={{marginBottom:'5px', textAlign:'center'}}  justify={'center'}>
                            <Col lg={8}>
                                <Tag color={'rgb(206, 61, 75)'} style={{marginBottom:'25px'}}>11:00 - 12:00 hrs</Tag>
                            </Col>
                            {loading ?
                                    <SekeletonCalendar />:
                                    <Row>
                                    <Col span={24}>
                                        {MORNINGS.friday.map((obj)=><>
                                            <MeetingCalendar meeting={obj} />
                                            </>
                                        )}
                                    </Col>
                                    </Row>
                            }
                        </Row>
                        <Row  style={{marginBottom:'5px', textAlign:'center'}}  justify={'center'}>
                            <Col lg={8}>
                                <Tag color={'rgb(206, 61, 75)'} style={{marginBottom:'25px'}}>16:00 - 16:30 hrs</Tag>
                            </Col>
                            {loading ?
                                    <SekeletonCalendar />:
                                    <Row>
                                    <Col span={24}>
                                        {EVENING.friday.map((obj)=><>
                                            <MeetingCalendar meeting={obj} />
                                            </>
                                        )}
                                    </Col>
                                    </Row>
                            }
                        </Row>
                    </Col>

                    <Col span={24} >
                        <Title level={3}>Sábado 17</Title>
                        <Row  style={{marginBottom:'5px', textAlign:'center'}}  justify={'center'}>
                            <Col lg={8}>
                                <Tag color={'rgb(206, 61, 75)'} style={{marginBottom:'25px'}}>11:00 - 12:00 hrs</Tag>
                            </Col>
                            {loading ?
                                    <SekeletonCalendar />:
                                    <Row>
                                    <Col span={24}>
                                        {MORNINGS.saturday.map((obj)=><>
                                            <MeetingCalendar meeting={obj} />
                                            </>
                                        )}
                                    </Col>
                                    </Row>
                            }
                        </Row>
                        <Row  style={{marginBottom:'5px', textAlign:'center'}}  justify={'center'}>
                            <Col lg={8}>
                                <Tag color={'rgb(206, 61, 75)'} style={{marginBottom:'25px'}}>16:00 - 16:30 hrs</Tag>
                            </Col>
                            {loading ?
                                    <SekeletonCalendar />:
                                    <Row>
                                    <Col span={24}>
                                        {EVENING.saturday.map((obj)=><>
                                            <MeetingCalendar meeting={obj} />
                                            </>
                                        )}
                                    </Col>
                                    </Row>
                            }
                        </Row>
                    </Col>

                </Row>
        }


        </>
    )
}



export default Calendar