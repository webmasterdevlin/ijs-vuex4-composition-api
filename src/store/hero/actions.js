import * as types from "./types";
import { get } from "@/api/axiosConfig";

export function getHeroesAction({ commit }) {
  commit(types.IS_LOADING_HERO, true);

  return get("heroes")
    .then(({ data }) => commit(types.GET_HEROES, data))
    .catch((e) => console.log(e.message))
    .finally(() => commit(types.IS_LOADING_HERO, false));
}
