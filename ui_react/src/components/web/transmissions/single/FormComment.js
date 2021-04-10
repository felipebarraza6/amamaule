import React, {useContext} from 'react'
import {Form, Input, Button, Card, notification} from 'antd'
import api_transmissions from '../../../../api/transmissions/endpoints'
import {AuthContext} from '../../../../App'
const {TextArea} = Input

const FormComment = ({obj}) => {

    const { state } = useContext(AuthContext)

    const [form] = Form.useForm()

    async function sendComment(values){
        notification.success({            
            message:'Comentario enviado!',
            
        })

        const request = await api_transmissions.comments.create(obj.uuid, state.user.id, values.comment).then((response)=> {
            console.log(response)
            form.resetFields()
        })
        
    }

    return(
        
            <Form style={{paddingLeft:'20px'}} form={form} name='comment_form' layout='vertical' noStyle onFinish={sendComment}>
                <Form.Item rules={[
                    {max:300, message:'Solo puedes enviar 300 caracteres por comentario...'},
                    {required:true, message:'Campo obligatorio'}
                    ]} name='comment' 
                    label='Escribe tu comentario...'
                    >
                    <TextArea style={{borderColor:'#5c0011'}} rows={3} placeholder='Mensaje...' />
                </Form.Item>
                <Form.Item style={{float:'right'}} >
                    <Button htmlType='submit' style={{backgroundColor:'#5c0011', borderColor:'#5c0011'}} type='primary'>Enviar</Button>
                </Form.Item>
            </Form>            
        
    )
}


export default FormComment