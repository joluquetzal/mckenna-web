<template>
  <div>
    <block>
      <main-facials />
    </block>
  </div>
</template>

<script>
import MainFacials from "../components/MainFacials.vue";

export default {
  name: "Facials-Page",
  components: { MainFacials },
};
</script>
<style lang="scss" TripleColumnLayout scoped>
@include respond-to("medium and down") {
}
</style>
