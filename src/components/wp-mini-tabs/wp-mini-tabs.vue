<template>

    <div class="wp-mini-tabs categorydiv">
        
        <ul class="category-tabs">
			<li 
                v-for="(tabItem, index) in tabItems"
                :key="index"
                :class="[ 'mini-tab', { ' tabs': newValue === index }]"
                @click="tabClick(index)"
            >
                <a href="#">{{ tabItem.label }}</a>
            </li>
		</ul>

        <slot/>

    </div>

</template>

<script>
export default {
    name: 'wp-mini-tabs',
    props: {
        value: [String, Number],
    },
    data() {
        return {
            newValue: this.value || 0,
            tabItems: [],
            contentHeight: 0,
            _isTabs: true // Used internally by MiniTabItem
        }
    },
    watch: {
        /**
         * When v-model is changed set the new active tab.
         */
        value(value) {
            this.changeTab(this.newValue, value)
            this.newValue = value
        },

        /**
         * When tab-items are updated, set active one.
         */
        tabItems() {
            if (this.tabItems.length) {
                this.tabItems[this.newValue].isActive = true
            }
        }
    },
    methods: {
        /**
         * Change the active tab.
         */
        changeTab(oldIndex, newIndex) {
            if (oldIndex === newIndex) return

            this.tabItems[oldIndex].deactivate(oldIndex, newIndex)
            this.tabItems[newIndex].activate(oldIndex, newIndex)
        },

        /**
         * Tab click listener, emit events and set new active tab.
         */
        tabClick(value) {
            this.$emit('input', value)
            this.$emit('change', value)
            this.changeTab(this.newValue, value)
            this.newValue = value
        }
    },
    mounted() {
        if (this.tabItems.length) {
            this.tabItems[this.newValue].isActive = true
        }
    }
}
</script>
