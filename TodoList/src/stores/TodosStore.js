import { defineStore } from "pinia";
import { computed, reactive, ref } from 'vue';

export const useTodosStore = defineStore("TodosStore", () => {
    
    const todos = reactive([])
    const editingIndex = ref(null) 
    let itemId = 0

    function increacedId() {
        itemId += 1
        return itemId
    }

    function decreaceId() {
        itemId -= 1
    }

    function newTodo() {
        editingIndex.value = null
    }

    function addTodo(newObject) {
        if (newObject.name.trim() !== '' && newObject.address.trim() !== '' && newObject.coordinates.trim() !== '') {
            let newItem = {
                id: increacedId(),
                name: newObject.name,
                address: newObject.address,
                coordinates: newObject.coordinates,
                visibility: newObject.visibility,
            };
            if (editingIndex.value !== null) {
                decreaceId()
                let correctIndex = todos.findIndex((todo) => todo.id === editingIndex.value)
                todos[correctIndex].name = newItem.name;
                todos[correctIndex].address = newItem.address;
                todos[correctIndex].coordinates = newItem.coordinates;
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
        let correctIndex = todos.findIndex((todo) => todo.id === index)
        todos.splice(correctIndex, 1);
    }



    return { todos, editingIndex, newTodo, addTodo, editTodo, deleteTodo }
})