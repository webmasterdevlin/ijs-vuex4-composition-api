<template #default>
  <div>
    <HeaderNav></HeaderNav>
    <div class="container">
      <div class="vertical-center">
        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import HeaderNav from "@/components/Navbar";

export default defineComponent({
  name: "App",
  components: {
    HeaderNav,
  },
});
</script>
<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
</style>
