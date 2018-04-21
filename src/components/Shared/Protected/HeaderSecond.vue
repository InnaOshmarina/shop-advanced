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
    import ItemDropdown from '../../Shared/Protected/ItemDropdown.vue';

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
    background-color: rgb(227, 238, 245);
  }

  .navbar-brand a {
    text-decoration: none;
    margin-right: 2rem;
    font-size: 1.5rem;
      font-weight: 600;
      color: green;
      font-family: 'Gloria Hallelujah', cursive;
  }

</style>
