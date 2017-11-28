<template>
    <div id="wpadminbar" class="">
        <div class="quicklinks" id="wp-toolbar" role="navigation" aria-label="Toolbar" tabindex="0">
            <ul id="wp-admin-bar-root-default" class="ab-top-menu">
                <router-link v-for="route in this.$router.options.routes" tag="li" :to="route.path" :key="route.path">
                    <a class="ab-item" href="#" ><span class="ab-label">{{ route.name }}</span></a>
                </router-link>
            </ul>
        </div>
    </div>
</template>
