import * as types from "./types";
import { get } from "@/api/axiosConfig";

export function getAntiHeroesAction({ commit }) {
  commit(types.IS_LOADING_ANTI_HERO, true);

  return get("anti-heroes")
    .then(({ data }) => commit(types.GET_ANTI_HEROES, data))
    .catch((e) => console.log(e.message))
    .finally(() => commit(types.IS_LOADING_ANTI_HERO, false));
}
