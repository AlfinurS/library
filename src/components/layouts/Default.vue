<template>
  <div class="common-layout">
    <div class="header-wrapper">
      <HeaderComponent></HeaderComponent>
    </div>
    <div class="aside-wrapper">
      <AsideComponent />
    </div>
    <main class="main-wrapper">
      <slot />
    </main>
  </div>
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
.header-wrapper {
  margin-left: -8px;
  box-shadow: 0 4px 2px -2px rgb(0 0 0 / 14%);
}
.aside-wrapper {
  box-shadow: 3px 1px 18px 0px rgb(48 50 50 / 15%);
  margin-top: 3px;
}
.aside-fullscreen {
  width: 100vw;
  height: calc(100vh - 64px);
}
.main-wrapper {
  padding: 20px;
  display: block;
  flex: 1;
  box-sizing: border-box;
}
</style>

