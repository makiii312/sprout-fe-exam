<template>
    <div class="input">
        <label class="input__label" :for="label.toLowerCase()">{{ label }}</label>
        <select
            :value="modelValue"
            :name="label.toLowerCase()"
            class="input__select"
            @change="handleOptionChnage"
        >
            <option
                v-for="(option, index) in options"
                :key="index"
                :value="option.value"
            >
                {{ option.label }}
            </option>
        </select>
    </div>
</template>

<script setup lang="ts">
defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    label: {
        type: String,
        default: 'Label'
    },
    options: {
        type: Array<{ label: string; value: string }>,
        default: () => []
    }
});

const emit = defineEmits(['update:modelValue']);

const handleOptionChnage = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emit('update:modelValue', target.value);
}
</script>

<style scoped lang="scss">
.input {
    position: relative;

    &__label {
        position: absolute;
        top: -0.45rem;
        left: 1em;
        padding: 0 5px;
        z-index: 1;
        background-color: #FFFFFF;
        font-size: 12px;
        font-weight: 400;
        color: #879A94;
    }

    &__select {
        position: relative;
        border: 1px solid #C3CDC9;
        border-radius: 4px;
        padding: 12PX;
        width: 306px;
        -webkit-appearance: none;
        appearance: none;
        background-image: url('@/assets/images/arrow-down.svg');
        background-repeat: no-repeat;
        background-position: right 0.7rem top 50%;
        background-size: 0.65rem auto;
    }
}
</style>