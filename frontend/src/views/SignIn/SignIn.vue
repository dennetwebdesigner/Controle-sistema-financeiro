<template>
  <!-- CONTAINER -->
  <main class="flex w-screen h-screen justify-center items-center bg-main-dark">
    <!-- FORM CONTAINER -->
    <form
      class="flex flex-wrap w-full h-screen p-4 bg-main-orange text-gray-50 rounded"
      @submit.prevent="generateAuth"
    >
      <!-- LOGO TOP -->
      <fieldset class="w-full mt-2">
        <h1 class="text-3xl font-bold text-center text-gray-800 m-0 mt-8">
          Finantrol
        </h1>
        <h3 class="text-xl text-center m-0">Controle Financeiro</h3>
      </fieldset>

      <!-- USERNAME -->
      <fieldset class="w-full mt-2 h-[50px]">
        <label class="text-xl pl-4 font-bold text-main-dark">
          Nome de usuário
        </label>
        <input
          v-model="dataInput.username"
          type="text"
          class="w-full h-12 mt-2 outline-none text-main-dark p-3 text-center rounded-lg"
        />
      </fieldset>

      <!-- PASSWORD -->
      <fieldset class="w-full h-[85px] relative">
        <label class="text-xl pl-4 font-bold text-main-dark">Senha</label>
        <input
          v-model="dataInput.password"
          :type="PasswordEnabled"
          class="w-full h-12 mt-2 outline-none text-main-dark p-3 text-center rounded-lg"
        />
        <mdicon
          name="eye"
          size="30px"
          class="text-slate-600 absolute bottom-2 right-4"
          @click="seePassword"
        />
      </fieldset>

      <!-- GROUp FORM -->
      <fieldset class="flex w-full">
        <!-- LEFT SECTION -->
        <div class="w-8/12">
          <!-- PERSIST CONNECTION -->
          <div class="mb-2 pl-2">
            <input type="checkbox" class="mr-2" />
            <label class="text-gray-800">Manter conectado</label>
          </div>
        </div>

        <!-- RIGHT SECTION -->

        <!-- BUTTON SUBMIT FORM -->
        <SubmitButton value="Entrar" />
      </fieldset>

      <!-- REGISTER LINK -->
      <fieldset class="w-full">
        <button
          type="button"
          class="w-full bg-transparent font-bold text-gray-800 text-xl mt-2"
        >
          <router-link to="/registrar"
            >Não tem conta?
            <span class="text-red-600">Crie agora!</span></router-link
          >
        </button>

        <!-- FORGET PASSWORD -->

        <button
          type="button"
          class="w-full bg-transparent font-bold text-gray-800 text-lg mt-2"
        >
          <router-link to="#">
            Tenho conta mas,
            <span class="text-blue-800">esqueci a senha!</span>
          </router-link>
        </button>
      </fieldset>
    </form>
    <!-- FORM CONTAINER END -->
  </main>
  <!-- CONTAINER END-->
</template>

<script setup lang="ts">
  import { seePassword, PasswordEnabled, dataInput } from './Sign'
  import SubmitButton from '../../components/Sign/SubmitButton.vue'
  import { generateAuth } from './signInServices'
</script>
