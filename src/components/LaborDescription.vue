<template>
  <div>
    <column mode="full">
      <block class="description">
        <h1>Creciendo juntos</h1>
        <p>
          En mackenna buscamos que se desarrollen Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Dolores libero nostrum expedita
          necessitatibus, ad saepe recusandae laborum neque tenetur , molestiae
          obcaecati illum voluptate amet magni vero consequuntur aut minus
          tempora? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Beatae optio impedit illo provident ipsa suscipit vel fugiat nam totam
          labore qui, incidunt recusandae voluptatem sit repudiandae perferendis
          ab quaerat tempora!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Neque rerum, culpa deleniti nam cum eum soluta debitis impedit
          repellat fuga labore omnis beatae blanditiis ipsam veritatis, et, id
          inventore excepturi.
        </p>
      </block>
    </column>
    <triple-column-layout>
      <block class="types">
        <img src="" alt="" />
        <h2>Solucion de problemas</h2>
        <p>
          Creamos propuestas de control ambiental y de cuidado de los ductos que
          se encuentren en los restaurantes, con una gran variedad de opciones y
          planes que se les pueden
        </p>
      </block>
      <block class="types">
        <img src="" alt="" />
        <h2>Saber trabajar en equipo</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ullamcorper urna vitae posuere feugiat. Sed at purus eget metus
          ultrices interdum. In hac habitasse platea dictumst. Donec quis
          facilisis enim.
        </p>
      </block>
      <block class="types">
        <img src="" alt="" />
        <h2>Trabajo alrededor del pais</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ullamcorper urna vitae posuere feugiat. Sed at purus eget metus
        </p>
      </block>
    </triple-column-layout>
  </div>
</template>

<script>
import TripleColumnLayout from "../layouts/TripleColumnLayout.vue";

export default {
  name: "LaborDescription",
  components: { TripleColumnLayout },
};
</script>

<style lang="scss" TripleColumnLayout scoped>
.description {
  padding: 20px;
}

.types {
  padding: 60px 20px 60px 20px;
  img {
    width: 60px;
    padding-bottom: 20px;
  }
}
</style>
