import { defineStore } from "pinia";
import { computed, reactive, ref } from 'vue';

export const useAuthStore = defineStore("AuthStore", () => {
    const login = ref('admin')
    const password = ref('admin')
    const code = ref('123456')

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

    return { login, password, code, checkAuth, checkCode }
 })