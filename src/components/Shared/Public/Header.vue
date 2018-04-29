<template>
    <div>
      <b-navbar toggleable="lg">
        <b-container>
          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
          <b-navbar-brand><router-link :to="{ name: 'home' }" id="for-toolTip-1">Name_shop</router-link></b-navbar-brand>
          <b-tooltip target="for-toolTip-1" placement="bottom">
          На главную страницу
          </b-tooltip>
          <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav class="mr-auto">
                    <b-nav-item>
                        <router-link :to="{ name: 'product-catalog', params: { key: 'all' } }">Каталог товаров</router-link>
                    </b-nav-item>

                </b-navbar-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto" v-if="!currentUser">

                    <b-nav-item right>
                      <router-link :to="{ name: 'sign-in' }" @click="switchSign('sign-in')">Вход</router-link>
                    </b-nav-item>

                    <b-nav-item right class="for-sign-up">
                      <router-link :to="{ name: 'sign-up' }" @click="switchSign('sign-up')">Регистрация</router-link>
                    </b-nav-item>

                </b-navbar-nav>

          </b-collapse>
        </b-container>

      </b-navbar>
      <search></search>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import Search from './Search.vue';

    @Component({
        name: 'header',
        components: {
            Search
        }
    })
    export default class Header extends Vue {
        constructor() {
            super();

        }

        get currentUser() {
            return this.$store.getters.getUser;
        }

        switchSign(currentSign) {
              this.sign = currentSign;
        }
    }

</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css?family=Gloria+Hallelujah');

   .navbar {
    background-color: rgb(191, 245, 218);
  }

  .navbar-brand a {
    text-decoration: none;
    margin-right: 2rem;
    font-size: 2rem;
    font-family: 'Gloria Hallelujah', cursive;
    font-weight: 900;
    color: rgb(39, 116, 240);
  }

  .nav-item a {
    text-decoration: none;
    color: #000;
    margin-right: 1.2rem;
  }

  .ml-auto .for-sign-up a {
    margin-right: 0;
    padding-right: 0;
  }

</style>
