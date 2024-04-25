<script setup>
import { computed, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useTodosStore } from '@/stores/TodosStore';
import InputComponent from '@/components/InputComponent.vue';
import ObjectCardComponent from '@/components/ObjectCardComponent.vue';
import ToggleComponent from '@/components/ToggleComponent.vue';
import NavItemComponent from '@/components/NavItemComponent.vue';

const store = useTodosStore()
const router = useRouter()

const searchInput = ref("")
const hideElements = ref(false)

const filteredTodos = computed(() => { //TODO
  let filterInput = searchInput.value.toLowerCase().trim();
  if (hideElements.value === true) {
    let filteredItems = store.todos.filter(item => {
      return item.visibility === true && item.name.toLowerCase().includes(filterInput);
    })
    return filteredItems
  }
  else {
    let filteredItems = store.todos.filter(item => {
      return item.name.toLowerCase().includes(filterInput);
    })
    .sort((a, b) => {
      if (a.visibility !== b.visibility) {
        return a.visibility - b.visibility;
      } else {
        return 0;
      }
    });
    return filteredItems
  }
})

const handleObjectNavigate = () => {
  router.push({ name: 'objects' });
}

const handleCardVisibility = (index) => {
  store.todos[index].visibility = !store.todos[index].visibility
}

const handleVisibility = () => {
  hideElements.value = !hideElements.value
}


</script>
<template>
  <div class="visibility">
    <div class="navigation">
      <NavItemComponent title="Объекты" color="default" @click="handleObjectNavigate" />
      <NavItemComponent title="Отображение" color="active" />
    </div>
    <div class="todolist">
      <aside class="sidebar">
        <div class="sidebar-header">
          <InputComponent v-model.trim="searchInput" type="text" placeholder="Поиск" />
          <ToggleComponent @click="handleVisibility" />
        </div>
        <div class="sidebar-main">
          <div class="cards">
            <ul class="cards-list">
              <li v-for="(item, index) in filteredTodos" :key="index">
                <ObjectCardComponent :item="item" @removeItem="handleCardVisibility(index)" />
              </li>
            </ul>
          </div>
          <p v-if="!store.todos.length" class="empty-list">Список пуст</p>
        </div>
      </aside>
    </div>
  </div>
</template>

<style scoped>

.sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 469px;
  width: 316px;
  padding-top: 10px;
  border: 3px solid black;
  border-radius: 8px;
  margin-right: 368px
}

.sidebar-header {
  display: flex;
  flex-direction: row;
  padding-top: 0px;
  padding-bottom: 20px;
  padding-left: 16px;
  justify-content: center;
  align-items: center;
}
</style>