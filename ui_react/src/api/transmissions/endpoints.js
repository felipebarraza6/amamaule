import { POST_LOGIN, GET, UPDATE, 
    POST, POST_FILE} from '../config'


const list_transmissions = async(is_live, category)=> {

    const request = await GET(`transmissions/?is_live=${is_live}&category=${category}`)
    return request
}

const list_comments = async(id_transmissions, is_active)=> {

    const request = await GET(`transmissions-comments/?is_active=${is_active}&transmission=${id_transmissions}`)
    return request

}

const create_comment = async(id_transmissions, user, comment) => {

    const values = {
        message: comment,
        user: user,
        transmission: id_transmissions
    }

    const request = await POST(`transmissions-comments/`, values)

    return request


}


const api_transmissions = {
    transmissions: {
        list: list_transmissions,        
    },
    comments: {
        list: list_comments,
        create: create_comment
    }
}

export default api_transmissions