<template>
<div class="" >
  <button @click="handleClick(book.id)" v-if="!isFavorite">Избранное</button>
    {{book.volumeInfo.title}}
    
    <div v-if="isFavorite" @click="deleteFavorite"><iconMark /></div>

</div>
    
</template>
<script lang="ts">
import { defineComponent, PropType, computed, ref } from "vue";
import { useStore } from "vuex";
import { bookType } from "@/types/common";
import { bookConst } from "@/components/constants/common";
import iconMark from "@/components/icons/iconMark.vue";

export default defineComponent({
  name: "ItemBookComponent",
  components: {
    iconMark,
  },

  props: {
    book: {
      type: Object as PropType<bookType>,
      default: () => bookConst,
    },
  },

  setup(props) {
    const store = useStore();
    const favoritesBooks = computed(() => store.getters["favorites/favoritesBooks"]);
    const isFavorite: any = ref(false);

    const handleClick = () => {
      if (Object.values(favoritesBooks.value).includes(props.book.id)) {
          store.dispatch("favorites/setFavoritesBooks", props.book);
          isFavorite.value = false;
      } else {
        isFavorite.value = true;
        store.dispatch("favorites/setFavoritesBooks", props.book);
      }
    }
    
    const deleteFavorite = () => {
      isFavorite.value = false;
    }
    return { favoritesBooks, isFavorite, handleClick, deleteFavorite };
  },
  
});
</script>

