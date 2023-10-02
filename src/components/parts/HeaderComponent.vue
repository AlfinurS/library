<template>
  <header class="header">
    <div class="header__box">
      <div class="header__logo">
        <img src="/logo.png" alt="logo" width="58" height="58" />
      </div>
      <div class="header__menu">
        <div class="header__menu-item">
          <router-link class="header__menu-item" active-class="header__menu--active" :to="{ name: 'MainPage' }">
            All books
          </router-link>
        </div>
        <div class="header__menu-item">
          <router-link class="header__menu-item" active-class="header__menu--active" :to="{ name: 'FavoritesPage' }">
            Wishlist
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderComponent",
  components: {  },
});
</script>

<style lang="scss" scoped>
.header {
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  box-sizing: border-box;
  margin-bottom: 40px;
  &__logo {
    @media (max-width: 576px) {
      margin-bottom: 30px;
    }
  }
  &__box {
    padding-top: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 72px;
    margin-left: 8px;
    margin-right: 8px;
    @media (min-width: 576px) {
      flex-direction: row;
      margin-right: 20px;
      margin-left: 20px;
    }
    @media (min-width: 1200px) {
      margin: 0 auto;
    }
  }
  &__hero {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    font-weight: 800;
    text-transform: uppercase;
    color: #8168f0;
  }
  &__menu {
    display: flex;
    &-item {
      font-size: 18px;
      font-weight: 400;
      text-transform: uppercase;
      color: #8168f0;
      margin-left: 18px;
    }
    &--active {
      color: #576875;
    }
  }
}
</style>