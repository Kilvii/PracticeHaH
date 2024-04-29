<script setup>
import { useRoute, useRouter } from 'vue-router';
import { computed, reactive, ref } from 'vue';
import NavItemComponent from '@/components/NavItemComponent.vue';

const router = useRouter()

const activeTab = ref('objects')

const handleVisibilityNavigate = () => {
    activeTab.value = 'visibility'
    router.push({ name: 'todolist.visibility' });
}

const handleObjectNavigate = () => {
    activeTab.value = 'objects'
    router.push({ name: 'todolist.objects' });
}

</script>

<template>
    <main class="layout">
        <div class="navigation">
            <NavItemComponent title="Объекты" :color="activeTab === 'objects'? 'active' : 'default'" @click="handleObjectNavigate" />
            <NavItemComponent title="Отображение" :color="activeTab === 'visibility'? 'active' : 'default'" @click="handleVisibilityNavigate" />
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