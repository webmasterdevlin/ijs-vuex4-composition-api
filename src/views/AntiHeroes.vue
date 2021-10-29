<template>
  <div class="container-fluid">
    <h1>Anti Heroes Works!</h1>
    <section>
      <div v-if="antiHeroes.length > 0">
        <div
          class="card mt-3"
          style="width: auto"
          v-for="antiHero in antiHeroes"
          :key="antiHero.id"
        >
          <div class="card-header">
            <h3 class="card-title">
              {{ antiHero.firstName }} {{ antiHero.lastName }}
            </h3>
            <h5 class="card-subtitle mb-2 text-muted">{{ antiHero.house }}</h5>
            <p class="card-text">{{ antiHero.knownAs }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// Vuejs 3 implemetations
import { defineComponent, onMounted, ref, computed } from "vue";
import { store } from "@/store";

export default defineComponent({
  name: "AntiHeroes",
  setup() {
    // local state
    const message = ref("AntiHeroes Works!");

    onMounted(async () => {
      await store.dispatch("antiHeroModule/getAntiHeroesAction");
    });

    // state from store
    const antiHeroes = computed(() => {
      return store.getters["antiHeroModule/antiHeroes"];
    });

    return {
      antiHeroes,
    };
  },
});
</script>