import favoritesState from "./modules/favorites/state";
import favoritesActions from "./modules/favorites/actions";
import favoritesMuations from "./modules/favorites/mutations";
import favoritesGetters from "./modules/favorites/getters";

export default {
  favorites: {
    namespaced: true,
    state: favoritesState,
    actions: favoritesActions,
    mutations: favoritesMuations,
    getters: favoritesGetters,
  }
};
