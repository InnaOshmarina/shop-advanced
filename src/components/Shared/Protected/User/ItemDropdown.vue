<template>
    <div class="item-dropdown">
        <b-dropdown variant="link" size="lg" right no-caret>
            <template slot="button-content">
                <i class="fas fa-user"></i> <span>{{currentUser}}</span>
            </template>

            <b-dropdown-item>
                <router-link :to="{ name: 'profile' }">Мой профиль</router-link>
            </b-dropdown-item>
            <!-- <b-dropdown-item href="#" @click="onLogout">Выход</b-dropdown-item> -->
             <b-dropdown-item>
                <router-link @click="onLogout" :to="{ name: 'sign-in' }">Выход</router-link>
            </b-dropdown-item>
        </b-dropdown>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component({
        name: 'item-dropdown'
    })
    export default class ItemDropdown extends Vue {

        constructor() {
            super();
        }

        get currentUser () {
            return this.$store.getters.getUser.email;
        }

        onLogout () {
            this.$store.dispatch('logout');
            // this.$router.push('/sign-in')
        }

    }

</script>

<style lang="scss" scoped>

    .dropdown svg{
        font-size: 0.9rem;
        color: #fff;
    }
    .dropdown span {
        padding-left: 0.6rem;
        font-size: 0.9rem;
        color: #fff;
        &:hover {
            color: #fff;
        }
    }

   a.dropdown-item a {
        color: #000;
        text-decoration: none;
    }

    .dropdown-menu a.dropdown-item:active {
     background-color: rgb(186, 243, 186);
    }
    
</style>

