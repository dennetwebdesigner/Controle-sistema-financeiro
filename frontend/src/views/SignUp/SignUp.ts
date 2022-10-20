import { reactive } from 'vue'
import { router } from '../../routes'
import { viewLog } from '../../utils/logs'
import { createUser } from './signUpServices'

export const inputsData = reactive({
  username: '',
  password: '',
  confirmPassword: '',
})

export const handleSubmitRegister = async (): Promise<void> => {
  const { username, password, confirmPassword } = inputsData

  if (!username || !password || !confirmPassword) {
    viewLog('Por favor preencher todos os campos!')
    return
  }

  if (password != confirmPassword) {
    viewLog('A conffirmação não esta igual a senha!')
    return
  }

  try {
    await createUser({ username, password })
    viewLog(
      'Cadastrado Com Sucesso, realize o login para terminar de ativar sua conta.'
    )
    router.push({ path: '/entrar' })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.response.data.code == 'P2002') {
      viewLog('Este nome de usuário ja esta em uso, por favor tente novamente!')
      return
    }

    viewLog('Ocorreu algum erro, por favor tente novamente!')
  }
}
