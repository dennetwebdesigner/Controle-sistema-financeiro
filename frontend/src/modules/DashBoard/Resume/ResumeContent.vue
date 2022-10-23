<template>
  <section>
    <!-- RESULT VALUES  MONEY -->
    <h2 class="text-slate-50 text-3xl font-bold m-5 text-center">Resumo</h2>
    <div class="w-full">
      <CardsValueResult value="12,00" date="Hoje" />
      <CardsValueResult value="12,00" date="Semana" />
      <CardsValueResult value="12,00" date="Mês" />
    </div>

    <h2 class="text-slate-50 text-3xl font-bold m-5 text-center">
      Ações Rápidas
    </h2>

    <div class="w-full flex flex-wrap">
      <button class="border bg-main-orange rounded-2xl w-[45%] p-5 m-2 text-">
        Add. Cliente
      </button>
      <button class="border bg-main-orange rounded-2xl w-[45%] p-5 m-2">
        Add. Loja
      </button>
      <button class="border bg-main-orange rounded-2xl w-[45%] p-5 m-2">
        Add. Produto
      </button>
      <button class="border bg-main-orange rounded-2xl w-[45%] p-5 m-2">
        Add. Venda
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
  import CardsValueResult from './CardsValueResult.vue'
</script>
