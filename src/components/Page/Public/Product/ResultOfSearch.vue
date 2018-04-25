<template>
    <div>
        <h4>Результаты поиска:</h4>
        <div v-if="filteredProduct.length > 0">
            <product-listing :products="filteredProduct"></product-listing>
        </div>
        <div v-else>
            По вашему запросу ничего не найдено.
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {productRef} from "../../../../api/firebase";
    import ProductListing from './ProductListing.vue';

    @Component({
        firebase: {
            products: productRef
        },
        components: {
            ProductListing
        },
        props: {
            propMessage: String
        }
    })
    export default class ResultOfSearch extends Vue {
        constructor() {
            super();
        }

        get filteredProduct() {
            const inputResult = (this.$route.params.q).trim().toLowerCase();
            const ourProducts = this.products.filter((currentProduct) => {
                if(currentProduct.name.toLowerCase().indexOf(inputResult) !== -1){
                    return currentProduct;
                }
            });
            // Возвращает массив с отфильтрованными данными
            return ourProducts;
        }

    }

</script>

<style lang="scss" scoped>
    h4 {
        font-weight: 700;
    }
</style>