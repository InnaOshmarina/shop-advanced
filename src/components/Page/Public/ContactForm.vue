<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <h4>Напишите нам</h4>
      <hr>
      <b-form-group label="Ваше имя:"
                    label-for="input1"
                    class="mb-4">
            <b-form-input id="input1"
                          type="text"
                          v-model="form.name"
                          required
                          placeholder="Ваше имя">
            </b-form-input>
      </b-form-group>
      <b-form-group label="Ваш Email:"
                    label-for="input2"
                    description="Мы никогда не будем делиться вашей электронной почтой с кем-либо еще."
                    class="mb-4">
            <b-form-input id="input2"
                          type="email"
                          v-model="form.email"
                          required
                          placeholder="Введите Ваш email">
            </b-form-input>
      </b-form-group>
      <b-form-group label="Ваше сообщение:"
                    label-for="input3"
                    class="mb-4">      
            <b-form-textarea id="input3"
                            v-model="form.text"
                            placeholder="Введите текст сообщения"
                            :rows="5"
                            :max-rows="50">
            </b-form-textarea>
      </b-form-group>
      
      <b-button type="submit" variant="primary" class="mr-3 mt-4">Отправить письмо!</b-button>
      <b-button type="reset" variant="danger" class="mr-3 mt-4">Очистить форму</b-button>
    </b-form>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component ({
      name: 'contact-form'
  })
  export default class ContactForm extends Vue {
      constructor() {
          super();
          this.form = {
              name: '',
              email: '',
              text: ''
          };
          this.show = true
      }

      onSubmit (evt) {
          evt.preventDefault();
          alert(JSON.stringify(this.form));
      }

      onReset (evt) {
          evt.preventDefault();
          /* Reset our form values */
          this.form.name = '';
          this.form.email = '';
          this.form.text = '';

          /* Trick to reset/clear native browser form validation state */
          this.show = false;
          this.$nextTick(() => { this.show = true });
      }
  }
</script>

<style lang="scss" scoped>
  
</style>



