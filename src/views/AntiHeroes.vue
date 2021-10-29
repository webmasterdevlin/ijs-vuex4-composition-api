<template>
  <div class="container-fluid mb-5">
    <h1>AntiHeroes Works!</h1>
    <div
      v-if="editingTracker === '0'"
      class="d-flex flex-row justify-content-start"
    >
      <div class="d-flex">
        <Form
          :text="'Save New AntiHero'"
          :obj="antiHeroForm"
          @handleSubmit="
            addAntiHero(antiHeroForm);
            antiHeroForm = {};
          "
        />
      </div>
    </div>
    <div v-if="loading" class="d-flex flex-row justify-content-center">
      <!-- reusable, can be separated to its own file -->
      <div
        class="spinner-border"
        style="width: 6rem; height: 6rem; color: purple"
        role="status"
      ></div>
    </div>
    <section v-else>
      <!-- reusable, can be separated to its own file -->
      <div v-if="antiHeroes.length > 0">
        <div
          class="card mt-3"
          style="width: auto"
          v-for="antiHero in antiHeroes"
          :key="antiHero.id"
        >
          <div class="card-header">
            <div
              v-if="editingTracker === antiHero.id"
              class="d-flex flex-row justify-content-start"
            >
              <div class="mb-5">
                <Form
                  :text="'Update AntiHero'"
                  :obj="antiHero"
                  @handleSubmit="updateAntiHero(antiHero)"
                />
              </div>
            </div>

            <div v-else>
              <h3 class="card-title">
                {{ antiHero.firstName }} {{ antiHero.lastName }}
              </h3>
              <h5 class="card-subtitle mb-2 text-muted">
                {{ antiHero.house }}
              </h5>
              <p class="card-text">{{ antiHero.knownAs }}</p>
            </div>
          </div>

          <section class="card-body">
            <div>
              <button
                v-if="editingTracker === antiHero.id"
                @click="() => (editingTracker = '0')"
                class="btn btn-info card-link col text-center"
              >
                Cancel
              </button>
              <button
                v-else
                @click="() => (editingTracker = antiHero.id)"
                class="btn btn-primary card-link col text-center"
              >
                Edit
              </button>
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
import { defineComponent, onMounted, ref, computed } from "vue";

import Form from "@/components/Form";
import { store } from "@/store";
import useLog from "@/hooks/useLog";

/* Vue.js v3 */
export default defineComponent({
  name: "AntiHeroes",
  components: { Form },

  setup() {
    const { log } = useLog();

    const antiHeroForm = ref({
      id: "",
      firstName: "",
      lastName: "",
      house: "",
      knownAs: "",
    });
    const editingTracker = ref("0");

    onMounted(async () => {
      await store.dispatch("antiHeroModule/getAntiHeroesAction");
    });

    const removeAntiHero = async (id) => {
      log("Munich");
      await store.dispatch("antiHeroModule/removeAntiHeroAction", id);
    };

    const addAntiHero = async (antiHero) => {
      await store.dispatch("antiHeroModule/addAntiHeroAction", antiHero);
    };

    const updateAntiHero = async (antiHero) => {
      await store.dispatch("antiHeroModule/updateAntiHeroAction", antiHero);
    };

    const antiHeroes = computed(() => {
      return store.getters["antiHeroModule/antiHeroes"];
    });

    const loading = computed(() => {
      return store.getters["antiHeroModule/isLoading"];
    });

    return {
      antiHeroForm,
      editingTracker,
      removeAntiHero,
      addAntiHero,
      updateAntiHero,
      antiHeroes,
      loading,
    };
  },
});
</script>

<style scoped></style>
