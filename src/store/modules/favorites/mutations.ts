import { TMP_STATE } from "@/store/modules/favorites/constants";
//import { filterByPagination } from "@/utils/filter"

export default {
  SET_BOOKS(state, books) {
    state.books = books;
  },

  SET_FAVORITES_BOOKS(state, book) {
    state.favoritesBooks.push(book);
  },

  SET_SEARCH_RESULTS(state, searchResults) {
    state.searchResults = searchResults;
  },
  
  REMOVE_BOOK_FROM_FAVORITES(state, bookId) {
    state.favoritesBooks = state.favoritesBooks.filter(book => book.id !== bookId);
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