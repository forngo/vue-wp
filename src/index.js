import WPButton from './components/button'
import WPNotice from './components/wp-notice'
// INJECT: Import the UI component from the module index

import config, { setOptions } from './utils/config'

const components = {
    WPButton,
    WPNotice,
    // INJECT: Add new components to declarations
}

components.install = (Vue, options = {}) => {
    // Options
    setOptions(Object.assign(config, options))

    for (const componentName in components) {
        const component = components[componentName]

        if (component && componentName !== 'install') {
            Vue.component(component.name, component)
        }
    }
}

export default components
