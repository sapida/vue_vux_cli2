/** 
 * axios网络请求配置
 * Created by aerfa on 2018/8/9.
 */
import axios from 'axios'

// 请求配置项
var instance = axios.create({
    headers:{
        'Content-Type': 'application/json',
    },
    timeout: 8000,
	baseURL: ''      //接口地址
})

//请求拦截器
instance.interceptors.request.use(config => {
    return config;
},error => {
    return Promise.reject(error);
})

//响应拦截器
instance.interceptors.response.use(
    res => {
        return res.data
    },
    error => {
        return Promise.reject(error);
    }
)

//封装get请求
export function get(url, data = {}) {
    return new Promise((resolve, reject) => {
        instance.get(url, {
            params: data
        })
        .then(response => {
            resolve(response);
        })
        .catch(err => {
            reject(err)
        })
    })
}

//封装post请求
export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        instance.post(url, data).then(response => {
            resolve(response);
        }).catch(err =>{
            reject(err);
        });
    })
}