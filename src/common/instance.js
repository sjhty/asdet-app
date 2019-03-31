import axios from 'axios';
import baseUrl from './config'

//创建axios实例
const instance = axios.creat({
    xsrfCookieName: "XSRF-TOKEN",
    baseUrl: baseUrl,
})

//响应数据拦截器
instance.interceptors.response.use(function(response){
    if (response.data.success) {
        return Promise.resolve(response.data);
    } else {
        //弹出信息
        return Promise.reject({
            message: response.data.message
        })
    }
})