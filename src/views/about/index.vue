<template>
    <div class="about">
        <span class="about-avatar"><img src="./../../assets/avatar.jpeg" alt="image丢失"><span>爱看综艺</span></span>
        <div class="about-blog">
            <span>博客介绍</span>
        </div>
        <p>
            本博客的技术为vue + elementui + express + mysql
        </p>
        <p>
            源码地址为<a href="https://github.com/2517026539/blog" target="_blank" style="color: #5e98ff">github</a>,想参考的朋友们，可以自行查阅代码
        </p>
        <div class="about-me">
            <span>关于我</span>
        </div>
        <ul class="about-ul">
            <li>姓名：华振盛</li>
            <li>性别：男</li>
            <li>学历：本科毕业</li>
            <li>专业：计算机科学与技术专业</li>
            <li class="tongxin">
                <span>联系方式：</span>
                <span class="iconfont">&#xe642; 2517026539</span>
                <span class="iconfont">&#xe7eb; 2517026539@qq.com</span>
                <span class="iconfont">&#xe624; 13250104629</span>
            </li>
            <li>地址：茂名市化州市</li>
            <li>其他线上地址：<a href="http://39.103.143.209:80/xxds" target="_blank" style="color: #5e98ff">小贤读书后台</a></li>
            <li>
                <span>技能：</span>
                <ul class="skill">
                    <li>HTML、CSS、Javascript:能熟练开发符合W3C标准的页面！    <el-rate class="rate" v-model="rate" :disabled="true" show-text/></li>
                    <li>vue react 框架：熟练掌握使用！    <el-rate class="rate" v-model="rate" :disabled="true" show-text/></li>
                    <li>es6：日常开发必备，以及掌握基本面向对象编程实现！    <el-rate class="rate" v-model="rate" :disabled="true" show-text/></li>
                    <li>webpack：可以对脚手架进行针对性的打包配置！    <el-rate class="rate" v-model="rate" :disabled="true" show-text/></li>
                    <li>node mysql：针对需求可以做到简单的数据库设计、接口的开发与设计!     <el-rate class="rate" v-model="rate" :disabled="true" show-text/></li>
                </ul>
            </li>
            <li>
                <span>其他：</span>
                <ul class="skill">
                    <li>常用开发工具：webstorm、git</li>
                    <li>常用UI工具：antd、element-ui</li>
                </ul>
            </li>
            <li>
                <span>个人：</span>
                <ul class="skill">
                    <li>喜欢lol，现在偶尔看玩玩</li>
                    <li>喜欢独处</li>
                    <li>欢迎交流</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "about",
        data () {
            return {
                rate: 3
            }
        }
    }
</script>

<style lang="scss" scoped>
.about {
    padding: 0 30px 20px;
    box-sizing: border-box;
    overflow: hidden;
    color: #606266;
    .about-avatar {
        display: inline-block;
        line-height: 40px;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        img {
            vertical-align: middle;
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
        span {
            display: inline-block;
            margin-left: 10px;
            line-height: 40px;
            font-size: 16px;
        }
    }
    .about-blog {
        position: relative;
        height: 50px;
        &::before {
            content: '';
            display: inline-block;
            width: 100%;
            border-top: 1px solid #dbddeb;
            opacity: 0.8;
            position: relative;
            top: 25%;
            transform: translateY(-50%);
        }
        span{
            position: absolute;
            z-index: 10;
            display: inline-block;
            padding: 10px 15px;
            left: 45px;
            background-color: #fff;
            box-sizing: border-box;
            height: 50px;
            color: #303133;
            line-height: 30px;
            font-size: 17px;
        }
    }
    .about-me {
        @extend .about-blog;
    }
    .about-ul {
        list-style: circle;
        margin-left: 15px;
        font-size: 14px;
        > li {
            margin-bottom: 10px;
        }
        .tongxin {
            span {
                margin-right: 15px;
            }
            span:first-child {
                margin-right: 5px;
            }
        }
    }
}

.skill {
    list-style: circle;
    margin-left: 15px;
    margin-top: 10px;
    li {
        margin-bottom: 10px;
        display: flex;
        flex-direction: row;
        justify-content: right;
        .rate{
        }
    }
}
</style>