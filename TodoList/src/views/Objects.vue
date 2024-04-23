<script setup>
import { computed, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useTodosStore } from '@/stores/TodosStore';
import { storeToRefs } from 'pinia'
import InputComponent from '@/components/InputComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import ObjectCardComponent from '@/components/ObjectCardComponent.vue';
import CreateTodoForm from '@/components/CreateTodoForm.vue';

const store = useTodosStore()
const router = useRouter()

const handleAddItem = () => {
  router.push({ name: 'todolist.create' });
  store.showCreateTodo = !store.showCreateTodo;
  store.newTodo()
  if (!store.showCreateTodo) {
    router.push({ name: 'todolist' });
  }
};

const handleSaveItem = (newObject) => {
  store.addTodo(newObject);
  if(!store.showCreateTodo){
    router.push({ name: 'todolist' });
  }
}

const handleResetItem = () => {
  store.resetTodo()
};

const handleEditItem = (index) => {
  router.push({ name: 'todolist.edit', params: { id: index } })
  store.editTodo(index)
};

const handleDeleteItem = (index) => {
  store.deleteTodo(index);
  router.push({ name: 'todolist' });
};
</script>

<template>
  <div class="todolist">
    <aside class="sidebar">
      <div class="sidebar-header">
        <InputComponent v-model.trim="store.searchInput" type="text" placeholder="Поиск" />
        <ButtonComponent color="primary" icon="../src/icons/Add.svg" @click="handleAddItem" />
      </div>
      <div class="sidebar-main">
        <div class="cards">
          <ul class="cards-list">
            <li v-for="(item, index) in store.filteredTodos" :key="index">
              <ObjectCardComponent :item="item" @editItem="handleEditItem(index)"
                @deleteItem="handleDeleteItem(index)" />
            </li>
          </ul>
        </div>
        <p v-if="!store.todos.length" class="empty-list">Список пуст</p>
      </div>
    </aside>
    <div class="main-container">
      <p v-if="!store.showCreateTodo" class="empty-editor">Ничего не выбрано</p>
      <CreateTodoForm v-if="store.showCreateTodo" :object="store.cardObject" @saveItem="handleSaveItem"
        @resetFields="handleResetItem" />
    </div>

  </div>
</template>

<style scoped>
.todolist {
  background-color: rgb(183, 175, 175);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-width: 320px;
  min-height: 200px;
  height: 100vh;
}

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
  margin-right: 8px;
}

.sidebar-header {
  display: flex;
  flex-direction: row;
  padding-top: 0px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: center;
  align-content: center;
}

.sidebar-header>*:not(:last-child) {
  margin-right: 10px;
}

.sidebar-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: black gray;
  flex-grow: 1;
  width: 100%;
}

.cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 20px;
}

.cards-list {
  padding: 0;
  list-style-type: none;
  width: 100%;
}

.empty-list,
.empty-editor {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 16px;
  color: black;
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 469px;
  width: 350px;
}
</style>