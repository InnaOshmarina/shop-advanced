<template>
    <div class="product-catalog">
        <b-row>
            <b-col lg="3">
                <div class="caption-category">Выберите нужную Вам категорию товаров:</div>
                <b-list-group>
                    <b-list-group-item :to="{ name: 'product-catalog', params: { key: 'all' } }">
                           Все товары
                    </b-list-group-item>
                </b-list-group>

                <b-list-group v-for="category in categories" :key="category['.key']">

                    <b-list-group-item :to="{ name: 'product-catalog', params: { key: category['.key'] } }">
                            {{ category.name }}
                    </b-list-group-item>

                </b-list-group>

            </b-col>
            <b-col lg="9">
                <product-listing :products="productsByCategory"></product-listing>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {categoryRef, productRef} from '../../../../api/firebase';
    import ProductListing from '../Product/ProductListing.vue';

    @Component({
        name: 'product-catalog',
        firebase: {
            categories: categoryRef,
            products: productRef
        },
        components: {
            ProductListing
        }
    })
    export default class ProductCatalog extends Vue {
        constructor() {
            super();
        }

        get productsByCategory() {
            const ourId = this.$route.params.key;
            if (ourId == 'all') {
                return this.products;
            }
            const ourProducts = this.products.filter((Object) => Object.category == ourId);

            return ourProducts;
        }
    }
</script>

<style lang="scss" scoped>
   .col-lg-3 {
        padding: 1.07rem;
        border-radius: 0.625rem;
        border: 0.1rem solid rgb(203, 221, 212);
        box-shadow: 2px 2px 6px 1px rgb(228, 236, 248);
    }

    div.caption-category {
        font-size: 1rem;
        margin-bottom: 1rem;
        font-weight: 500;
        line-height: 1.25rem;
    }

    .list-group a:hover {
        color: #000;
        background-color: rgb(228, 236, 248);
    }

    .list-group a.active {
        color: #000;
        background-color: rgb(203, 221, 212);
        border-bottom-color: rgb(203, 221, 212);
    }
    a.list-group-item {
        border-width: 0 0 0.062125rem 0;
    }
    
    

</style>