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
    height: {
        type: String,
        default: "10px",
    },
    width: {
        type: String,
        default: "100px",
    },
    icon: {
        type: String,
        default: "",
    },
})

</script>
<template>
    <div class="btn-wrap">
        <button class="btn" :style="{ color: color, backgroundColor: backgroundColor, height: height, width: width }">
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
}

.btn-wrap {
    font-size: 16px;
}

.btn:hover {
    opacity: 0.7;
}
</style>