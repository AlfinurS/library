<template>
  <HeaderComponent></HeaderComponent>
  <slot />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "@/components/parts/HeaderComponent.vue";

export default defineComponent({
  name: "DefaultLayout",
  components: {
    HeaderComponent,
  },
});
</script>

<style lang="scss" scoped>

</style>
