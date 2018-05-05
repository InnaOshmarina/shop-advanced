<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-7">

                <div class="card">
                    <div class="card-header">
                        <h5>User Profile</h5>
                    </div>
                    <div class="card-body">
                        <div class="row">
                                <div class="col-md-6">
                                    <div  align="center" v-if="!image">
                                        <img alt="User Pic" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"
                                             class="rounded-circle img-fluid profile-image">
                                        <input type="file" @change="onFileChange">

                                    </div>
                                    <div  align="center" v-else>
                                        <img :src="image" class="rounded-circle img-fluid profile-image" alt="User Pic"/>
                                        <button @click="removeImage" type="button" class="btn btn-secondary btn-sm">Удалить аватарку</button>
                                    </div>
                                    <br>
                                </div>
                        </div>
                        <div class="clearfix"></div>
                        <hr style="margin:5px 0 5px 0;">

                        <div class="row">
                                <div class="col-md-3 col-sm-4 tital">Логин:</div>
                                <div class="col-md-9 col-sm-8"></div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="bot-border"></div>


                        <div class="row">
                                <div class="col-md-3 col-sm-4 tital">Email:</div>
                                <div class="col-md-9">{{currentUser}}</div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="bot-border"></div>

                        <div class="row">
                                <div class="col-md-3 col-sm-4 tital">Имя:</div>
                                <div class="col-md-9"></div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="bot-border"></div>

                        <div class="row">
                                <div class="col-md-3 col-sm-4 tital">Фамилия:</div>
                                <div class="col-md-9"></div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="bot-border"></div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component({
        name: 'profile'
    })

    export default class Profile extends Vue {
        constructor() {
            super();
            this.image = '';
        }

        onFileChange(e) {
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.createImage(files[0]);
        }

        createImage(file) {
            let image = new Image();
            let reader = new FileReader();
            let vm = this;

            reader.onload = (e) => {
                vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
        }

        removeImage(e) {
            this.image = '';
        }

        get currentUser () {
            return this.$store.getters.getUser.email;
        }
    }

</script>

<style lang="scss" scoped>
    h5 {
        margin: 0;
    }
    input .hidden {
        position: absolute;
        left: -624rem;
    }

    .btn-sm {
        font-size: 0.625rem;
    }

    .profile-image {
        display: block;
        margin-bottom: 1rem;
        cursor: pointer;
        width: 6.25rem;
        height: 6.25rem;
        border: 0.125rem solid #03b1ce;
    }

    .tital {
        font-size: 1rem;
        font-weight: 500;
    }
    .bot-border {
        border-bottom: 0.0625rem #f8f8f8 solid;
        margin: 0.3125rem 0 0.3125rem 0;
    }

</style>

