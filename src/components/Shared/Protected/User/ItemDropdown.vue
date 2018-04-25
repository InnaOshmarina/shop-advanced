<template>
    <div class="item-dropdown">
        <b-dropdown variant="link" size="lg" right no-caret >
            <template slot="button-content">
                <i class="fas fa-user"></i> <span>{{currentUser}}</span>
            </template>

            <b-dropdown-item href="#">Мой профиль</b-dropdown-item>
            <b-dropdown-item href="#" @click="logout">Выход</b-dropdown-item>
        </b-dropdown>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import firebase from 'firebase';

    @Component({
        name: 'item-dropdown'
    })
    export default class ItemDropdown extends Vue {
        constructor() {
            super();
            this.currentUser = false;
        }
        created() {
            if (firebase.auth().currentUser) {
                this.currentUser = firebase.auth().currentUser.email;
            }
        }

        logout() {
            firebase.auth().signOut()
                .then( () => {
                    const output = {
                        email: false,
                        signComplete: false,
                        uid: false
                    };
                    // мутация:
                    console.log(output);
                    this.$store.commit('signIn', output);
                    this.$router.push('/sign-in');
                });
        }
    }

</script>

<style lang="scss" scoped>

    .dropdown svg{
        font-size: 0.9rem;
        color: #000;
    }
    .dropdown span {
        padding-left: 0.6rem;
        font-size: 0.9rem;
        color: #000;
        &:hover {
            color: #000;
        }
    }


    .dropdown-menu a {
        text-decoration: none;
        color: #000;
        /*margin-right: 1rem;*/
    }

    .dropdown-menu .dropdown-item:active {
        background-color: #aff0be;
    }

</style>

