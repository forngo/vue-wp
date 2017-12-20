<template>
    <section>
        <app-header></app-header>
        <wp-spinner></wp-spinner>
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
