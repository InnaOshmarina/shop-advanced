<template>
    <div class="protected-layout">
        <header-second class="pb-5"></header-second>
        <b-container fluid>
            <b-row>
                <b-col lg="3" style="background-color:pink">

                    <b-list-group>

                        <b-list-group-item :to="{ name: 'dashboard-list' }" >Панель инструментов</b-list-group-item>
                        <b-list-group-item :to="{ name: 'category-list' }">Категории товаров</b-list-group-item>
                        <b-list-group-item :to="{ name: 'product-list' }">Товары</b-list-group-item>
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

    .list-group a {
        background-color: pink;
        &:focus, &.active {
            color: #000;
            background-color: deepskyblue;
        }
        &:hover {
            color: #000;
            background-color: rgb(125, 190, 119);
        }

    }
</style>