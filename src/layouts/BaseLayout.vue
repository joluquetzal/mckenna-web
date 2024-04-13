<template>
  <div class="base-layout facials">
    <div class="main-logo">
      <img src="../assets/main.svg" alt="" @load="imageLoaded = true"/>
      <simple-header></simple-header>
      <div>
        <div class="box">
          <p class="letter first">H</p>
          <p class="letter-hov first">H</p>
        </div>
        <div class="box">
          <p class="letter second">A</p>
          <p class="letter-hov second">A</p>
        </div>
        <div class="box">
          <p class="letter third">N</p>
          <p class="letter-hov third">N</p>
        </div>
        <div class="box">
          <p class="letter fourth">N</p>
          <p class="letter-hov forth">N</p>
        </div>
        <div class="box">
          <p class="letter fifth">A</p>
          <p class="letter-hov fifth">A</p>
        </div>
        <div class="box">
          <p class="letter sixth">H</p>
          <p class="letter-hov sixth">H</p>
        </div>
      </div>
    </div>
    <main>
      <router-view v-if="imageLoaded" />
    </main>
    <simple-footer></simple-footer>
  </div>
</template>

<script>
import { getCurrentInstance, onMounted } from "vue";
import SimpleFooter from "./SimpleFooter.vue";
import SimpleHeader from "./SimpleHeader.vue";

export default {
  name: "Base-Layout",
  components: { SimpleHeader, SimpleFooter },
  data() {
    return {
      loaded: false,
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
      console.log(getCurrentInstance().data.imageLoaded);
      getCurrentInstance().data.loaded = true;
    });
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap");
.main-logo {
  display: flex;
  width: auto;
  flex-direction: column;
  justify-content: flex-end;
  img {
    display: block;
    width: 100%;
  }
  .letter {
    font-family: "Major Mono Display", monospace;
    font-weight: 400;
    font-style: normal;
    color: white;
    font-size: 20vw;
    display: block;
    position: absolute;
    top: 26vw;
    z-index: 1;
    &.first {
      left: 1.5vw;
    }
    &.second {
      left: 14.5vw;
    }
    &.third {
      left: 27.5vw;
    }
    &.fourth {
      left: 40.5vw;
    }
    &.fifth {
      left: 53.5vw;
    }
    &.sixth {
      left: 66.5vw;
    }
  }
  .letter-hov {
    font-weight: 400;
    font-style: normal;
    color: white;
    font-size: 20vw;
    opacity: 0;
    display: block;
    position: absolute;
    top: 26.9vw;
    z-index: 0;
    &.first {
      left: 1.5vw;
    }
    &.second {
      left: 15.5vw;
    }
    &.third {
      left: 27.5vw;
    }
    &.forth {
      left: 40.5vw;
    }
    &.fifth {
      left: 54.5vw;
    }
    &.sixth {
      left: 66.5vw;
    }
  }
  .box:hover .letter {
    opacity: 0;
    transition: all 0.5s ease;
  }
  .box:hover .letter-hov {
    opacity: 1;
    transition: all 0.5s ease;
  }
  &.facials {
    background-color: #a18767;
    mix-blend-mode: hard-light;
  }
}

.base-layout {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>
