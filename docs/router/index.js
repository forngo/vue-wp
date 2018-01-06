import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = (r) => require(['../pages/Home'], r)
const Notice = (r) => require(['../pages/wp-notice'], r)
const Tabs = (r) => require(['../pages/wp-tabs'], r)
const Spinner = (r) => require(['../pages/wp-spinner'], r)
const PluginGrid = (r) => require(['../pages/wp-plugin-grid'], r)
const Tooltip = (r) => require(['../pages/wp-tooltip'], r)
const Popdown = (r) => require(['../pages/wp-popdown'], r)
const Metabox = (r) => require(['../pages/wp-metabox'], r)
const Accordions = (r) => require(['../pages/wp-accordions'], r)
const Taglist = (r) => require(['../pages/wp-taglist'], r)
const MiniTabs = (r) => require(['../pages/wp-mini-tabs'], r)
const Toast = (r) => require(['../pages/wp-toast'], r)
const Modal = (r) => require(['../pages/wp-modal'], r)
const ThemeBox = (r) => require(['../pages/wp-theme-box'], r)
const Pagination = (r) => require(['../pages/wp-pagination'], r)
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
        },
        {
            path: '/wp-popdown',
            name: 'Popdown',
            component: Popdown
        },
        {
            path: '/wp-metabox',
            name: 'Metabox',
            component: Metabox
        },
        {
            path: '/wp-accordions',
            name: 'Accordions',
            component: Accordions
        },
        {
            path: '/wp-taglist',
            name: 'Taglist',
            component: Taglist
        },
        {
            path: '/wp-mini-tabs',
            name: 'Mini Tabs',
            component: MiniTabs
        },
        {
            path: '/wp-toast',
            name: 'Toast',
            component: Toast
        },
        {
            path: '/wp-modal',
            name: 'Modal',
            component: Modal
        },
        {
            path: '/wp-theme-box',
            name: 'Theme Box',
            component: ThemeBox
        },
        {
            path: '/wp-pagination',
            name: 'Pagination',
            component: Pagination
        },
        // INJECT: Add new component demo page router.
    ]
})
