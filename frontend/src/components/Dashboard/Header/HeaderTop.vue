<template>
  <!-- HEADER -->
  <header class="w-full h-[10vh]">
    <!-- MENU MAIN -->
    <MainMenu />

    <!-- LOGO -->
    <section class="flex w-full h-18">
      <section class="w-3/12 h-full" @click="MenuActive"></section>
      <section class="grow pt-3">
        <h1 class="text-main-orange text-5xl text-center ml-[-15%]">
          Finantrol
        </h1>
      </section>
    </section>
  </header>
  <!-- HEADER -->
</template>

<script setup lang="ts">
  import MainMenu from '../../MainMenu/MainMenu.vue'
  import { menuActive } from '../../MainMenu/menuActive'

  let menuElement: HTMLElement

  const MenuActive = () => {
    menuActive(menuElement)
  }
</script>
