<template>
    <li v-if="!closed">
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
    data () {
        return {
            closed: false,
        };
    },
    methods: {
        close (e) {
            this.closed = true;
            this.$emit('deleteTag', e);
        }
    },
}
</script>
