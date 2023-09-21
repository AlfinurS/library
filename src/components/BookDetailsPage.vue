<template>
  <div
    v-if="currentBook"
    class="goods__item"
  >
    <div class="goods__text">
      {{ currentBook.id }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { bookType } from "@/types/common";
import { bookConst } from "@/components/constants/common";


export default defineComponent({
  name: "BookDetailsPage",
  components: {
    //iconMark,
    //ButtonComponent,
  },

  props: {
    book: {
      type: Object as PropType<bookType>,
      default: () => bookConst,
    },
  },

  setup(props) {
    const store = useStore();
    const route = useRoute();
    const favoritesBooks = computed(() => store.getters["favorites/favoritesBooks"]);
    const books = computed(() => store.state.favorites.books);
    const isFavorite: any = ref(false);

    const bookId = route.params.id;
    const currentBook = () => {
      console.log(bookId)
      const bookFind = books.value.find(
        (book) => book.id === bookId
      )
      if (bookFind) {
        return bookFind;
      }
      return null;
    }
    const handleClick = () => {
      console.log(props.book)
/*       if (Object.values(favoritesBooks.value).includes(props.book.id)) {
          store.dispatch("favorites/setFavoritesBooks", props.book);
          isFavorite.value = false;
          
      } else {
        isFavorite.value = true;
        store.dispatch("favorites/setFavoritesBooks", props.book);
        
      } */
    }
    
    const deleteFavorite = () => {
      isFavorite.value = false;
      
    }
    const getImage = (image): string => {
      return `${image}`;
    }

    return { favoritesBooks, isFavorite, handleClick, deleteFavorite, getImage, currentBook };
  },
  
});
</script>

<style lang="scss" scoped>
.catalog {
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
  &__item-wrapper { 
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  &__title {
    font-size: 13px;
    font-weight: 400;
    text-transform: uppercase;
    color: #536068;
    margin-top: 12px;
    text-align: center;
  }
  &__text {
    font-size: 12px;
    margin-top: 8px;
    text-transform: lowercase;
    color: #37474f;
    text-align: center;
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.icon {
  &__wrapp {
    position: absolute;
    top: 16px;
    left: 28px;
  }
  &__color--active {
    color: #F70085;
    cursor: pointer;
  }
  &__color--active:hover {
    opacity: 0.7;
}
}

</style>
