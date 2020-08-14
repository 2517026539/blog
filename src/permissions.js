import router from './router'

router.beforeEach((to, from, next) => {
    const title = to.meta.title
    document.title = title
    next()
})