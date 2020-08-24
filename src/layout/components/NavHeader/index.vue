<template>
    <div class="navHeader">
        <el-row style="width: 100%">
            <el-col :xl="4" :lg="5" :md="5" :sm="4" :xs="24">
                <div class="blog">
                    <h1>
                        <router-link to="/home" class="link">{{blogName}}</router-link>
                    </h1>
                    <i class="el-icon-s-fold antion" style="font-size: 20px" @click.prevent.stop="nav"></i>
                </div>
            </el-col>
            <el-col :xl="20" :lg="19" :md="19" :sm="20" :xs="0">
                <div class="contentRight">
                    <div class="search">
                        <el-input placeholder="请输入关键字" v-model="searchValue" @keyup.native.enter="search" ref="input">
                            <i slot="prefix" class="el-icon-search"></i>
                        </el-input>
                    </div>
                    <el-menu
                        mode="horizontal"
                        class="navMenu el-menu-vertical-demo"
                        active-text-color="#ffd04b"
                        :default-active="defaultActive"
                        router
                    >
                        <el-menu-item index="/home">首页</el-menu-item>
                        <el-menu-item index="/place">归档</el-menu-item>
                        <el-menu-item index="/classify">分类</el-menu-item>
                        <el-menu-item index="/about">关于</el-menu-item>
                        <!--<el-menu-item index="/message">留言</el-menu-item>-->
                    </el-menu>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "navHeader",
        data () {
            return {
                searchValue: '',
                wid: '',
                defaultActive: '',
                visible: false
            }
        },
        mounted() {
            this.wid = document.body.clientWidth
            window.onresize = (value) => {
                this.wid = value.target.innerWidth
            }
            this.$nextTick(() => {
                // this.$refs.input.focus();
            })
        },
        watch: {
            $route: {
                handler: function ( to ) {
                    this.defaultActive = to.meta.index
                },
                deep: true,
                immediate: true
            }
        },
        computed: {
            blogName(){
                let name = ''
                if (this.wid > 992) {
                    name = 'xiaoxian的博客'
                }else if (this.wid <= 992 && this.wid >= 768) {
                    name = 'xiaoxian'
                }else{
                    name = 'xiaoxian的个人博客'
                }
                return name
            }
        },
        methods: {
            nav() {
                this.$emit('changeVisible')
            },
            search(e) {
                console.log(e.target.value)
            }
        }
    }
</script>

<style lang="scss" scoped>
.navHeader {
    position: fixed;
    box-shadow: 0 2px 8px #f0f1f2;
    z-index: 10;
    background-color: #fff;
    width: 100%;
    .blog{
        line-height: 60px;
        text-align: center;
        font-size: 12px;
        font-weight: 400;
        .link {
            color: #9d9f9f;
            &:active {
                color: #9d9f9f;
            }
        }
        .antion {
            display: none;
        }
    }
    .contentRight{
        zoom: 1;  //IE6版本一下清除浮动
        overflow: hidden;
        .search {
            line-height: 60px;
            position: relative;
            padding-left: 10px;
            float: left;
            &:before{
                content: '';
                display: inline-block;
                position: absolute;
                top: 50%;
                margin-top: -12px;
                left: 0px;
                width: 0px;
                height: 24px;
                border-left: 1px solid #ebedf0;
            }
        }
        .navMenu {
            float: right;
            padding-right: 200px;
            &:after {
                content: '';
                display: inline-block;
                width: 0;
                height: 0;
                overflow: hidden;
                clear: both;
            }
        }
    }
}

@media only screen and (max-width: 992px) {
    .search {
        display: none;
    }
}

@media only screen and (max-width: 768px) {
    .navHeader {
        .blog {
            position: relative;
            color: #272828;
            .antion {
                display: inline-block;
                position: absolute;
                right: 20px;
                font-weight: 400;
                top: 50%;
                transform: translateY(-50%);
                width: 30px;
                height: 30px;
                &:before {
                    line-height: 30px;
                    width: 30px;
                    height: 30px;
                    font-size: 28px;
                    display: inline-block;
                    color: #6c7383;
                }
            }
        }
    }
}
</style>