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
    height: {
        type: String,
        default: "10px",
    },
    width: {
        type: String,
        default: "100px",
    },
})

const model = defineModel()

</script>

<template>
    <div class="input-wrap">
        <input class="input-field" v-model="model" :style="{ type: type, height: height, width: width }" :placeholder="placeholder" />
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
    padding: 8px 12px;
    font-size: 16px;
}
</style>