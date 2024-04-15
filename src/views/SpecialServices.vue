<template>
  <div>
    <special-services />
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
