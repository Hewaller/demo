let viewHistory = []

const state = {
  direction: 'in' // in,out
}

const mutations = {
  UPDATE_DIRECTION(state, path) {
    const index = viewHistory.findIndex(item => item === path)
    if (index === -1) {
      viewHistory.push(path)
      state.direction = 'in'
    } else {
      viewHistory = viewHistory.slice(0, index + 1)
      state.direction = 'out'
    }
  },
  RESET_DIRECTION() {
    viewHistory = []
  }
}

const actions = {
  resetDirection({ commit }) {
    commit('RESET_DIRECTION')
  },
  updateDirection({ commit }, path) {
    commit('UPDATE_DIRECTION', path)
  }
}

export default {
  state,
  mutations,
  actions
}
