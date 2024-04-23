<script setup>
import ButtonComponent from './ButtonComponent.vue';

const props = defineProps({
  item: {
    type: Object,
    requaired: true,
  },
})

const emit = defineEmits(['editItem', 'deleteItem'])

function editItem() {
  emit('editItem');
}

function deleteItem() {
  emit('deleteItem');
}

</script>
<template>
  <div class="card"
    @click="editItem">
    <div class="card-header">
      <span class="card-title">{{ item.name }}</span>
      <ButtonComponent color="delete" icon="../src/icons/Delete.svg"
        @click.stop="deleteItem" />
    </div>
    <span class="card-address">{{ item.address }}</span>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  font-size: 16px;
  margin-bottom: 17px;
  padding: 8px;
  border-radius: 8px;
  border: 2px solid black;
  min-width: 272px;
  min-height: 80px;
  color: black;
  background-color: white;
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