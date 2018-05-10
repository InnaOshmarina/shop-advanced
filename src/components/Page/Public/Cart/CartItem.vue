<template>
    <tbody class="shopping-cart">
        <tr v-for="product in products" :key="product['.key']">
            <td> {{ product.name }}</td>
            <td class="text-center"> {{ product.price }}</td>
            <td class="text-center">
                <input type="number" min="0" class="form-control text-center"
                       :value="product.quantity"
                       @input="updateQuantity"/>
                <!--{{ product.quantity}}-->
            </td>
            <td class="text-center">{{ subtotal(product) }}</td>
            <td>
                <button type="button" class="btn"
                        @click.prevent="removeFromCart(product)">
                    <i class="far fa-trash-alt"/>
                </button>
            </td>
        </tr>
        <tr class="total">
            <td colspan="2" class="text-right">Всего:</td>
            <td></td>
            <td class="text-center">{{fullPrice}}</td>
            <td></td>
        </tr>
    </tbody>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component({
        name: 'cart-item',
        props: ['products']

    })
    export default class CartItem extends Vue {
        constructor() {
            super();
        }

        get fullPrice() {
            return this.$store.getters.getFullPrice;
        }

        updateCart({ productItem, quantity, isAdd }) {
            this.$store.commit('addProductToCart', { productItem, quantity, isAdd });
        }

        updateQuantity(event) {
            let vm = this;
            this.updateCart({
                productItem: vm.product,
                quantity: parseFloat(event.target.value),
                isAdd: false
            });
        }

        subtotal(product) {
            return product.quantity * parseFloat(product.price);
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

    button {
        background-color: #d9534f;
    }

    .total {
        font-size: 1rem;
        font-weight: 500;
    }

</style>