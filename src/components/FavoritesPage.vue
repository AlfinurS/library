<template>
  <div class="catalog__header">
    <span class="catalog__header--headline">Wishlist</span>
    <div class="catalog__header--subtitel" v-if="favoritesBooks.items.length === 0">
      <span class="catalog__subtitel">Your favorite books </span>
      <span  class="catalog__text">Add book that catch your eye to your personal wishlist for later. </span>
    </div>
  </div>

  <div class="catalog">
        <ul v-if="favoritesBooks" class="catalog__list">
          <li
            class="catalog__item"
            v-for="book in favoritesBooks.items"
            :key="book.id"
          >
            <router-link
              :to="{ name: 'BookDetailsPage', params: { id: book.id } }"
              class="catalog__image-wrapper link"
            >
            <div class="catalog__image-wrapp">
              <img
                class="catalog__image"
                :src="getImage(book.volumeInfo.imageLinks.smallThumbnail)"
                :alt="book.volumeInfo.title"
              >
            </div>
            </router-link>
            <div class="catalog__content">
              <span class="catalog__title">
                {{ book.volumeInfo.authors[0]}}
              </span>
              <span class="catalog__title">
                  {{ book.volumeInfo.title }}
              </span>
            </div>
            <div class="icon__wrapp"><ButtonComponent icon="iconMark" class="icon__color--active" @onClick="removeBook(book)"/></div>
          </li>
        </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import ButtonComponent from "@/components/parts/ButtonComponent.vue";
import { bookType } from "@/types/common";

export default defineComponent({
  name: "FavoritesPage",
  components: {
    ButtonComponent,
  },
  setup() {
    const store = useStore();
    const favoritesBooks = computed(() => store.getters["favorites/favoritesBooks"]);
    const books = computed(() => store.getters["favorites/books"]);

    const getImage = (image): string => {
      return `${image}`;
    }

    const removeBook = (book) => {
      const result = JSON.parse(JSON.stringify(favoritesBooks.value));
      const currentBook = result.items.find((item: bookType) => item.id === book.id);
      if (currentBook) {
        const index = result.items.indexOf(currentBook);
        result.items.splice(index, 1);
      }
      store.dispatch("favorites/setFavoritesBooks", result)
    }

    return { getImage, books, favoritesBooks, removeBook };
  },
});
</script>

<style lang="scss" scoped>
.catalog {
  margin-top: 20px;
  margin-left: 8px;
  margin-right: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 576px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
      &--headline {
      font-size: 20px;
      font-weight: 600;
      color: #6a769e7f;
      margin-bottom: 30px;
    }
    &--subtitel {
      font-size: 18px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 30px;
    }
  }
  &__list {
    max-width: 1000px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 18px; 
    @media (min-width: 600px) {
      grid-template-columns: 1fr 1fr;
    }
  }
  &__item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    box-shadow: 0px 5px 7px -2px rgba(154, 128, 184, 0.329);
    border-radius: 18px;
    background-color: #ffffff;
    padding: 18px 18px;
      @media (min-width: 748px) {
        flex-direction: row;
      }
      @media (min-width: 1200px) {
        flex-direction: row;
      }
  }
  &__content {
    display: flex;
    flex-direction: column;
    margin-left: 18px;
    max-width: 356px;
  }
  &__title {
    font-size: 14px;
    margin-bottom: 12px;
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
      width: 80px;
    }
    &-wrapp {
      position: relative;
      overflow: hidden;
      width: 100%;
      padding-bottom: 149%;
    }
  }
}
.icon {
  &__wrapp {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
  &__color--active {
    color: #F70085;
  }
  &__wrapp:hover {
    opacity: 0.7;
}
}
</style>