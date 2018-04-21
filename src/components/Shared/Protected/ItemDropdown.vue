<template>
    <div class="item-dropdown">
        <b-dropdown variant="link" size="lg" right no-caret >
            <template slot="button-content">
                <i class="fas fa-user"></i>
            </template>
            <b-dropdown-item href="#">Мой профиль</b-dropdown-item>
            <b-dropdown-item href="#">Выход</b-dropdown-item>
        </b-dropdown>
    </div>
</template>

<script>

    export default {
        name: 'item-dropdown',
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>

    .item-dropdown {
        font-size: 1rem;
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

