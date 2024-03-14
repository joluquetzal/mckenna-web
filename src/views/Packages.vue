<template>
  <div>
    <block>
      <main-packages />
    </block>
  </div>
</template>

<script>
import MainPackages from "../components/MainPackages.vue";

export default {
  name: "Packages-Page",
  components: { MainPackages },
};
</script>
<style lang="scss" TripleColumnLayout scoped>
@include respond-to("medium and down") {
}
</style>
