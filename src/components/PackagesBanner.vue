<template>
  <Page>
    <DoubleColumnLayout class="banner">
      <block>
        <div
          class="banner-title"
          @click="$router.push({ name: 'packages-page' })"
        >
          <h1>Nuestros Paquetes</h1>
        </div>
      </block>
      <block> </block>
    </DoubleColumnLayout>
  </Page>
</template>

<script>
import DoubleColumnLayout from "../layouts/DoubleColumnLayout.vue";

export default {
  name: "Packages-Banner",
  components: { DoubleColumnLayout },
};
</script>

<style>
.banner {
  background-size: cover;
  margin-top: 5%;
  background-image: url("../assets/packages.svg");
  border-radius: 20px;
  filter: brightness(100%);
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
}
.banner:hover {
  filter: brightness(70%);
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
  cursor: pointer;
}
.banner-title {
  padding-top: 10%;
  height: 360px;
}
</style>
