<template>
  <div class="base-layout facials">
    <h1 class="counter">0</h1>
    <div class="overlay">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <div class="main-logo">
      <img src="../assets/main.svg" alt="" @load="imageLoaded = true" />
      <simple-header class="header"></simple-header>
      <titles-component></titles-component>
    </div>
    <main>
      <router-view style="background-color: black" v-if="imageLoaded" />
    </main>
    <simple-footer></simple-footer>
  </div>
</template>

<script>
import gsap from "gsap";
import { onMounted } from "vue";
import SimpleFooter from "./SimpleFooter.vue";
import SimpleHeader from "./SimpleHeader.vue";
import TitlesComponent from "./Titles.vue";

export default {
  name: "Base-Layout",
  components: { SimpleHeader, SimpleFooter, TitlesComponent },
  data() {
    return {
      imageLoaded: false,
    };
  },
  methods: {
    currentRoute(path) {
      return this.$route.path.includes(path);
    },
  },
  setup() {
    onMounted(() => {
      function startLoader() {
        let currentValue = 0;
        let counterElement = document.querySelector(".counter");
        function updateCounter() {
          if (currentValue === 100) {
            return;
          }

          currentValue += Math.floor(Math.random() * 10) + 1;
          if (currentValue > 100) {
            currentValue = 100;
          }

          counterElement.textContent = currentValue;

          let delay = Math.floor(Math.random() * 200) + 50;
          setTimeout(updateCounter, delay);
        }

        updateCounter();
      }

      startLoader();
      gsap.to(".counter", {
        duration: 0.25,
        delay: 3.5,
        opacity: 0,
        zIndex: 0,
      });
      gsap.to(".counter", {
        duration: 0.25,
        delay: 4.5,
        zIndex: 0,
      });
      gsap.to(".overlay", {
        duration: 0.25,
        delay: 4.5,
        zIndex: 0,
      });

      gsap.to(".bar", {
        duration: 1.5,
        delay: 3.5,
        height: 0,
        stagger: {
          amount: 0.5,
        },
        ease: "power4.inOut",
      });

    });
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap");
.overlay {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  display: flex;
  overflow: hidden;
}
.bar {
  width: 10vw;
  height: 105vh;
  background: #1a1a1a;
}
.counter {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: flex-start;
  z-index: 10;
  color: #bcbcc4;
  padding: 0.2em 0.4em;
  font-size: 16vw;
  font-family: "Major Mono Display", monospace;
}

img {
  display: block;
  width: 100%;
}

.base-layout {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>
