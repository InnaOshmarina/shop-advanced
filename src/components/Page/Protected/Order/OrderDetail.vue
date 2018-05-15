<template>
    <div class="container">
        <div class="row">
            <table class="col-lg-7 table table-bordered">
                <caption> Позиции заказа
                </caption>
                <tr class="table-success">
                    <th style="width:70%">Наименование товара</th>
                    <th style="width:20%">Цена, руб.</th>
                    <th style="width:10%">Количество</th>
                </tr>
                <tr v-for="detail in detailsOfOrder.products" :key="detail['.key']">
                    <td>{{ detail.name }}</td>
                    <td class="text-right">{{ detail.price }}</td>
                    <td class="text-center">
                        {{ detail.quantity }}
                    </td>
                </tr>
                <tr class="total">
                    <td class="text-right">Всего:</td>
                    <td class="text-right">{{ detailsOfOrder.fullPrice }}</td>
                    <td></td>
                </tr>
            </table>
            <div class="col-lg-5"></div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {orderRef} from '../../../../api/firebase';


    @Component({
        firebase: {
            orders: orderRef
        }
    })
    export default class OrderDetail extends Vue {
        constructor() {
            super();
        }

        get detailsOfOrder() {
            let ourOrder;
            // делаем проверку, что массив с заказами не пустой:
            if (this.orders.length > 0) {
                const ourKey = this.$route.params.order_key;
                let getDetails = item => item['.key'] === ourKey;
                ourOrder = this.orders.find(getDetails);
                // console.log(ourKey);
                // console.log(getDetails);
                // console.log(ourOrder);
            }
            return ourOrder;
        }

        // get totalNumbers() {
        //     return this.$store.getters.getQuantities;
        // }
    }

</script>

<style lang="scss" scoped>
    caption {
        caption-side: top;
    }

    th {
        font-size: 1rem;
        font-weight: 500;
        text-align: center;
        vertical-align: middle;
    }

    td {
        font-size: 0.875rem;
    }
    .total td {
        font-size: 1rem;
    }

</style>