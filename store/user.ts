import { getterTree, mutationTree, actionTree } from 'typed-vuex'

export const state = () => ({
  age: 0 as number,
  name: '' as string,
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
  }
)
