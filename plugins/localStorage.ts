import { Plugin } from '@nuxt/types'
import createPersistedState from 'vuex-persistedstate'

const localStorage: Plugin = ({ store }) => {
  createPersistedState({
    paths: ['user'],
  })(store)
}

export default localStorage
