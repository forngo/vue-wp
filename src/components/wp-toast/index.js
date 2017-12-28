import Vue from 'vue'
import WPToast from './wp-toast'

export default {
    open(params) {
        let message
        if (typeof params === 'string') message = params

        const defaultParam = { message }
        const propsData = Object.assign(defaultParam, params)

        const WPToastComponent = Vue.extend(WPToast)
        return new WPToastComponent({
            el: document.createElement('div'),
            propsData
        })
    }
}
