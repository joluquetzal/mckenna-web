<template>
  <Page>
    <Block>
      <introduction class="intro" />
      <mainServices />
      <packages-banner />
    </Block>
  </Page>
</template>

<script>
import Introduction from "../components/Introduction.vue";
import MainServices from "../components/MainServices.vue";
import PackagesBanner from "../components/PackagesBanner.vue";

export default {
  name: "Landig-Page",
  components: { MainServices, Introduction, PackagesBanner },
};
</script>

<style lang="scss">
.intro {
  padding: 70px;
  height: auto !important;
}
@include respond-to("medium and down") {
}
</style>
