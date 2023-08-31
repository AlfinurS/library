import { bookListType } from "@/types/common"
import { bookType } from "@/types/common"

export default {
  addBooks: ({ commit }, books: bookListType) => {
    commit("SET_BOOKS", books);
  },

  setFavoritesBooks: ({ commit, state }, book: bookType) => {
    const isFindBook = state.favoritesBooks.items.find((item) => item.id === book.id);
    if (isFindBook) {
      state.favoritesBooks.items.splice(state.favoritesBooks.items.indexOf(isFindBook), 1);
    } else state.favoritesBooks.items.push(book);
    commit('SET_FAVORITES_BOOKS', book);
  },

  // Сбросить все значения модуля
  reset: ({ commit }) => {
    commit("RESET");
  },
};
