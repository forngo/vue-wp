import WPButton from './components/button'
import WPNotice from './components/wp-notice'
import { WPTabs, WPTabItem } from './components/wp-tabs'
import WPSpinner from './components/wp-spinner'
import WPPluginGrid from './components/wp-plugin-grid'
import WPTooltip from './components/wp-tooltip'
import { WPPopdown, WPPopdownMenu, WPPopdownItem } from './components/wp-popdown'
import WPMetabox from './components/wp-metabox'
// INJECT: Import the UI component from the module index

import config, { setOptions } from './utils/config'

const components = {
    WPButton,
    WPNotice,
    WPTabItem,
    WPTabs,
    WPSpinner,
    WPPluginGrid,
    WPTooltip,
    WPPopdownItem,
    WPPopdownMenu,
    WPPopdown,
    WPMetabox,
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
