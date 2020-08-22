<template>
    <div class="layout">
        <navHeader />
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