/*
 * @Author: 陈巧龙
 * @Date: 2024-04-24 21:09:28
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-04-26 10:52:05
 * @FilePath: \react-app\src\Home.js
 * @Description: 
 */
import React from "react";
import { useState, useEffect } from "react";
import { getBlogs } from './service/home/index'

const HomePage = () => {
    const [blogs, setBlogs] = useState([
        {
            "_id": "65df18a3633101fc29631ad0",
            "title": "Yoshi finds eggs",
            "snippet": "Yoshi was wandering through the forest when he stumbled upon a nest full of colorful eggs.",
        },
        {
            "_id": "65df18a3633101fc29631ad3",
            "title": "Luigi's Mansion: Ghostly Encounters",
            "snippet": "Join Luigi as he explores a haunted mansion, armed with only a trusty vacuum cleaner and his wits.",
        },
    ])

    //获取后台博客数据
    function getBlogsInfo() {
        getBlogs().then((res) => {
            console.log(res.data);
            setBlogs(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        // getBlogsInfo()
    }, [])

    return (
        <div className="home-page">
            {blogs.map((item) => {
                <div className="blog-content" key={item._id}>
                    <h2>{item.title}</h2>
                    <p>{item.snippet}</p>
                </div>
            })}
        </div>
    );
}

export default HomePage;