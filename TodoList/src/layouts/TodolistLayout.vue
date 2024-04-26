<script setup>
import { useRoute, useRouter } from 'vue-router';
import NavItemComponent from '@/components/NavItemComponent.vue';

const router = useRouter()

const handleVisibilityNavigate = () => {
    router.push({ name: 'todolist.visibility' });
}

const handleObjectNavigate = () => {
    router.push({ name: 'todolist.objects' });
}
</script>

<template>
    <main class="layout">
        <div class="navigation">
            <NavItemComponent title="Объекты" color="active" @click="handleObjectNavigate" />
            <NavItemComponent title="Отображение" color="default" @click="handleVisibilityNavigate" />
        </div>
        <RouterView />
    </main>
</template>

<style scoped>
    .layout {
        background-color: rgb(183, 175, 175);
        width: 100%;
        height: 100vh;
    }
</style>