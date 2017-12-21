import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = (r) => require(['../pages/Home'], r)
const Notice = (r) => require(['../pages/wp-notice'], r)
const Tabs = (r) => require(['../pages/wp-tabs'], r)
const Spinner = (r) => require(['../pages/wp-spinner'], r)
const PluginGrid = (r) => require(['../pages/wp-plugin-grid'], r)
const Tooltip = (r) => require(['../pages/wp-tooltip'], r)
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
        {
            path: '/wp-notice',
            name: 'Notice',
            component: Notice
        },
        {
            path: '/wp-tabs',
            name: 'Tabs',
            component: Tabs
        },
        {
            path: '/wp-spinner',
            name: 'Spinner',
            component: Spinner
        },
        {
            path: '/wp-plugin-grid',
            name: 'Plugin Grid',
            component: PluginGrid
        },
        {
            path: '/wp-tooltip',
            name: 'Tooltip',
            component: Tooltip
        }
        // INJECT: Add new component demo page router.
    ]
})
