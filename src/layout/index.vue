<template>
    <div class="layout" @click="close">
        <navHeader @changeVisible="changeVisible"/>
        <div class="nav_body" v-show="visible">
            <ul>
                <li>
                    <router-link to="/home"><i class="iconfont">&#xe602;</i>首页</router-link>
                </li>
                <li>
                    <router-link to="/place"><i class="iconfont">&#xe632;</i>归档</router-link>
                </li>
                <li>
                    <router-link to="/classify"><i class="iconfont">&#xe603;</i>分类</router-link>
                </li>
                <li>
                    <router-link to="/about"><i class="iconfont">&#xe604;</i>关于</router-link>
                </li>
                <li>
                    <router-link to="/message"><i class="iconfont">&#xe640;</i>留言</router-link>
                </li>
                <li>
                    <el-input class="search" prefix-icon="el-icon-search" @click.native.prevent.stop="clickInput" @keyup.native.enter="inputValue" v-model="title" placeholder="输入关键字搜索" />
                </li>
            </ul>
        </div>
        <div class="content">
            <div class="asideContent">
                <asider/>
            </div>
            <div class="appMainContent">
                <appMain/>
            </div>
        </div>
    </div>
</template>

<script>
    import appMain from './components/AppMain'
    import asider from './components/Aside'
    import navHeader from './components/NavHeader'
    export default {
        name: "layout",
        components: {
            appMain,
            navHeader,
            asider
        },
        data() {
            return {
                title: '',
                visible: false
            }
        },
        methods: {
            changeVisible() {
                this.visible = !this.visible
            },
            close(){
                this.visible = false
            },
            inputValue(e) {
                this.visible = false
                console.log(e.target.value)
            },
            clickInput() {
                console.log(1)
            }
        }
    }
</script>

<style lang="scss" scoped>
.layout {
    overflow: hidden;
    .content {
        margin-top: 60px;
        padding-top: 40px;
        height: 100%;
        display: flex;
        box-sizing: border-box;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
    }
}

.nav_body{
    position: fixed;
    top: 61px;
    z-index: 999;
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 2px 2px 0 rgba(0,0,0,.12) ;
    li {
        a{
            color: #9d9f9f;
            display: block;
            padding: 5px 5px;
            i {
                display: inline-block;
                padding-right: 5px;
            }
            /* &:visited {
                background-color: #67f3ff;
            }*/
            &:hover {
                background-color: #67f3ff;
            }
        }
        .search {
            overflow: hidden;
            input{
            }
        }
    }
}

.asideContent {
    flex: 5;
    height: 100%;
    overflow: scroll;
}
.appMainContent {
    flex: 19;
    height: 100%;
    overflow: scroll;
}

@media screen and(max-width: 992px) {
    .asideContent {
        display: none;
    }
    .appMainContent {
        flex: 1;
        height: 100%;
        overflow: scroll;
    }
}

</style>