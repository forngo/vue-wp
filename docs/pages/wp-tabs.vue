<template>
    <section>
        <app-header></app-header>
        <wp-tabs>
            <wp-tab-item label="Tab Test 1">
                Lorem ipsum dolor sit amet.
            </wp-tab-item>

            <wp-tab-item label="Tab Test 2">
                Lorem <br>
                ipsum <br>
                dolor <br>
                sit <br>
                amet.
            </wp-tab-item>
        </wp-tabs>
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
