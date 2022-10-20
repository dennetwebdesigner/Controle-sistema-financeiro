import { setLocal } from '.'

const { stringify } = JSON
export const authSaveLocal = async (data: {
  authentication: boolean
  user: string
  token: string
}) => {
  setLocal({ key: 'authenticate', value: stringify(data.authentication) })
  setLocal({ key: 'user', value: stringify(data.user) })
  setLocal({ key: 'token', value: stringify(data.token) })
}
