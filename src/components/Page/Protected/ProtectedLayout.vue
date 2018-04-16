<template>
    <div class="protected-layout">
        <router-view/>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    @Component({
        name: 'protected-layout',
        components: {
        }
    })
    export default class ProtectedLayout extends Vue {
        constructor() {
            super();
        }
    }
</script>

<style lang="scss" scoped>
</style>