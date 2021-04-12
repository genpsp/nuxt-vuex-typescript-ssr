import { getterTree, mutationTree, actionTree } from 'typed-vuex'

export const state = () => ({
  age: 0 as number,
  name: '' as string,
  checked: false as boolean,
  selectedItems: [],
  sampleData: [],
})

export type UserState = ReturnType<typeof state>

type FormPayload = {
  key: string
  value: string
}

export const getters = getterTree(state, {
  getAge: (state) => state.age,
  getName: (state) => state.name,
})
export const mutations = mutationTree(state, {
  setAge(state, age: number): void {
    state.age = age
  },
  setForm(state, payload: FormPayload): void {
    // @ts-ignore
    state[payload.key] = payload.value
  },
  setSelectedItems(state, payload): void {
    state.selectedItems = payload
  },
  setSampleData(state, payload): void {
    state.sampleData = payload
  },
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    getOlder({ getters, commit }) {
      const currentAge = getters.getAge
      commit('setAge', (currentAge as number) + 1)
    },
    editForm({ commit }, payload) {
      commit('setForm', payload)
    },
    updateSelectedItems({ commit }, payload) {
      commit('setSelectedItems', payload)
    },
    async fetchSampleData({ commit }) {
      const res = await this.$api.get('/posts')
      commit('setSampleData', res.data)
    },
  }
)
