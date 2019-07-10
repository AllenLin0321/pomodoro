// import getters from './getters'
import todolist from './modules/todolist'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isBreak: false,
    icons: {
      todolist: "list",
      analytics: "insert_chart",
      ringtones: "library_music",
      close: "close"
    }
  },
  modules: {
    todolist
  },
  getters: {
    isBreak: state => state.isBreak,
    getIcons: state => state.icons
  },
  mutations: {
    CHANGE_BREAK(state) {
      state.isBreak = !state.isBreak
    }
  },
  actions: {
    change_break({
      commit
    }) {
      commit('CHANGE_BREAK')
    }
  }
})
