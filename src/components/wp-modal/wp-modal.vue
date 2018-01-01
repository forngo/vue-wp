<template>
    <transition :name="animation">
        <div v-if="isActive" class="wp-modal is-active">
            <div class="wp-modal-background" @click="cancel('outside')"/>
            <div
                :class="classes"
                :style="{ maxWidth: newWidth }"
            >
                <div class="wp-modal-head">
                    <div class="wp-modal-head__title">{{title}}</div>
                    <button v-if="showX" class="wp-modal-close is-large" @click="cancel('x')">
                        <span class="dashicons dashicons-no"></span>
                    </button>
                </div>

                <div class="wp-modal-content">
                    <component
                        v-if="component"
                        v-bind="props"
                        v-on="events"
                        :is="component"
                        @close="close"/>
                    <div
                        v-else-if="content"
                        v-html="content"/>
                    <slot v-else/>
                </div>

                <div class="wp-modal-footer">
                    <slot name="modal-footer"></slot>
                </div>

            </div>
        </div>
    </transition>
</template>

<script>
import { oneOf } from '../../utils/assist';
import { removeElement } from '../../utils/assist'
import config from '../../utils/config'

export default {
    name: 'wp-modal',
    props: {
        active: Boolean,
        component: [Object, Function],
        content: String,
        programmatic: Boolean,
        props: Object,
        events: Object,
        title: String,
        type: {
            type: String,
            default: 'mini',
            validator (value) {
                return oneOf(value, ['mini', 'large']);
            }
        },
        width: {
            type: [String, Number],
            default: 960
        },
        animation: {
            type: String,
            default: 'zoom-out'
        },
        canCancel: {
            type: [Array, Boolean],
            default: () => ['escape', 'x', 'outside', 'button']
        },
        onCancel: {
            type: Function,
            default: () => {}
        },
        scroll: {
            type: String,
            default: () => {
                return config.defaultModalScroll
                    ? config.defaultModalScroll
                    : 'clip'
            },
            validator: (value) => {
                return [
                    'clip',
                    'keep'
                ].indexOf(value) >= 0
            }
        }
    },
    data() {
        return {
            isActive: this.active || false,
            savedScrollTop: null,
            newWidth: typeof this.width === 'number'
                ? this.width + 'px'
                : this.width
        }
    },
    computed: {
        classes () {
            return [
                'wp-modal-container',
                'wp-modal-' + this.type
            ];
        },
        cancelOptions() {
            return typeof this.canCancel === 'boolean'
                ? this.canCancel
                    ? ['escape', 'x', 'outside', 'button']
                    : []
                : this.canCancel
        },
        showX() {
            return this.cancelOptions.indexOf('x') >= 0
        }
    },
    watch: {
        active(value) {
            this.isActive = value
        },
        isActive() {
            this.handleScroll()
        }
    },
    methods: {
        handleScroll() {
            if (typeof window === 'undefined') return

            if (this.scroll === 'clip') {
                document.documentElement.classList.toggle('is-clipped', this.isActive)
                return
            }

            this.savedScrollTop = !this.savedScrollTop
                ? document.documentElement.scrollTop
                : this.savedScrollTop

            document.body.classList.toggle('is-noscroll', this.isActive)

            if (this.isActive) {
                document.body.style.top = `-${this.savedScrollTop}px`
                return
            }

            document.documentElement.scrollTop = this.savedScrollTop
            document.body.style.top = null
            this.savedScrollTop = null
        },

        /**
         * Close the Modal if canCancel.
         */
        cancel(method) {
            if (this.cancelOptions.indexOf(method) < 0) return

            this.close()
        },
        /**
         * Call the onCancel prop (function).
         * Emit events, and destroy modal if it's programmatic.
         */
        close() {
            this.onCancel.apply(null, arguments)
            this.$emit('close')
            this.$emit('update:active', false)

            // Timeout for the animation complete before destroying
            if (this.programmatic) {
                this.isActive = false
                setTimeout(() => {
                    this.$destroy()
                    removeElement(this.$el)
                }, 150)
            }
        },

        /**
         * Keypress event that is bound to the document.
         */
        keyPress(event) {
            // Esc key
            if (event.keyCode === 27) this.cancel('escape')
        }
    },
    created() {
        if (typeof window !== 'undefined') {
            document.addEventListener('keyup', this.keyPress)
        }
    },
    beforeMount() {
        // Insert the Modal component in body tag
        // only if it's programmatic
        this.programmatic && document.body.appendChild(this.$el)
    },
    mounted() {
        if (this.programmatic) this.isActive = true
        else if (this.isActive) this.handleScroll()
    },
    beforeDestroy() {
        if (typeof window !== 'undefined') {
            document.removeEventListener('keyup', this.keyPress)
        }
    }
}
</script>
