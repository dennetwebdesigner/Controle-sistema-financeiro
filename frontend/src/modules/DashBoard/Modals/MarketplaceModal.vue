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

      <FormFieldSimple v-model="addInput.name" label-name="Nome da Loja" />

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
  import { marketplacesStore } from '../Marketplaces/marketplacesStore'

  const modal = ref()
  const props = defineProps<{ setModal: any }>()

  const addInput = reactive({
    name: '',
  })

  // LIFECIRCLE
  onMounted(() => {
    props.setModal(modal.value)
  })

  // MODULES
  const addClientHandleClick = () => {
    if (!addInput.name || addInput.name.length < 3) {
      alert('Nome da Loja é invalido!')
      return
    }

    const { setMarketplace } = marketplacesStore()
    setMarketplace({ id: 'AAAA', name: addInput.name })
    addInput.name = ''
  }
</script>
