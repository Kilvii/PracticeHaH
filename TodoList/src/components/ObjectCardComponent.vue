<script setup>
import ButtonComponent from './ButtonComponent.vue';

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  item: {
    type: String,
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
  <div class="card" :style="{ color: color, backgroundColor: backgroundColor, height: height, width: width }">
    <span>{{ item }}</span>
    <ButtonComponent background-color="red" height="40px" width="46px" @action="editItem(index)" icon="./icons/Add.svg">
    </ButtonComponent>
    <ButtonComponent background-color="green" height="40px" width="46px" @action="deleteItem(index)"
      icon="./icons/Delete.svg">
    </ButtonComponent>
  </div>
</template>

<style scoped>
.card {
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 8px;
  border: none;
  justify-content: center;
}

.card span {
  padding-right: 10px;
}
</style>