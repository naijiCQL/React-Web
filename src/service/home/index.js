import request from '../request'

export function getBlogs(params) {
    return request.get('/blog/getBlog', { params });
}