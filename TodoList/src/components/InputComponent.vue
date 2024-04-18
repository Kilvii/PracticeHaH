<script setup>
const props = defineProps({
    label: {
        type: [String, Boolean],
        default: false,
    },
    modelValue: {
        type: String,
        default: "",
    },
    placeholder: {
        type: String,
        default: "Ввод",
    },
    height: {
        type: String,
        default: "10px",
    },
    width: {
        type: String,
        default: "100px",
    },
})
const emit = defineEmits(['update:modelValue'])

function handleInput(event) {
    emit('update:modelValue', event.target.value);
}
</script>

<template>
    <div class="input-wrap">
        <label v-if="label"> {{ label }}</label>
        <input 
        class="input-field" 
        :style="{ height: height, width: width }"
        :value="modelValue" 
        :placeholder="placeholder"
        @input="handleInput"
        v-bind="$attrs" />
    </div>
</template>

<style scoped>
.input-wrap {
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
}

.input-field {
    border: 2px solid black;
    border-radius: 8px;
    text-align: left;
    padding: 8px 12px ;
    font-size: 16px;
}
</style>