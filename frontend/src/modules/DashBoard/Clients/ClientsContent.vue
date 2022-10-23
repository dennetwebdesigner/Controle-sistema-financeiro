<template>
  <header class="flex flex-wrap items-center mt-6">
    <section class="w-[15%] h-[30px]">
      <button
        class="w-full bg-main-orange flex justify-center items-center font-semibold text-slate-50 rounded-md ml-4"
        @click="() => activeModal(addClientModal, true)"
      >
        <mdicon name="plus" size="30px" />
      </button>
    </section>
    <section class="grow text-slate-50 text-3xl text-center">Clientes</section>
    <section class="w-[100%] flex pt-2">
      <select
        v-model="dataInputs.selectTypeSearch"
        class="h-[40px] rounded-l-lg"
      >
        <option value="name">Nome</option>
        <option value="code">Codigo</option>
      </select>
      <input
        v-model="dataInputs.searchClients"
        type="text"
        placeholder="pesquisar por nome/código"
        class="w-full p-2 rounded-r-lg"
        @keypress="clientFind"
      />
    </section>
  </header>

  <table
    class="w-full mt-5 mb-2 text-slate-50 font-semibold text-xl text-center"
  >
    <tr class="w-full border-b border-white">
      <td class="border-r border-white pb-2">Código</td>
      <td class="pb-2">Nome</td>
    </tr>
    <tr
      v-for="client in clientsData"
      :key="client.id"
      class="w-full border-b border-white"
    >
      <td class="border-r border-white pb-2">{{ client.id }}</td>
      <td class="pb-2">{{ client.name }}</td>
    </tr>
  </table>
  <ClientAddModalVue :set-modal="setModal" />
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import ClientAddModalVue from '../Modals/ClientAddModal.vue'
  import { clientsData, dataInputs } from './services'
  import {
    clientFind,
    clientsAll as listClient,
  } from './services/ClientsServices'
  import { activeModal } from '../Modals/ultils'
  const addClientModal = ref()

  const setModal = (modal: any) => {
    addClientModal.value = modal
  }

  listClient()
</script>
