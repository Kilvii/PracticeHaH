<script setup>
import { ref } from 'vue';
import InputComponent from '@/components/InputComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';

const props = defineProps({
    object: {
        type: Object,
        required: true
    },
});

const formObject = ref(props.object)
const emit = defineEmits(['saveItem', 'resetFields'])

function saveItem() {
    emit('saveItem', formObject)
}

function resetItem() {
    emit('resetFields')
}

</script>

<template>
    <div class="createTodo">
        <div class="inputTodo">
            <InputComponent v-model.trim="formObject.name" type="text" height="40px" width="313px"
                placeholder="Название объекта" />
            <InputComponent v-model.trim="formObject.address" type="text" height="40px" width="313px"
                placeholder="Адрес объекта" />
        </div>
        <div class="btnTodo">
            <ButtonComponent background-color="gray" title="Сбросить" height="40px" width="148px"
                @click="resetItem" />
            <ButtonComponent background-color="black" title="Сохранить" height="40px" width="148px"
                @click="saveItem" />
        </div>
    </div>
</template>

<style scoped>
.createTodo {
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    border-radius: 8px;
    border: 3px solid black;
    padding-top: 10px;
}

.inputTodo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: auto;
}

.inputTodo>*:not(:last-child) {
    margin-bottom: 12px;
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