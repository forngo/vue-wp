<template>
    <div class="plugin-card">
		<div class="plugin-card-top">
			<div class="name column-name">
				<h3>
					<a :href="url">
					    {{name}}
                        <img :src="img" class="plugin-icon" :alt="name">
					</a>
				</h3>
			</div>
			<div class="action-links">
				<ul class="plugin-action-buttons">
                    <slot name="action-buttons"></slot>
                </ul>
            </div>
			<div class="desc column-description">
				<slot name="description"></slot>
				<p class="authors" v-if="author"><cite>By <a :href="authorUrl">{{author}}</a></cite></p>
			</div>
		</div>
		<div class="plugin-card-bottom">
            <slot name="bottom"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "wp-plugin-grid",
	props: {
    	name:      String,
    	img:       String,
    	url:       String,
    	author:    String,
    	authorUrl: String
	}
};
</script>
