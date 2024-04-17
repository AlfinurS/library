<template>
    <v-app>
      <v-app-bar class="header">
        <HeaderComponent />
      </v-app-bar>

      <div>
        <AsideComponent />
      </div>

      <v-main class="d-flex align-center justify-center main-wrapper" >
        <slot />
      </v-main>
    </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AsideComponent from "@/components/parts/AsideComponent.vue";
import HeaderComponent from "@/components/parts/HeaderComponent.vue";

export default defineComponent({
  name: "DefaultLayout",

  components: {
    AsideComponent,
    HeaderComponent,
  },
});
</script>

<style lang="scss" scoped>

.main-wrapper {
  padding: 80px;
  display: block;
  flex: 1;
  box-sizing: border-box;
}
.header {
  box-shadow: 1px 5px 7px -2px rgba(158, 132, 182, 0.329) !important;
  }
</style>

