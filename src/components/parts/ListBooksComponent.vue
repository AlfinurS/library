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
import { defineComponent, inject, computed, PropType } from "vue";
import { useStore } from "vuex";
import ItemBookComponent from "@/components/parts/ItemBookComponent.vue";
import { bookListType, bookType } from "@/types/common";
import { getLocalStorage } from "@/utils/getLocalStorage";

export default defineComponent({
  name: "ListBooksComponent",
  components: {
    ItemBookComponent,
  },

  props: {
    dataProps: {
      type: Object as PropType<bookType>,
      default: () => ({}),
    },
  },

  setup(props) {
    const axios: any = inject("axios");
    const store = useStore();
    const url = `https://www.googleapis.com/books/v1/volumes?q=architecture%22&key=&printType=books&maxResults=40`;
    
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
      saveLocalStorage(result.items);
      store.dispatch("favorites/setFavoritesBooks", result)
    };

    getLocalStorage()
    
    const setSearch = (props) => { 
      props.dataProps = books;
      console.log(props.dataProps);
    }
    setSearch(props)
    
    return { getBooks, books, favoritesBooks, handleClick, setSearch };
  },
});
</script>

<style lang="scss" scoped>
.catalog {
  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 18px; 
    justify-items: center;
    align-items: center;
    margin-top: 20px;
      @media (min-width: 960px) {
      grid-template-columns: 1fr 1fr;
    }
      @media (min-width: 1190px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
      @media (min-width: 1320px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
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
    background-color: #f5f5f5;
    padding: 38px 30px;
      @media (max-width: 1320px) {
        max-width: 320px;
    }
      @media (max-width: 1180px) {
        max-width: 400px;
    }
      @media (max-width: 960px) {
        max-width: 360px;
    }
      @media (max-width: 470px) {
        max-width: 250px;
    }
  }
}
</style>
