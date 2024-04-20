<script setup>
const props = defineProps({
    title: {
        type: String,
        default: "",
    },
    color: {
        type: String,
        default: "white",
    },
    backgroundColor: {
        type: String,
        default: "black",
    },
    icon: {
        type: String,
        default: "",
    },
})
</script>
<template>
    <div class="btn-wrap">
        <button class="btn" :style="{ color: color, backgroundColor: backgroundColor }">
            <img v-if="icon" :src="icon" alt="btn-icon" />
            {{ title }}
        </button>
    </div>
</template>

<style scoped>
.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    height: inherit;
    width: inherit;
}

.btn:has(img) {
    width: 46px;
    height: 40px;
}

.btn-wrap {
    font-size: 16px;
    height: 40px;
    width: inherit;
}

.btn:hover {
    opacity: 0.7;
}
</style>