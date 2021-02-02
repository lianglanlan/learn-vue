import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })
    //请求拦截器
    instance.interceptors.request.use(config => {
        //1.比如config中的一些信息不符合服务器要求
        //2.每次发送网络请求时，希望在页面中显示一个loading图标
        //3.某些网络请求，比如登录，必须携带一些加密信息
        return config
    }, err => {
        return Promise.reject(err);
    })
    //响应拦截器
    instance.interceptors.response.use(res => {
        return response;
    }, err => {
        return Promise.reject(err);
    })

    //发送真正的网络请求
    return instance(config)
}