import { Context } from '@nuxt/types'
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { Inject } from '@nuxt/types/app'

export class Api {
  axios: NuxtAxiosInstance

  constructor(axios: NuxtAxiosInstance) {
    this.axios = axios
  }

  async get(uri: string, params = {}) {
    return await this.axios.$get(uri, { params })
  }

  async post(uri: string, params = {}, config = {}) {
    return await this.axios.$post(uri, params, config)
  }

  async patch(uri: string, params = {}) {
    return await this.axios.$patch(uri, params)
  }
}

export default function ({ $axios }: Context, inject: Inject) {
  const api = new Api($axios)
  inject('api', api)
}
