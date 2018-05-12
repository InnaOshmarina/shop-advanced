import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

import {
  jsonParse,
  getItemStorage,
  removeItemStorage
} from "../helpers/storageHelper";
import { USER_DATA, initialUserState, initialCartState } from "../constants";

Vue.use(Vuex);

// noinspection JSAnnotator
export default new Vuex.Store({
  state: {
    user: initialUserState,
    isLoader: false,
    cart: initialCartState
  },

  getters: {
    getUser: state => {
      return state.user.signComplete
        ? state.user
        : jsonParse(getItemStorage(USER_DATA));
    },
    getIsLoader: state => {
      return state.isLoader;
    },
    getProduct: state => {
      return state.cart.added;
    },
    getQuantities: state => {
      let quantities = 0;
      state.cart.added.map(productItem => (quantities += productItem.quantity));
      return quantities;
    },
    getFullPrice: state => {
      return state.cart.fullPrice;
    }
  },

  mutations: {
    signIn(state, payload) {
      state.user = payload;
    },
    logout(state) {
      state.user = initialUserState;
    },
    setIsLoader(state) {
      state.isLoader = true;
    },
    clearLoader(state) {
      state.isLoader = false;
    },
    addProductToCart(state, { productItem, quantity, isAdd }) {
      const record = state.cart.added.find(
        Object => Object[".key"] === productItem[".key"]
      );
      if (record) {
        if (isAdd) {
          record.quantity += quantity;
        } else {
          record.quantity = quantity;
        }
      } else {
        state.cart.added.push({
          ...productItem,
          quantity
        });
      }

      let fullPrice = 0;
      state.cart.added.map(
        productItem =>
          (fullPrice += parseFloat(productItem.price) * productItem.quantity)
      );
      state.cart.fullPrice = fullPrice;
    },

    clearCart(state) {
      state.cart.added = [];
    },
    removeProductFromCart(state, productItem) {
      state.cart.added = state.cart.added.filter(
        Object => Object[".key"] !== productItem[".key"]
      );
    }
  },
  actions: {
    logout({ commit }) {
      firebase.auth().signOut();
      removeItemStorage(USER_DATA);
      commit("logout");
    }
    // addProductToCart({ commit }, { productItem, quantity, isAdd }) {
    //   commit("addProductToCart", { productItem, quantity, isAdd });
    // window.console.log(quantity);
    //}
  }
});
