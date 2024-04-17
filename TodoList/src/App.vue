<script>
import { ref } from 'vue';
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
    const header = 'Список дел';
    const strEmptyList = 'Список пуст';
    const newItem = ref('');
    const items = ref([]);

    const addItem = () => {
      if (newItem.value.trim() !== '') {
        items.value.push(newItem.value.trim());
        newItem.value = '';
      }
    };

    const editItem = (index) => {
      const editedItem = prompt('Введите новое значение', items.value[index]);
      if (editedItem !== null) {
        items.value[index] = editedItem.trim();
      }
    };

    const deleteItem = (index) => {
      items.value.splice(index, 1);
    };

    return {
      header,
      strEmptyList,
      newItem,
      items,
      addItem,
      editItem,
      deleteItem
    };
  }
};
</script>

<template>
  <div class="container">
    <div class="header">
      <h1>{{ header }}</h1>
    </div>
    <InputComponent v-model.trim="newItem" @keyup.enter="addItem" type="text" height="20px" width="200px"
      placeholder="Поиск" />
    <div class="cards">
      <ul class="cards-list">
        <li v-for="(item, index) in items" :key="index">
          <ObjectCardComponent @editItem="editItem(index)" @deleteItem="deleteItem(index)" :item="item" height="80px" width="260px" color="black" backgroundColor="white" />
        </li>
      </ul>
      <p v-if="!items.length" class="empty-list">
        {{ strEmptyList }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.header {
  margin-bottom: 20px;
}

.cards {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
}

.cards-list {
  padding-left: 0;
  margin-bottom: 20px;
  list-style-type: none;
}

.empty-list {
  font-size: 16px;
  margin-bottom: 10px;
}
</style>