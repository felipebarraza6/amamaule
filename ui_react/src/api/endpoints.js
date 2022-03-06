import { POST_LOGIN, GET, UPDATE, 
        POST, POST_FILE, INSTANCE} from './config'


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

const list_users = async({filter='', first_name='', last_name='', region='', city=''})=> {
    const request = await GET(`users/?type_user=${filter}&first_name__contains=${first_name}&last_name__contains=${last_name}&region__contains=${region}&commune__contains=${city}`)
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

const update_user = async(user, data) => {
    const rq = await UPDATE(`users/${user}/`, data)
    return rq
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

const getWorkshops = async(is_digital) => {
    const rq = await GET(`workshops/?is_digital=${is_digital}`)

    return rq
}

const updateWorkshops = async(id, data) => {
    const rq = await UPDATE(`workshops/${id}/`, data)
    return rq
}

export const UPLOAD_FILE_OR_IMG = async(endpoints, field, file) => {
    console.log({file})
    const token = JSON.parse(localStorage.getItem('access_token'))
    let data = new FormData()

    data.append(field, file)

    const options = {
      headers: {
          Authorization: `Token ${token}`,
          'content-type': 'multipart/form-data'
      }
    }

    const request = await INSTANCE.patch(endpoints, data, options)
    return request

}

const api = {
    workshops: {
        get: getWorkshops,
        update: updateWorkshops
    },
    user: {
        UPLOAD_FILE_OR_IMG,
        login,
        signup,
        list_users,
        update_user,
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
