import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

import {
  jsonParse,
  getItemStorage,
  removeItemStorage
} from "../helpers/storageHelper";
import { USER_DATA } from "../constants";
import { initialUserState } from "../constants";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: initialUserState,
    isLoader: false,
    cart: {
      added: []
    }
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
    addProductToCart(state, productItem) {
      state.cart.added.push(productItem);
    },
    removeProductFromCart(state, productItem) {
      state.cart.added = state.cart.added.filter(
        Object => Object[".key"] !== productItem
      );
    }
  },
  actions: {
    logout({ commit }) {
      firebase.auth().signOut();
      removeItemStorage(USER_DATA);
      commit("logout");
    }
  }
});
