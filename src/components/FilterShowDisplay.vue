<template>
    <div class="filter__options filter__options--show">
        <div class="filter__option">
            <Dropdown label="Company" :options="FILTER_OPTIONS[FilterCategory.COMPANY]" />
        </div>

        <div class="filter__option">
            <Dropdown label="Department" :options="FILTER_OPTIONS[FilterCategory.DEPARTMENT]" />

        </div>

        <div class="filter__option">
            <Dropdown label="Location" :options="FILTER_OPTIONS[FilterCategory.LOCATION]" />

        </div>

        <div class="filter__option">
            <Dropdown label="Employee" :options="FILTER_OPTIONS[FilterCategory.EMPLOYEE]" />

        </div>
    </div>
</template>

<script setup lang="ts">
import Dropdown from './form/Dropdown.vue';
import { FILTER_OPTIONS, FilterCategory } from '@/commons/filter-options';
</script>

<style scoped lang="scss">
.filter__options {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

</style>