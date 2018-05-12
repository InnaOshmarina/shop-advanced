<template>
    <div class="shopping-cart">
        <h3>Оформление заказа</h3>
        <div v-if="buyProducts.length > 0">
            <table class="table mb-5">
                <thead>
                    <tr class="header text-center">
                        <th style="width:40%">Товар</th>
                        <th style="width:20%">Цена, руб.</th>
                        <th style="width:8%">Количество</th>
                        <th style="width:22%">Сумма, руб.</th>
                        <th style="width:10%"></th>
                    </tr>
                </thead>
                <cart-item :products="buyProducts"></cart-item>
             </table>
            <div class="d-flex justify-content-around">
                    <button type="button" class="btn btn-danger"
                            @click="deleteOrder">Удалить заказ
                    </button>

                    <!--<button type="button" class="btn btn-success"-->
                            <!--@click.prevent="placeOrder">Оформить заказ-->
                    <!--</button>-->
                    <div>
                        <b-btn variant="success"
                                @click.prevent="placeOrder"
                                  v-b-modal.modal-center>Оформить заказ
                        </b-btn>
                        <b-modal id="modal-center" centered title="Оповещение об утверждении заказа">
                            <p class="my-4">Ваш заказ успешно оформлен!</p>
                        </b-modal>
                    </div>
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
                let newObj = {};
                newObj.name = obj.name;
                newObj.price = obj.price;
                newObj.quantity = obj.quantity;
                return newObj;
            });
            orderRef.push({ "fullPrice": fullPrice, "products": products});
            console.log('inna', orderRef);

            this.$store.commit('clearCart');
            // alert('Ваш заказ успешно оформлен!');
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
        margin: 2rem 0 2rem 0;
    }
    .header {
        font-size: 1rem;
    }

</style>