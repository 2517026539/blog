<template>
    <div class="classify">
        <h1 class="name">文章分类</h1>
        <p>目前文章类型共有 {{count}} 种</p>
        <div class="tag-list">
            <el-badge v-for="item in tagList" :value="item.num" :key="item.index" @click.native="getArticleList(item.sort)" class="badge">
                <el-tag :style="{backgroundColor: item.backgroundColor, color: item.color}" size="medium" class="tag">
                    {{item.sort}}
                </el-tag>
            </el-badge>
        </div>
    </div>
</template>

<script>
    import { getSortList } from "../../api/article";

    export default {
        name: "classify",
        data () {
            return {
                tagList: [],
                count: 9
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                getSortList().then(res => {
                    this.tagList = res.data.sortList
                    this.count = res.data.count
                }).catch(err => {
                    console.log(err)
                })
            },
            getArticleList(sort) {
                this.$router.push({name: '归档', query:{ sort: `'${sort}'`}})
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
                cursor: pointer;
                 .tag {
                    color: #272828;
                 }
            }
        }
    }
</style>