<template>
    <li 
        :class="[ 'control-section', 'accordion-section' , { ' open': this.$parent.activeAccordion === normalizedId }]" 
        :id="normalizedId" 
        @click="handleToggle( normalizedId )"
    >
		<h3 class="accordion-section-title hndle">
			{{label}}
		</h3>
		<div class="accordion-section-content ">
			<div class="inside">
                <slot></slot>
			</div>
		</div>
    </li>
</template>

<script>

export default {
    name: 'wp-accordion-item',
    props: {
        label: String,
        disabled: Boolean
    },
    computed: {
        normalizedId: function () {
            return this.label.trim().replace(/\s+/g, '-').toLowerCase()
        }
    },
    methods: {
        handleToggle( accordionId ) {
            this.selected = accordionId;
            this.$parent.activeAccordion = accordionId;
            this.$emit('accordionToggle', accordionId);
        }
    },
}
</script>
