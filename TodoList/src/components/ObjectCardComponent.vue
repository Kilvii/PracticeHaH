<script setup>
import ButtonComponent from './ButtonComponent.vue';

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  item: {
    type: Object,
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

function handleEditItem(event) {
  emit('editItem', event.target.value);
}

function handleDeleteItem(event) {
  emit('deleteItem', event.target.value);
}

</script>

<template>
  <div class="card" 
  :style="{ color: color, backgroundColor: backgroundColor, height: height, width: width }"
  @click="handleEditItem"
  >
    <div class=card-header>
      <span class="card-title">{{ item.name }}</span>
      <ButtonComponent background-color="red" height="40px" width="46px" @click.stop="handleDeleteItem"
        icon="./src/icons/Delete.svg">
      </ButtonComponent>
    </div>
    <span class="card-address">{{ item.address }}</span>
  </div>
</template>

<style scoped>
.card {
  font-size: 16px;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  padding: 8px;
  border-radius: 8px;
  border: none;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-title {
  margin-left: 6px;
}

.card-address {
  display: flex;
  align-items: center;
  margin-left: 6px;
  color: gray;
  font-size: 14px;
}
</style>