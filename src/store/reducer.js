/*
 * @Author: 陈巧龙
 * @Date: 2024-04-26 23:33:19
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-04-27 13:40:32
 * @FilePath: \react-app\src\store\reducer.js
 * @Description: 
 */

import { createSlice } from '@reduxjs/toolkit';

export const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        value: [],
    },
    reducers: {
        incrementByAmount: (state, action) => {
            state.value = action.payload;
        },
    },
});

// 为每个 case reducer 函数生成 Action creators
export const { incrementByAmount } = blogSlice.actions;

export default blogSlice.reducer;
