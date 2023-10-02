<template>
  <div class="catalog">
        <ListBooksComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import ListBooksComponent from "@/components/parts/ListBooksComponent.vue";

export default defineComponent({
  name: 'MainPage',
  components: {
  ListBooksComponent,
  },
  

  setup() {
    
    return {  };
  },
  
});
</script>

<style scoped lang="scss">
.catalog {
  margin-top: 20px;
  margin-left: 8px;
  margin-right: 8px;
  @media (min-width: 576px) {
    margin-left: 20px;
    margin-right: 20px;
  }
}
</style>
