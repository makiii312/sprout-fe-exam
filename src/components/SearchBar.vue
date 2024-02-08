<template>
    <div class="searchbar">
        <input class="searchbar__input" type="text" name="search" id="search" placeholder="Search Employee...">
    
        <span class="searchbar__icon">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </span>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.searchbar {
    position: relative;
    display: flex;
    flex-direction: row;

    &__icon {
        position: absolute;
        padding: 8px 10px;
        right: 0;
        color: #DDDDDD;
    }

    &__input {
        background-color: transparent;
        border: 1px solid #DDDDDD;
        border-radius: 4px;
        height: 30px;
        color: #DDDDDD;
        font-size: 16px;
        font-weight: 400;
        padding: 2px 10px;

        &::placeholder {
            color: #DDDDDD;
            opacity: 1;
        }
    }
}
</style>