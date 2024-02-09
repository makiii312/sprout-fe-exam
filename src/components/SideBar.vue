<template>
    <aside class="sidebar">
        <div class="sidebar__title">
            <h3 class="sidebar__header-text">Manage Attendance</h3>
            <p class="sidebar__sub-text">Attendance management is where you can generate, add, edit, and export the logs of the employees.</p>
        </div>

        <div class="sidebar__nav">
            <RouterLink class="sidebar__nav-link" :to="{ name: 'attendance-logs' }">
                <img src="@/assets/images/attendance-logs.svg" alt="Attendance Logs">
                Attendance Logs
            </RouterLink>
            <RouterLink class="sidebar__nav-link" :to="{ name: 'export-files' }">
                <img src="@/assets/images/exported-files.svg" alt="Exported Files">
                Exported Files
            </RouterLink>
        </div>

        <div class="sidebar__filter">
            <Filter></Filter>
        </div>

        <div class="sidebar__actions">
            <button class="sidebar__actions--search" type="button">
                <img src="@/assets/images/search.svg" alt="Search Button">
                Search
            </button>
            <button class="sidebar__actions--export" type="button" disabled>
                <img src="@/assets/images/exported-files.svg" alt="Export Button">
                Export
            </button>

        </div>
    </aside>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Filter from './Filter.vue';
</script>

<style scoped lang="scss">
.sidebar {
    position: fixed;
    min-width: 354px;
    width: 354px;
    height: 100%;
    border-right: 1px solid #879A94;

    &__title {
        padding: 24px 32px;
    }

    &__header-text {
        font-size: 24px;
        font-weight: 500;
    }

    &__sub-text {
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
    }

    &__nav {
        border-bottom: 1px solid #879A94;
        padding: 0px 24px 24px 24px;
    }

    &__nav-link {
        display: flex;
        flex-direction: row;
        text-decoration: none;
        font-size: 16px;
        font-weight: 500;
        line-height: 16px;
        color: #5A756B;
        padding: 16px;
        column-gap: 8px;

        &:hover, &.active {
            background-color: #E6FFEE;
            color: #2D4F43;
        }
    }

    &__actions {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 24px;
        row-gap: 8px;
        border-top: 1px solid #C3CDC9;

        button {
            padding: 16px;
            border-radius: 4px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;

            img {
                margin-right: 8px;
                width: 16px;
                height: 16px;
                vertical-align: middle;
            }

            &:hover:disabled {
                cursor: not-allowed;
            }
        }

        &--search {
            background: #17AD49;
            border: none;
            color: #FFFFFF;
        }

        &--export {
            background: #FFFFFF;
            border: 1px solid #C3CDC9;
        }
    }
}
</style>