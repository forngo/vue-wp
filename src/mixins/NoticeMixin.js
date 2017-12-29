import config from '../utils/config'
import { removeElement } from '../utils/assist'
import { oneOf } from '../utils/assist'

export default {
    props: {
        type: {
            type: String,
            default: 'success',
            validator(value) {
                return oneOf(value, [
                    'success',
                    'info',
                    'warning',
                    'error'
                ])
            }
        },
        message: String,
        duration: Number,
        queue: {
            type: Boolean,
            default: undefined
        },
        position: {
            type: String,
            default: 'is-top',
            validator(value) {
                return oneOf(value, [
                    'is-top-right',
                    'is-top',
                    'is-top-left',
                    'is-bottom-right',
                    'is-bottom',
                    'is-bottom-left'
                ])
            }
        },
        container: String
    },
    data() {
        return {
            isActive: false,
            parentTop: null,
            parentBottom: null,
            newContainer: this.container || config.defaultContainerElement
        }
    },
    computed: {
        correctParent() {
            switch (this.position) {
                case 'is-top-right':
                case 'is-top':
                case 'is-top-left':
                    return this.parentTop

                case 'is-bottom-right':
                case 'is-bottom':
                case 'is-bottom-left':
                    return this.parentBottom
            }
        },
        transition() {
            switch (this.position) {
                case 'is-top-right':
                case 'is-top':
                case 'is-top-left':
                    return {
                        enter: 'fadeInDown',
                        leave: 'fadeOut'
                    }
                case 'is-bottom-right':
                case 'is-bottom':
                case 'is-bottom-left':
                    return {
                        enter: 'fadeInUp',
                        leave: 'fadeOut'
                    }
            }
        }
    },
    methods: {
        shouldQueue() {
            const queue = this.queue !== undefined
                ? this.queue
                : config.defaultNoticeQueue

            if (!queue) return false

            return (
                this.parentTop.childElementCount > 0 ||
                this.parentBottom.childElementCount > 0
            )
        },

        close() {
            clearTimeout(this.timer)
            this.isActive = false

            // Timeout for the animation complete before destroying
            setTimeout(() => {
                this.$destroy()
                removeElement(this.$el)
            }, 150)
        },

        showNotice() {
            if (this.shouldQueue()) {
                // Call recursively if should queue
                setTimeout(() => this.showNotice(), 250)
                return
            }
            this.correctParent.insertAdjacentElement('afterbegin', this.$el)
            this.isActive = true

            this.timer = setTimeout(() => this.close(), this.newDuration)
        },

        setupContainer() {
            this.parentTop = document.querySelector('.wp-toasts.is-top')
            this.parentBottom = document.querySelector('.wp-toasts.is-bottom')

            if (this.parentTop && this.parentBottom) return

            if (!this.parentTop) {
                this.parentTop = document.createElement('div')
                this.parentTop.className = 'wp-toasts is-top'
            }

            if (!this.parentBottom) {
                this.parentBottom = document.createElement('div')
                this.parentBottom.className = 'wp-toasts is-bottom'
            }

            const container = document.querySelector(this.newContainer) || document.body

            container.appendChild(this.parentTop)
            container.appendChild(this.parentBottom)

            if (this.newContainer) {
                this.parentTop.classList.add('has-custom-container')
                this.parentBottom.classList.add('has-custom-container')
            }
        }
    },
    beforeMount() {
        this.setupContainer()
    },
    mounted() {
        this.showNotice()
    }
}