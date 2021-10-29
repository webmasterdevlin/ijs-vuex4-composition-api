import * as types from "./types";

const mutations = {
  [types.GET_HEROES](state, heroes) {
    state.heroes = heroes;
  },

  [types.IS_LOADING_HERO](state, toggle) {
    state.isLoading = toggle;
  },

  [types.REMOVE_HERO](state, id) {
    state.heroes = state.heroes.filter((h) => h.id !== id);
  },
};

export default mutations;
