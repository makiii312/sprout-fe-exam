<template>
    <div class="filter__options filter__options--hidden">
        <div class="filter__option">
            <img src="@/assets/images/company.svg" alt="Company Filter Option">
            <span class="filter__option-text">{{ checkSelected(selectedCompany, FilterCategory.COMPANY) }}</span>
        </div>

        <div class="filter__option">
            <img src="@/assets/images/department.svg" alt="Department Filter Option">
            <span class="filter__option-text">{{ checkSelected(selectedDepartment, FilterCategory.DEPARTMENT) }}</span>
        </div>

        <div class="filter__option">
            <img src="@/assets/images/location.svg" alt="Location Filter Option">
            <span class="filter__option-text">{{ checkSelected(selectedLocation, FilterCategory.LOCATION) }}</span>
        </div>

        <div class="filter__option">
            <img src="@/assets/images/employee.svg" alt="Employee Filter Option">
            <span class="filter__option-text">{{ checkSelected(selectedEmployee, FilterCategory.EMPLOYEE) }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { FILTER_OPTIONS, FilterCategory, FilterData } from '@/commons/filter-options';

defineProps({
    selectedCompany: {
        type: Array<string>,
        default: () => []
    },
    selectedDepartment: {
        type: Array<string>,
        default: () => []
    },
    selectedLocation: {
        type: Array<string>,
        default: () => []
    },
    selectedEmployee: {
        type: Array<string>,
        default: () => []
    },
});

const checkSelected = (selected: string[], category: FilterCategory) => {
    const categoryOptions: Array<FilterData> = FILTER_OPTIONS[category];

    if (selected.length === 1) {
        const selectedValue = selected[0];

        const selectedOptionValue = categoryOptions.find((option) => {
            return option.value === selectedValue;
        });

        return selectedOptionValue?.label
    };
    
    if (selected.length > 1 && selected.length < categoryOptions.length) {
        return `${selected.length} Selected`;
    }

    return selected.length === categoryOptions.length ? 'All' : 'None';
}
</script>

<style scoped lang="scss">
.filter__options {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.filter__option {

    img {
        width: 16px;
        height: 16px;
    }

    span {
        text-transform: uppercase;
        color: #3C5B51;
        font-size: 12px;
        font-weight: 400;
        margin-left: 8px;
    }
}
</style>