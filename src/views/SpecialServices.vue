<template>
  <div>
    <block>
      <special-services />
    </block>
  </div>
</template>

<script>
import SpecialServices from "../components/MainSpecialServices.vue";

export default {
  name: "Special-Services",
  components: { SpecialServices },
};
</script>
<style lang="scss" TripleColumnLayout scoped>
@include respond-to("medium and down") {
}
</style>
