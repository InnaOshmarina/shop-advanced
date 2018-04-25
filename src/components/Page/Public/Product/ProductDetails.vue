<template>
    <div>
        <h5>О товаре:</h5>
        <card-product-details :product="detailsOfProduct"></card-product-details>
        <h5>О доставке:</h5>
        <p class="mb-0">Мы доставим вашу покупку в любую точку Беларуси.</p>
        <p>Цена доставки не зависит от количества товаров в корзине. Подъём на этаж — бесплатно.</p>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import CardProductDetails from '../../../Shared/Public/CardProductDetails.vue';
    import {productRef} from "../../../../api/firebase";

    @Component ({
        name: 'product-details',
        firebase: {
            products: productRef
        },
        components: {
            CardProductDetails
        }
    })
    export default class ProductDetails extends Vue {
        constructor() {
            super();
        }

        get detailsOfProduct() {
            let ourProduct;

            // делаем проверку, что массив с продуктами не пустой
            if (this.products.length > 0) {
                const ourKey = this.$route.params.product_key;
                let getDetails = item => item['.key'] === ourKey;
                ourProduct = this.products.find(getDetails);
            }
            return ourProduct;
        }
    }
</script>

<style lang="scss" scoped>
    p {
        font-size: 1rem;
    }

</style>