import { POST_LOGIN, GET} from './config'


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


const api = {
    user: {
        login,
        signup,
        profile
    }
}

export default api