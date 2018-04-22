<template>
    <div>
        <router-link :to="{ name: 'category-adding' }">
            <button type="button" class="btn btn-success">Добавить категорию</button>
        </router-link>

        <table class="table table-bordered mt-3">
            <caption> Таблица 1. Категории товаров и функция их редактирования</caption>
            <tr>
                <th>ID</th>
                <th>Наименование</th>
                <th>Описание</th>
                <td></td>
                <td></td>
            </tr>
            <!--Здесь будут отображаться добавленные категории: -->
            <tbody v-for="category in categories" :key="category['.key']">
            <tr v-if="!category.edit">
                <td></td>
                <td>{{ category.name }}</td>
                <td>{{ category.description }}</td>
                <td style="padding: 0.3rem; vertical-align: middle">
                    <button type="button"
                            class="btn btn-danger btn-sm"
                            @click.prevent="removeCategory(category['.key'])"
                            style="font-size: 0.625rem">Удалить
                    </button>

                </td>
                <td style="padding: 0.3rem; vertical-align: middle">
                    <button type="button"
                            class="btn btn-warning btn-sm"
                            @click.prevent="editCategory(category['.key'])"
                            style="font-size: 0.625rem">Редактировать
                    </button>
                </td>
            </tr>
            <tr v-else>
                <td></td>
                <td><textarea rows="5" cols="70" v-model="category.name"></textarea></td>
                <td><input type="text" v-model="category.description"></td>
                <td style="padding: 0.3rem; vertical-align: middle">
                    <button type="button"
                            class="btn btn-success btn-sm"
                            @click.prevent="saveEditingCategory(category)"
                            style="font-size: 0.625rem">Сохранить
                    </button>
                </td>
                <td style="padding: 0.3rem; vertical-align: middle">
                    <button type="button"
                            class="btn btn-info btn-sm"
                            @click.prevent="cancelEditingCategory(category['.key'])"
                            style="font-size: 0.625rem">Закрыть
                    </button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {categoryRef} from '../../../../api/firebase';
    import CategoryAdding from './CategoryAdding.vue';

    @Component({
        name: 'category-list',
        components: {
            CategoryAdding
        },
        firebase: {
            categories: categoryRef
        }
    })
    export default class CategoryList extends Vue {
        constructor() {
            super();
        }

        removeCategory(key) {
            categoryRef.child(key).remove();
        }

        editCategory(key) {
            categoryRef.child(key).update({ edit: true });
        }

        cancelEditingCategory(key) {
            categoryRef.child(key).update({ edit: false });
        }

        saveEditingCategory(revision) {
            const keyC = revision['.key'];
            categoryRef.child(keyC).set({ name: revision.name, description: revision.description, edit: false });
        }
    }
</script>

<style lang="scss" scoped>
    caption {
        caption-side: top;
    }

    th {
        font-size: 1rem;
        text-align: center;
        vertical-align: middle;
    }

    td {
        font-size: 0.875rem;
    }

</style>