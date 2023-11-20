import { bookConst } from "@/components/constants/common";
import { bookListType, bookType } from "@/types/common";
import { useStore } from "vuex";

export function getLocalStorage() {
  const store = useStore();
  const value = localStorage.getItem("favorites");
  if (value) {
    const favoritesData: bookType[] = JSON.parse(value);
    store.dispatch("favorites/setFavoritesBooks", {items: favoritesData})
  }
}