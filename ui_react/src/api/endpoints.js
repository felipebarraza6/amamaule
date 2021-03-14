import { POST_LOGIN, GET, UPDATE, POST} from './config'


const login = async(data) => {
    const request = await POST_LOGIN('users/login/', {
        email: data.email,
        password: data.password
    })

    return request
}

const signup = async(data)=> {
    const request = await POST_LOGIN('users/signup/',data)

    return request.data
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
    console.log(user)
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

const api = {
    user: {
        login,
        signup,
        profile,
        get_profile_center,
        update_profile,
        create_profile
    }
}

export default api
