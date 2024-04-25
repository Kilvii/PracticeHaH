<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
    title: {
        type: String,
        default: "",
    },
    color: {
        type: String,
        default: "default",
    },
})

const emit = defineEmits(['navigate'])

function handleNavigation() {
  emit('navigate');
}

</script>
<template>
    <div class="nav-wrap">
        <button class="btn" :class="[`btn_${color}`]" @click="handleNavigation">
            {{ title }}
        </button>
    </div>
</template>

<style scoped>
.nav-wrap {
    font-size: 16px;
    height: 48px;
    flex: 1;
}

.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    height: inherit;
    width: 100%;
}

.btn_active {
    border: 2px solid black;
    background-color: white;
    color:black;
}

.btn_default {
    background-color: black;
    color: white;
}

.btn:hover {
    opacity: 0.7;
}
</style>