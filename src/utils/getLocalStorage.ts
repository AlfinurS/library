import { bookConst } from "@/components/constants/common";
import { bookListType, bookType } from "@/types/common";


export function getLocalStorage() {
  const value = localStorage.getItem("favoritesBooks");
  const authBooks: bookListType = { 
    items: [],
    kind: '',
    totalItems: 0,
   };
  if (value) {
    authBooks["book"] = JSON.parse(value);
  }
  return authBooks.items;
}