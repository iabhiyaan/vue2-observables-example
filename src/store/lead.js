const state = {
  all: [],
  current: {}
};

const mutations = {
  SET_ALL(state, payload) {
    state.all = payload;
  },
  SET_CURRENT(state, payload) {
    state.current = payload;
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
