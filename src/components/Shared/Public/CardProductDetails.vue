<template>
    <div>
        <table class="table table-bordered">
            <tr>
                <td>Имя товара</td>
                <td class="for-name">{{ product.name }}</td>
            </tr>
            <tr>
                <td>Описание товара</td>
                <td>{{ product.description }}</td>
            </tr>
            <tr>
                <td>Цена</td>
                <td>от <b>{{ product.price }}</b> руб.</td>
            </tr>
        </table>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component ({
        name: 'card-product-details',
        props: ['product']
    })
    export default class CardProductDetails extends Vue {

    }
</script>

<style lang="scss" scoped>

    .for-name {
        font-weight: 700;
    }

</style>