<template>
    <div>
        <table class="table table-bordered">
            <caption> Таблица 1. Заказы
            </caption>
            <tr>
                <th>№ заказа</th>
                <th>Сумма заказа</th>
                <th>Просмотр позиции заказа</th>
            </tr>
            <!--Здесь будут отображаться оформленные заказы: -->
            <tr v-for="order in orders" :key="order['.key']">
                <td>{{ order[".key"] }}</td>
                <td>{{ order.fullPrice }}</td>
                <td>
                    <button type="button" class="btn btn-light"><i class="fas fa-eye"/></button>
                </td>
                <!--<td style="padding: 0.3rem; vertical-align: middle">-->
                    <!--<button type="button"-->
                            <!--class="btn btn-danger btn-sm"-->
                            <!--@click.prevent="removeProduct(product['.key'])"-->
                            <!--style="font-size: 0.625rem">Удалить-->
                    <!--</button>-->
                <!--</td>-->
            </tr>
        </table>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {orderRef} from '../../../../api/firebase';


    @Component({
        name: 'order-list',
        firebase: {
            orders: orderRef
        }
    })
    export default class OrderList extends Vue {
        constructor() {
            super();
        }
    }


</script>

<style lang="scss" scoped>
    caption {
        caption-side: top;
    }

    th {
        font-size: 1rem;
        text-align: center;
        vertical-align: middle;
    }

    td {
        font-size: 0.875rem;
    }

</style>