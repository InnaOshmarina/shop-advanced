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
            <button type="button" class="btn btn-danger"
                    @click="deleteOrder">Удалить заказ
            </button>
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
    import CartItem from './CartItem.vue';

    @Component({
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
            // window.location.reload()
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