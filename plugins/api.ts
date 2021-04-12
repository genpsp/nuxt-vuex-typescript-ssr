import { Plugin } from '@nuxt/types'
import { NuxtAxiosInstance } from '@nuxtjs/axios'

export class Api {
  axios: NuxtAxiosInstance

  constructor(axios: NuxtAxiosInstance) {
    this.axios = axios
    axios.setBaseURL('https://jsonplaceholder.typicode.com/')
  }

  async get(path: string, params = {}) {
    return await this.axios.$get(path, { params })
  }

  async post(path: string, params = {}, config = {}) {
    return await this.axios.$post(path, params, config)
  }

  async patch(path: string, params = {}) {
    return await this.axios.$patch(path, params)
  }
}

const api: Plugin = ({ $axios }, inject) => {
  const api = new Api($axios)
  inject('api', api)
}

export default api
