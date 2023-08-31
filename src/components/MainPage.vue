<template>
  <div class="catalog">
        <ListBooksComponent></ListBooksComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, computed } from 'vue';
import { useStore } from "vuex";
import ListBooksComponent from "@/components/parts/ListBooksComponent.vue";

export default defineComponent({
  name: 'MainPage',
  components: {
  ListBooksComponent,
  },
  

  setup() {
    const axios: any = inject("axios");
    const store = useStore();
    const url = `https://www.googleapis.com/books/v1/volumes?q=%22subject%3AArchitecture%22&key=&printType=books&maxResults=40`;
    //const favoritesBooks = computed(() => store.getters["favorites/favoritesBooks"]);
    const books = computed(() => store.state.favorites.books);
    const getBooks = () => {
      axios
        .get(url)
        .then(( {data} ) => {
          store.dispatch("favorites/addBooks", data);
        })
        .catch(() => {
          console.log("error");
        });
      };
    getBooks()
    return { getBooks, books};
  },
  
});
</script>

<style scoped lang="scss">
</style>
