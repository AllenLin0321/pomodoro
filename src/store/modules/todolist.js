const state = {
  missions: [{
      index: 0,
      content: 'Read a book',
      isFinish: false
    },
    {
      index: 1,
      content: 'Pay bills',
      isFinish: true
    },
    {
      index: 2,
      content: 'Hit the gym',
      isFinish: false
    },
    {
      index: 3,
      content: 'Buy a PS4',
      isFinish: false
    }
  ]
}

// getters 
const getters = {
  get_allMission: (state) => {
    return state.missions;
  },
  get_nFinishList: (state) => {
    return state.missions.filter(
      mission => mission.isFinish == false);
  },
  get_finishList: (state) => {
    return state.missions.filter(
      mission => mission.isFinish == true);
  }
}

// mutations
const mutations = {
  ADD_MISSION(state, newMission) {
    state.missions.push(newMission);
  },
  CHANGE_STATE(state, index) {
    const currentState = state.missions[index].isFinish;
    state.missions[index].isFinish = !currentState;
  }

}

// action
const actions = {
  add_mission({
    state,
    commit
  }, newMission) {
    newMission.index = state.missions.length;
    commit('ADD_MISSION', newMission);
  },
  change_order({
    state
  }, index) {
    state.missions[0].index = index;
    state.missions[index].index = 0;
    state.missions.sort((a, b) => a.index - b.index);
  },
  change_state({
    commit
  }, index) {
    commit('CHANGE_STATE', index);
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
