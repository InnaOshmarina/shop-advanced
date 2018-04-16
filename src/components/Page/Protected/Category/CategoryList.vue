<template>
    <div>
        I'm category LIst
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component({
        name: 'category-list',

    })
    export default class CategoryList extends Vue {
        constructor() {
            super();
        }
    }
</script>

<style lang="scss" scoped>

</style>