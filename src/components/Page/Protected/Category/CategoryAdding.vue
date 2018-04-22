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
                                  v-model="newCategory.name"
                                  required
                                  placeholder="Наименование категории">
                    </b-form-input>
                </b-form-group>
                <b-form-group label="Описание категории:"
                              label-for="input3"
                              class="pb-3">
                    <b-form-textarea id="input3"
                                     v-model="newCategory.description"
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
            this.newCategory = {
                name: '',
                description: ''
            }
        }
        addCategory() {
            categoryRef.push({ ...this.newCategory, edit: false });
            this.newCategory.name = '';
            this.newCategory.description = ''
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