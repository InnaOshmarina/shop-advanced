<template>
  <div class="for-search-product"> 
      <b-container>       
          <b-nav-form>
            <div class="for-nav-form">
                <b-form-input class="mr-sm-2" type="text" placeholder="Введите название товара"
                              v-model="searchProduct">

                </b-form-input>                
                <b-button class="my-2 my-sm-0 search" type="submit" id="search"
                          @click.prevent="filteredProduct">

                  <i class="fas fa-search"/>
                </b-button>                
            </div>
          </b-nav-form>  
      </b-container>     
  </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component({
    })
    export default class Search extends Vue {
        constructor() {
            super();
            this.searchProduct = '';
        }

        filteredProduct() {
            this.$router.push({ name: 'result-of-search', params: { q: this.searchProduct } });
        }
    }
</script>

<style lang="scss" scoped>

  .for-search-product {
      background-color: rgb(203, 221, 212);
      margin-bottom: 2rem;
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

   button.search {
       background-color: rgb(203, 221, 212);
       padding-left: 0;
       border: none;
       &:focus {
           box-shadow: none;     
        }
        &:hover svg.fa-search:first-child {
           color: #5b5c5e;
        }
   }

   button#search.search:active {
        background-color: rgb(203, 221, 212);
        color: #5b5c5e;
        box-shadow: none;
        border: 0.0625rem solid #000;
   }

   svg.fa-search {
       font-size: 1.5rem;
       color: rgba(112, 109, 109, 0.979);
       font-weight: 100;
   }
  

  .for-nav-form {
    margin: 0.5rem auto;
  }
</style>