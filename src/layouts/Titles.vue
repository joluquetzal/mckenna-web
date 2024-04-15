<template>
  <div class="container">
    <h1 id="big-text" class="banner">HANNAH</h1>
  </div>
</template>

<script>
import { gsap } from "gsap/gsap-core";
import SplitType from "split-type";
import { onMounted } from "vue";

export default {
  name: "titles-component",

  data() {
    return {
      font: {},
    };
  },

  setup() {
    onMounted(() => {
      const ourText = new SplitType("#big-text", { types: "chars" });
      const tl = gsap.timeline({ paused: true });
      ourText.chars.forEach((obj, i) => {
        let txt = obj.innerText;
        let clone = `<div class="cloneText" style="position:absolute;top:0;font-family:'Major Mono Display',monospace;"> ${txt} </div>`;
        let newHTML = `<div class="originalText"> ${txt} </div>${clone}`;
        obj.innerHTML = newHTML;
        gsap.set(obj.childNodes[1], {
          yPercent: i % 2 === 0 ? -200 : 100,
        });
        let tween = gsap.to(obj.childNodes, {
          ease: "none",
          yPercent: i % 2 === 0 ? "+=200" : "-=100",
        });
        tl.add(tween, 0);
      });
      const animation = gsap.to(tl, {
        progress: 1,
        duration: 4,
        ease: "power4.inOut",
      });
      const container = document.querySelector(".container");
      container.addEventListener("mouseenter", () => animation.reverse());
      container.addEventListener("mouseleave", () => animation.play());
      //gsap.to(boxes, { yPercent: +100, ease: "none", delay: 3.5 });
    });
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap");

.container {
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: end;
  top: 27vw;
  z-index: 4;
  overflow: hidden;
  .banner {
    color: white;
    font-size: 20vw;
    font-weight: 400;
    font-style: normal;
    &.originalText {
      font-family: "Major Mono Display", monospace;
    }
  }
}
</style>
