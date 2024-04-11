<template>
  <Page class="services">
    <SingleColumnLayout class="title">
      <div>
        <h1>Descubre</h1>
        <h1>nuestros servicios</h1>
      </div>
      <div class="subtitle">
        <p>Dejanos concentirte</p>
      </div>
    </SingleColumnLayout>
    <triple-column-layout>
      <block>
        <div class="overlay">
          <div
            class="panel massage"
            @click="$router.push({ name: 'massages-page' })"
          >
            <div class="content">
              <h1>Masajes</h1>
              <button @click="$router.push({ name: 'massages-page' })">
                Conocer mas
              </button>
            </div>
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
            <button @click="$router.push({ name: 'facials-page' })">
              Conocer mas
            </button>
          </div>
        </div>
      </block>
      <block>
        <div
          class="panel extra"
          @click="$router.push({ name: 'special-services' })"
        >
          <div class="content">
            <h1>Servicios especiales</h1>
            <button @click="$router.push({ name: 'special-services' })">
              Conocer mas
            </button>
          </div>
        </div>
      </block>
    </triple-column-layout>
    <SingleColumnLayout class="title">
      <div class="subtitle">
        <p>Pero...</p>
      </div>
      <div>
        <h1>aun hay mucho mas</h1>
      </div>
    </SingleColumnLayout>
  </Page>
</template>

<script>
import SingleColumnLayout from "../layouts/SingleColumnLayout.vue";
import TripleColumnLayout from "../layouts/TripleColumnLayout.vue";

export default {
  name: "Main-Services",
  components: { TripleColumnLayout, SingleColumnLayout },
};
</script>

<style>
@import url("../assets/fonts/Boska_Complete/Fonts/WEB/css/boska.css");
@import url("https://fonts.googleapis.com/css2?family=Corinthia:wght@400;700&display=swap");
.services {
  height: 300vh;
  .title {
    padding-top: 15%;
    padding-bottom: 15%;
    h1 {
      font-family: "Boska-Black";
      color: inherit;
      font-size: 10vw;
      text-align: center;
    }
    .subtitle {
      display: inline-flex;
      justify-content: center;
      p {
        font-family: "Corinthia", cursive;
        font-weight: 400;
        font-style: normal;
        font-size: 7vw;
        color: inherit;
      }
    }
  }
  .panel {
    height: 40vw;
    text-align: center;
    display: grid;
    align-content: center;
    background-size: cover;
    border-radius: 20px;
    h1 {
      color: #681311;
      font-size: 5vw;
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
}
@include respond-to("medium and down") {
}
</style>
