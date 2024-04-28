/*
 * @Author: 陈巧龙
 * @Date: 2024-04-27 13:46:53
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-04-28 12:19:20
 * @FilePath: \react-app\src\views\Details.js
 * @Description: 
 */
import Navbar from '../Navbar';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import Footer from '../Footer';
import { DeleteOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';


const Details = () => {
    const params = useParams() //获得冒号（：id）后面的参数
    console.log(params);

    const count = useSelector((state) => state.blog.value);
    console.log(count);

    let title = ''
    let body = ''

    count.forEach((item) => {
        if (item._id === params.id) {
            title = item.title
            body = item.body
        }
    })


    return (
        <div className="App">
            <Navbar></Navbar>
            <div className="details-page">
                <div className='details-first'>
                    <h2>{title}</h2>
                    <Tooltip title="delete" color={'red'}>
                        <DeleteOutlined className='delete-icon' />
                    </Tooltip>
                </div>
                <p>{body}</p>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Details