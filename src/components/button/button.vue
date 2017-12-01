<template>
<a :href="msg" :class="classes" :disabled="disabled" @click="handleClick">
    <slot></slot>
</a>
</template>

<script>
import { oneOf } from '../../utils/assist';

export default {
    name: 'wp-button',
    props: {
        type: {
            validator (value) {
                return oneOf(value, ['primary', 'secondary']);
            }
        },
        hero: Boolean,
        loading: Boolean,
        disabled: Boolean,
        msg: String
    },
    computed: {
        classes () {
            return [
                'button',
                'button-' + this.type,
                this.hero ? 'button-hero' : ''
            ];
        }
    },
    methods: {
        handleClick(event) {
            this.$emit('click', event);
        }
    },
}
</script>
