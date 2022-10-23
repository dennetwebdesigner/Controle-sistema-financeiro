<template>
  <div
    ref="modal"
    class="w-screen h-screen hidden justify-center items-center absolute top-0 left-0 bg-[rgba(0,0,0,.5)]"
  >
    <form class="bg-main-orange p-2" @submit.prevent="addProductHandleClick">
      <fieldset class="flex justify-between items-center mb-4">
        <h3 class="text-xl font-semibold">Cadastrar Produto</h3>
        <p
          class="text-3xl font-semibold mr-2"
          @click="() => activeModal(modal, false)"
        >
          x
        </p>
      </fieldset>

      <!-- FIELD PRODUCT NAME -->
      <FormFieldSimple v-model="addInput.name" label-name="Nome:" />

      <!-- FIELD PRODUCT NAME -->
      <FormFieldSimple v-model="addInput.description" label-name="Descrição:" />

      <!-- FIELD PRODUCT NAME -->
      <FormFieldSimple v-model="addInput.stock" label-name="Nº no estoque:" />

      <!-- FIELD PRODUCT NAME -->
      <FormFieldSimple v-model="addInput.code" label-name="codigo:" />

      <!-- FIELD PRODUCT NAME -->
      <FormFieldSimple v-model="addInput.value" label-name="valor:" />

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
  import { productsStore } from '../Products/productsStore'

  const modal = ref()
  const props = defineProps<{ setModal: any }>()

  const addInput = reactive({
    name: '',
    description: '',
    value: '',
    code: '',
    stock: '0',
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

  const addProductHandleClick = () => {
    if (!addInput.name || addInput.name.length < 3) {
      alert('Nome do produto/serviço é invalido!')
      return
    } else if (!addInput.description || addInput.description.length < 3) {
      alert('Descrição do produto/serviço  é invalido!')
      return
    } else if (!addInput.code || addInput.code.length < 3) {
      alert('codigo do produto/serviço  é invalido!')
      return
    } else if (!addInput.stock) {
      alert('Insira a quantidade do produto/serviço')
      return
    } else if (!addInput.value) {
      alert('Insira o valor do produto/serviço!')
      return
    }

    const { setProduct } = productsStore()
    setProduct({
      code: generateCodeTemp(),
      description: addInput.description,
      stock: addInput.stock,
      name: addInput.name,
      value: addInput.value,
    })
    addInput.name = ''
    alert('Nova Loja foi Cadastrada')
  }
</script>
