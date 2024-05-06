<script setup>
import { computed, reactive, ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useTodosStore } from '@/stores/TodosStore';
import InputComponent from '@/components/InputComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import ObjectCardComponent from '@/components/ObjectCardComponent.vue';
import CreateTodoForm from '@/components/CreateTodoForm.vue';
import ModalComponent from '@/components/ModalComponent.vue';

const store = useTodosStore()
const router = useRouter()

const showCreateTodo = ref(false);
const showDeleteModal = ref(false);
const searchInput = ref('');
const cardObject = reactive({
  name: '',
  address: '',
  coordinates: '',
  visibility: true,
})

const filteredTodos = computed(() => {
  let filterInput = searchInput.value.toLowerCase().trim();
  return store.todos.filter(item => {
    return item.name.toLowerCase().includes(filterInput) && item.visibility === true;
  });
})

const handleAddItem = () => {
  router.push({ name: 'todolist.objects', params: { id: 'new' } });
  showCreateTodo.value = !showCreateTodo.value;
  store.newTodo()
  handleResetItem()
  if (!showCreateTodo.value) {
    router.push({ name: 'todolist.objects' });
  }
};

const handleSaveItem = (newObject) => {
  let added = store.addTodo(newObject);
  if (added) {
    handleResetItem()
    showCreateTodo.value = false;
    router.push({ name: 'todolist.objects' });
  }
}

const handleResetItem = () => {
  cardObject.name = '';
  cardObject.address = '';
  cardObject.coordinates = '';
};

const handleEditItem = (index) => {
  router.push({ name: 'todolist.objects', params: { id: index } })
  showCreateTodo.value = true;
  let editedingObject = store.todos.find((todo) => todo.id === index)
  cardObject.name = editedingObject.name;
  cardObject.address = editedingObject.address;
  cardObject.coordinates = editedingObject.coordinates;
  store.editTodo(index)
};

const confirmDeleteItem = (index) => {
  showDeleteModal.value = !showDeleteModal.value;
  router.push({ name: 'todolist.objects', params: { id: 'delete' } });
  store.editTodo(index)
}

const exitModal = () => {
  showDeleteModal.value = false;
  router.push({ name: 'todolist.objects' });
}

const handleDeleteItem = (index) => {
  showCreateTodo.value = false;
  store.deleteTodo(index);
  showDeleteModal.value = false;
  router.push({ name: 'todolist.objects' });
};
</script>

<template>
  <div class="objects">
    <div class="todolist">
      <aside class="sidebar">
        <div class="sidebar-header">
          <InputComponent v-model.trim="searchInput" type="text" placeholder="Поиск" :max-lenght="20" />
          <ButtonComponent color="primary" icon="../src/icons/Add.svg" @click="handleAddItem" />
        </div>
        <div class="sidebar-main">
          <div class="cards">
            <ul class="cards-list">
              <li v-for="(item) in filteredTodos" :key="item.id">
                <ObjectCardComponent :item="item" @editItem="handleEditItem(item.id)"
                  @removeItem="confirmDeleteItem(item.id)" />
              </li>
            </ul>
          </div>
          <p v-if="!filteredTodos.length" class="empty-list">Список пуст</p>
        </div>
      </aside>
      <div class="main-container">
        <CreateTodoForm v-if="showCreateTodo" :object="cardObject" @saveItem="handleSaveItem"
          @resetFields="handleResetItem" />
      </div>
    </div>
    <ModalComponent v-if="showDeleteModal" @close="exitModal()" @deleteItem="handleDeleteItem(store.editingIndex)" />
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
  margin-right: 18px;
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

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 469px;
  width: 350px;
}
</style>