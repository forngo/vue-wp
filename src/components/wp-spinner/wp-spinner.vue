<template>
    <div :class="classes"></div>
</template>

<script>
export default {
    name: 'wp-spinner',
    props: {
        active: Boolean,
    },
    computed: {
        classes () {
            return [
                'spinner',
                this.active ? 'is-active' : ''
            ];
        }
    },
}
</script>
