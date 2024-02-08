<template>
    <nav class="navbar">
        <div class="navbar__brand">
            <img class="navbar__logo" src="@/assets/images/logo.svg" alt="Sprout Solutions Logo">
        </div>

        <div class="navbar__content">
            <ul class="navbar__links">
                <li v-for="(link, index) in NAV_LINKS" :key="index" class="navbar__link">
                    <a href="">
                        {{ link.label }}
                        <font-awesome-icon icon="fa-solid fa-caret-down" />
                    </a>
                </li>
            </ul>

            <div class="navbar__actions">
                <SearchBar />
                
                <div class="navbar__user-avatar">
                    <div class="navbar__user-avatar-icon"></div>
                    <a href="">
                        Admin
                        <font-awesome-icon icon="fa-solid fa-caret-down" />
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import SearchBar from './SearchBar.vue'

const NAV_LINKS = [
    {
        label: 'My Requests'
    },
    {
        label: 'My Team'
    },
    {
        label: 'Company'
    },
    {
        label: 'Administration Tools'
    },
    {
        label: 'Maintenance'
    }
];
</script>

<style scoped lang="scss">
.navbar {
    background-color: #333333;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    padding: 12px 24px;
    row-gap: 18px;
    height: 76px;
    justify-content: space-between;

    &__brand {
        display: inline-block;
        height: fit-content;
    }

    &__content {
        display: flex;
        column-gap: 8px;
    }

    &__links {
        display: inline-flex;
        column-gap: 0.5rem;
        margin: 0;
    }

    &__link {
        display: inline;

        a {
            display: flex;
            text-decoration: none;
            color: #DDDDDD;
            padding: 8px;
            column-gap: 5px
        }
    }

    &__actions {
        display: inline-flex;
        column-gap: 16px;
    }

    &__user-avatar {
        height: fit-content;
        display: flex;
        column-gap: 8px;
        align-items: center;

        a {
            display: flex;
            font-size: 16px;
            font-weight: 400;
            text-decoration: none;
            color:#2FC7E2;
            padding: 8px;
            column-gap: 5px
        }
    }

    &__user-avatar-icon {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #C4C4C4;
    }
}
</style>