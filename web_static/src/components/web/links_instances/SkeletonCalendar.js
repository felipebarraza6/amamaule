import React from 'react'
import {Col, Row, Skeleton} from "antd";

const SkeletonCalendar = () => (<><Row style={{textAlign:'center'}}>
            <Col span={8} style={{padding:'5px'}}>
                <Skeleton loading={true} active avatar paragraph={{rows:0}} />
            </Col>
            <Col span={8}   style={{padding:'5px'}}>
               <Skeleton loading={true} active avatar paragraph={{rows:0}} />
            </Col>
            <Col span={8} style={{padding:'5px'}} >
               <Skeleton loading={true} active avatar paragraph={{rows:0}}  />
            </Col>
        </Row>
        <Row style={{textAlign:'center'}}>
            <Col span={8} style={{padding:'5px'}}>
                <Skeleton loading={true} active avatar paragraph={{rows:0}} />
            </Col>
            <Col span={8}   style={{padding:'5px'}}>
               <Skeleton loading={true} active avatar paragraph={{rows:0}} />
            </Col>
            <Col span={8} style={{padding:'5px'}} >
               <Skeleton loading={true} active avatar paragraph={{rows:0}}  />
            </Col>
        </Row>

</>)


export default SkeletonCalendar
