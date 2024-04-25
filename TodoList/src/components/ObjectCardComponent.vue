<script setup>
import ButtonComponent from './ButtonComponent.vue';

const props = defineProps({
  item: {
    type: Object,
    requaired: true,
  },
})

const emit = defineEmits(['editItem', 'removeItem'])

function editItem(index) {
  emit('editItem', index);
}

function removeItem(index) {
  emit('removeItem', index);
}

</script>
<template>
  <div class="card" @click="editItem">
    <div class="card-header">
      <span class="card-title">{{ item.name }}</span>
      <ButtonComponent :color="item.visibility ? 'delete' : 'primary'"
        :icon="item.visibility ? '../src/icons/Delete.svg' : '../src/icons/Add.svg'" @click.stop="removeItem" />
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