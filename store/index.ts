import { getAccessorType } from 'typed-vuex'
import { Context } from '@nuxt/types'
import * as user from '~/store/user'

export const state = () => ({})
export const getters = {}
export const mutations = {}
export const actions = {
  nuxtServerInit({ commit }: any, { app }: Context) {
    if (app.$cookies.get('vuex')) {
      const STATE = app.$cookies.get('vuex')
      STATE.user && commit('user/setAge', STATE.user.age)
    }
  },
}

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    user,
  },
})
