/*
 * @Author: 陈巧龙
 * @Date: 2024-04-27 13:46:53
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-04 14:50:12
 * @FilePath: \react-app\src\views\Details.js
 * @Description: 
 */
import Navbar from '../Navbar';
import { useParams,useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Footer from '../Footer';
import { DeleteOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { delBlogs } from '../service/home';
import { message } from 'antd';


const Details = () => {
    //获得冒号（：id）后面的参数
    const params = useParams()

    // 博客数据
    const count = useSelector((state) => state.blog.value);

    let title = ''
    let body = ''

    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Blog deleted successfully!',
        });
    };

    count.forEach((item) => {
        if (item._id === params.id) {
            title = item.title
            body = item.body
        }
    })

    const navigate = useNavigate();
    //删除博客数据
    const delSelectedBlogs = function () {
        delBlogs(params.id).then((res) => {
            success()
            navigate('/blogs');
        })
    }

    return (
        <div className="App">
            {contextHolder}
            <Navbar></Navbar>
            <div className="details-page">
                <div className='details-first'>
                    <h2>{title}</h2>
                    <Tooltip title="delete" color={'red'}>
                        <DeleteOutlined className='delete-icon' onClick={delSelectedBlogs} />
                    </Tooltip>
                </div>
                <p>{body}</p>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Details