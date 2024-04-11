<template>
  <Page class="container-full">
    <introduction class="section section-1" />

    <mainServices class="section section-2" />

    <IntroPackages class="section section-3" />

    <VideoComponent />
  </Page>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";
import IntroPackages from "../components/IntroPackages.vue";
import Introduction from "../components/Introduction.vue";
import MainServices from "../components/MainServices.vue";
import VideoComponent from "../components/VideoComponent.vue";

export default {
  name: "Landig-Page",
  components: { MainServices, Introduction, VideoComponent, IntroPackages },

  setup() {
    onMounted(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(".container-full", {
        "background": "#2c1010",
        "color": "pink",
        scrollTrigger: {
          trigger: ".section-1",
          start: "top center",
          end: "bottom center",
          toggleActions: "restart none restart pause",
        },
      });

      gsap.to(".container-full", {
        "background": "#680b0b",
        "color": "beige",
        scrollTrigger: {
          trigger: ".section-2",
          start: "top center",
          end: "bottom center",
          toggleActions: "restart none restart pause",
        },
      });

      gsap.to(".container-full", {
        "background": "rgb(250 223 202)",
        "color": "#ed3833",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".section-3",
          start: "top center",
          end: "bottom center",
          toggleActions: "restart none restart pause",
        },
      });
    });
  },
};
</script>

<style lang="scss">
html {
  --color: transparent;
}

.container-full {
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  transition: all 0.5s ease;
}


@include respond-to("medium and down") {
}
</style>
