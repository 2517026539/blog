<template>
    <div class="home">
        <ul>
            <li v-for="item in contentList" class="content-li" :key="item.index">
                <div class="content-header">
                    <router-link class="header_link" :to="{ name: 'article', params: { id: item.id }}">
                        <p>{{item.title}}</p>
                    </router-link>
                </div>
                <div class="content-time">
                    <span>{{item.date | filterTime}}</span>
                </div>
                <div class="content-body">
                    <router-link class="body_link" :to="{ name: 'article', params: { id: item.id }}">
                        <p>{{item.content}}</p>
                    </router-link>
                </div>
                <div class="content-footer">
                    <span class="iconfont icon">&#xe65f; {{item.watch}}</span>
                    <span class="iconfont icon">&#xe609; {{item.comment}}</span>
                    <span class="iconfont icon">&#xe630; </span>
                    <span v-for="tag in item.tags" class="tag" :key="tag.index" :style="{backgroundColor: tag.color}">{{tag.name}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { getArticleList } from "../../api/article";

export default {
    name: "home",
    filters: {
        filterTime (value) {
            return `发布 @${value}`
        }
    },
    data () {
        return {
            contentList: [
                {
                    id: '1',
                    title: '我发布的首个博客！',
                    date: '2020年8月15日',
                    content: '大家好，这是小贤写的第一篇博客日志。该博客系统是本人的一个练手项目，现在这里暂时只有比较少的文章。这篇博客记录了本人开发这个博客系统的全过程，朋友们有兴趣想了解更多具体的本人是如何开发这个博客的可以点击本篇博客了解更多。',
                    watch: 20,
                    comment: 7,
                    tags: [{name: '日常', color: '#4abcff'}]
                },{
                    id: '2',
                    title: '我发布的首个博客！',
                    date: '2020年8月15日',
                    content: '大家好，这是小贤写的第一篇博客日志。该博客系统是本人的一个练手项目，现在这里暂时只有比较少的文章。这篇博客记录了本人开发这个博客系统的全过程，朋友们有兴趣想了解更多具体的本人是如何开发这个博客的可以点击本篇博客了解更多。',
                    watch: 20,
                    comment: 7,
                    tags: [{name: '日常', color: '#4abcff'}]
                },{
                    id: '3',
                    title: '我发布的首个博客！',
                    date: '2020年8月15日',
                    content: '大家好，这是小贤写的第一篇博客日志。该博客系统是本人的一个练手项目，现在这里暂时只有比较少的文章。这篇博客记录了本人开发这个博客系统的全过程，朋友们有兴趣想了解更多具体的本人是如何开发这个博客的可以点击本篇博客了解更多。',
                    watch: 20,
                    comment: 7,
                    tags: [{name: '日常', color: '#4abcff'}]
                }
            ]
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            getArticleList().then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        },

    }
}
</script>

<style lang="scss" scoped>
.home {
    height: 100%;
    padding: 0px 10px;
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
                display: block;
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