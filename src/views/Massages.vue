<template>
  <Page>
    <main-massages />
  </Page>
</template>

<script>
import MainMassages from "../components/MainMassages.vue";

export default {
  name: "Massages-Page",
  components: { MainMassages },
};
</script>
<style lang="scss">
@include respond-to("medium and down") {
}
</style>
