<template>
  <div class="pagination">
    <div
      class="pagination__item"
      @click="prevPage"
    >
      &#171;
    </div>
    <div
      v-for="page in pagesCounter"
      :key="page"
      class="pagination__item"
      :class="{'pagination__item--active': page === params.page}"
      @click="setPage(page)"
    >
      {{ page }}
    </div>
    <div 
      class="pagination__item"
      @click="nextPage"
    >
      &#187;
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import type { paginationType } from "@/types/common";

export default defineComponent({
  name: "PaginationComponent",
  props: {
    params: {
      type: Object as PropType<paginationType>,
      default: () => ({
        page: 1,
        page_size: 10,
        count: 0,
      }),
    },
  },

  setup(props, { emit }) {
    const pagesCounter = computed(() => {
      const { count, page_size } = props.params;
      if (count === 0) return 1;
      return Math.ceil(count / page_size);
    });
    const setPage = (page: number) => {
      emit("setPage", page);
    };

    const prevPage = () => {
      if (props.params.page - 1 < 1) return;
      setPage(props.params.page - 1);
    };
    
    const nextPage = () => {
      if (props.params.page + 1 > pagesCounter.value) return;
      setPage(props.params.page + 1);
    };

    return {
      pagesCounter,
      prevPage,
      nextPage,
      setPage,
    };
  },
});
</script>

<style lang="scss" scoped>
.pagination {
    display: flex;
  &__item {
    cursor: pointer;
    min-width: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #c5bee0;;
    color: white;
    border: rgb(151, 94, 226);
    border-radius: 6px;
    margin-left: 2px;
    margin-right: 2px;
    max-height: 32px;
    &:hover {
      background-color: #c5bee0;
    }
    &--active {
      background-color: #8168f0;
    }
  }
}
</style>