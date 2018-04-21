<template>
    <div>
        <product-listing :products="separateCategory"></product-listing>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import ProductListing from './ProductListing.vue';
    import {categoryRef} from '../../../../api/firebase';
    import {productRef} from '../../../../api/firebase';

    @Component({
        name: 'products',
        firebase: {
            categories: categoryRef,
            products: productRef
        },
        components: {
            ProductListing
        }
    })
    export default class Products extends Vue {
        constructor() {
            super();
            this.productRef = [];
            this.categoryRef = categoryRef;
        }

        get separateCategory() {

        }

    }
</script>

<style lang="scss" scoped>

</style>


