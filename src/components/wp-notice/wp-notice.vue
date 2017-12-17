<template>
<div :class="classes" v-if="!closed">
    <p><slot></slot></p>
    <button type="button" class="notice-dismiss" v-if="dismissible" @click="close">
        <span class="screen-reader-text">Dismiss this notice.</span>
    </button>
</div>
</template>

<script>
import { oneOf } from '../../utils/assist';

export default {
    name: 'wp-notice',
    props: {
        type: {
            validator (value) {
                return oneOf(value, ['success', 'error', 'warning', 'info']);
            }
        },
        dismissible: Boolean
    },
    computed: {
        classes () {
            return [
                'vue-wp-notice',
                'notice-' + this.type,
                this.dismissible ? 'is-dismissible' : ''
            ];
        }
    },
    data () {
        return {
            closed: false,
        };
    },
    methods: {
        close (e) {
            this.closed = true;
            this.$emit('on-close', e);
        }
    },
}
</script>
