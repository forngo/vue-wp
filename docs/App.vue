<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style lang="scss">
@import "css/wp-admin.css";
@import "css/admin-bar.min.css";

#wpbody-content,
#wpcontent,
#wpfooter {
    margin-left: 0;
}

#wpbody-content {
    float: none;
}

</style>
