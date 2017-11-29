<template>
<a href="#" class="button button-primary" :disabled="disabled" @click="handleClick">
    <slot></slot>
</a>
</template>

<script>
import { oneOf } from '../../utils/assist';

export default {
    name: 'wp-button',
    props: {
        loading: Boolean,
        disabled: Boolean,
        msg: String
    },
    methods: {
        handleClick(event) {
            this.$emit('click', event);
        }
    },
}
</script>
