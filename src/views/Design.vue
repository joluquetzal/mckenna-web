<template>
  <double-column-layout>
    <block>
      <div class="home">
        <h1>Diseño de ductos</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ullamcorper urna vitae posuere feugiat. Sed at purus eget metus
          ultrices interdum. In hac habitasse platea dictumst. Donec quis
          facilisis enim. Vestibulum faucibus sagittis massa, sed auctor nibh
          varius at. Etiam lorem odio, lobortis vel semper et, varius vel diam.
          Proin sed tortor sapien. Phasellus mollis hendrerit augue quis
          tincidunt.
        </p>
      </div>
    </block>
    <block>
      <div class="img">
        <img
          class="imag"
          src="https://plotter-hp.com/wp-content/uploads/2017/11/ama%C3%B1os-de-papel-para-planos.jpg"
          alt=""
        />
      </div>
    </block>
  </double-column-layout>
</template>

<script>
import DoubleColumnLayout from "../layouts/DoubleColumnLayout.vue";

export default {
  name: "Design-Page",
  components: { DoubleColumnLayout },
};
</script>

<style lang="scss" scoped>
.home {
  padding-top: 100px;
}
.img {
  .imag {
    box-shadow: 5px 5px 4px #888888;
  }
}
@include respond-to("medium and down") {
  .home {
    padding-top: unset;
  }
}
</style>
