import axios from 'axios'


export const BASE_URL = 'http://localhost:8000/'
//export const BASE_URL = 'https://api.amarondas.cl/'

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

export const GET_NOT_TOK = async(endpoints) => {
    const request = await INSTANCE.get(endpoints)
    return request
}

export const POST = async(endpoints, data) => {
    const token = JSON.parse(localStorage.getItem('access_token'))
    const options = {
      headers: {
          Authorization: `Token ${token}`
      }
    }
    const request = await INSTANCE.post(endpoints, data, options)
    return request
}

//POST FORM WITH FILE ADD
export const POST_FILE = async(endpoints, field, file) => {
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


export const UPDATE = async(endpoints, data) => {
    const token = JSON.parse(localStorage.getItem('access_token'))
    
    const options = {
        headers: {
            Authorization: `Token ${token}`,
        }
    }
    const request = await INSTANCE.patch(endpoints, data, options)
    return request

}

export const DELETE = async(endpoints, data) => {
    const token = JSON.parse(localStorage.getItem('access_token'))

    const options = {
        headers: {
            Authorization: `Token ${token}`,
        }
    }
    const request = await INSTANCE.delete(endpoints, options)
    return request
}
