<template>
  <div class="sticky-top">
    <nav
      class="
        navbar
        shadow
        bg-white
        rounded
        justify-content-between
        flex-nowrap flex-row
      "
      style="margin-bottom: 2rem"
    >
      <div class="container">
        <router-link to="/" class="navbar-brand float-left">LOGO</router-link>
        <ul class="nav navbar-nav d-flex flex-row bd-highlight">
          <li class="nav-item me-5">
            <router-link to="/heroes" exact class="nav-link"
              >{{ heroes.length > 0 ? heroes.length : "" }} Heroes</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/anti-heroes" exact class="nav-link"
              >{{
                antiHeroes.length > 0 ? antiHeroes.length : ""
              }}
              Anti-Heroes</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";
import { store } from "@/store";

export default defineComponent({
  name: "Navbar",
  setup() {
    const antiHeroes = computed(() => {
      return store.getters["antiHeroModule/antiHeroes"];
    });
    const heroes = computed(() => {
      return store.getters["heroModule/heroes"];
    });

    return {
      antiHeroes,
      heroes,
    };
  },
});
</script>

<style scoped></style>
