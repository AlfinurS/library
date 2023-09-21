<template>
  <div class="layout">
    <HeaderComponent></HeaderComponent>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from "vue-router";
import HeaderComponent from "@/components/parts/HeaderComponent.vue";

export default defineComponent({
  name: 'App',
  components: {
    HeaderComponent,
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
</style>

