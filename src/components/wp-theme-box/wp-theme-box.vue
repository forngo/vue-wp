<template>
<div :class="classes" @click="handleClick">
	<div class="theme-screenshot" v-if="!addnew">
		<img :src="image" :alt="title">
	</div>

	<div class="theme-id-container" v-if="!addnew">
		<h2 class="theme-name">{{title}}</h2>
		<div class="theme-actions">
		    <slot/>
		</div>
	</div>

    <a href="#" v-if="addnew">
        <div class="theme-screenshot">
            <span></span>
        </div>
        <h2 class="theme-name">{{addnewtitle}}</h2>
    </a>

</div>
</template>

<script>
export default {
    name: 'wp-theme-box',
    props: {
        image:  String,
        title:  String,
        addnewtitle: String,
        addnew: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        classes () {
            return [
                'theme',
                this.addnew ? 'add-new-theme' : ''
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
