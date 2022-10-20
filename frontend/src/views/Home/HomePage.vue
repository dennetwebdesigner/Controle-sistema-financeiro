<template>
  <!-- CONTAINER -->
  <div class="w-screen h-screen bg-main-dark flex flex-wrap">
    <!-- TOP HEADER -->
    <HeaderTop />

    <!-- CONTENT MAIN -->
    <main class="w-full h-[90vh] p-4 pt-1">
      <router-view></router-view>
    </main>
    <!-- CONTENT MAIN -->
  </div>
  <!-- CONTAINER -->
</template>

<script setup lang="ts">
  import HeaderTop from '../../components/Dashboard/Header/HeaderTop.vue'
  import { verifyAuthentication } from '../../utils/authentication'

  verifyAuthentication()
</script>
