/*
 * @Author: 陈巧龙
 * @Date: 2024-04-24 21:09:28
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-04-27 21:31:02
 * @FilePath: \react-app\src\views\Home.js
 * @Description: 
 */
import React, { useState, useEffect } from "react";
import { getBlogs } from '../service/home/index'
import { Spin, message } from 'antd';
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { incrementByAmount } from "../store/reducer";
import Footer from "../Footer"

const HomePage = () => {

    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)
    const [messageApi, contextHolder] = message.useMessage();
    const dispatch = useDispatch()

    //获取后台博客数据
    const getBlogsInfo = function () {
        getBlogs().then((res) => {
            if (res.data) {
                setBlogs(res.data)
                setLoading(false)
                success()
                //将数据进行保存
                dispatch(incrementByAmount(res.data))
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'data loading successful!',
        });
    };

    useEffect(() => {
        getBlogsInfo()
    }, [])

    return (
        <div className="App">
            <Navbar />
            <div className="home-page">
                {contextHolder}
                {blogs && blogs.map((item) => {
                    return (
                        <div className="blog-preview" key={item._id}>
                            <Link to={`/blogs/${item._id}`}>
                                <h2>{item.title}</h2>
                                <p>{item.snippet}</p>
                            </Link>
                        </div>

                    );
                })}
                <Spin tip="Loading" size="large" spinning={loading}>
                    <div className="content" />
                </Spin>
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;