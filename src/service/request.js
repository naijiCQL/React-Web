/*
 * @Author: 陈巧龙
 * @Date: 2024-04-26 09:19:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-04-26 09:44:23
 * @FilePath: \react-app\src\service\request.js
 * @Description: 
 */
import axios from 'axios';
import { BASE_URL } from "./config";

const request = axios.create({
    baseURL: BASE_URL,
    timeout: 5000
});

// http request 拦截器
request.interceptors.request.use(config => {
    // 发送网络请求时, 在界面的中间位置显示Loading的组件,使用ant-design插件，这里不再赘述
    //请求携带的信息
    config.headers = {
        'Content-Type': 'application/json',
        'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMTIwMjIyMTExNyIsImlhdCI6MTcwOTI5ODU4OX0.2ITFBED3ttuzQ5TijNh_bczMEwrw3D8C-esh7TPexss',
        ...config.headers,
    };
    return config;
}, err => {
    //...关闭加载loading的组件，显示消息提示弹窗
    return err;
});

// http response 拦截器
request.interceptors.response.use(res => {
    return res;
}, err => {
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                console.log("请求错误");
                break;
            case 401:
                console.log("未授权访问");
                break;
            default:
                console.log("其他错误信息");
        }
    }
    return err;
});

export default request;
