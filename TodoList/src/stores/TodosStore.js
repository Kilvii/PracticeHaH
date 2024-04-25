import { defineStore } from "pinia";
import { computed, reactive, ref } from 'vue';

export const useTodosStore = defineStore("TodosStore", () => {
    
    const todos = reactive([])
    const editingIndex = ref(null) 

    function newTodo() {
        editingIndex.value = null
    }

    function addTodo(newObject) {
        if (newObject.name.trim() !== '' && newObject.address.trim() !== '') {
            let newItem = {
                name: newObject.name,
                address: newObject.address,
                visibility: newObject.visibility,
            };
            if (editingIndex.value !== null) {
                todos[editingIndex.value].name = newItem.name;
                todos[editingIndex.value].address = newItem.address;
                editingIndex.value = null;            
            } else {
                todos.push(newItem);
            }
            return true;
        }
        return false;
    }

    function editTodo(index) {
        editingIndex.value = index;
    }

    function deleteTodo(index) {
        todos.splice(index, 1);
    }

    return { todos, editingIndex, newTodo, addTodo, editTodo, deleteTodo }
})