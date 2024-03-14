<template>
  <div>
    <block>
      <main-massages />
    </block>
  </div>
</template>

<script>
import MainMassages from "../components/MainMassages.vue";

export default {
  name: "Massages-Page",
  components: { MainMassages },
};
</script>
<style lang="scss" TripleColumnLayout scoped>
@include respond-to("medium and down") {
}
</style>
