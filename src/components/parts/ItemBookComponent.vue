<template>
  <div class="catalog__item-wrapper">
    <router-link
    :to="{ name: 'BookDetailsPage', params: { id: book.id } }"
    class="catalog__image-wrapper"
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
          {{ book.volumeInfo.title }}
      </span>
      <span class="catalog__title">
        {{ book.volumeInfo.authors[0]}}
      </span>
        <span class="catalog__text">
        {{ book.volumeInfo.description }}
        </span>
    </div>
    <div class="icon__wrapp">
      <ButtonComponent @onClick="handleClick" 
      v-if="!isFavorite" 
      :icon="iconMark" 
      class="icon__color">
      </ButtonComponent>
      
      <ButtonComponent @onClick="handleClick" 
      v-if="isFavorite" 
      icon="iconMark"
      class="icon__color--active">
      </ButtonComponent>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import { useStore } from "vuex";
import { bookType } from "@/types/common";
import { bookConst } from "@/components/constants/common";
import ButtonComponent from "@/components/parts/ButtonComponent.vue";


export default defineComponent({
  name: "ItemBookComponent",
  components: {
    ButtonComponent,
  },
  emits: ["handleClick"],

  props: {
    book: {
      type: Object as PropType<bookType>,
      default: () => bookConst,
    }
  },

  setup(props, { emit }) {
    const store = useStore();
    const favoritesBooks = computed(() => store.getters["favorites/favoritesBooks"]);

    const getImage = (image): string => {
      return `${image}`;
    }
    const isFavorite = computed((): boolean => {
      if (!favoritesBooks.value.items.includes(props.book.id)) return false;
      return favoritesBooks.value.items.includes(props.book.id)
    });
    const handleClick = () => {
      emit("handleClick", props.book);
    };

    return { getImage, handleClick, favoritesBooks, isFavorite };
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
    cursor: pointer;
  }
  &__color {
    color: #b1adaf;
  }
  &__color--active {
    color: #F70085;
  }
  &__wrapp:hover {
    opacity: 0.7;
}
}

</style>
