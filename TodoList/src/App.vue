<script>
import { ref } from 'vue';

export default {
  setup() {
    const header = 'Список дел';
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
    <div class="main">
      <input 
        class="input-field"
        v-model.trim="newItem" 
        @keyup.enter="addItem" 
        type="text"
        placeholder="Впишите дело"
      >
    </div>
    <div class="list">
      <ul class="order-list">
        <li 
        v-for="(item, index) in items" 
        :key="index">
          <div class="item">
            <span>{{ item }}</span>
            <button class="editBtn" @click="editItem(index)">Р</button>
            <button class="deleteBtn" @click="deleteItem(index)">У</button>
          </div>
        </li>
      </ul>
      <p v-if="!items.length" class="empty-list">
        Список пуст
      </p>
    </div>
  </div>
</template>