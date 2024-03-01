<template>
  <ul class="table">
    <h1>Trabajos</h1>
    <li v-for="work in works" :key="work.index">
      <triple-column-layout>
        <block>
          <div class="element">
            <span class="title">Tipo de trabajo</span>
            <h3>{{ work.workTitle }}</h3>
          </div>
        </block>
        <block>
          <div class="element">
            <span class="title">Departamento</span>
            <h4>{{ work.department }}</h4>
          </div>
        </block>
        <block>
          <div class="element">
            <span class="title">Aplicar</span>
            <h4><a :href="work.apply">Mandar mail de aplicacion</a></h4>
          </div>
        </block>
      </triple-column-layout>
    </li>
  </ul>
</template>

<script>
import TripleColumnLayout from "../layouts/TripleColumnLayout.vue";

export default {
  name: "LaborContact",
  components: { TripleColumnLayout },
  data() {
    return {
      works: [
        {
          workTitle: "Limpieza de ductos",
          department: "Operaciones",
          apply: "mailto:mckennacorp@me.com?Subject=Dudas%20generales",
        },
        {
          workTitle: "Manejo Variado de limpieza",
          department: "Operaciones",
          apply: "mailto:mckennacorp@me.com?Subject=Dudas%20generales",
        },
        {
          workTitle: "Generente de operaciones",
          department: "Administrativo",
          apply: "mailto:mckennacorp@me.com?Subject=Dudas%20generales",
        },
        {
          workTitle: "Gerente general",
          department: "Administrativo",
          apply: "mailto:mckennacorp@me.com?Subject=Dudas%20generales",
        },
        {
          workTitle: "Secretaria",
          department: "Administrativo",
          apply: "mailto:mckennacorp@me.com?Subject=Dudas%20generales",
        },
        {
          workTitle: "daniel",
          department: "secret1kmv",
          apply: "mailto:mckennacorp@me.com?Subject=Dudas%20generales",
        },
      ],
    };
  },
};
</script>

<style lang="scss" TripleColumnLayout scoped>
.table {
  padding: 20px;
  .element {
    border: aliceblue;
    border-bottom-style: groove;
    width: 108%;
    height: 109px;
    .title {
      color: #808080;
    }
    a {
      text-decoration: none;
    }
  }
}

@include respond-to("medium and down") {
}
</style>
