<template>
<div class="container">
  <div
    v-if="currentBook"
    class="goods__item"
  >
    <div class="goods__image-wrapper">
      <div class="goods__image-wrapp">
        <img
          class="goods__image"
          :src="getImage(currentBook.volumeInfo.imageLinks.thumbnail)"
          :alt="currentBook.volumeInfo.title"
        >
      </div>
    </div>
  </div>
  <div class="goods__content">
    <ul class="goods">
      <li v-for="category in currentBook.volumeInfo.categories" :key="category" class="goods__list">
        {{ category }}
      </li>
    </ul>
    <p class="goods__title">
      {{ currentBook.volumeInfo.title }}
    </p>
    <ul>
      <li v-for="author in currentBook.volumeInfo.authors" :key="author">
        {{ author }}
      </li>
    </ul>
    <p class="goods__text">
      {{ currentBook.volumeInfo.description }}
    </p>
    
    <p class="goods__text">
      {{ currentBook.searchInfo.textSnippet }}
    </p>
  </div>
</div>

</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { bookListType } from "@/types/common";


export default defineComponent({
  name: "BookDetailsPage",
  components: {
    //iconMark,
    //ButtonComponent,
  },

  setup() {
    const store = useStore();
    const route = useRoute();
    const favoritesBooks = computed(
      () => store.getters["favorites/favoritesBooks"]);
    const books = computed(
      (): bookListType => store.getters["favorites/books"]);

    const id = route.params.id as string;

    const currentBook = computed(() => {
      const bookFind = books.value.items.find((book) => book.id === id)
      if (bookFind) {
        return bookFind;
      }
      return null;
    });
   
    const getImage = (image): string => {
      return `${image}`;
    }

    return { favoritesBooks, books, getImage, currentBook };
  },
  
});
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-content: start;
  justify-items: center;
}
.goods {
  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: cover;
    &-wrapper {
      width: 180px;
    }
    &-wrapp {
      position: relative;
      overflow: hidden;
      width: 100%;
      padding-bottom: 149%;
    }
  }
  &__title {
    color: #bd9e6d;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 8px;
    font-size: 12px;
    font-weight: 500;
    min-height: 20px;
  }
  &__list {
    margin-left: 0 !important;
    padding-left: 0 !important;
  }
}
</style>
<style lang="scss">
@import "@/assets/scss/style.scss";
</style>
