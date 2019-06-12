import axios from 'axios';

// axios 配置
var instance = axios.create({
    headers:{
        'Content-Type': 'application/json',
    },
    timeout: 30000,
    baseURL: '',   //接口请求地址
    withCredentials: true  //允许携带cookie
})

// 添加请求拦截器
instance.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error);
})

// 添加响应拦截器
instance.interceptors.response.use(response => {
    return response;
}, error => {
    return Promise.reject(error);
});

export default instance;

/**
 * 封装所有请求
 * @param methed
 * @param url
 * @param data 
 * @param headers
 * @returns {Promise}
 */
export function request(methed,url, data = {},headers) {
    return new Promise((resolve, reject) => {
        instance({
            method: methed || 'post',
            url:url,
            data: methed !== 'get' ? data : '',
            params: methed === 'get' ? data :'',
            headers: headers || {'Content-Type':'application/json'},
        })
        .then(response => {
            resolve(response.data);
        })
        .catch(err => {
            reject(err)
        })
    })
}