import axios from 'axios'


export const BASE_URL = 'http://amamaule.cl:8000'
//export const BASE_URL = 'https://api.amamaule.cl/'
export const BASE_WHEREBY_API = 'https://api.whereby.dev/v1/'

export const INSTANCE = axios.create({
    baseURL: BASE_URL
})

export const INSTANCE_WHEREBY = axios.create({
    baseURL: BASE_WHEREBY_API,

})

export const POST_LOGIN = async(endpoints, data)=> {
    const request = await INSTANCE.post(endpoints, data)
    return request
}

export const POST_CRAETE_MEET = async(endpoint, data)=> {
     const options = {
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmFwcGVhci5pbiIsImF1ZCI6Imh0dHBzOi8vYXBpLmFwcGVhci5pbi92MSIsImV4cCI6OTAwNzE5OTI1NDc0MDk5MSwiaWF0IjoxNjE2Njg1OTMyLCJvcmdhbml6YXRpb25JZCI6OTQxNzgsImp0aSI6ImMxOTJjZTUwLWNhYzAtNDMzYS1hYjU2LTQxMzdiZTc5NDY1MyJ9.094_8NjKgAin3byR0ipP4Xd9XEIJpuXXsbtrf9U-UzE`
        }
    }
    const request = await INSTANCE_WHEREBY.post(endpoint, data, options)
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
