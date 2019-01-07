// 与后台交互的api接口，都封装到 service里
import axios from 'axios';

// 登录完成后的所有请求，必须在 请求的headers中添加 token
// Add a request interceptor
let axiosIns = axios.interceptors.request.use(function (config) {
    let loginT = sessionStorage.getItem('LoginToken');
    if (loginT) {
        // Do something before request is sent
        config.headers.Authorization = `Bearer ${loginT}`; // Bearer 是校验要求
    }
    return config;
}, function (error) {
    // Do something with request error 
    return Promise.reject(error);
});

export default {
    login(data) {
        return axios.post("/api/login", data);
    },
    logout() {
        // 当我们退出登录时，取消全局注册打 钩子
        axios.interceptors.reject.eject(axiosIns);
    },
    getUserProgress() {
        return axios.get('/api/getUserProgress');
    }
}