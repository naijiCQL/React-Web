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
                <a href="/newBlogs">new blog</a>
            </nav>
        </div>
    );
}

export default Navbar;