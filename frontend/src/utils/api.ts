import axios from 'axios'
import { getLocal } from './localStorage/index'

const token = getLocal({ key: 'token' })
const baseURL = 'http://localhost:3000/v1'
const { parse } = JSON
const authToken = token ? 'Bearer ' + parse(token) : ''
console.log(authToken)
export const api = axios.create({
  baseURL,
  headers: {
    Authorization: authToken,
  },
})
