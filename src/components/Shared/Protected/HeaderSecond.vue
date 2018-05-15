<template>
    <div>
        <b-navbar toggleable="lg">
            <b-container fluid>
                <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
                <b-navbar-brand><router-link :to="{ name: 'home' }" id="for-toolTip-2">Name_shop</router-link></b-navbar-brand>
                <b-tooltip target="for-toolTip-1" placement="bottom">
                    На главную страницу
                </b-tooltip>
                <b-collapse is-nav id="nav_collapse">

                    <b-navbar-nav class="ml-auto">

                        <item-dropdown></item-dropdown>

                    </b-navbar-nav>

                </b-collapse>
            </b-container fluid>

        </b-navbar>
         
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import ItemDropdown from './User/ItemDropdown.vue';

    @Component({
        name: 'header-second',
        components: {
            ItemDropdown
        }
    })
    export default class HeaderSecond extends Vue {
        constructor() {
            super();
        }
    }

</script>


<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css?family=Gloria+Hallelujah');

   .navbar {
        background-color: rgb(94, 91, 94);
        position:relative;
        -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
        -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
        &:before, &:after {
            content: "";
            position: absolute;
            z-index: -1;
            -webkit-box-shadow: 0 0 20px rgba(0,0,0,0.8);
            -moz-box-shadow: 0 0 20px rgba(0,0,0,0.8);
            box-shadow: 0 0 20px rgba(0,0,0,0.8);
            top: 0;
            bottom: 0;
            left: 10px;
            right: 10px;
            -moz-border-radius: 100px / 10px;
            border-radius: 100px / 10px;
        }
        &:after {
            right: 10px;
            left: auto;
            -webkit-transform: skew(8deg) rotate(3deg);
            -moz-transform: skew(8deg) rotate(3deg);
            -ms-transform: skew(8deg) rotate(3deg);
            -o-transform: skew(8deg) rotate(3deg);
            transform: skew(8deg) rotate(3deg);
        }
   }


  .navbar-brand a {
    text-decoration: none;
    margin-right: 2rem;
    font-size: 1.5rem;
    font-weight: 600;
    color: rgb(6, 189, 6);
    font-family: 'Gloria Hallelujah', cursive;
  }

</style>
