<template>
  <Page>
    <div>
      <h1>Nuestros Servicios</h1>
    </div>
    <triple-column-layout>
      <block>
        <div
          class="panel massage"
          @click="$router.push({ name: 'massages-page' })"
        >
          <div class="content">
            <h1>Masajes</h1>
            <button @click="$router.push({ name: 'massages' })">
              Conocer mas
            </button>
          </div>
        </div>
      </block>
      <block>
        <div
          class="panel facial"
          @click="$router.push({ name: 'facials-page' })"
        >
          <div class="content">
            <h1>Faciales</h1>
            <button @click="$router.push({ name: 'facials' })">
              Conocer mas
            </button>
          </div>
        </div>
      </block>
      <block>
        <div class="panel extra">
          <div class="content">
            <h1>Servicios especiales</h1>
            <button>Conocer mas</button>
          </div>
        </div>
      </block>
    </triple-column-layout>
  </Page>
</template>

<script>
import TripleColumnLayout from "../layouts/TripleColumnLayout.vue";

export default {
  name: "Main-Services",
  components: { TripleColumnLayout },
};
</script>

<style lang="scss" TripleColumnLayout scoped>
.panel {
  height: 550px;
  text-align: center;
  display: grid;
  align-content: center;
  background-size: cover;
  border-radius: 20px;
  h1 {
    color: aliceblue;
  }
  &.massage {
    background-image: url("../assets/massage.svg");
  }
  &.facial {
    background-image: url("../assets/facial.svg");
  }
  &.extra {
    background-image: url("../assets/extra.svg");
  }
  filter: brightness(100%);
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
}
.panel:hover {
  filter: brightness(70%);
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
  cursor: pointer;
}

@include respond-to("medium and down") {
  .home {
    padding-top: unset;
  }
}
</style>
