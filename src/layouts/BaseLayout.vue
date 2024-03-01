<template>
  <div class="base-layout">
    <simple-header></simple-header>
    <main>
      <router-view />
    </main>
    <simple-footer></simple-footer>
  </div>
</template>

<script>
import SimpleFooter from "./SimpleFooter.vue";
import SimpleHeader from "./SimpleHeader.vue";

export default {
  components: { SimpleHeader, SimpleFooter },
};
</script>

<style scoped>
.base-layout {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>
