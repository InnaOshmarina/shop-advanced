<template>
    <div>
        <table class="table table-bordered">
            <tr>
                <td>Имя товара</td>
                <td class="for-name">{{ detailsOfProduct.name }}</td>
            </tr>
            <tr>
                <td>Описание товара</td>
                <td>{{ detailsOfProduct.description }}</td>
            </tr>
            <tr>
                <td>Цена</td>
                <td>от <b>{{ detailsOfProduct.price }}</b> руб.</td>
            </tr>
        </table>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {productRef} from '../../../api/firebase';

    @Component ({
        name: 'card-product-details',
        firebase: {
            products: productRef
        },
    })
    export default class CardProductDetails extends Vue {
        constructor() {
            super();
            this.ourProduct = {
                name: '',
                description: '',
                price: ''
            }
        }

        get detailsOfProduct() {

            if (this.products.length > 0) {
                const ourKey = this.$route.params.product_key;
                this.ourProduct = this.products.find(item => item.product_key === ourKey);
            }
            console.log(this.ourProduct);
            return this.ourProduct;
        }


    }
</script>

<style lang="scss" scoped>

    .for-name {
        font-weight: 700;
    }

</style>