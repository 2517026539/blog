<template>
    <div class="placeToFile">
        <el-timeline class="timeline">
            <el-timeline-item v-for="item in timeList" :timestamp="item.publish" :key="item.index" placement="top">
                <el-card>
                    <h4>{{item.name}}</h4>
                    <p>{{item.author}} 提交于 {{item.time}}</p>
                </el-card>

            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<script>
    export default {
        name: "placeToFile",
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