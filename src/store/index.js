import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 自动引入modules
const modules = {}
function requireAll(r) {
  return r.keys().map(key => {
    const k = key.replace('./', '').replace('.js', '')
    modules[k] = r(key).default
  })
}
requireAll(require.context('./modules', false, /\.js/))

const getters = {}

const store = new Vuex.Store({
  modules,
  getters
})

export default store
