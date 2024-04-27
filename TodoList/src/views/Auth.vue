<script setup>
import { computed, reactive, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/AuthStore';
import InputComponent from '@/components/InputComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';

const store = useAuthStore()
const router = useRouter()

const showConfirmationCode = ref(false);
const loginInput = ref("")
const passwordInput = ref("")
const codeInput = ref("")
const timer = ref(60)
let timerInterval = null
const codeTries = ref(3)

const handleAuth = () => {
    if (loginInput.value !== "" && passwordInput.value !== "") {
        if (store.checkAuth(loginInput.value, passwordInput.value)) {
            showConfirmationCode.value = true;
        }
        else {
            alert('Неверный логин или пароль');
        }
        resetInputs();
    }
}

const handleCode = () => {
    if (codeInput.value !== "") {
        if (store.checkCode(codeInput.value)) {
            localStorage.setItem('auth', '1')
            router.push({ name: 'todolist.objects' })
        }
        else {
            codeTries.value -= 1
            codeInput.value = ""
            if (codeTries.value === 0) {
                alert('Код введён неверно 3 раза')
                showConfirmationCode.value = false
                codeTries.value = 3
                timer.value = 60
                clearInterval(timerInterval)
            }
        }
    }
}

const resetInputs = () => {
    loginInput.value = '';
    passwordInput.value = '';
};

const startTimer = () => {
    timerInterval = setInterval(() => {
        timer.value--;
        if (timer.value <= 0) {
            showConfirmationCode.value = false;
            clearInterval(timerInterval);
        }
    }, 1000);
}

watch(showConfirmationCode, (newVal) => {
    if (newVal) {
        startTimer()
    }
})

</script>

<template>
    <div class="auth">
        <div v-if="!showConfirmationCode" class="auth_login">
            <div class="inputWrap">
                <InputComponent v-model.trim="loginInput" type="text" placeholder="Логин" />
                <InputComponent v-model.trim="passwordInput" type="text" placeholder="Пароль" />
            </div>
            <div class="btnWrap">
                <ButtonComponent color="primary" title="Войти" @click="handleAuth" />
            </div>
        </div>
        <div v-if="showConfirmationCode" class="auth_code">
            <div class="codeWrap">
                <InputComponent v-model.trim="codeInput" type="text" placeholder="Введите код" />
                <p>Код истечёт через 0:{{ timer }}</p>
            </div>
            <div class="btnWrap">
                <ButtonComponent color="primary" title="Войти" @click="handleCode" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.auth {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgb(183, 175, 175);
    width: 100%;
    height: 100vh;
}

.auth_login,
.auth_code {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.inputWrap>*,
.codeWrap>* {
    margin-bottom: 12px;
}

.btnWrap {
    width: 100%;
}

.codeWrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

p {
    color: black;
}
</style>