<template>

        <div class="row">
            <table class="col table table-bordered">
                <caption> Таблица 1. Заказы
                </caption>
                <tr class="table-info">
                    <th style="width:70%">№ заказа</th>
                    <th style="width:20%">Сумма заказа, руб.</th>
                    <th style="width:10%"></th>
                </tr>
                <!--Здесь будут отображаться оформленные заказы: -->
                <tr v-for="item in items" :key="item['.key']">
                    <td>{{ item[".key"] }}</td>
                    <td class="text-right">{{ item.fullPrice }}</td>
                    <td class="text-center">
                        <router-link :to="{ name: 'order-detail', params: { order_key: item['.key'] } }">
                            <button type="button" class="btn btn-light"><i class="fas fa-eye"/></button>
                        </router-link>
                    </td>
                </tr>
            </table>
            <div class="col"></div>

    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component({
        props: ['items']
    })
    export default class DataTable extends Vue {
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
        font-weight: 500;
        text-align: center;
        vertical-align: middle;
    }

    td {
        font-size: 0.875rem;
    }

</style>