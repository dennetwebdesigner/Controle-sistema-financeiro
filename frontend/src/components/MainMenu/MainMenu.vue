<template>
  <mdicon
    name="menu"
    size="25%"
    class="absolute translate-x-[5%] invert"
    @click="menuToggle"
  />
  <section
    ref="menuElement"
    class="bg-main-orange w-screen h-screen absolute duration-1000 translate-x-[-100%]"
  >
    <div class="absolute right-5 text-6xl font-mono">
      <p @click="menuToggle">x</p>
    </div>
    <div class="w-full p-5">
      <h2 class="text-main-dark text-center text-4xl font-bold">Finantrol</h2>
      <h3 class="font-bold text-xl text-slate-50 text-center">
        Controle Financeiro
      </h3>
    </div>
    <ul>
      <li class="w-full p-4 pl-10" @click="menuToggle">
        <router-link
          to="/"
          class="font-bold text-slate-600 text-2xl cursor-pointer"
          >Resumo - Inicio</router-link
        >
      </li>
      <li class="w-full p-4 pl-10" @click="menuToggle">
        <router-link
          to="/painel-de-controle/vendas"
          class="font-bold text-slate-600 text-2xl cursor-pointer"
          >vendas</router-link
        >
      </li>

      <li class="w-full p-4 pl-10" @click="menuToggle">
        <router-link
          to="/painel-de-controle/clientes"
          class="font-bold text-slate-600 text-2xl cursor-pointer"
          >Clientes</router-link
        >
      </li>
      <li class="w-full p-4 pl-10" @click="menuToggle">
        <router-link
          to="/painel-de-controle/lojas"
          class="font-bold text-slate-600 text-2xl cursor-pointer"
          >Lojas</router-link
        >
      </li>
      <li class="w-full p-4 pl-10" @click="menuToggle">
        <router-link
          to="/painel-de-controle/produtos"
          class="font-bold text-slate-600 text-2xl cursor-pointer"
          >Produtos</router-link
        >
      </li>
      <li class="w-full p-4 pl-10">
        <router-link
          to="/"
          class="font-bold text-slate-600 text-2xl cursor-pointer"
          >Perfil</router-link
        >
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { menuActive } from './menuActive'
  const menuElement = ref()

  const menuToggle = () => {
    menuActive(menuElement.value)
  }
</script>
