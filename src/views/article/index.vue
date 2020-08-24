<template>
    <div class="article">
        <div class="header">
            <h1>{{article.title}}</h1>
            <div class="header_des">
                <span class="update"><i class="iconfont">&#xe65e;</i>{{article.pubdate | filterTime}}</span>
                <span>|</span>
                <span class="tag">
                    <i class="iconfont">&#xe630;</i>
                    <el-tag class="tag-one" :style="{backgroundColor: '#4abcff'}">{{ article.sort }}</el-tag>
                </span>
                <span>|</span>
                <span class="fun">
                    <i class="iconfont">&#xe65f;<span>{{article.watch_num}}</span></i>
                    <i class="iconfont">&#xe609;<span>{{article.comment}}</span></i>
                </span>
            </div>
            <div class="subtitle">
                {{article.subtitle}}
            </div>
        </div>
        <div class="render" v-loading="loading">
            <div v-html="article.render"></div>
        </div>
    </div>
</template>

<script>
import { addWatch, getArticle } from "../../api/article";
import moment from 'moment'

export default {
    name: 'Article',
    filters: {
        filterTime: (value) => {
            return `${moment(value).format('YYYY-MM-DD')}`
        }
    },
    data() {
        return {
            article: {},
            loading: false
        }
    },
    watch: {
        $route: {
            handler:(to) => {
                if (to.name === 'article' && to.params.id) {
                    addWatch({id: to.params.id}).then(res => {
                        console.log(res)
                    }).catch(err => {
                        console.log(err)
                    })
                }
            },
            deep: true
        }
    },
    beforeRouteEnter(to, from, next){
        next(vm => {
            vm.init()
        })
    },
    methods: {
        init() {
            this.loading = true
            getArticle({id: this.$route.params.id}).then(res => {
                const art = res.data
                if (!res.data['comment']) {
                    art.comment = 0
                }
                this.article = art
                this.loading = false
            }).catch(err => {
                this.loading = false
                console.log(err)
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.article{
    box-sizing: border-box;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
    .header {
        border-bottom: 1px solid #e8e8e8;
        padding-bottom: 20px;
        margin-bottom: 10px;
        h1{
            color: #0d1a26;
            font-size: 26px;
            font-weight: 400;
            margin-bottom: 15px;
        }
        .subtitle{
            border: 1px solid #f8f8f8;
            background-color: #dbddeb;
            border-radius: 5px;
            margin: 10px 40px;
            padding: 10px 5px;
        }
        .header_des{
            color: #555;
            span {
                display: inline-block;
                &:nth-child(even){
                    padding: 0 20px;
                    color: #e8e8e8;
                }
            }
            .update {
                i {
                    font-size: 24px;
                    vertical-align: -3px;
                }

            }
            .tag {
                i{
                    padding-right: 5px;
                }
                .tag-one {
                    vertical-align: 2px;
                }
            }
            .fun {
                i{
                    margin-right: 10px;
                    font-size: 20px;
                    span{
                        padding-left: 3px;
                    }
                }
            }
        }
    }
}

@media screen and(max-width: 768px){
    .article {
        .header{
            .header_des {
                >span {
                    &:nth-child(1) {
                        display: block;
                        margin-bottom: 10px;
                        height: 25px;
                        line-height: 25px;
                        font-size: 20px;
                        i {
                            vertical-align: -2px;
                            font-size: 25px;
                            height: 25px;
                            line-height: 25px;
                        }
                    }
                    &:nth-child(2) {
                        display: none;
                    }
                }
            }
        }
    }
}
</style>