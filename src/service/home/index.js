import request from '../request'

export function getBlogs(params) {
    return request.get('/blog/getBlog', { params });
}

export function delBlogs(params) {
    return request.get(`/blog/delBlog/${params}`)
}