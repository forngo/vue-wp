<template>
  <li
    class="wp-popdown-menu__item"
    :class="{
      'wp-popdown-menu__item--disabled': disabled,
      'wp-popdown-menu__item--divided': divided
    }"
    @click.stop="handleClick">
    <slot></slot>
  </li>
</template>

<script>
  import Emitter from '../../mixins/emitter'

  export default {
    name: 'wp-popdown-item',
    mixins: [Emitter],
    props: {
      name: {
        type: [String, Number]
      },
      disabled: {
        type: Boolean,
        default: false
      },
      divided: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handleClick (evt) {
        if (this.disabled) return
        this.dispatch('wp-popdown', 'menu-item-click', this.name)
      }
    }
  }
</script>
