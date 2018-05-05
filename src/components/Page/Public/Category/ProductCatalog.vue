<template>
    <div class="product-catalog">
        <b-row>
            <b-col lg="3">
                <div class="caption-category">Выберите нужную Вам категорию товаров:</div>
                <b-list-group>
                    <b-list-group-item>
                        <router-link :to="{ name: 'product-catalog', params: { key: 'all' } }">
                           Все товары
                        </router-link>
                    </b-list-group-item>
                </b-list-group>

                <b-list-group v-for="category in categories" :key="category['.key']">

                    <b-list-group-item>
                        <router-link :to="{ name: 'product-catalog', params: { key: category['.key'] } }">
                            {{ category.name }}
                        </router-link>
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
    div .col-lg-3 {
        background-color: lightgray;
    }
    div.caption-category {
        font-size: 0.8rem;
        margin-bottom: 1rem;
        font-weight: 700;
    }

</style>