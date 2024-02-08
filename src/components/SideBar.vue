<template>
    <aside class="sidebar">
        <div class="sidebar__title">
            <h3 class="sidebar__header-text">Manage Attendance</h3>
            <p class="sidebar__sub-text">Attendance management is where you can generate, add, edit, and export the logs of the employees.</p>
        </div>

        <div class="sidebar__nav">
            <a class="sidebar__nav-link" href="">
                <img src="@/assets/images/attendance-logs.svg" alt="Attendance Logs">
                Attendance Logs
            </a>
            <a class="sidebar__nav-link" href="">
                <img src="@/assets/images/exported-files.svg" alt="Exported Files">
                Exported Files
            </a>
        </div>

    </aside>
</template>

<script setup lang="ts">

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

        &:hover {
            background-color: #E6FFEE;
            color: #2D4F43;
        }
    }
}
</style>