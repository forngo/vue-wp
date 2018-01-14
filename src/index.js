import { WPAccordions, WPAccordionItem } from './components/wp-accordions'
import { WPMiniTabs, WPMiniTabItem }  from './components/wp-mini-tabs'
import { WPPopdown, WPPopdownMenu, WPPopdownItem } from './components/wp-popdown'
import { WPTable, WPTableColumn } from './components/wp-table'
import { WPTabs, WPTabItem } from './components/wp-tabs'
import { WPTaglist, WPTag } from './components/wp-taglist'
import WPButton from './components/button'
import WPMetabox from './components/wp-metabox'
import WPModalProgrammatic, { WPModal } from './components/wp-modal'
import WPNotice from './components/wp-notice'
import WPPagination from './components/wp-pagination'
import WPPluginGrid from './components/wp-plugin-grid'
import WPSpinner from './components/wp-spinner'
import WPThemeBox from './components/wp-theme-box'
import WPToast from './components/wp-toast'
import WPTooltip from './components/wp-tooltip'
// INJECT: Import the UI component from the module index

import Shepherd from 'tether-shepherd'
import config, { setOptions } from './utils/config'

const components = {
    WPAccordionItem,
    WPAccordions,
    WPButton,
    WPMetabox,
    WPMiniTabItem,
    WPMiniTabs,
    WPModal,
    WPNotice,
    WPPagination,
    WPPluginGrid,
    WPPopdown,
    WPPopdownItem,
    WPPopdownMenu,
    WPSpinner,
    WPTabItem,
    WPTable,
    WPTableColumn,
    WPTabs,
    WPTag,
    WPTaglist,
    WPThemeBox,
    WPTooltip,
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
    Vue.prototype.$pointers = Shepherd
}

export default components

export {
    WPToast,
    WPModalProgrammatic
}
