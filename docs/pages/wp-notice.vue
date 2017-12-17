<template>
    <section>
        <app-header></app-header>

        <wp-notice type="success">Success notice</wp-notice>
        <wp-notice type="error">Error notice</wp-notice>
        <wp-notice type="warning">Warning notice</wp-notice>
        <wp-notice type="info">Info notice</wp-notice>

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
