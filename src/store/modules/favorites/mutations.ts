import { TMP_STATE } from "@/store/modules/favorites/constants";

export default {
  SET_BOOKS(state, books) {
    state.books = books;
  },

  SET_FAVORITES_BOOKS(state, favoriteBooks) {
    state.favoriteBooks = favoriteBooks;
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