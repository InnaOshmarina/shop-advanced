import Vue from "vue";
import Router from "vue-router";

import PublicLayout from "../components/Page/Public/PublicLayout.vue";
import Home from "../components/Page/Public/Home.vue";
import ProductCatalog from "../components/Page/Public/Category/ProductCatalog.vue";
import ProductDetails from "../components/Page/Public/Product/ProductDetails.vue";
import SignIn from "../components/Page/Public/User/SignIn.vue";
import SignUp from "../components/Page/Public/User/SignUp.vue";
import ResultOfSearch from "../components/Page/Public/Product/ResultOfSearch.vue";
import AboutUs from "../components/Page/Public/AboutUs.vue";
import Contacts from "../components/Page/Public/Contacts.vue";
import ContactForm from "../components/Page/Public/ContactForm.vue";
import ShoppingCart from "../components/Page/Public/Cart/ShoppingCart.vue";

import ProtectedLayout from "../components/Page/Protected/ProtectedLayout.vue";
import DashboardList from "../components/Page/Protected/Dashboard/DashboardList.vue";
import CategoryList from "../components/Page/Protected/Category/CategoryList.vue";
import CategoryAdding from "../components/Page/Protected/Category/CategoryAdding.vue";
import ProductList from "../components/Page/Protected/Product/ProductList.vue";
import ProductAdding from "../components/Page/Protected/Product/ProductAdding.vue";
import Statistics from "../components/Page/Protected/Statistics/Statistics.vue";
import Profile from "../components/Page/Protected/User/Profile.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: PublicLayout,
      name: "public-layout",
      children: [
        { path: "/", component: Home, name: "home" },
        {
          path: "/product-catalog/:key",
          component: ProductCatalog,
          name: "product-catalog"
        },
        {
          path: "/product-details/:product_key",
          component: ProductDetails,
          name: "product-details"
        },
        { path: "/sign-in", component: SignIn, name: "sign-in" },
        { path: "/sign-up", component: SignUp, name: "sign-up" },
        {
          path: "/result-of-search/:q",
          component: ResultOfSearch,
          name: "result-of-search"
        },
        { path: "/about-us", component: AboutUs, name: "about-us" },
        { path: "/contacts", component: Contacts, name: "contacts" },
        { path: "/contact-form", component: ContactForm, name: "contact-form" },
        { path: "/shopping-cart", component: ShoppingCart, name: "shopping-cart" }
      ]
    },
    {
      path: "/admin",
      component: ProtectedLayout,
      name: "protected-layout",
      children: [
        { path: "/", component: DashboardList, name: "dashboard-list" },
        {
          path: "/category-list",
          component: CategoryList,
          name: "category-list"
        },
        { path: "/product-list", component: ProductList, name: "product-list" },
        { path: "/statistics", component: Statistics, name: "statistics" },
        {
          path: "/category-adding",
          component: CategoryAdding,
          name: "category-adding"
        },
        {
          path: "/product-adding",
          component: ProductAdding,
          name: "product-adding"
        },

        {
          path: "/user-profile",
          component: Profile,
          name: "profile"
        }
      ]
    }
  ]
});
export default router;
