import request from './../utils/request'

export function getArticleList(data) {
    return request({
        url: '/article_blog/list',
        method: 'get',
        params: data
    })
}

export function getArticlePlace(data) {
    return request({
        url: '/article_blog/place',
        method: 'get',
        params: data
    })
}

export function addWatch(data) {
    return request({
        url: '/article_blog/watch',
        method: 'get',
        params: data
    })
}

export function getArticle(data) {
    return request({
        url: '/article_blog/id',
        method: 'get',
        params: data
    })
}

export function searchValue(data) {
    return request({
        url: '/article_blog/search',
        method: 'get',
        params: data
    })
}

export function getSortList() {
    return request({
        url: '/article_blog/sort',
        method: 'get'
    })
}