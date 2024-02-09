<template>
    <div class="exported-file">
        <div class="exported-file__header">
            <h4>Exported Files</h4>
            <p>No file to download</p>
        </div>

        <div class="exported-file__table-list">
            <TableList>
                <template #table_content_empty>
                    <div class="table__content-empty-text">
                        <h3>There are no exported items to show on your end.</h3>
                        <p>Search for the logs and click <a class="link" href="">Export</a> to generate the file here.</p>
                    </div>
                </template>
            </TableList>
        </div>
    </div>
</template>

<script setup lang="ts">
import TableList from '../components/TableList.vue'

</script>

<style scoped lang="scss">

.exported-file {
    height: 100%;
    width: calc(100% - 354px);
    margin-left: 354px;
    padding: 20px;

    &__header {
        color: #00291B;
        margin-bottom: 24px;

        h4 {
            font-size: 24px;
            font-weight: 500;
            line-height: 32px;
            margin: 0;
        }

        p {
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            margin: 0;
        }
    }

    &__table-list {
        height: 822px;
    }
}
</style>