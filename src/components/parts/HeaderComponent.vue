<template>
  <header class="header">
    <div class="header__box">
        <div class="header__hero">
            my library
        </div>
        <div class="header__menu">
          <div class="header__menu-item">
            <router-link class="header__menu-item" active-class="header__menu--active" :to="{ name: 'MainPage' }">
              Все книги
            </router-link>
          </div>
          <div class="header__menu-item">
            <router-link class="header__menu-item" active-class="header__menu--active" :to="{ name: 'FavoritesPage' }">
              Избранное
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
  min-height: 72px;
  &__box {
    padding-top: 18px;
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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