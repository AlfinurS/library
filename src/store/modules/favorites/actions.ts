import { bookListType } from "@/types/common"
import { bookType } from "@/types/common"


export default {
  addBooks: ({ commit }, books: bookListType) => {
    commit("SET_BOOKS", books);
  },

  setFavoritesBooks: ({ commit }, favoritesBooks: bookListType) => {
    commit("SET_FAVORITES_BOOKS", favoritesBooks);
  },

  // Сбросить все значения модуля
  reset: ({ commit }) => {
    commit("RESET");
  },
};


