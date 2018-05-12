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
    export default class OrderItems extends Vue {
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