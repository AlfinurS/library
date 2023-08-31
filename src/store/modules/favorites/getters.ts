import { bookListType } from "@/types/common"

export default {
  books: ({ books }: { books: bookListType }) => books,
  favoritesBooks: ({ favoritesBooks }: { favoritesBooks: bookListType }) => favoritesBooks,
};
