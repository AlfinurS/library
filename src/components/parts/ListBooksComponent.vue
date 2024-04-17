<template>
  <div class="catalog__wrapper">
    <ul class="catalog__grid">
      <li
        class="catalog__item"
        v-for="book in searchResults"
        :key="book.id"
      >
        <ItemBookComponent 
          :book="book"
          :is-favorite="favoritesMap[book.id]"
           @handleClick="handleClick(book)"
        >
        </ItemBookComponent>
      </li>
    </ul>
  </div>

  <div class="catalog__pagination">
    <PaginationComponent
      :params="form.paginationData"
      @setPage="handleCurrentChange"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, reactive, onMounted, watch } from "vue";
import { useStore } from "vuex";
import ItemBookComponent from "@/components/parts/ItemBookComponent.vue";
import PaginationComponent from "@/components/parts/PaginationComponent.vue";
import { bookListType, paginationType } from "@/types/common";
import getBooks from "@/api/getBooks"

const initPaginationData = (): paginationType => ({
  page: 1,
  page_size: 12,
  count: 0,
});

export default defineComponent({
  name: "ListBooksComponent",
  components: {
    ItemBookComponent,
    PaginationComponent,
  },

  setup() {
    const store = useStore();
    const favoritesBooks = computed(() => store.getters["favorites/favoritesBooks"]);
    const books = computed(
      (): bookListType => store.getters["favorites/books"]);
    const searchResults = computed(() => store.getters["favorites/searchResults"]);

    const form = reactive({
      search: "",
      paginationData: initPaginationData() as paginationType,
    });
    const favoritesMap = reactive({});

    async function loadData() {
      try {
        const response = await getBooks();
        store.dispatch("favorites/addBooks", response);
        form.paginationData.count = response.items.length;
        searchBooks(form.search);
      } catch (error) {
        console.log("error");
      }
    }

    const searchBooks = (query) => {
       store.dispatch("favorites/searchBook", {query, params: form.paginationData});
    };

    const handleClick = (book) => {
      const isFavorite = favoritesMap[book.id];
      favoritesMap[book.id] = !isFavorite;
      if (isFavorite) {
        const result = JSON.parse(JSON.stringify(favoritesBooks.value));
        const currentBook = result.find((item) => item.id === book.id);
        store.commit('favorites/REMOVE_BOOK_FROM_FAVORITES', currentBook.id);
      } else {
        store.commit('favorites/SET_FAVORITES_BOOKS', book);
      }
      saveFavoritesToLocalStorage();
    };

    const saveFavoritesToLocalStorage = () => {
      localStorage.setItem('favorites', JSON.stringify(favoritesMap));
    };

    const loadFavoritesFromLocalStorage = () => {
      const savedFavorites = localStorage.getItem('favorites');
      if (savedFavorites) {
        Object.assign(favoritesMap, JSON.parse(savedFavorites));
      }
    };

    loadFavoritesFromLocalStorage();

    const handleCurrentChange = (val: number) => {
      form.paginationData.page = val;
      searchBooks(form.search);
    };

    
    watch(favoritesMap, () => {
      saveFavoritesToLocalStorage();
    });
    
    onMounted(loadData);

    return { books, favoritesBooks, handleClick, handleCurrentChange, form, searchResults, favoritesMap };
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
    box-shadow: 1px 5px 7px -2px rgba(158, 132, 182, 0.329);
    border-radius: 18px;
    background-color: #f3f0ff;
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
  &__wrapper {
    min-height: calc(100vh - 100px);
    margin-bottom: 20px;
  }
  &__pagination {
    display: flex;
  }
}
</style>
