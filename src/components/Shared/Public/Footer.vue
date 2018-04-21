<template>
  <div class="for-footer">
    <b-container class="bv-example-row">
        <b-row >
            <b-col sm="8" >
              <b-nav vertical>
                  <b-nav-item><router-link :to="{ name: 'about-us' }">О компании</router-link></b-nav-item>     
                  <b-nav-item><router-link :to="{ name: 'contacts' }">Контакты</router-link></b-nav-item>
                  <b-nav-item><router-link :to="{ name: 'contact-form' }">Форма обратной связи</router-link></b-nav-item>
              </b-nav>
            </b-col>
            <b-col sm="4" class="d-flex justify-content-end">
               <span>Copyright © 2018 ООО «Name_shop»</span>
            </b-col>
        </b-row>
    </b-container>
  </div>   
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component({

    })
    export default class Footer extends Vue {
        constructor() {
            super();
        }
    }
</script>

<style lang="scss" scoped>
  .for-footer {
    background: rgb(91, 92, 94);  
  }

  .bv-example-row {
    padding-top: 1.75rem;
    min-height: 10rem;
  }

  span {
    font-size: 0.8rem;
    line-height: 1.2rem;
    color: #fff;
  }

  .nav-item a {
    text-decoration: none;
    color: #fff;
    padding-left: 0;
    padding-top: 0;
    padding-bottom: 0.5rem;
    &:hover {
      text-decoration: underline;
    }
  }

</style>

