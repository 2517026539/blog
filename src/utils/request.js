import axios from 'axios'
import { Message} from "element-ui";

const service = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000
})

service.interceptors.request.use(config => {
    return config
},error => {
    return Promise.reject(error)
})

service.interceptors.response.use(response => {
    const res = response.data
    if (res.code !== 200) {
        Message({
            message: res.msg || 'Error',
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(new Error(res.msg || 'Error'))
    } else {
        return res
    }
}, error => {
    Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
    })
    return Promise.reject(error)
})

export default service