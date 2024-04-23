import { defineStore } from "pinia";
import { computed, reactive, ref } from 'vue';

export const useTodosStore = defineStore("TodosStore", () => {
    // state = ref()
    const showCreateTodo = ref(false);
    const todos = reactive([])
    const cardObject = reactive({
        name: '',
        address: '',
    })
    const searchInput = ref('');
    const editingIndex = ref(null)

    // getters = computed()
    const filteredTodos = computed(() => {
        let filterInput = searchInput.value.toLowerCase().trim();
        return todos.filter(item => {
            return item.name.toLowerCase().includes(filterInput);
        });
    })

    // actions = function()
    function addTodo(newObject) {
        if (newObject.name.trim() !== '' && newObject.address.trim() !== '') {
            let newItem = {
                name: newObject.name,
                address: newObject.address
            };
            if (editingIndex.value !== null) {
                todos[editingIndex.value] = newItem;
                editingIndex.value = null;
            } else {
                todos.push(newItem);
            }
            resetTodo();
            showCreateTodo.value = false;
        }
    }

    function editTodo(index) {
        showCreateTodo.value = true;
        cardObject.name = todos[index].name;
        cardObject.address = todos[index].address;
        editingIndex.value = index;

    }

    function resetTodo() {
        cardObject.name = '';
        cardObject.address = '';
    }

    function deleteTodo(index) {
        showCreateTodo.value = false;
        console.log(index)
        todos.splice(index, 1);
    }

    return { todos, showCreateTodo, cardObject, searchInput, editingIndex, filteredTodos, addTodo, editTodo, resetTodo, deleteTodo }
})