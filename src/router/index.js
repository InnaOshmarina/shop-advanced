import Vue from "vue";
import Router from "vue-router";
import ProtectedLayout from '../components/Page/Protected/ProtectedLayout.vue';
import CategoryList from '../components/Page/Protected/Category/CategoryList.vue';
import DashboardList from '../components/Page/Protected/Dashboard/DashboardList.vue';
import ProductList from '../components/Page/Protected/Product/ProductList'

import PublicLayout from '../components/Page/Public/PublicLayout.vue';
import Home from '../components/Page/Public/Home.vue';

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', component: PublicLayout, name: 'public-layout',
            children: [
                {path: '', component: Home, name: 'home'},
                // {path: 'about-us', component: AboutUs, name: 'about-us'},

            ]
        },
        { path: '/admin', component: ProtectedLayout, name: 'protected-layout',
            children: [
                {path: '', component: DashboardList, name: 'dashboard-list'},
                {path: 'category-list', component: CategoryList, name: 'category-list'},
                {path: 'product-list', component: ProductList, name: 'product-list'},

            ]
        },
    ]
});
