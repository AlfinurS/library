<template>
    <v-navigation-drawer
      expand-on-hover
      rail
      >
      <v-list>
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
          subtitle="sandra_a88@gmailcom"
          title="Sandra Adams"
        ></v-list-item>
      </v-list>
      <v-divider></v-divider>

        <v-list density="compact" nav>
          <router-link :to="{ name: 'MainPage' }" class="aside__menu--item" active-class="aside__menu--active" >
            <v-list-item prepend-icon="mdi-folder" title="All books" value="allbooks"></v-list-item>
          </router-link>
          <router-link :to="{ name: 'FavoritesPage' }" class="aside__menu--item" active-class="aside__menu--active">
            <v-list-item prepend-icon="mdi-account-multiple" title="Wishlist" value="wishlist"></v-list-item>
          </router-link>
        </v-list>
    </v-navigation-drawer>
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
.aside {
  &__menu {
    &--item {
        font-size: 14px;
        font-weight: 400;
        text-transform: uppercase;
        color:#2121213F;
    }
    &--active {
      color: #8168f0;
      cursor: none;
    }
  }
}
</style>