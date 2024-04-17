<template>
  <div class="header">
    <div class="header__logo">
      <img src="/logo.png" alt="logo" width="58" height="58" />
    </div>
    <div class="header__menu--wrapper">
      <div class="header__menu--input">
        <InputComponent
          @onInput="searchBook($event)"
          icon="iconSearch"
          placeholder="Search..."
        />
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, computed, reactive } from "vue";
import { useStore } from "vuex";
import type { bookListType, paginationType } from "@/types/common";
import InputComponent from "@/components/parts/InputComponent.vue";


const initPaginationData = (): paginationType => ({
  page: 1,
  page_size: 12,
  count: 0,
});

export default defineComponent({
  name: "HeaderComponent",
  components: {
    InputComponent,
  },

  setup() {
    const store = useStore();
    const favoritesBooks = computed(
      () => store.getters["favorites/favoritesBooks"]);
    const books = computed(
      (): bookListType => store.getters["favorites/books"]);

    const form = reactive({
      paginationData: initPaginationData() as paginationType,
    });

    async function searchBook(query) {
      await store.dispatch("favorites/searchBook", {query, params: form.paginationData} );
    }

    return { favoritesBooks, books, searchBook }
  }
});
</script>

<style lang="scss" scoped>
.header {
  box-shadow: 1px 5px 7px -2px rgba(240, 191, 228, 0.329) !important;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  &__logo {
    @media (max-width: 576px) {
      margin-bottom: 30px;
    }
  }
  &__menu {
    display: flex;
    &--wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    &--input {
      display: flex;
      margin-right: 80px;
    }
  }
}
</style>