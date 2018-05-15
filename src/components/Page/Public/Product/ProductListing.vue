<template>
    <div>
        <b-container>
            <b-row class="mt-4" v-for="product in products" :key="product['.key']">
                <b-col lg="9">
                    <h6><router-link :to="{ name: 'product-details', params: { product_key: product['.key'] } }">
                        {{ product.name }}</router-link>
                    </h6>
                    <p>{{ product.description}}</p>
                </b-col>
                <b-col lg="3" class="d-flex align-items-end flex-column">
                        <span >{{ product.price}} р.</span>
                        <button type="button" class="btn btn-warning btn-sm mt-auto"
                                @click.prevent="addToCart(product)">
                            <i class="fas fa-cart-arrow-down"/>
                            <span>&nbsp;&nbsp;В корзину</span>
                        </button>

                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component({
        name: 'product-listing',
        props: ['products', 'product']
    })
    export default class ProductListing extends Vue {
        constructor() {
            super();
        }

        updateCart({ productItem, quantity, isAdd }) {
            this.$store.commit('addProductToCart', { productItem, quantity, isAdd });
        }
        addToCart(product) {
            const order = {
                productItem: product,
                quantity: 1,
                isAdd: true
            };
            this.updateCart(order);
        }
    }


</script>

<style lang="scss" scoped>

    div .row {
        border-bottom: 0.08rem grey solid;
        font-size: 0.75rem;
        span {
            font-size: 1rem;
            font-weight: 600;
        }
        & .btn span {
            font-size: 0.75rem;
            font-weight: 400;
        }
    }

    h6 {
        font-weight: 600;
        a {
            color: #000;
        }
    }

    .btn-warning {
        display: block;
        margin-bottom: 0.5rem;
        padding-left: 0;
        padding-right: 0;
        svg {
            font-size: 0.875rem;
        }
    }

</style>
