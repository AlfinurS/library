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
import { defineComponent } from "vue";

export default defineComponent({
  name: "PaginationComponent",
  components: {
    
  },

  setup() {

    return { };
  },
  
});
</script>


<style lang="scss" scoped>

</style>
