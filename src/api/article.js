import request from './../utils/request'

export function getArticleList() {
    return request({
        url: '/article_blog/list',
        method: 'get'
    })
}