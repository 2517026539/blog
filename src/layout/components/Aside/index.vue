<template>
    <div class="aside">
        <img class="avatar" src="./../../../assets/avatar.jpeg" alt="头像加载中。。">
        <h1>小贤</h1>
        <h2>爱看综艺</h2>
        <ul class="study-list">
            <li>
                <a href="http://39.103.143.209:80/xxds/" target="_blank"><i class="iconfont icon">&#xe64a;</i>gitHub</a>
            </li>
            <li>
                <a href="http://39.103.143.209:80/xxds/" target="_blank"><i class="iconfont icon">&#xe600;</i>码云</a>
            </li>
        </ul>
        <div class="skill">
            <span class="name">技能</span>
        </div>
        <ul class="skill-progress">
            <li v-for="item in skillList" :key="item.index">
                <span>{{item.name}}</span>
                <el-progress class="progress" :percentage="item.percentage" :color="item.color" />
            </li>
        </ul>
        <div class="tag">
            <span class="name">标签</span>
        </div>
        <div class="tag-list">
            <el-tag v-for="item in tagList" class="tag-style" :key="item.index" :color="item.color">{{item.name}}</el-tag>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Aside",
        data () {
            return {
                skillList: [
                    {
                        name: 'html、css、javascript',
                        percentage: 60,
                        color: '#8cffa4'
                    }, {
                        name: 'vue react',
                        percentage: 60,
                        color: '#8cffa4'
                    }, {
                        name: 'es6',
                        percentage: 60,
                        color: '#8cffa4'
                    }, {
                        name: 'webpack',
                        percentage: 40,
                        color: '#8cffa4'
                    },{
                        name: 'node mysql',
                        percentage: 50,
                        color: '#8cffa4'
                    }
                ],
                tagList: [
                    {
                        name: 'Node',
                        color: '#5affe9'
                    }, {
                        name: 'vue',
                        color: '#60ff4b'
                    }, {
                        name: 'react',
                        color: '#cc8a30'
                    }, {
                        name: 'HTTP',
                        color: '#8cffa4'
                    }, {
                        name: 'HTTPS',
                        color: '#2840ff'
                    }, {
                        name: 'webpack',
                        color: '#cc4e58'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .aside {
        text-align: center;
        vertical-align: center;
        width: 300px;
        margin: 0 auto;
        padding-bottom: 40px;
        border-radius: 5px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        .avatar {
            width: 132px;
            height: 132px;
            padding-top: 20px;
            border-radius: 50%;
        }
        h1 {
            font-size: 24px;
            font-weight: 400;
            margin-top: 10px;
            //margin-bottom: 10px;
        }
        h2 {
            font-size: 14px;
            font-weight: 300;
            margin-top: 10px;
        }
        .study-list{
            display: flex;
            flex-wrap: nowrap;
            flex-direction: row;
            justify-content: center;
            li {
                a{
                    display: inline-block;
                    padding: 3px 4px;
                    border-radius: 3px;
                    color: #272828;
                    .icon {
                        padding-right: 2px;
                        display: inline-block;
                        color: #9d9f9f;
                    }
                    &:hover {
                        background-color: #dbddeb;
                        color: #9d9f9f;
                    }
                }
                &:nth-child(2) {
                    margin-left: 20px;
                    .icon {
                        color: #cc4e58;
                    }
                }
            }
        }
        .skill {
            position: relative;
            width: 100%;
            .name {
                display: inline-block;
                padding: 10px 10px;
                width: 20%;
                text-align: center;
                box-sizing: border-box;
                font-size: 16px;
                font-weight: 500;
            }
            &:before {
                content: '';
                display: inline-block;
                border-top: 1px solid #9d9f9f;
                position: relative;
                opacity: 0.6;
                left: 0;
                width: 5%;
                transform: translateY(-500%);
            }
            &:after {
                content: '';
                display: inline-block;
                border-top: 1px solid #9d9f9f;
                position: relative;
                opacity: 0.6;
                left: 0;
                width: 65%;
                transform: translateY(-500%);
            }

        }
        .skill-progress {
            margin-bottom: 10px;
            padding-left:30px;
            padding-right: 20px;
            box-sizing: border-box;
            li {
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                margin-bottom: 8px;
                span {
                    font-size: 14px;
                }
                .progress{
                    flex: 1;
                }
            }
        }
        .tag{
            @extend .skill;
        }
        .tag-list {
            padding-left: 10px;
            box-sizing: border-box;
            margin-bottom: 10px;
            .tag-style {
                margin: 5px 10px 5px 2px;
            }
        }
    }
</style>