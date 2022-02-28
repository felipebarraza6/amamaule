import { POST_LOGIN, GET, UPDATE, 
        POST, POST_FILE} from './config'


const login = async(data) => {
    const request = await POST_LOGIN('users/login/', {
        email: data.email,
        password: data.password
    })

    return request
}



const list_viewings = async()=> {
    const request = await GET('selected_viewings/')

    return request.data
}

const signup = async(data)=> {
    const request = await POST_LOGIN('users/signup/',data)

    return request.data
}

const list_users = async({filter='', first_name='', last_name='', region=''})=> {
    const request = await GET(`users/?type_user1=${filter}&first_name__contains=${first_name}&last_name__contains=${last_name}&region__contains=${region}`)
    return request
}

const profile = async(user)=> {
    const request = await GET(`users/${user}/`)
    return request
}

const get_profile_center = async(user)=> {
    const request = await GET(`users/profile/${user}/`)
    return request
}

const update_profile = async(user, data) => {
    const request = await UPDATE(`users/profile/${user}/`, data)
  
    return request
}

const create_profile = async(user, data) => {
  data = {
    ...data,
    user: user,
  }
  const request = await POST(`users/create_profile/`, data)
  return request
}

const reset_password = async(data)=> {
    
  const request = await POST_LOGIN(`users/reset_password/`, data)

  return request

}

const upload_file = async(field, file, user_id)=> {    
    const request = await POST_FILE(`users/profile/${user_id}/`, field, file).then((response)=> {
        console.log(response)
    }).catch((error)=> {
        console.log(error)
    })

    return request
}


const upload_img = async(field, file, user_id)=> {    
    const request = await POST_FILE(`users/${user_id}/`, field, file).then((response)=> {
        console.log(response)
    }).catch((error)=> {
        console.log(error)
    })

    return request
}

const api = {
    user: {
        login,
        signup,
        list_users,
        profile,
        get_profile_center,
        update_profile,
        create_profile,
        reset_password,
        upload_file,
        upload_img
    },
    viewings : {
        list_viewings
    }
}

export default api
