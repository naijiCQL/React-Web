/*
 * @Author: 陈巧龙
 * @Date: 2024-04-26 23:34:18
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-04-27 13:42:51
 * @FilePath: \react-app\src\store\store.js
 * @Description: 
 */
import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './reducer'

export default configureStore({
    reducer: {
        blog: blogReducer,
    },
});