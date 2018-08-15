/** 
 * Fly.js网络请求配置
 * Created by aerfa on 2018/8/6.
 * Copyright 2018 aerfa. All rights reserved.
 */
var Fly=require("flyio/dist/npm/wx");
var fly=new Fly;


//请求配置项
fly.config.headers = {'Content-Type': 'application/json'}
fly.config.timeout = 8000;
fly.config.baseURL = ""

//请求拦截器
fly.interceptors.request.use(request => {
    //给所有请求添加自定义header
    //request.headers.Authorization = token;
    return request;
})

//响应拦截器
fly.interceptors.response.use(
    res => {
        return res.data
    },
    err => {
        return Promise.resolve(err);
    }
)

//封装get请求
export function get(url , data = {}){
    return new Promise((resolve,reject) => {
        fly.get(url ,{
            data
        })
        .then(response => {
            resolve(response);
        })
        .catch(err => {
            reject(err);
        })
    })
}

//封装post请求
export function post(url, data = {}){
    return new Promise((resolve, reject) => {
        fly.post(url,data).then(response =>{
            resolve(response);
        }).catch(error => {
            reject(error);
        })
    })
}