<template>
    <div>

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