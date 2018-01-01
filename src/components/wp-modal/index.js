import Vue from 'vue'
import WPModal from './wp-modal'

export { WPModal }

export default {
    open(params) {
        let content
        let parent
        if (typeof params === 'string') content = params

        const defaultParam = {
            programmatic: true,
            content
        }
        if (params.parent) {
            parent = params.parent
            delete params.parent
        }
        const propsData = Object.assign(defaultParam, params)

        const WPModalComponent = Vue.extend(WPModal)
        return new WPModalComponent({
            parent,
            el: document.createElement('div'),
            propsData
        })
    }
}

