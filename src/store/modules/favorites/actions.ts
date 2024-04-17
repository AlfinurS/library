import { bookListType } from "@/types/common"
import { filterByPagination, filterByPaginationArray } from "@/utils/filter"

export default {
  addBooks: ({ commit }, books: bookListType) => {
    commit("SET_BOOKS", books);
  },

  setFavoritesBooks: ({ commit }, favoritesBooks) => {
    commit("SET_FAVORITES_BOOKS", favoritesBooks);
  },

  initializeFavoritesFromLocalStorage ({ commit }) {
    const favoritesDataString = localStorage.getItem("favoritesBooks");
    const favoritesData = favoritesDataString ? JSON.parse(favoritesDataString) : null;
    if (favoritesData) {
      commit("SET_STORAGE_BOOKS", favoritesData);
    }
  },

  async searchBook({ commit, state }, {query, params}) {
    let result;
    if (query !== '') {
      result = state.books.items.filter((book) => {
        const regexp = new RegExp(query, "i");
        return regexp.test(book.volumeInfo.title) || regexp.test(book.volumeInfo.subtitle);
      },
    );
      params.count = result.length;
      state.searchResults = JSON.parse(JSON.stringify(filterByPagination(result, params)));
    } else {
      state.searchResults = JSON.parse(JSON.stringify(filterByPaginationArray(state.books.items, params)));
    }
    commit('SET_SEARCH_RESULTS', state.searchResults);
  },

  // Сбросить все значения модуля
  reset: ({ commit }) => {
    commit("RESET");
  },
};


