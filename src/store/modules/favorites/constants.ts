import { bookListType, bookType } from "@/types/common";

type favouritesType = {
  books: bookListType;
  favoritesBooks: bookType[];
  searchResults: bookType[];
}

export const TMP_STATE: favouritesType = {
  books: {
    items: [],
    kind: "",
    totalItems: 0,
  },
  favoritesBooks: [],
  searchResults: [],
};