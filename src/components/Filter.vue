<template>
    <div class="filter">
        <!-- TODO: Integrate Date  -->
        <!-- <div class="filter__date">
            <div class="filter__header">
                <h5>Date Range</h5>
            </div>
        </div> -->

        <div class="filter__options">
            <div class="filter__header">
                <h5>Filters</h5>
                <button type="button" @click="toggleShowOptions">
                    {{ isShowAllOptions  ?  'Hide All' : 'Show All'}}
                </button>
            </div>
        </div>

        <FilterShowDisplay v-if="isShowAllOptions"></FilterShowDisplay>
        <FilterHideDisplay 
            v-else
            :selected-company="selectedCompany"
            :selected-department="selectedDepartment"
            :selected-location="selectedLocation"
            :selected-employee="selectedEmployee"
        />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import FilterHideDisplay from './FilterHideDisplay.vue';
import FilterShowDisplay from './FilterShowDisplay.vue';
const isShowAllOptions = ref(false);

const selectedCompany = ref(['sprout']);
const selectedDepartment = ref(['product', 'design', 'development']);
const selectedLocation = ref(['manila', 'makati', 'pasig']);
const selectedEmployee = ref(['john-1', 'john-2']);

const toggleShowOptions = () => {
    isShowAllOptions.value = !isShowAllOptions.value;
}
</script>

<style scoped lang="scss">
.filter {
    padding: 24px;

    &__header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        h5 {
            text-transform: uppercase;
            color: #3C5B51;
            font-size: 14px;
            font-weight: 500;
        }

        button {
            background: none;
            border: none;
            color: #0F6EEB;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
        }
    }
}
</style>