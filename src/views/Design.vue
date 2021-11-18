<template>
  <double-column-layout>
    <block>
      <div class="home">
        <h1>DISEÑO DE INSTALACIÓN DE EQUIPOS DE EXTRACCIÓN</h1>
    
        <p>
          Diseñamos e instalamos equipos de extracción de cocinas según las necesidades de cada espacio o la planeación de su cocina.
          En este diseño se prioriza la funcionalidad y la accesibilidad al mantenimiento con el fin de evitar modificaciones futuras que favorecen
          a la fuga de extracción, realización de registros en el futuro etc.
          Las cotizaciones al diseño e instalación se realizan mediante una visita previa al lugar donde se instalará el equipo. 
        </p>
        <h2>El propósito de instalar un equipo con profesionales es:</h2>
        <p>
        MINIMIZAR OS RISGOS DE FUGA DE GRASA EN LOS DUCTOS
        </p>
        <p>
        CONTAR CON UN EQUIPO ACCESIBLE AL MANTENIMIENTO 
        </p>
        <p>
        CONTAR CON UNA BUENA EXTRACCIÓN
        </p>
        <p>
        DISEÑO QUE SE APEGUE A SUS NECESIDADES
        </p>
      </div>
    </block>
    <block>
        <div class="img">
            <img class="imag" src="https://plotter-hp.com/wp-content/uploads/2017/11/tama%C3%B1os-de-papel-para-planos.jpg" alt="">
        </div>
    </block>
  </double-column-layout>
</template>

<script>
import DoubleColumnLayout from "../layouts/DoubleColumnLayout.vue";

export default {
    name: 'Design',
    components: { DoubleColumnLayout },
}
</script>

<style lang="scss" scoped>
.home {
  padding-top: 100px;
}
.img {
    .imag {
        box-shadow: 5px 5px 4px #888888
    }
}
@include respond-to("medium and down") {
  .home {
    padding-top: unset;
  }
  
}
</style>L
