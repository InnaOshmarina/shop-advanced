<template>
    <div>
        <!--ДОБАВЛЕНИЕ КАТЕГОРИЙ ТОВАРОВ-->
        <b-card>
            <b-form-group horizontal
                          breakpoint="lg"
                          label="Добавление категории"
                          label-size="lg"
                          label-class="font-weight-bold pt-0"
                          class="mb-0">

                <b-form-group label="Наименование категории:"
                              label-for="input2"
                              class="pb-3">
                    <b-form-input id="input2"
                                  type="text"
                                  v-model="nameCategory"
                                  required
                                  placeholder="Наименование категории">
                    </b-form-input>
                </b-form-group>
                <b-form-group label="Описание категории:"
                              label-for="input3"
                              class="pb-3">
                    <b-form-textarea id="input3"
                                     v-model="descriptionCategory"
                                     placeholder="Описание категории"
                                     :rows="5"
                                     :max-rows="50">
                    </b-form-textarea>
                </b-form-group>
                <input type="submit"
                       class="btn btn-primary mr-3 mb-1"
                       value="Добавить категорию"
                       @click.prevent="addCategory()">
            </b-form-group>
        </b-card>

    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {categoryRef} from '../../../../api/firebase';

    @Component({
        name: 'category-adding',
        firebase: {
            categories: categoryRef
        }
    })
    export default class CategoryAdding extends Vue {
        constructor() {
            super();
                // idCategory: '',
                this.nameCategory = '';
                this.descriptionCategory = '';
        }
        addCategory() {
            categoryRef.push({ nameCategory: this.nameCategory, descriptionCategory: this.descriptionCategory, edit: false });
            this.nameCategory = '';
            this.descriptionCategory = '';
        }
    }
</script>

<style lang="scss" scoped>
    div .card {
        margin: 0 0 2rem 0;
    }
    .card-body {
        font-size: 1rem;
        background-color: lightgreen;
    }

</style>