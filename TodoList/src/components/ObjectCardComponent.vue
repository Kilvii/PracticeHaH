<script setup>
import ButtonComponent from './ButtonComponent.vue';
import InputComponent from './InputComponent.vue';

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  items: {
    type: Array,
    requaired: true,
  },
  color: {
    type: String,
    default: "white",
  },
  backgroundColor: {
    type: String,
    default: "black",
  },
  height: {
    type: String,
    default: "10px",
  },
  width: {
    type: String,
    default: "100px",
  },
})

const emit = defineEmits(['editItem', 'deleteItem'])

const editItem = (index) => {
  const editedItem = prompt('Введите новое значение', items.value[index]);
  if (editedItem !== null) {
    items.value[index] = editedItem.trim();
  }
};

const deleteItem = (index) => {
  items.value.splice(index, 1);
};

</script>

<template>
  <div class="cards">
    <ul class="card-list">
      <li v-for="(item, index) in items" :key="index">
        <div class="item" :style="{ color: color, backgroundColor: backgroundColor, height: height, width: width }">
          <span>{{ item }}</span>
          <ButtonComponent background-color="red" height="40px" width="46px" @action="editItem(index)"
            icon="./icons/Add.svg">
          </ButtonComponent>
          <ButtonComponent background-color="green" height="40px" width="46px" @action="deleteItem(index)"
            icon="./icons/Delete.svg">
          </ButtonComponent>
        </div>
      </li>
    </ul>
    <p v-if="!items.length" class="empty-list">
      Список пуст
    </p>
  </div>
</template>

<style scoped>
/* ::v-deep .btn {
  margin-right: 0px;
} */

.cards {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
}

.card-list {
  padding-left: 0;
  margin-bottom: 20px;
  list-style-type: none;
}

.item {
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 8px;
  border: none;
  justify-content: center;
}

.item span {
  padding-right: 10px;
}

.empty-list {
  font-size: 16px;
  margin-bottom: 10px;
}
</style>