import { accessorType } from '~/store'
import { Api } from '~/plugins/api'

declare module 'vue/types/vue' {
  interface Vue {
    $accessor: typeof accessorType
    $api: Api
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $accessor: typeof accessorType
  }
}

declare module 'vuex' {
  interface Store<S> {
    $api: Api
  }
}
