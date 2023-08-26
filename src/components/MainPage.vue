<template>
  <div class="hello">
    library
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainPage',
  props: {
    msg: String,
  },

  setup() {
  }
});
</script>

<style scoped lang="scss">
</style>
