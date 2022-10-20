<template lang="">
  <!-- CONTAINER  -->
  <main class="flex w-screen h-screen justify-center items-center bg-main-dark">
    <!-- FORM CONTAINER -->
    <form
      class="flex flex-wrap w-full h-full p-4 bg-main-orange text-slate-50 rounded overflow-auto"
      @submit.prevent="handleSubmitRegister"
    >
      <!-- LOGO -->
      <fieldset class="w-full mt-2 h-[55px]">
        <h1 class="text-3xl font-bold text-center text-main-dark m-0">
          Finantrol
        </h1>
        <h3 class="text-xl text-center m-0">Controle Financeiro</h3>
      </fieldset>
      <!-- LOG END -->

      <!-- USERNAME -->
      <fieldset class="w-full mt-2 h-[55px]">
        <label class="text-xl pl-3 font-bold text-main-dark"
          >Nome de usuário</label
        >
        <input
          v-model="inputsData.username"
          class="w-full h-12 mt-2 outline-none text-main-dark p-3 text-center rounded-lg"
        />
      </fieldset>

      <!-- PASSWORDS -->
      <fieldset class="w-full h-[85px] relative">
        <div class="w-full mb-2">
          <label class="text-xl pl-4 font-bold text-main-dark">Senha</label>
          <input
            v-model="inputsData.password"
            :type="PasswordEnabled"
            class="w-full h-12 mt-2 outline-none text-main-dark p-3 text-center rounded-lg"
          />
          <mdicon
            name="eye"
            size="30px"
            class="text-slate-600 absolute bottom-2 right-4"
            @click="seePassword"
          />
        </div>

        <!-- CONFIRM -->
        <div class="w-full h-[85px] relative pt-2">
          <label class="text-xl pl-4 font-bold text-main-dark"
            >Confirmar Senha</label
          >
          <input
            v-model="inputsData.confirmPassword"
            :type="ConfirmPasswordEnabled"
            class="w-full h-12 mt-2 outline-none text-main-dark p-3 text-center rounded-lg"
          />
          <mdicon
            name="eye"
            size="30px"
            class="text-slate-600 absolute bottom-0 right-4"
            @click="seeConfirmPassword"
          />
        </div>
      </fieldset>

      <!-- BUTTON SUBMIT FORM -->
      <SubmitButton value="Cadastrar" class="pt-16" />

      <!-- LOGIN BUTTON -->
      <fieldset class="w-full">
        <button
          type="button"
          class="w-full bg-transparent p-5 font-bold text-gray-800 text-xl mt-2"
        >
          <router-link to="/entrar"
            >Já possuo uma conta,
            <span class="text-red-600">Entrar!</span></router-link
          >
        </button>
      </fieldset>
    </form>
    <!-- FORM CONTAINER END -->
  </main>
  <!-- CONTAINER END -->
</template>

<script lang="ts" setup>
  import { handleSubmitRegister, inputsData } from './SignUp'
  import {
    seePassword,
    PasswordEnabled,
    ConfirmPasswordEnabled,
    seeConfirmPassword,
  } from '../SignIn/Sign'
  import SubmitButton from '../../components/Sign/SubmitButton.vue'
</script>
