<template>
    <div class="wp-accordions accordion-container">
		<ul class="outer-border">
		    <slot></slot>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'wp-accordions',
	data() {
		return {
			activeAccordion: String,
		}
	},
}
</script>
