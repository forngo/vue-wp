import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = (r) => require(['../pages/Home'], r)
const Notices = (r) => require(['../pages/notices'], r)

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
        {
            path: '/notices',
            name: 'Notices',
            component: Notices
        }
    ]
})
