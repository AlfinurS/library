<template>
  <div class="aside__wrapper">
    <div class="aside custom-scroll"> 
      <div class="aside__collapse">
        <div class="aside__collapse-hero">
          <h3 class="aside__hero-title">
            Главное меню
          </h3>
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
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AsideComponent",
  components: { 
   },

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
.aside {
  height: calc(100vh - 112px);
  overflow-y: scroll;
  overflow-x: hidden;
  &__wrapper {
    position: relative;
  }
  &__title {
    line-height: 16px;
    height: 16px;
  }
  &__collapse {
    width: 100%;
    &-hero {
      display: flex;
      justify-content: space-between;
    }
  }
  &__hero-title {
    margin-left: 20px;
  }
}
</style>