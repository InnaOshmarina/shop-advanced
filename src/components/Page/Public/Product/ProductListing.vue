<template>
    <div>
        <b-row class="mt-5" v-for="product in products" :key="product['.key']">
            <b-col lg="9">
                <h5><router-link :to="{ name: 'product-details', params: { product_key: product['.key'] } }">
                    {{ product.name }}</router-link>
                </h5>
                <p>{{ product.description}}</p>
            </b-col>
            <b-col lg="3">
                <span>{{ product.price}} р.</span>
            </b-col>
        </b-row>
        <hr>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component({
        name: 'product-listing',
        props: ['products']
    })
    export default class Productlisting extends Vue {
        constructor() {
            super();
        }
    }

</script>

<style lang="scss" scoped>
    h5 {
        font-weight: 600;
        a {
            color: #000;
        }
    }

    span {
        font-weight: 600;
    }

</style>
