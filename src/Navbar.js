/*
 * @Author: 陈巧龙
 * @Date: 2024-04-24 20:58:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-04-26 17:18:58
 * @FilePath: \react-app\src\Navbar.js
 * @Description: 导航页面
 */
const Navbar = () => {
    return (
        <div className="nav-page">
            <div className="page-left">
                <h1>blog site</h1>
                <p>by cql</p>
            </div>
            <nav>
                <a href="/blogs">blogs</a>
                <a href="/about">about</a>
                <a href="/create">new blog</a>
            </nav>
        </div>
    );
}

export default Navbar;