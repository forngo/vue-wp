<template>
    <section class="home">
        <app-header home></app-header>
        <div id="wpbody" role="main">
            <div id="wpbody-content" aria-label="Main content" tabindex="0" style="overflow: hidden;">
                <div class="wrap">
                    <br><br>
                    <MyTestComponent :msg="'hello world'"></MyTestComponent>
                </div>
            </div>
        </div>
        <app-footer></app-footer>
    </section>
</template>

<script>
    import AppHeader from '../template/Header'
    import AppFooter from '../template/Footer'

    export default {
        name: 'app',
        components: {
            AppHeader,
            AppFooter
        }
    }
</script>
