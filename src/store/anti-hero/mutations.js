import * as types from "./types";

const mutations = {
  [types.GET_ANTI_HEROES](state, antiHeroes) {
    state.antiHeroes = antiHeroes;
  },

  [types.IS_LOADING_ANTI_HERO](state, toggle) {
    state.isLoading = toggle;
  },
};

export default mutations;
