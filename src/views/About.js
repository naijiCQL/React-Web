/*
 * @Author: 陈巧龙
 * @Date: 2024-04-26 16:38:26
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-04-26 17:00:21
 * @FilePath: \react-app\src\About.js
 * @Description: 
 */
import Navbar from '../Navbar'
import Footer from '../Footer';

function About() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <div>
                <h2>About页面</h2>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default About;