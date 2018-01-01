import WPButton from './components/button'
import WPNotice from './components/wp-notice'
import { WPTabs, WPTabItem } from './components/wp-tabs'
import WPSpinner from './components/wp-spinner'
import WPPluginGrid from './components/wp-plugin-grid'
import WPTooltip from './components/wp-tooltip'
import { WPPopdown, WPPopdownMenu, WPPopdownItem } from './components/wp-popdown'
import WPMetabox from './components/wp-metabox'
import { WPAccordions, WPAccordionItem } from './components/wp-accordions'
import { WPTaglist, WPTag } from './components/wp-taglist'
import { WPMiniTabs, WPMiniTabItem }  from './components/wp-mini-tabs'
import WPToast from './components/wp-toast'
import WPModalProgrammatic, { WPModal } from './components/wp-modal'
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
    WPAccordionItem,
    WPAccordions,
    WPTag,
    WPTaglist,
    WPMiniTabItem,
    WPMiniTabs,
    WPModal,
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

    Vue.prototype.$toast = WPToast
    Vue.prototype.$modal = WPModalProgrammatic
}

export default components

export {
    WPToast,
    WPModalProgrammatic
}
