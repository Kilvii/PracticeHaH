<script setup>
const props = defineProps({
    type: {
        type: String,
        default: "text",
    },
    placeholder: {
        type: String,
        default: "Ввод",
    },
    maxLenght: {
        type: Number,
        default: 20
    }
})

const model = defineModel()

</script>

<template>
    <div class="input-wrap">
        <input class="input-field" v-model="model" :placeholder="placeholder" :maxlength="maxLenght" />
    </div>
</template>

<style scoped>
.input-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: inherit;
}

.input-field {
    height: inherit;
    border: 2px solid black;
    border-radius: 8px;
    text-align: left;
    padding: 8px 12px;
    font-size: 16px;
    width: inherit;
}
</style>