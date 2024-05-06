<script setup>
import ButtonComponent from './ButtonComponent.vue';
const emit = defineEmits(['deleteItem', 'close'])

function close() {
    emit('close')
}

function deleteItem(index) {
    emit('deleteItem', index)
}

</script>
<template>
    <div class="modal-mask">
        <div class="modal-wrap">
            <div class="modal-container">
                <div class="modal-header">
                    <slot name="header">
                        <h3>Подтверждение удаления</h3>
                    </slot>
                </div>
                <div class="modal-body">
                    <slot name="body">
                        Вы уверены, что хотите удалить данный объект?
                    </slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer">
                        <ButtonComponent color="reset" title="Удалить" @click="deleteItem" />
                        <ButtonComponent color="delete" title="Отмена" @click="close" />
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
}

.modal-wrap {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    width: 450px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
}

.modal-header {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    color: black;
    margin: 10px 0;
}

.modal-footer {
    display: flex;
    flex-direction: row;
    width: 100%;
}

.modal-footer>*:not(:last-child) {
    margin-right: 14px;
}
</style>