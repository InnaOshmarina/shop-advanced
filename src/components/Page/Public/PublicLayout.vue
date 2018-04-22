<template>
    <div class="public-layout">
        <Header class="pb-1"></Header>
        <b-container class="content">
            <router-view/>
        </b-container>
        <Footer class="mt-5"></Footer>

    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import Header from '../../Shared/Public/Header.vue';
    import Footer from '../../Shared/Public/Footer.vue';

    @Component({
        name: 'public-layout',
        components: {
            Header,
            Footer
        }
    })
    export default class PublicLayout extends Vue {
        constructor() {
            super();
        }
        get signComplete() {
            return this.$store.getters.getUser.signComplete;
        }
    }
</script>

<style lang="scss" scoped>
    .public-layout {
            display: flex;
            flex-direction: column;
            height: 100%;
    }
    .content {
        flex: 1 0 auto;
    }

</style>