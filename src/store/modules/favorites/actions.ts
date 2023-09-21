import { bookListType } from "@/types/common"
import { bookType } from "@/types/common"


export default {
  addBooks: ({ commit }, books: bookListType) => {
    commit("SET_BOOKS", books);
  },

/*   setFavoritesBooks: ({ commit, state }, book: bookType) => {
   const result = JSON.parse(JSON.stringify(state.favoritesBooks[0]));
   //const value = Object.values(state.favoritesBooks)[book.id];
   console.log(result)
/*    if (Object.prototype.hasOwnProperty.call(state.favoritesBooks, book.id)) {
    
  } */
   //console.log(result)
    /* const isFindBook = result.find((item) => item.id === book.id);
    console.log(isFindBook)
    if (isFindBook) {
      state.favoritesBooks.items.splice(state.favoritesBooks.items.indexOf(isFindBook), 1);
    } else state.favoritesBooks.items.push(book); */
   

  setFavoritesBooks: ({ commit }, favoritesBooks: bookListType) => {
    commit("SET_FAVORITES_BOOKS", favoritesBooks);
  },

  // Сбросить все значения модуля
  reset: ({ commit }) => {
    commit("RESET");
  },
};
