import axios from 'axios'
import BaseUrl from '../../utils/BaseUrl'

const RootPath = BaseUrl

const Get = (path) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${RootPath}${path}`).then((result) => {
            resolve(result.data)
        }, (err) => {
            reject(err);
        })
    })
    return promise
}
const Post = (path, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.post(`${RootPath}${path}`, data).then((result) => {
            resolve(result)
        }, (err) => {
            reject(err);
        })
    })
    return promise
}

// Post
const Login = (data) => Post('login', data)
const API = {
    Login
}
export default API;