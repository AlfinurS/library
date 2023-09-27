<template>
  <ul class="catalog__grid">
      <li
        class="catalog__item"
        v-for="book in books.items"
        :key="book.id"
      >
        <ItemBookComponent :book="book" @handleClick="handleClick"></ItemBookComponent>
      </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, inject, computed } from "vue";
import { useStore } from "vuex";
import ItemBookComponent from "@/components/parts/ItemBookComponent.vue";
import { bookListType, bookType } from "@/types/common";
//import { bookConst } from "@/components/constants/common";

export default defineComponent({
  name: "ListBooksComponent",
  components: {
    ItemBookComponent,
  },

  setup() {
    const axios: any = inject("axios");
    const store = useStore();
    const url = `https://www.googleapis.com/books/v1/volumes?q=%22subject%3AArchitecture%22&key=&printType=books&maxResults=40`;
    const favoritesBooks = computed(
      (): bookListType => store.getters["favorites/favoritesBooks"]);
    const books = computed(
      (): bookListType => store.getters["favorites/books"]);
      
    const getBooks = () => {
      axios
        .get(url)
        .then(( { data }: { data: bookListType }) => {
          store.dispatch("favorites/addBooks", data);
        })
        .catch(() => {
          console.log("error");
        });
    };
    getBooks()


    const saveLocalStorage = (favorites) => {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
      //currentBook - объект, result - объект
    const handleClick = (book) => {
      const result = JSON.parse(JSON.stringify(favoritesBooks.value));
      const currentBook = result.items.find((item: bookType) => item.id === book.id);
      if (currentBook) {
        const index = result.items.indexOf(currentBook);
        if (index !== -1) {
          result.items.splice(index, 1);
        }
      } else { 
        result.items.push(book);
      }
      saveLocalStorage(result);
      store.dispatch("favorites/setFavoritesBooks", result)
    };


    const getLocalStorage = () => {
      const value = localStorage.getItem("favorites");
      if (value) {
        const favoritesData = JSON.parse(value);
      console.log(favoritesData)
      }
    }
    getLocalStorage()
    

    return { getBooks, books, favoritesBooks, handleClick };
  },
});
</script>

<style lang="scss" scoped>
.catalog {
  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    margin-top: 20px;
      @media (min-width: 748px) {
      grid-template-columns: 1fr 1fr;
      gap: 18px; 
    }
      @media (min-width: 1200px) {
        grid-template-columns: 1fr 1fr  1fr 1fr;
    }
  }
  &__item {
    position: relative;
    display: grid;
    grid-template-rows: 234px;
    justify-items: center;
    justify-content: center;
    max-width: 250px;
    width: 100%;
    box-shadow: 1px 5px 7px -2px rgba(154, 128, 184, 0.329);
    border-radius: 18px;
    background-color: #ffffff;
    padding: 38px 30px;
      @media (min-width: 838px) {
        max-width: 340px;
    }
      @media (min-width: 1320px) {
        max-width: 240px;
    }
  }
}
</style>
