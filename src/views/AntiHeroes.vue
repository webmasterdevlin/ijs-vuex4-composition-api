<template>
  <div class="container-fluid">
    <h1>Anti Heroes Works!</h1>
    <div style="display: flex; place-content: center; place-items: center">
      <div class="mb-5">
        <Form
          :text="'Save New Anti Hero'"
          :obj="antiHeroForm"
          @handleSubmit="
            addAntiHero(antiHeroForm);
            antiHeroForm = {};
          "
        />
      </div>
    </div>
    <div
      v-if="isLoading"
      style="display: flex; flex-direction: row; justify-content: center"
    >
      <div
        class="spinner-border"
        style="width: 6rem; height: 6rem; color: purple"
        role="status"
      >
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <section v-else>
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
          <section class="card-body">
            <div class="row">
              <button
                @click="removeAntiHero(antiHero.id)"
                class="btn btn-outline-danger card-link col text-center"
              >
                Delete
              </button>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
// Vuejs 3 implemetations
import { defineComponent, onMounted, ref, computed } from "vue";
import { store } from "@/store";
import Form from "@/components/Form";

export default defineComponent({
  name: "AntiHeroes",
  components: { Form },
  setup() {
    // local state
    const message = ref("AntiHeroes Works!");
    const antiHeroForm = ref({
      id: "",
      firstName: "",
      lastName: "",
      house: "",
      knownAs: "",
    });

    onMounted(async () => {
      await store.dispatch("antiHeroModule/getAntiHeroesAction");
    });

    // state from store
    const antiHeroes = computed(() => {
      return store.getters["antiHeroModule/antiHeroes"];
    });

    const loading = computed(() => {
      return store.getters["antiHeroModule/isLoading"];
    });

    const removeAntiHero = async (id) => {
      await store.dispatch("antiHeroModule/removeAntiHeroAction", id);
    };

    const addAntiHero = async (antiHero) => {
      await store.dispatch("antiHeroModule/addAntiHeroAction", antiHero);
    };

    return {
      antiHeroForm,
      antiHeroes,
      loading,
      removeAntiHero,
      addAntiHero,
    };
  },
});
</script>