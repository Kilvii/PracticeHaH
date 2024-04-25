<script setup>
import { computed, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useTodosStore } from '@/stores/TodosStore';
import InputComponent from '@/components/InputComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import ObjectCardComponent from '@/components/ObjectCardComponent.vue';
import ToggleComponent from '@/components/ToggleComponent.vue';
import NavItemComponent from '@/components/NavItemComponent.vue';

const store = useTodosStore()
const router = useRouter()

const handleObjectNavigate = () => {
  router.push({ name: 'objects' });
}
</script>
<template>
  <div class="visibility">
    <ToggleComponent />
    <div class="navigation">
      <NavItemComponent title="Объекты" color="default" @click="handleObjectNavigate"/>
      <NavItemComponent title="Отображение" color="active" />
    </div>
  </div>
</template>
<style scoped>
.visibility {
  background-color: rgb(183, 175, 175);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-width: 320px;
  min-height: 200px;
  height: 100vh;
}

.navigation {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 360px;
  margin-right: 33px;
}

.navigation>*:not(:last-child) {
    margin-right: 20px;
}
</style>