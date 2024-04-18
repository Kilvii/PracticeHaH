<script>
import { computed, ref } from 'vue';
import InputComponent from './components/InputComponent.vue';
import ButtonComponent from './components/ButtonComponent.vue';
import ObjectCardComponent from './components/ObjectCardComponent.vue';

export default {
  components: {
    InputComponent,
    ButtonComponent,
    ObjectCardComponent,
  },
  setup() {
    const strEmptyList = 'Список пуст';
    const strNothingSelected = 'Ничего не выбрано';
    const itemName = ref('');
    const showCreateTodo = ref(false);
    const itemAddress = ref('');
    const editingIndex = ref(null);
    const searchInput = ref('');
    const items = ref([]);

    const filteredItems = computed( () => {
      var filterInput = searchInput.value.toLowerCase().trim();
      return items.value.filter(item => {
        return item.name.toLowerCase().includes(filterInput);
      });
    })

    const handleAddItem = () => {
      showCreateTodo.value = true;
      itemName.value = '';
      itemAddress.value = '';
    };

    const handleResetItem = () => {
      itemName.value = '';
      itemAddress.value = '';
    }

    const handleSaveItem = () => {
      if (itemName.value.trim() !== '' && itemAddress.value.trim() !== '') {
        var newItem = {
          name: itemName.value.trim(),
          address: itemAddress.value.trim()
        };
        if (editingIndex.value !== null) {
          items.value[editingIndex.value] = newItem;
          editingIndex.value = null; 
        } else {
          items.value.push(newItem);
        }
        showCreateTodo.value = false;
        itemName.value = '';
        itemAddress.value = '';
      }
    }

    const editItem = (index) => {
      showCreateTodo.value = true;
      itemName.value = items.value[index].name;
      itemAddress.value = items.value[index].address;
      editingIndex.value = index;
    };

    const deleteItem = (index) => {
      showCreateTodo.value = false;
      items.value.splice(index, 1);
    };


    return {
      strEmptyList,
      strNothingSelected,
      showCreateTodo,
      itemName,
      itemAddress,
      searchInput,
      editingIndex,
      filteredItems,
      items,
      editItem,
      deleteItem,
      handleAddItem,
      handleResetItem,
      handleSaveItem,
    };
  }
};
</script>

<template>
  <div class="todolist">
    <aside class="sidebar">
      <div class="sidebar-header">
        <InputComponent v-model.trim="searchInput" type="text" height="40px" width="200px" placeholder="Поиск"
          style="margin-right: 8px" />
        <ButtonComponent background-color="black" height="40px" width="46px" @click="handleAddItem"
          icon="./src/icons/Add.svg">
        </ButtonComponent>
      </div>
      <div class=sidebar-main>
        <div class="cards">
          <ul class="cards-list">
            <li v-for="(item, index) in filteredItems" :key="index">
              <ObjectCardComponent @editItem="editItem(index)" @deleteItem="deleteItem(index)" :item="item"
                height="80px" width="268px" color="black" backgroundColor="white" />
            </li>
          </ul>
        </div>
        <p v-if="!items.length" class="empty-list">
          {{ strEmptyList }}
        </p>
      </div>
    </aside>
    <div class="main-container">
      <p v-if="!showCreateTodo" class="empty-editor">
        {{ strNothingSelected }}
      </p>
      <div v-if="showCreateTodo" class="createTodo">
        <div class="inputTodo">
          <InputComponent v-model.trim="itemName" type="text" height="40px" width="313px" placeholder="Название объекта"
            style="margin-top: 8px" />
          <InputComponent v-model.trim="itemAddress" type="text" height="40px" width="313px" placeholder="Адрес объекта"
            style="margin-top: 12px" />
        </div>
        <div class="btnTodo">
          <ButtonComponent background-color="gray" label="Сбросить" height="40px" width="148px"
            @click="handleResetItem"></ButtonComponent>
          <ButtonComponent background-color="black" label="Сохранить" height="40px" width="148px"
            @click="handleSaveItem"></ButtonComponent>
        </div>
      </div>
    </div>

  </div>
</template>

<!-- TODO: (1) Центр body (4) Routes -->

<style scoped>
.todolist {
  background-color: rgb(183, 175, 175);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* max-width: 690px;
  max-height: 470px; */
  padding: 20px;
  min-width: 320px;
  min-height: 200px;
}

.sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 470px;
}

.sidebar-header {
  display: flex;
  flex-direction: row;
  padding: 14px;
  padding-bottom: 20px;
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

.createTodo {
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  border-radius: 8px;
}

.inputTodo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: auto;
}

.btnTodo {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: auto;
  margin-bottom: 14px;
}

.btnTodo>*:not(:last-child) {
  margin-right: 14px;
}
</style>