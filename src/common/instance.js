import axios from 'axios';
import baseUrl from './config'

//创建axios实例
const instance = axios.creat({
    xsrfCookieName: "XSRF-TOKEN",
    baseUrl: baseUrl,
})