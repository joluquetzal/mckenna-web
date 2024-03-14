<template>
  <div>
    <normal-layout>
      <block>
        <h1 class="title">QUE BUSCAS</h1>
      </block>
    </normal-layout>
    <double-column-layout>
      <block>
        <div class="home">
          <div class="content">
            <h3>Trabaja con nosotros</h3>

            <p>
              Creamos propuestas de control ambiental y de cuidado de los ductos
              que se encuentren en los restaurantes, con una gran variedad de
              opciones y planes que se les pueden otorgar para dar solucion y
              mantener el area a salvo de incendios.
            </p>

            <button @click="$router.push({ name: 'labor-contact' })">
              Conocer mas
            </button>
          </div>
        </div>
      </block>
      <block>
        <div class="description">
          <div class="content">
            <h3>Contrata nuestros servicios</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque ullamcorper urna vitae posuere feugiat. Sed at purus
              eget metus ultrices interdum. In hac habitasse platea dictumst.
              Donec quis facilisis enim. Vestibulum faucibus sagittis massa, sed
              auctor nibh varius at. Etiam lorem odio, lobortis vel semper et,
              varius vel diam. Proin sed tortor sapien. Phasellus mollis
              hendrerit augue quis tincidunt.
            </p>

            <button @click="$router.push({ name: 'design' })">
              Conocer mas
            </button>
          </div>
        </div>
      </block>
    </double-column-layout>
  </div>
</template>

<script>
import DoubleColumnLayout from "../layouts/DoubleColumnLayout.vue";
import NormalLayout from "../layouts/NormalLayout.vue";

export default {
  name: "Contact-Page",
  components: { DoubleColumnLayout, NormalLayout },
};
</script>

<style lang="scss" TripleColumnLayout scoped>
.title {
  text-align: center;
}
.home {
  height: 550px;
  text-align: center;
  background: aliceblue;
  .content {
    padding-top: 30%;
  }
}
.description {
  height: 550px;
  text-align: center;
  background: honeydew;
  .content {
    padding-top: 30%;
  }
}
.des {
  height: 550px;
  text-align: center;
  background: whitesmoke;
  .content {
    padding-top: 30%;
  }
}
@include respond-to("medium and down") {
  .home {
    padding-top: unset;
  }
}
</style>
