<script setup>
const props = defineProps({
    label: {
        type: String,
        default: "",
    },
    backgroundColor: {
        type: String,
        default: "black",
    },
    color: {
        type: String,
        default: "white",
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

const emit = defineEmits([''])

</script>
<template>
     <div class="btn-wrap">
        <button 
            class="btn" 
            :style="{ backgroundColor: backgroundColor, color: color, height: height, width: width }">
            <img v-if="icon" :src="icon" alt="btn-icon"/>
            {{ label }}
        </button>
    </div>
</template>

<style scoped>
.btn {
    border: none;
    border-radius: 8px;
    margin-right: 16px;
    cursor: pointer;
}
.btn-wrap {
    font-size: 16px;
    display: flex;
    align-items: center; 
}
.btn:hover {
    border: 3px solid black;
}
</style>