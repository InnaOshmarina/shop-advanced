<template>
    <div class="public-layout">
        <router-view/>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    @Component({
    })
    export default class PublicLayout extends Vue {
        constructor() {
            super();
        }
    }
</script>

<style lang="scss" scoped>
</style>