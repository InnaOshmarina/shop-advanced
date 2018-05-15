<template>
    <div class="shopping-cart">
        <h3>Оформление заказа</h3>
        <div v-if="buyProducts.length > 0">
            <table class="table mb-5">
                <thead>
                    <tr class="header text-center">
                        <th style="width:47%">Товар</th>
                        <th style="width:20%">Цена, руб.</th>
                        <th style="width:8%">Количество</th>
                        <th style="width:20%">Сумма, руб.</th>
                        <th style="width:5%"></th>
                    </tr>
                </thead>
                <cart-item :products="buyProducts"></cart-item>
             </table>
            <div class="d-flex justify-content-around">
                    <button type="button" class="btn btn-danger"
                            @click="deleteOrder">Удалить заказ
                    </button>

                    <button type="button" class="btn btn-success"
                            @click.prevent="placeOrder">Оформить заказ
                    </button>

            </div>

        </div>
        <div class="empty" v-else>
            <p>Ваша корзина пуста.</p>
            <p>Для оформления заказа необходимо выбрать хотя бы один товар.</p>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {orderRef} from '../../../../api/firebase';
    import CartItem from './CartItem.vue';


    @Component({
        firebase: {
            orders: orderRef
        },
        components: {
            CartItem
        }
    })
    export default class ShoppingCart extends Vue {
        constructor() {
            super();
        }

        get buyProducts() {
            // console.log(this.$store.getters.getProduct);
            return this.$store.getters.getProduct;
        }
        deleteOrder() {
            this.$store.commit('clearCart');
        }

        placeOrder() {
            let fullPrice = this.$store.getters.getFullPrice;
            console.log(this.$store.getters.getProduct);
            let products = this.$store.getters.getProduct.map( obj => {
                let newObj = {
                    name: obj.name,
                    price: obj.price,
                    quantity: obj.quantity
                };
                return newObj;
            });
            orderRef.push({ "fullPrice": fullPrice, "products": products});
            console.log('inna', orderRef);

            this.$store.commit('clearCart');
            this.$notify({
                group: 'foo',
                title: 'Системное уведомление',
                text: 'Ваш заказ уже в обработке!'
            });
        }
    }
</script>

<style lang="scss" scoped>
    .shopping-cart {
        font-size: 0.875rem;
        background-color: whitesmoke;
        .empty {
            font-size: 1.125rem;
            margin-left: 1rem;
        }
    }
    h3 {
        text-align: center;
        margin-bottom: 2rem;
    }
    .header {
        font-size: 1rem;
    }
    .btn-danger, .btn-success {
        box-shadow: 2px 2px 3px 1px rgb(65, 63, 66);
    }

</style>