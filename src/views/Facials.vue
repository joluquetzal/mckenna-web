<template>
  <Page>
    <main-facials />
  </Page>
</template>

<script>
import MainFacials from "../components/MainFacials.vue";

export default {
  name: "Facials-Page",
  components: { MainFacials },
};
</script>
<style lang="scss">
@include respond-to("medium and down") {
}
</style>
