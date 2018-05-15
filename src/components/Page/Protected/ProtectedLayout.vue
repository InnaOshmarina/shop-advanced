<template>
    <div class="protected-layout">
        <header-second class="pb-5"></header-second>
        <b-container fluid class="content">
            <b-row>
                <b-col lg="3">

                    <b-list-group>

                        <b-list-group-item :to="{ name: 'dashboard-list' }" >Панель инструментов</b-list-group-item>
                        <b-list-group-item :to="{ name: 'category-list' }">Категории товаров</b-list-group-item>
                        <b-list-group-item :to="{ name: 'product-list' }">Товары</b-list-group-item>
                        <b-list-group-item :to="{ name: 'order-list' }">Заказы</b-list-group-item>
                        <b-list-group-item :to="{ name: 'statistics' }">Статистика</b-list-group-item>

                    </b-list-group>

                </b-col>
                <b-col lg="9">
                    <router-view/>
                </b-col>
            </b-row>
        </b-container fluid>
        <footer-second class="mt-5"></footer-second>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import HeaderSecond from '../../Shared/Protected/HeaderSecond.vue';
    import FooterSecond from '../../Shared/Protected/FooterSecond.vue';

    @Component({
        components: {
            HeaderSecond,
            FooterSecond
        }
    })
    export default class ProtectedLayout extends Vue {
        constructor() {
            super();
        }
    }
</script>

<style lang="scss" scoped>

    .protected-layout {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .content {
        flex: 1 0 auto;
    }
    .col-lg-3 {
        padding: 1.07rem;
        background-color: rgb(94, 91, 94);
        border-radius: 0.625rem;
        box-shadow: 2px 2px 6px 1px rgb(3, 83, 3);
    }

    .list-group a {
        background-color: rgb(94, 91, 94);
        color: #fff;
         &.active {
            color: #fff;
            background-color: rgb(49, 48, 49);
            border-radius: 0.625rem;
            border: none;
        }
        &:hover {
            color: #fff;
            background-color: rgb(3, 83, 3);
            border-radius: 0.625rem;
        }
    }
</style>