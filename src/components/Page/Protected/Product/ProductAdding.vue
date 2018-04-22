<template>
    <div>
        <!--ДОБАВЛЕНИЕ ТОВАРОВ-->
        <b-card>
            <b-form-group horizontal
                          breakpoint="lg"
                          label="Добавление товара"
                          label-size="lg"
                          label-class="font-weight-bold pt-0"
                          class="mb-0">

                <b-form-select v-model="category" class="mb-3">
                    <template slot="first">
                        <option :value="null" disabled>Выберите соответствующую категорию для товара</option>
                    </template>
                    <option :value="option['.key']" v-for="option in categories">
                        {{ option.name }}
                    </option>
                </b-form-select>

                <b-form-group label="Имя товара:"
                              label-for="input5"
                              class="pb-3">
                    <b-form-input id="input5"
                                  type="text"
                                  v-model="name"
                                  required
                                  placeholder="Имя товара">
                    </b-form-input>
                </b-form-group>

                <b-form-group label="Описание товара:"
                              label-for="input6"
                              class="pb-3">
                    <b-form-textarea id="input6"
                                  v-model="description"
                                  placeholder="Описание товара"
                                  :rows="5"
                                  :max-rows="50">
                    </b-form-textarea>
                </b-form-group>
                <b-form-group label="Цена товара:"
                              label-for="input7"
                              class="pb-3">
                    <b-form-input id="input7"
                                  type="text"
                                  v-model="price"
                                  placeholder="Цена товара">
                    </b-form-input>
                </b-form-group>
                <input type="submit"
                       class="btn btn-warning mr-3 mb-1"
                       value="Добавить товар"
                       @click.prevent="addProduct()">
            </b-form-group>
        </b-card>

    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {categoryRef, productRef} from '../../../../api/firebase';


    @Component({
        name: 'product-adding',
        firebase: {
            categories: categoryRef,
            products: productRef
        }
    })
    export default class ProductAdding extends Vue {
        constructor() {
            super();
                this.category = null;
                this.name = '';
                this.description = '';
                this.price = '';

        }
        addProduct() {
            productRef.push({ category: this.category, name: this.name, description: this.description, price: this.price, edit: false });
            this.category = '';
            this.name = '';
            this.description = '';
            this.price = ''
        }

    }
</script>

<style lang="scss" scoped>
    div .card {
        margin: 3rem 0 2rem 0;
    }
    .card-body {
        font-size: 1rem;
        background-color: lightcyan;
    }

</style>