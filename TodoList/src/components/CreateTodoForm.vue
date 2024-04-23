<script setup>
import { reactive, ref } from 'vue';
import InputComponent from '@/components/InputComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';

const props = defineProps({
    object: {
        type: Object,
        required: true
    },
});

const formObject = reactive(props.object)
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
            <InputComponent v-model.trim="formObject.name" type="text" placeholder="Название объекта" />
            <InputComponent v-model.trim="formObject.address" type="text" placeholder="Адрес объекта" />
        </div>
        <div class="btnTodo">
            <ButtonComponent color="reset" title="Сбросить" @click="resetItem" />
            <ButtonComponent color="primary" title="Сохранить" @click="saveItem" />
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
    padding: 20px;
    padding-top: 10px;
    padding-bottom: 18px;
}

.inputTodo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: auto;
    width: inherit;
}

.inputTodo>*:not(:last-child) {
    margin-bottom: 12px;
    width: 100%;
}

.btnTodo {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    margin-top: auto;
    width: inherit;
}

.btnTodo>*:not(:last-child) {
    margin-right: 14px;
}
</style>