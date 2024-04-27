import { defineStore } from "pinia";
import { computed, reactive, ref } from 'vue';

export const useTodosStore = defineStore("TodosStore", () => {
    
    const todos = reactive([])
    const editingIndex = ref(null) 
    const login = ref('admin')
    const password = ref('admin')
    const code = ref('123456')
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
        if (newObject.name.trim() !== '' && newObject.address.trim() !== '') {
            let newItem = {
                id: increacedId(),
                name: newObject.name,
                address: newObject.address,             
                visibility: newObject.visibility,
            };
            if (editingIndex.value !== null) {
                decreaceId()
                let correctIndex = todos.findIndex((todo) => todo.id === editingIndex.value)
                todos[correctIndex].name = newItem.name;
                todos[correctIndex].address = newItem.address;
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

    function checkAuth(loginInput, passwordInput) {
        if(loginInput === login.value && passwordInput === password.value){
            return true
        }
        return false
    }

    function checkCode(codeInput) {
        if(codeInput === code.value){
            return true
        }
        return false
    }

    return { todos, login, password, code, editingIndex, checkAuth, checkCode, newTodo, addTodo, editTodo, deleteTodo }
})