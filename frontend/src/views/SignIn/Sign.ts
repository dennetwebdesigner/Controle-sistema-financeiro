/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref, reactive } from 'vue'

export const dataInput = reactive({
  username: '',
  password: '',
})

// password input hiden or visible
export const PasswordEnabled = ref<string>('password')
export const ConfirmPasswordEnabled = ref<string>('password')

export const seePassword = (): void => {
  PasswordEnabled.value =
    PasswordEnabled.value == 'password' ? 'text' : 'password'
}

export const seeConfirmPassword = (): void => {
  ConfirmPasswordEnabled.value =
    ConfirmPasswordEnabled.value == 'password' ? 'text' : 'password'
}
