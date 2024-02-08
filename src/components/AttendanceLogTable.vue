<template>
    <div class="attendance-log">
        <h4 class="attendance-log__date-range-label">
            <img src="@/assets/images/date-range.svg" alt="Date Range">
            Date Range
        </h4>

        <div class="attendance-log__table-list">
            <TableList>
                <template #table_content_empty>
                    <div class="table__content-empty-text">
                        <h3>No attendance logs to show</h3>
                        <p>Get started by searching for the logs</p>
                    </div>
                </template>
            </TableList>
        </div>
    </div>
</template>

<script setup lang="ts">
import TableList from './TableList.vue'

</script>

<style scoped lang="scss">
.attendance-log {
    width: calc(100% - 354px);
    margin-left: 354px;
    padding: 20px;

    &__date-range-label {
        display: flex;
        column-gap: 8px;
        align-content: center;
        font-size: 16px;
        font-weight: 500;
    }

    &__table-list {
        height: 822px;
    }

}
</style>