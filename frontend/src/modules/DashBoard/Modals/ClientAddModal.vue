<template>
  <div
    ref="modal"
    class="w-screen h-screen hidden justify-center items-center absolute top-0 left-0 bg-[rgba(0,0,0,.5)]"
  >
    <form class="bg-main-orange p-2" @submit.prevent="addClientHandleClick">
      <fieldset class="flex justify-between items-center mb-4">
        <h3 class="text-xl font-semibold">Cadastrar Cliente</h3>
        <p
          class="text-3xl font-semibold mr-2"
          @click="() => activeModal(modal, false)"
        >
          x
        </p>
      </fieldset>

      <FormFieldSimple v-model="addInput.name" label-name="Nome do Cliente" />

      <fieldset class="mb-4">
        <button
          type="submit"
          class="border-2 border-main-dark p-5 pb-2 pt-2 float-right cursor-pointer"
        >
          Cadastrar
        </button>
      </fieldset>
    </form>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import { onMounted } from 'vue'
  import { activeModal } from './ultils'
  import FormFieldSimple from '../../../components/Dashboard/modals/FormFieldSimple.vue'
  import { clientsStore } from '../Clients/clientsStore'

  const modal = ref()
  const props = defineProps<{ setModal: any }>()

  const addInput = reactive({
    name: '',
  })

  onMounted(() => {
    props.setModal(modal.value)
  })

  const generateCodeTemp = () => {
    const date = new Date()
    const day = date.getDay()
    const hour = date.getHours()
    const min = date.getMinutes()
    const sec = date.getSeconds()
    return day + '' + hour + '' + min + '' + sec
  }

  const addClientHandleClick = () => {
    if (!addInput.name || addInput.name.length < 3) {
      alert('Nome do cliente é invalido!')
      return
    }

    const { setClient } = clientsStore()
    setClient({ id: 'AAAA', name: addInput.name })
    addInput.name = ''
    alert('Nova Loja foi Cadastrada')
  }
</script>
