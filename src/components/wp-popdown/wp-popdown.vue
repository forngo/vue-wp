<template>
  <div class="wp-popdown" v-clickoutside="handleClose" ref="trigger">
    <div class="wp-popdown__trigger"><slot></slot></div>

    <transition name="fade" @after-leave="doDestory">
      <div class="wp-popdown__popover" ref="popover" v-show="show">
        <slot name="menu"></slot>
      </div>
    </transition>
  </div>
</template>

<script>

    import { oneOf } from '../../utils/assist';
    import Clickoutside from '../../directives/clickoutside'
    import PopoverMixin from '../../mixins/popover'

    export default {
        name: 'wp-popdown',
        directives: { Clickoutside },
        mixins: [PopoverMixin],
        props: {
            trigger: {
                type: String,
                default: 'hover',
                validator (value) {
                    return oneOf(value, ['hover', 'click']);
                }
            },
            placement: {
                type: String,
                default: 'bottom',
                validator (value) {
                    return oneOf(value, ['top', 'top-left', 'top-right', 'left', 'left-top', 'left-bottom', 'right', 'right-top', 'right-bottom', 'bottom', 'bottom-left', 'bottom-right']);
                }
            }
        },
        mounted () {
            this.$on('menu-item-click', this.handleMenuItemClick)
        },
        methods: {
            handleClose () {
                this.show = false
            },
            handleMenuItemClick (name) {
                this.show = false
                this.$emit('on-dropdown-command', name)
            }
        }
  }
</script>
