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
    const newItem = ref('');
    const items = ref([]);

    const addItem = () => {
      if (newItem.value.trim() !== '') {
        items.value.push(newItem.value.trim());
        newItem.value = '';
      }
    };

    return {
      header,
      newItem,
      items,
      addItem,
    };
  }
};
</script>

<template>
  <div class="container">
    <div class="header">
      <h1>{{ header }}</h1>
    </div>
    <InputComponent 
    v-model.trim="newItem" 
    @keyup.enter="addItem" 
    type="text"
    height="20px"
    width="200px"
    placeholder="Поиск"
     />
    <ObjectCardComponent 
    :items="items"
    height="80px"
    width="260px"
    color="black"
    backgroundColor="white"
    />
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
</style>