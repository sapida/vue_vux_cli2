import axios from 'axios';
import router from '../router'

// var httpUrl = 'http://'+window.location.host;
var httpUrl = ' ';  //请求地址


// axios 配置
var instance = axios.create({
	baseURL: httpUrl,
	timeout: 5000
})

//可以在这先申明错误代码表示的含义

// 添加请求拦截器
instance.interceptors.request.use(config => {
    //config.data = JSON.stringify(config.data);
    config.headers = {
        'Content-Type':'application/json'
    };
//  if (token) {
//      config.params = {'token': token}
//  }
    return config;
},error => {
	// 对请求错误做些什么
	console.log(error) // for debug
    return Promise.reject(error);
});


//添加响应拦截器
instance.interceptors.response.use(response => {
	// 对响应数据做点什么
	const res = response;
	//对错误代码做处理
//  if(response.data.errCode == 2) {
//      router.push({
//          path: '/',
//          query: {redirect: router.currentRoute.fullPath}  //从哪个页面跳转
//      })
//  }
    return response;
},error => {
	console.log('err' + error)// for debug
    // if (error.response) {
    //     switch (error.response.status) {
    //         case 401:
    //             // 401 清除token信息并跳转到登录页面
    //             store.commit(types.LOGOUT);
    //             router.replace({
    //                 path: 'login',
    //                 query: {redirect: router.currentRoute.fullPath}
    //             })
    //     }
    // }
    return Promise.reject(error.response);
});

export default instance;

/**
 * fetch/get 请求方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function fetch(url, params = {}) {
    return new Promise((resolve, reject) => {
        instance.get(url, {
            params: params
        })
        .then(response => {
            resolve(response.data);
        })
        .catch(err => {
            reject(err)
        })
    })
}

/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        instance.post(url, data).then(response => {
            resolve(response.data);
        }, err => {
            reject(err);
        })
    })
}

/**
 * patch 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url, data = {}) {
    return new Promise((resolve, reject) => {
        instance.patch(url, data).then(response => {
            resolve(response.data);
        }, err => {
            reject(err);
        })
    })
}

/**
 * put 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        instance.put(url, data).then(response => {
            resolve(response.data);
        }, err => {
            reject(err);
        })
    })
}
