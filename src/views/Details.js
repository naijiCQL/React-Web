/*
 * @Author: 陈巧龙
 * @Date: 2024-04-27 13:46:53
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-04-27 13:48:58
 * @FilePath: \react-app\src\views\Details.js
 * @Description: 
 */
import Navbar from '../Navbar';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';


const Details = () => {
    const params = useParams() //获得冒号（：id）后面的参数
    console.log(params);

    const count = useSelector((state) => state.blog.value);

    console.log(count);


    return (
        <div className="App">
            <Navbar></Navbar>
            <div>
                <p>{params.id}</p>
            </div>
        </div>
    );
}

export default Details