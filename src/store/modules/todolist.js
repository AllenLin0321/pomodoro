const state = {
  missions: [{
      content: 'The first thing to do today',
      isFinish: false
    },
    {
      content: 'The 2nd thing to do today',
      isFinish: false
    },
    {
      content: 'A already finish thing',
      isFinish: true
    }
  ]
}

// getters 
const getters = {
  get_allMission: (state) => {
    return state.missions;
  }
}

// mutations
const mutations = {
  ADD_MISSION(state, newMission) {
    state.missions.push(newMission);
  }
}

// action
const actions = {
  add_mission({
    commit
  }, newMission) {
    commit('ADD_MISSION', newMission);
  },
  change_order({
    state
  }, order) {
    [state.missions[0], state.missions[order]] = [state.missions[order], state.missions[0]];
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
