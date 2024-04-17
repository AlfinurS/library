<template>
    <Default class="content"><router-view /></Default>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from "vue-router";
import Default from "@/components/layouts/Default.vue";

export default defineComponent({
  name: 'App',
  components: {
    Default,
  },
  
  setup() {
    const route = useRoute();
    const layout = computed(() => route.meta.layout || "Default");

    return {
        layout,
      };
  }

});
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
.content {
  display: flex;
  width: 100%;
}
</style>

