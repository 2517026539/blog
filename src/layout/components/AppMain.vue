<template>
    <div class="appMain">
        <keep-alive>
            <router-view/>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: "AppMain"
    }
</script>

<style lang="scss" scoped>
.appMain{
    box-sizing: border-box;
    width: calc(100% - 292px);
    padding-bottom: 20px;
}

@media screen and(max-width: 1200px) {
    .appMain {
        width: calc(100%)
    }
}

</style>