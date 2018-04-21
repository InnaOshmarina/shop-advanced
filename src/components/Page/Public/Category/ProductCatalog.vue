<template>
    <div class="product-catalog">
        <b-row>
            <b-col lg="3" style="background-color:pink">
                <div class="caption-category">Выберите нужную Вам категорию товаров:</div>
                <b-list-group v-for="category in categories" :key="category['.key']">

                    <b-list-group-item>
                        {{ category.nameCategory }}</b-list-group-item>
                </b-list-group>
            </b-col>
            <b-col lg="9">
                <router-view/>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {categoryRef} from '../../../../api/firebase';

    @Component({
        name: 'product-catalog',
        firebase: {
            categories: categoryRef
        }
    })
    export default class ProductCatalog extends Vue {
        constructor() {
            super();
        }
    }
</script>

<style lang="scss" scoped>
    .category-listing {
        font-size: 1rem;
    }
    div.caption-category {
        font-size: 0.8rem;
        margin-bottom: 1rem;
        font-weight: 700;
    }

</style>