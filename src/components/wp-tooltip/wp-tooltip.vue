<template>
    <span :data-label="label" :class="classes" >
        <slot/>
    </span>
</template>

<script>
import { oneOf } from '../../utils/assist';

export default {
    name: 'wp-tooltip',
    props: {
        active: {
            type: Boolean,
            default: true
        },
        type: {
            type: String,
            default: 'primary'
        },
        label: String,
        position: {
            default: 'top',
            validator (value) {
                return oneOf(value, ['top', 'bottom', 'left', 'right']);
            }
        },
        always: Boolean,
        square: Boolean,
        multilined: Boolean,
        size: {
            type: String,
            default: 'medium',
            validator (value) {
                return oneOf(value, ['small', 'medium', 'large']);
            }
        }
    },
    computed: {
        classes () {
            return [
                'wp-tooltip',
                'is-' + this.type,
                'is-' + this.position,
                'is-' + this.size,
                this.active ? 'tooltip' : '',
                this.square ? 'is-square' : '',
                this.always ? 'is-always' : '',
                this.multilined ? 'is-multiline' : '',
            ];
        }
    },
}
</script>
