<template>
  <Page>
    <video class="logo" autoplay muted @click="toggleMenu">
      <source src="" type="video/mp4" />
    </video>
    <Block>
      <work />
      <clients />
    </Block>
  </Page>
</template>

<script>
import Clients from "../components/Clients.vue";
import Work from "../components/Work.vue";

export default {
  name: "Landig-Page",
  components: { Work, Clients },
};
</script>

<style lang="scss" TripleColumnLayout scoped>
video {
  width: 100%;
}

@include respond-to("medium and down") {
}
</style>
