import { TMP_STATE } from "@/store/modules/favorites/constants";
//import { filterByPagination } from "@/utils/filter"

export default {
  SET_BOOKS(state, books) {
    state.books = books;
  },

  SET_FAVORITES_BOOKS(state, favoritesBooks) {
    state.favoritesBooks = favoritesBooks;
  },

  RESET(state) {
    const defaultState = Object.entries(TMP_STATE);
    defaultState.forEach((item) => {
      const key = item[0];
      const value = item[1];
      state[key] = value;
    });
  },
};