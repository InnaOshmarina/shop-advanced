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

    isLoading: false
  },
  getters: {
    getUser: state => {
      return state.user.signComplete
        ? state.user
        : jsonParse(getItemStorage(USER_DATA));

      // if (state.user.signComplete) {
      //   state.user;
      // } else {
      //   jsonParse(getItemStorage(USER_DATA));
      // }
    },
    getIsLoading: state => {
      return state.isLoading;
    }
  },
  mutations: {
    signIn(state, payload) {
      state.user = payload;
    },
    logout(state) {
      state.user = null;
    },
    setIsLoading(state) {
      state.isLoading = true;
    },
    clearLoading(state) {
      state.isLoading = false;
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
