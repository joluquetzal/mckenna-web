<template>
  <div class="base-layout">
    <div class="main-logo">
      <img src="../assets/flowers.svg" alt="" />
      <simple-header></simple-header>
    </div>
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
.main-logo {
  display: flex;
  width: auto;
  flex-direction: column;
  justify-content: flex-end;
}
img {
  display: block;
  width: 100%;
}
.base-layout {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>
