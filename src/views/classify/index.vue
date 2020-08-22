<template>
    <div class="classify">
        <h1 class="name">文章分类</h1>
        <p>目前文章类型共有 {{num}} 种</p>
        <div class="tag-list">
            <el-badge v-for="item in tagList" :value="item.num" :key="item.index" class="badge">
                <el-tag :style="{ backgroundColor: item.color}" size="medium" class="tag">
                    {{item.name}}
                </el-tag>
            </el-badge>
        </div>
    </div>
</template>

<script>
    export default {
        name: "classify",
        data () {
            return {
                tagList: [
                    {
                        name: 'Node',
                        color: '#5affe9',
                        num: 12
                    }, {
                        name: 'vue',
                        color: '#60ff4b',
                        num: 4
                    }, {
                        name: 'react',
                        color: '#cc8a30',
                        num: 5
                    }, {
                        name: 'HTTP',
                        color: '#8cffa4',
                        num: 6
                    }, {
                        name: 'HTTPS',
                        color: '#2840ff',
                        num: 4
                    }, {
                        name: 'webpack',
                        color: '#cc4e58',
                        num: 2
                    }
                ],
                num: 9
            }
        }
    }
</script>

<style lang="scss" scoped>
    .classify{
        padding-left: 40px;
        text-align: center;
        .name {
            font-size: 25px;
            font-weight: 300;
            margin-bottom: 25px;
        }
        p{
            font-size: 14px;
            color: #9d9f9f;
            margin-bottom: 30px;
        }
        .tag-list {
            margin: 0 20px;
            .badge{
                margin: 15px;
                 .tag {
                    color: #272828;
                 }
            }
        }
    }
</style>