<template>
    <div>
        <h5>О товаре:</h5>
        <card-product-details></card-product-details>
        <h5>О доставке:</h5>
        <p class="mb-0">Мы доставим вашу покупку в любую точку Беларуси.</p>
        <p>Цена доставки не зависит от количества товаров в корзине. Подъём на этаж — бесплатно.</p>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import CardProductDetails from '../../../Shared/Public/CardProductDetails.vue';

    @Component ({
        name: 'product-details',
        components: {
            CardProductDetails
        }
    })
    export default class ProductDetails extends Vue {
        constructor() {
            super();
        }
    }
</script>

<style lang="scss" scoped>
    p {
        font-size: 1rem;
    }

</style>