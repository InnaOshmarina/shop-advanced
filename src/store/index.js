import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

import {
  jsonParse,
  getItemStorage,
  removeItemStorage
} from "../helpers/storageHelper";
import { USER_DATA } from "../constants";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      email: "",
      signComplete: false,
      uid: ""
    },

    isLoader: false
  },
  getters: {
    getUser: state => {
      return state.user.signComplete
        ? state.user
        : jsonParse(getItemStorage(USER_DATA));
    },
    getIsLoader: state => {
      return state.isLoader;
    }
  },
  mutations: {
    signIn(state, payload) {
      state.user = payload;
    },
    // logout(state) {
    //   state.user = null;
    // },
    logout(state) {
      state.user = {
        email: null,
        signComplete: false,
        password: null
      };
    },
    setIsLoader(state) {
      state.isLoader = true;
    },
    clearLoader(state) {
      state.isLoader = false;
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
