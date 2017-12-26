<template>
    <div :class="classes"></div>
</template>

<script>
export default {
    name: 'wp-spinner',
    props: {
        active: Boolean,
    },
    data() {
        return {
            isActive: this.active || false
        }
    },
    watch: {
        active(value) {
            this.isActive = value
        }
    },
    computed: {
        classes () {
            return [
                'spinner',
                this.isActive ? 'is-active' : ''
            ];
        }
    },
}
</script>
