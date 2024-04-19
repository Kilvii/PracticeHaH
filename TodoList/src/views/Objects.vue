<script setup>
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import InputComponent from '@/components/InputComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import ObjectCardComponent from '@/components/ObjectCardComponent.vue';
import CreateTodoForm from '@/components/CreateTodoForm.vue';

const router = useRouter()
const showCreateTodo = ref(false);
const cardObject = ref({
  name: '',
  address: '',
})
const editingIndex = ref(null);
const searchInput = ref('');
const items = ref([]);

const filteredItems = computed(() => {
  let filterInput = searchInput.value.toLowerCase().trim();
  return items.value.filter(item => {
    return item.name.toLowerCase().includes(filterInput);
  });
})

const handleAddItem = () => {
  router.push('/objects/new');
  showCreateTodo.value = !showCreateTodo.value;
  if (showCreateTodo.value == false) {
    router.push('/objects');
  }
};

const handleResetItem = () => {
  cardObject.value.name = '';
  cardObject.value.address = '';
}

const handleSaveItem = (newObject) => {
  if (newObject.value.name.trim() !== '' && newObject.value.address.trim() !== '') {
    let newItem = {
      name: newObject.value.name,
      address: newObject.value.address
    };
    if (editingIndex.value !== null) {
      items.value[editingIndex.value] = newItem;
      editingIndex.value = null;
      router.push('/objects');
    } else {
      items.value.push(newItem);
    }
    showCreateTodo.value = false;
    handleResetItem()
    router.push('/objects');
  }
}

const editItem = (index) => {
  router.push(`/objects/${index}`)
  showCreateTodo.value = true;
  cardObject.value.name = items.value[index].name;
  cardObject.value.address = items.value[index].address;
  editingIndex.value = index;
};

const deleteItem = (index) => {
  showCreateTodo.value = false;
  items.value.splice(index, 1);
  router.push('/objects');
};
</script>

<template>
  <div class="todolist">
    <aside class="sidebar">
      <div class="sidebar-header">
        <InputComponent v-model.trim="searchInput" type="text" height="40px" width="200px" placeholder="Поиск" />
        <ButtonComponent background-color="black" height="40px" width="46px" icon="../src/icons/Add.svg"
          @click="handleAddItem" />
      </div>
      <div class=sidebar-main>
        <div class="cards">
          <ul class="cards-list">
            <li v-for="(item, index) in filteredItems" :key="index">
              <ObjectCardComponent :item="item" height="80px" width="268px" color="black" backgroundColor="white"
                @editItem="editItem(index)" @deleteItem="deleteItem(index)" />
            </li>
          </ul>
        </div>
        <p v-if="!items.length" class="empty-list">Список пуст</p>
      </div>
    </aside>
    <div class="main-container">
      <p v-if="!showCreateTodo" class="empty-editor">Ничего не выбрано</p>
      <CreateTodoForm v-if="showCreateTodo" :object="cardObject" @saveItem="handleSaveItem"
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
  height: 470px;
  width: 316px;
  padding-top: 10px;
  border: 3px solid black;
  border-radius: 8px;
  margin-right: 8px;
}

.sidebar-header {
  display: flex;
  flex-direction: row;
  padding: 14px;
  padding-top: 0px;
  padding-bottom: 20px;
}

.sidebar-header>*:not(:last-child) {
  margin-right: 10px;
}

.sidebar-main {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  height: 470px;
  width: 350px;
}
</style>