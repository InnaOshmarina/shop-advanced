<template>
    <div class="shopping-cart">
        <h3>Оформление заказа</h3>
        <table class="table mt-3">
            <thead>
                <tr class="header">
                    <th scope="col">Товар</th>
                    <th scope="col">Цена</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in buyProduct" :key="product['.key']">
                    <td> {{ product.name }}</td>
                    <td> {{ product.price }}</td>
                    <td>
                        <button type="button" class="btn"
                                @click.prevent="removeFromCart(product['.key'])">
                           <i class="far fa-trash-alt"/>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component({

    })
    export default class ShoppingCart extends Vue {
        constructor() {
            super();
        }

        get buyProduct () {
            return this.$store.getters.getProduct;
        }

        removeFromCart(productItem) {
            this.$store.commit('removeProductFromCart', productItem);
        }

    }
</script>

<style lang="scss" scoped>
    .shopping-cart {
        font-size: 0.875rem;
        background-color: whitesmoke;
    }
    h3 {
        text-align: center;
        margin: 2rem 0 2rem 0;
    }
    .header {
        font-size: 1rem;
    }
    button {
        background-color: #d9534f;
    }

</style>