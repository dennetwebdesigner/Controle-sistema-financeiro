import { AxiosResponse } from 'axios'
import { api } from '../../utils/api'
import { dataInput } from './Sign'
import { dataUser } from './signInDTO'
import { useAuthStore } from '../../store/useAuthStore'

export const setAuth = async (data: dataUser): Promise<AxiosResponse> =>
  await api.post('/auth', data)

export const generateAuth = async (): Promise<void> => {
  const { username, password } = dataInput

  if (!username || !password) {
    alert('Preencha os campos por favor!')
    return
  }

  try {
    const auth = await setAuth({ username, password })
    const token = auth.data.token
    console.log(token)
    const { setLogin } = useAuthStore()
    setLogin({ token, authentication: true, user: 'any' })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    const { setLogout } = useAuthStore()
    if (error.response.status == 400) alert('Usuário ou senha incorreta!')
    setLogout()
  }
}
