import { getterTree, mutationTree, actionTree } from 'typed-vuex'

export const state = () => ({
  age: 0 as number,
  name: '' as string,
})

export type UserState = ReturnType<typeof state>

export const getters = getterTree(state, {
  getAge: (state) => state.age,
  getName: (state) => state.name,
})
export const mutations = mutationTree(state, {
  setAge(state, age: number): void {
    state.age = age
  },
  setName(state, name: string): void {
    state.name = name
  },
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    getOlder({ getters, commit }) {
      const currentAge = getters.getAge
      commit('setAge', currentAge + 1)
    },
    changeName({ commit }, name: string) {
      commit('setName', name)
    },
  }
)
