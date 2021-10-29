import * as types from "./types";

const mutations = {
  [types.GET_ANTI_HEROES](state, heroes) {
    state.heroes = heroes;
  },

  [types.GET_ANTI_HEROES](state, toggle) {
    state.isLoading = toggle;
  },
};

export default mutations;
