<template>
  <ul class="catalog__grid">
      <li
        class="catalog__item"
        v-for="book in favoritesBooks.items"
        :key="book.id"
      >
        <ItemBookComponent :book="book" ></ItemBookComponent>
      </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import ItemBookComponent from "@/components/parts/ItemBookComponent.vue";


export default defineComponent({
  name: "FavoritesPage",
  components: {
    ItemBookComponent,
  },
  setup() {
    const store = useStore();
    const favoritesBooks = computed(() => store.getters["favorites/favoritesBooks"]);
    const books = computed(() => store.getters["favorites/books"]);


    return { books, favoritesBooks };
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
        grid-template-columns: 1fr 1fr 1fr;
    }
  }
  &__item {
    position: relative;
    display: grid;
    grid-template-rows: 234px;
    justify-items: center;
    justify-content: center;
    max-width: 300px;
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