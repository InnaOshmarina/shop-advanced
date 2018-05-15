<template>
    <div class="container">
        <data-table :items="orders"></data-table>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {orderRef} from '../../../../api/firebase';
    import DataTable from '../../../Shared/Protected/Order/DataTable.vue';


    @Component({
        name: 'order-list',
        firebase: {
            orders: orderRef
        },
        components: {
            DataTable
        }
    })
    export default class OrderList extends Vue {
        constructor() {
            super();
        }
    }

</script>

<style lang="scss" scoped>

</style>