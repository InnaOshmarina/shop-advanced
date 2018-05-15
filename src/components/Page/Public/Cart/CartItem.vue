<template>
    <tbody class="shopping-cart">
        <tr v-for="product in products" :key="product['.key']">
            <td> {{ product.name }}</td>
            <td class="text-center"> {{ product.price }}</td>
            <td class="d-flex flex-row justify-content-center">
                <button type="button" class="btn quantity less" @click.prevent="incrementOrDecrement('-', product)">
                    <i class="fas fa-minus quantity"/>
                </button>
                
                <input type="number" min="0" class="form-control"
                       :value="product.quantity"
                       @input="updateQuantity($event.target.value, product)"/>
                
                <button type="button" class="btn quantity more" @click.prevent="incrementOrDecrement('+', product)">
                    <i class="fas fa-plus quantity"/>
                </button>
            </td>
            <td class="text-center">{{ subtotal(product) }}</td>
            <td>
                <button type="button" class="btn remove"
                        @click.prevent="removeFromCart(product)">
                    <i class="far fa-trash-alt removal"/>
                </button>
            </td>
        </tr>
        <tr class="total">
            <td colspan="2" class="text-right">Всего:</td>
            <td class="text-center">{{ totalNumbers }}</td>
            <td class="text-center">{{ fullPrice }}</td>
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

        get totalNumbers() {
            return this.$store.getters.getQuantities;
        }

        get fullPrice() {
            return this.$store.getters.getFullPrice;
        }

        updateCart({ productItem, quantity, isAdd }) {
            this.$store.commit('addProductToCart', { productItem, quantity, isAdd });
        }

        updateQuantity(value, product) {
            this.updateCart({
                productItem: product,
                quantity: parseFloat(value),
                isAdd: false
            });
        }

        incrementOrDecrement(sign, product) {
            let incrementOrDecrement = product.quantity + 1;
             if(sign === '-') {
                 incrementOrDecrement = product.quantity - 1;
             }

             if(incrementOrDecrement <= 0 && sign === '-') {
                 return null
             }

            this.updateCart({
                productItem: product,
                quantity: incrementOrDecrement,
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

    .total {
        font-size: 1rem;
        font-weight: 500;
    }

    button.quantity {
        background-color: whitesmoke;
        &:focus {
           box-shadow: none;
        }
        &:hover svg.quantity:first-child {
           color: #000;
        }
    }

    button.less {
        padding: 0.38rem 0.38rem 0.38rem 0.45rem;
    }

    button.more {
        padding: 0.38rem 0.45rem 0.38rem 0.38rem;
    }
   
    svg.quantity {
        font-size: 0.8rem;
        color: rgba(112, 109, 109, 0.979);
    }

    svg.removal {
        color: rgba(112, 109, 109, 0.979);
    }

    button.remove {
        background-color: #d9534f;
        &:focus {
           box-shadow: none;
        }
        &:hover svg.removal:first-child {
           color: #000;
        }
    }

    input.form-control {
        width: 4rem;
        font-size: 0.875rem;
        &:focus {
            box-shadow: 0 0 0.2rem 0.1rem rgba(0, 123, 255, 0.25);
        }
    }

</style>