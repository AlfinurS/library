<template>

      <router-view></router-view>
  <MainPage msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainPage from './components/MainPage.vue';

export default defineComponent({
  name: 'App',
  components: {
    MainPage,
  }
});
</script>


<style lang="scss">
@import "@/assets/scss/style.scss";
</style>

