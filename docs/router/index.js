import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = (r) => require(['../pages/Home'], r)
// INJECT: Add new component demo page declaration.

export default new Router({
    mode: 'history',
    linkActiveClass: 'is-active',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: 'Button',
            component: Home
        },
        // INJECT: Add new component demo page router.
    ]
})
