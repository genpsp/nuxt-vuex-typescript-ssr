import { Context } from '@nuxt/types'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

export default ({ store }: Context) => {
  createPersistedState({
    paths: [''],
    storage: {
      getItem: (key) => Cookies.get(key),
      setItem: (key, value) =>
        Cookies.set(key, value, { expires: 3, secure: false }),
      removeItem: (key) => Cookies.remove(key),
    },
  })(store)
}
