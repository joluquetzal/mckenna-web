<template>
  <div>
    <img src="" alt="" />
    <block>
      <labor-description />
      <jobs-list />
    </block>
  </div>
</template>

<script>
import JobsList from "../components/JobsList.vue";
import LaborDescription from "../components/LaborDescription.vue";

export default {
  name: "LaborContact",
  components: { LaborDescription, JobsList },
};
</script>

<style lang="scss" TripleColumnLayout scoped>
img {
  width: 100%;
}

@include respond-to("medium and down") {
}
</style>
