<template>
    <div class="placeToFile">
        <el-timeline class="timeline">
            <el-timeline-item v-for="item in timeList" :timestamp="item.time" :key="item.index" style="cursor: pointer;" @click.native="articleRoute(item.id)" placement="top">
                <el-card>
                    <h4>{{item.title}}</h4>
                    <p>{{item.name}} 提交于 {{item.pubDate | filterTime}}</p>
                </el-card>
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<script>
    import { getArticlePlace } from "../../api/article";
    import moment from 'moment'
    export default {
        name: "placeToFile",
        filters: {
          filterTime: (value) => {
              return `${moment(value).format('YYYY/MM/DD hh:mm')}`
          }
        },
        data () {
            return {
                timeList: [
                    {
                        publish: '2018/4/2',
                        name: '这是xiaoxian的首篇文章',
                        author: 'xiaoxian',
                        time: '2018/4/2 20:46'
                    },{
                        publish: '2018/4/2',
                        name: '这是xiaoxian的首篇文章',
                        author: 'xiaoxian',
                        time: '2018/4/2 20:46'
                    },{
                        publish: '2018/4/2',
                        name: '这是xiaoxian的首篇文章',
                        author: 'xiaoxian',
                        time: '2018/4/2 20:46'
                    },{
                        publish: '2018/4/2',
                        name: '这是xiaoxian的首篇文章',
                        author: 'xiaoxian',
                        time: '2018/4/2 20:46'
                    }
                ]
            }
        },
        beforeRouteUpdate(to) {
            if (to.params.sort) {
                getArticlePlace({sort:to.query.sort}).then(res => {
                    const {name, articleList } = res.data
                    this.timeList = articleList.reduce((pre, val) => {
                        const {id, title, pubDate} = val
                        const time = moment(pubDate).format('YYYY/MM/DD')
                        const obj = {id, title, pubDate, name, time}
                        pre.push(obj)
                        return pre
                    },[])
                }).catch(err => {
                    console.log(err)
                })
            }
        },
        beforeRouteEnter(to, from, next) {
            if (to.query.sort) {
                next(vm => {
                    getArticlePlace({sort: vm.$route.query.sort}).then(res => {
                        const {name, articleList } = res.data
                        vm.timeList = articleList.reduce((pre, val) => {
                            const {id, title, pubDate} = val
                            const time = moment(pubDate).format('YYYY/MM/DD')
                            const obj = {id, title, pubDate, name, time}
                            pre.push(obj)
                            return pre
                        },[])
                    }).catch(err => {
                        console.log(err)
                    })
                })
            } else {
                next()
            }
        },
        mounted() {
          this.init()
        },
        methods: {
            init() {
                getArticlePlace().then(res => {
                    const {name, articleList } = res.data
                    this.timeList = articleList.reduce((pre, val) => {
                        const {id, title, pubDate} = val
                        const time = moment(pubDate).format('YYYY/MM/DD')
                        const obj = {id, title, pubDate, name, time}
                        pre.push(obj)
                        return pre
                    },[])
                }).catch(err => {
                    console.log(err)
                })
            },
            articleRoute(id) {
                this.$router.push({ name: 'article',params:{id}})
            }
        }
    }
</script>

<style lang="scss" scoped>
.placeToFile {
    padding: 10px 40px 40px 40px;
    overflow: hidden;
    .timeline {
        margin-right: 40px;
    }
}
</style>