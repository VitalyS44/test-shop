<template>
    <div class="form-login">
        <div class="form-login__wrap">
            <div class="form-login__item">
                <input
                    type="text"
                    placeholder="username"
                    v-model="username"
                    required
                />
                <span v-if="errorUserName" class="form-login__feedback"
                    >Неверное имя пользователя</span
                >
            </div>
            <div class="form-login__item form-login__item_up">
                <input
                    placeholder="password"
                    type="text"
                    v-model="password"
                    required
                />
                <span v-if="errorPass" class="form-login__feedback"
                    >Поле пароль должно содержать не менее 8 символов</span
                >
            </div>
        </div>
        <button @click="onLogin" class="form-login__submit">Войти</button>
    </div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue';
import { Api } from '../../api/index';

const username = ref('');
const password = ref('');
const errorPass = ref(false);
const errorUserName = ref(false);

const validPass = () => {
    errorPass.value = false;
    const pass = computed(() => password.value);

    if (pass.value.length > 8) {
        return true;
    } else {
        errorPass.value = true;
        return false;
    }
};

const onLogin = () => {
    if (validPass()) {
        const login = Api.login();
        console.log(login);
    }
};
</script>
<style scoped lang="scss">
.form-login {
    background-color: #d9d9d9;
    width: 344px;
    height: 245px;
    margin: 170px 0 0 50px;

    &__wrap {
        width: 180px;
        padding: 57px 0px 0 38px;
    }

    &__item {
        position: relative;
        input {
            padding: 9.5px;
            background-color: white;
            font-size: 12px;
            line-height: 15px;
            border: none;
        }

        &_up {
            margin-top: 32px;
        }
    }

    &__submit {
        width: 104px;
        padding: 9.5px;
        background-color: white;
        font-size: 12px;
        line-height: 15px;
        margin-top: 37px;
        border: none;
        margin-left: 42%;

        &:hover {
            cursor: pointer;
        }
    }

    &__feedback {
        position: absolute;
        display: block;
        color: red;
        font-size: 12px;
        bottom: -34px;
    }
}
</style>
