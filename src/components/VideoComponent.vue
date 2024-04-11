<template>
  <Page>
    <div class="video-container">
      <video
        src="/src/assets/video-fondo.mp4"
        autoplay
        loop
        playsinline
        muted
      ></video>
      <div class="caption">
        <MainPackages />
        <DividedScroll />
        <EquipmentList />
      </div>
    </div>
  </Page>
</template>

<script>
import DividedScroll from "./DividedScroll.vue";
import EquipmentList from "./EquipmentList.vue";
import MainPackages from "./MainPackages.vue";

export default {
  name: "Video-Component",
  components: { DividedScroll, EquipmentList, MainPackages },
};
</script>

<style lang="scss">
.video-container {
  height: 100%;
  width: 100%;
  position: relative;
}

.video-container video {
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  z-index: 0;
}

/* Just styling the content of the div, the *magic* in the previous rules */
.video-container .caption {
  z-index: 1;
  position: relative;
  mix-blend-mode: hard-light;
}
@include respond-to("medium and down") {
}
</style>
