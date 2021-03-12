import axios from 'axios'

export const BASE_URL = 'http://localhost:8000/'


export const INSTANCE = axios.create({
    baseURL: BASE_URL
})

export const POST_LOGIN = async(endpoints, data)=> {
    const request = await INSTANCE.post(endpoints, data)
    return request
}

export const GET = async(endpoints) => {
    const token = JSON.parse(localStorage.getItem('access_token'))
    
    const options = {
        headers: {
            Authorization: `Token ${token}`
        }
    }
    const request = await INSTANCE.get(endpoints, options)
    return request
}


