<template>
    <section class="home">
        <app-header home></app-header>
        <div id="wpbody" role="main">
            <div id="wpbody-content" aria-label="Main content" tabindex="0" style="overflow: hidden;">
                <div class="wrap">
                    <br><br>
                    <wp-button type="primary">Primary button</wp-button>
                    <wp-button type="primary" disabled>Primary button disabled</wp-button>
                    <br><br>
                    <wp-button type="secondary">Secondary button</wp-button>
                    <wp-button type="secondary" disabled>Secondary button disabled</wp-button>
                    <br><br>
                    <wp-button type="primary" hero>Primary hero button</wp-button>
                    <wp-button type="primary" hero disabled>Primary hero button disabled</wp-button>
                    <br><br>
                    <wp-button type="secondary" hero>Secondary hero button</wp-button>
                    <wp-button type="secondary" hero disabled>Secondary hero button disabled</wp-button>
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
