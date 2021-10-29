<template>
  <h1></h1>
</template>

<script>
// Vuejs 3 implemetations
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "AntiHeroes",
  setup() {
    const message = ref("Hello AntiHeroes");
    return {
      message,
    };
  },
});
</script>