<template>
  <h1>{{ message }}</h1>
</template>

<script>
// Vuejs 3 implemetations
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "AntiHeroes",
  setup() {
    const message = ref("AntiHeroes Works!");
    return {
      message,
    };
  },
});
</script>