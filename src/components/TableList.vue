<template>
    <div class="table">
        <div v-if="listData.length > 0" class="table__content"></div>
        
        <div v-else class="table__content--empty">
            <img class="table__content-empty-image" src="@/assets/images/no-payslip.png" alt="Empty Table">

            <slot name="table_content_empty"></slot>
        </div>
        

        <div class="table__footer">
            <div class="table__footer-page-limit">
                <span>Items per page</span>
                <select name="page-limit" id="page-limit"></select>
            </div>

            <div class="table__footer-pagination">
                <Pagination></Pagination>
            </div>
            
            <div class="table__footer-page-results">
                <span>Showing 0 of 0</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Pagination from './Pagination.vue'

defineProps({
    listData: {
        type: Array,
        default: () => []
    }
});
</script>

<style scoped lang="scss">
.table{
    display: flex;
    flex-flow: column nowrap;
    border: 1px solid #C3CDC9;
    border-radius: 4px;
    position: relative;
    width: 100%;
    height: 100%;

    &__content {

        &--empty {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            padding: 40px 20px;
            margin: auto;
        }

        &-empty-image{
            height: 144px;
            width: 144px;
            margin: auto;
        }
    }

    &__footer {
        display: flex;
        flex-direction: row;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 64px;
        max-height: 64px;
        border-top: 1px solid #C3CDC9;
        padding: 16px;
        justify-content: space-between;
        align-content: center;
        align-items: center;
    }

}
</style>