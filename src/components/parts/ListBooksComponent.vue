<template>
  <ul class="catalog__list">
      <li
        class="catalog__item"
        v-for="book in books.items"
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
  name: "ListBooksComponent",
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
  &__list {
    margin-top: 40px;
  }
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    box-shadow: 0px 5px 7px -2px #aaacb1;
    border-radius: 18px;
    background-color: #aaacb1;
    padding: 32px 18px;
      @media (min-width: 748px) {
        flex-direction: row;
      }
      @media (min-width: 1200px) {
        flex-direction: row;
      }
  }
  
  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: cover;
    &-wrapper {
      width: 60px;
    }
    &-wrap {
      position: relative;
      overflow: hidden;
      width: 100%;
      padding-bottom: 116%;
    }
  }
  &__title {
    margin-right: 18px;
    margin-left: 18px;
    text-align: center;
    @media (min-width: 748px) {
      text-align: left;
    }
  }
}
</style>
