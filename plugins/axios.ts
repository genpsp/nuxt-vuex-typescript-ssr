import { Plugin } from '@nuxt/types'

const axios: Plugin = ({ $axios, redirect }) => {
  $axios.onRequest((config) => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError((error) => {
    const code = error.response!.status
    if (code === 400) {
      redirect('/400')
    }
  })
}

export default axios
