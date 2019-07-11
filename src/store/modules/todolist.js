const state = {
  refresh: false,
  missions: [{
      index: 0,
      content: 'The first thing to do today',
      isFinish: false
    },
    {
      index: 1,
      content: 'The 2nd thing to do today',
      isFinish: false
    },
    {
      index: 2,
      content: 'A already finish thing',
      isFinish: true
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
  },
  get_refresh: (state) => state.refresh
}

// mutations
const mutations = {
  ADD_MISSION(state, newMission) {
    state.missions.push(newMission);
  },
  CHANGE_STATE(state, index) {
    const currentState = state.missions[index].isFinish;
    state.missions[index].isFinish = !currentState;
  },
  REFRESH(state) {
    state.refresh = !state.refresh;
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
  },
  refresh({
    commit
  }) {
    commit('REFRESH');
  }

}

export default {
  state,
  getters,
  mutations,
  actions
}
