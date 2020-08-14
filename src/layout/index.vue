<template>
    <div class="layout">
        <navHeader/>
        <appMain/>
    </div>
</template>

<script>
    import appMain from './components/AppMain'
    import navHeader from './components/NavHeader'
    export default {
        name: "layout",
        components: {
            appMain,
            navHeader
        }
    }
</script>

<style scoped>

</style>