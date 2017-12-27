<template>
    <li>
        <button type="button" :id="id" class="ntdelbutton" v-if="closable" @click="close">
            <span class="remove-tag-icon" aria-hidden="true"></span>
        </button>&nbsp;<slot></slot>
    </li>
</template>

<script>
export default {
    name: 'wp-tag',
    props: {
        id: String,
        closable: Boolean
    },
    methods: {
        close (e) {
            this.$emit('deleteTag', e);
        }
    },
}
</script>
