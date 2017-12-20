<template>
    <div class="plugin-card plugin-card-jetpack">
		<div class="plugin-card-top">
			<div class="name column-name">
				<h3>
					<a href="#" class="">
					    Jetpack by WordPress.com						
                        <img src="#" class="plugin-icon" alt="">
					</a>
				</h3>
			</div>
			<div class="action-links">
				<ul class="plugin-action-buttons">
                    <li>
                        <a class="install-now button" href="#">Install Now</a>
                    </li>
                    <li>
                        <a href="#" class="thickbox open-plugin-details-modal">More Details</a>
                    </li>
                </ul>
            </div>
			<div class="desc column-description">
				<slot name="description"></slot>
				<p class="authors"> <cite>By <a href="#">Author</a></cite></p>
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
  props: {}
};
</script>
