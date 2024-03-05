<template>
  <button> <slot /> </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "todo-button",
  components: {
  },
});
</script>

<style lang="scss" scoped>

</style>
