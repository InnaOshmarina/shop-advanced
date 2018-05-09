<template>
    <div>
        <router-link :to="{ name: 'product-adding' }">
            <button type="button" class="btn btn-success">Добавить новый товар</button>
        </router-link>

        <table class="table table-bordered">
            <caption> Таблица 1. Товары и функция их редактирования
            </caption>
            <tr>
                <th>ID товара</th>
                <th>Категория</th>
                <th>Имя</th>
                <th>Описание</th>
                <th>Цена</th>
                <!--<td>Кол-во</td>-->
                <td></td>
                <td></td>
            </tr>
            <!--Здесь будут отображаться добавленные товары: -->
            <tbody v-for="product in products" :key="product['.key']">
            <tr v-if="!product.edit">
                <td>

                </td>
                <td>
                    {{ product.category }}
                </td>
                <td>{{ product.name }}</td>
                <td>{{ product.description }}</td>
                <td>{{ product.price}} р.</td>
                <!--<td>{{ product.stock}}</td>-->
                <td style="padding: 0.3rem; vertical-align: middle">
                    <button type="button"
                            class="btn btn-danger btn-sm"
                            @click.prevent="removeProduct(product['.key'])"
                            style="font-size: 0.625rem">Удалить
                    </button>
                </td>
                <td style="padding: 0.3rem; vertical-align: middle">
                    <button type="button"
                            class="btn btn-warning btn-sm"
                            @click.prevent="editProduct(product['.key'])"
                            style="font-size: 0.625rem">Редактировать
                    </button>
                </td>
            </tr>
            <tr v-else>
                <td></td>
                <td>
                    <select v-model="product.category">
                        <option :value="option['.key']" v-for="option in categories">
                            {{ option.name}}
                        </option>
                    </select>
                </td>
                <td><input type="text" v-model="product.name"></td>
                <td><textarea rows="5" cols="70" v-model="product.description"></textarea></td>
                <td><input type="text" v-model="product.price"> р.</td>
                <!--<td><input type="number" min="0" v-model="product.stock"></td>-->
                <td style="padding: 0.3rem; vertical-align: middle">
                    <button type="button"
                            class="btn btn-success btn-sm"
                            @click.prevent="saveEditingProduct(product)"
                            style="font-size: 0.625rem">Сохранить
                    </button>
                </td>
                <td style="padding: 0.3rem; vertical-align: middle">
                    <button type="button"
                            class="btn btn-info btn-sm"
                            @click.prevent="cancelEditingProduct(product['.key'])"
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
    import {productRef} from '../../../../api/firebase';

    @Component({
        name: 'product-list',
        firebase: {
            categories: categoryRef,
            products: productRef
        }
    })
    export default class ProductList extends Vue {
        constructor() {
            super();
        }

        removeProduct(key) {
            productRef.child(key).remove();
        }

        editProduct(key) {
            productRef.child(key).update({ edit: true });
        }

        cancelEditingProduct(key) {
            productRef.child(key).update({ edit: false });
        }

        saveEditingProduct(article) {
            const key = article['.key'];
            productRef.child(key).set({ category: article.category, name: article.name, description: article.description, price: article.price, edit: false });
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