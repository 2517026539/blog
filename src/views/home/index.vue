<template>
    <div class="home" v-loading="loading">
        <ul>
            <li v-for="item in contentList" class="content-li" :key="item.index">
                <div class="content-header">
                    <router-link class="header_link" :to="{ name: 'article', params: { id: item.id }}">
                        <p>{{item.title}}</p>
                    </router-link>
                </div>
                <div class="content-time">
                    <span>{{item.updateDate | filterTime}}</span>
                </div>
                <div class="content-body">
                    <router-link class="body_link" :to="{ name: 'article', params: { id: item.id }}">
                        <p>{{item.subtitle}}</p>
                    </router-link>
                </div>
                <div class="content-footer">
                    <span class="iconfont icon">&#xe65f; {{item.watch_num}}</span>
                    <span class="iconfont icon">&#xe609; {{item.comment}}</span>
                    <span class="iconfont icon">&#xe630; </span>
                    <span class="tag" :style="{backgroundColor: '#4abcff'}">{{item.sort}}</span>
                </div>
            </li>
        </ul>
        <el-pagination
             :page-size="pagination.pageSize"
             :current-page="pagination.page"
             @current-change="currentChange"
             :layout="layout"
             :total="pagination.total"
             :hide-on-single-page="true"
             class="pagination"
             background
        >
        </el-pagination>
    </div>
</template>

<script>
import { getArticleList } from "../../api/article";
import moment from 'moment'

export default {
    name: "home",
    filters: {
        filterTime (value) {
            return `发布 @${moment(value).format('YYYY年MM月DD日')}`
        }
    },
    data () {
        return {
            contentList: [],
            pagination: {
                pageSize: 6,
                page: 1,
                total: 7,
            },
            loading: false,
            layout: 'prev,pager,next'
        }
    },
    mounted() {
        this.init()
    },
    beforeRouteEnter(to, form, next) {
        next(vm => {
            vm.init()
        })
    },
    methods: {
        init() {
            this.loading = true
            getArticleList(this.pagination).then(res => {
                const list = res.data.reduce((pre, val) => {
                    if (!val['comment']) {
                        val.comment = 0
                    }
                    pre.push(val)
                    return pre
                },[])
                this.contentList = list
                this.loading = false
            }).catch(err => {
                this.loading = false
                this.$message({
                    type: 'error',
                    message: '数据获取失败！请重新刷新',
                    duration: 300
                })
            })
        },
        currentChange(val) {
            this.pagination.page = val
            this.init()
        }
    }
}
</script>

<style lang="scss" scoped>
.home {
    overflow: hidden;
    height: 100%;
    padding: 0px 10px;
    box-sizing: border-box;
    .content-li {
        box-sizing: border-box;
        padding: 30px 10px 10px 10px;
        margin-bottom: 40px;
        border: 1px solid #dbddeb;
        border-radius: 2px;
        overflow: hidden;
        &:hover {
            box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .4);
            background-color: #effbff;
        }
        .content-header {
            color: #3e3b3f;
            font-size: 20px;
            box-shadow: 0 0 1px transparent;
            white-space: nowrap;
            letter-spacing: 2px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-bottom: 5px;
            cursor: pointer;
            .header_link {
                display: inline-block;
                color: #3e3b3f;
                width: 100%;
            }
        }
        .content-time {
            height: 30px;
            position: relative;
            span {
                display: inline-block;
                position: absolute;
                line-height: 30px;
                left: 40px;
                top: 50%;
                transform: translateY(-50%);
                z-index: 1;
                padding: 0 10px;
                background-color: #fff;
                font-size: 12px;
                cursor: pointer;
            }
            &:before {
                content: '';
                display: inline-block;
                width: 100%;
                height: 0;
                border-top: 1px solid #dbddeb;
            }
        }
        .content-body {
            color: #666;
            font-size: 14px;
            line-height: 25px;
            letter-spacing: 1px;
            padding-right: 30px;
            margin-top: 10px;
            max-height: 150px;
            overflow: hidden;
            text-overflow: ellipsis;
            cursor: pointer;
            .body_link {
                color: #666;
                display: inline-block;
                width: 100%;
            }
        }
        .content-footer {
            margin-top: 20px;
            margin-bottom: 10px;
            text-align: left;
            line-height: 30px;
            color: #9d9f9f;
            font-size: 12px;
            .icon {
                margin-right: 20px;
                display: inline-block;
                &:nth-child(3) {
                    margin-right: 5px;
                }
            }
            .tag{
                display: inline-block;
                vertical-align: 2px;
                padding: 2px 4px;
                height: 20px;
                border-radius: 3px;
                line-height: 20px;
            }
        }
    }
}

</style>