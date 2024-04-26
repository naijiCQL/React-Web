/*
 * @Author: 陈巧龙
 * @Date: 2024-04-26 09:19:03
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-04-26 10:09:26
 * @FilePath: \react-app\src\service\config.js
 * @Description: 
 */
const devBaseURL = "http://localhost:8081"; //开发环境
const proBaseURL = "https://production.org"; //生产环境
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;

