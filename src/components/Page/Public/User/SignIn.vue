<template>
  <div class="for-sign-in">
      <form class="mt-5" @submit.prevent="enterUser">
        <div class="form-group">
          <label for="email">Ваш email:</label>
          <input type="email" id="email" class="form-control" placeholder="Введите email:" required v-model="user.email">
        </div>
        <div class="form-group">
          <label for="password">Ваш пароль:</label>
          <input type="password" id="password" class="form-control" placeholder="Введите пароль:" required v-model="user.password">
        </div>
        <button type="submit" class="btn btn-primary">Войти</button>
      </form>
      <div class="alert alert-success mt-5" role="alert" v-if="signSuccess">
        <strong>Поздравляю!</strong> Вы вошли в систему.
      </div>
      <div class="alert alert-danger mt-5" role="alert" v-if="signError">
         Вы ввели неверный email или пароль.
      </div>
      <loader :isLoader="loader"></loader>
  </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import firebase from 'firebase';
    import { setItemStorage } from '@/helpers/storageHelper';
    import { USER_DATA } from "@/constants";
    import Loader from '@/components/Shared/Loader';

      @Component({
          components: {
              Loader
          }
      })
      export default class SignIn extends Vue {
          constructor() {
              super();
              this.signSuccess = false;
              this.signError = false;
              // соединим импуты с какими-либо данными, чтобы их проверять и получать к ним доступ:
              this.user = {
                  email: '',
                  password: ''
              };
          }
          enterUser() {
              this.$store.commit('setIsLoader');

            firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password)
                .then( response => {
                  // console.log(response);

                  const user = {
                    email: response.email,
                    signComplete: true,
                    uid: response.uid
                  };
                    setItemStorage(USER_DATA, user);

                  this.signError = false;
                  this.signSuccess = true;
                  // мутация:
                  this.$store.commit('signIn', user);
                  this.$router.push('/admin');
                  this.$store.commit('clearLoader');
                })
                .catch(error => {
                  this.signError = true;
                  this.$store.commit('clearLoader');
                })

          }

          get loader() {
              return this.$store.getters.getIsLoader;
          }
      }
</script>

<style lang="scss" scoped>

  .for-sign-in {
      line-height: 1.25rem;
  }
  
</style>
