<template>
  <double-column-layout>
    <block>
      <div class="home">
        <h1>LIMPIEZA A EQUIPOS DE EXTRACCIÓN DE COCINAS
                        (DUCTOS, CAMPANAS, TURBINAS)</h1>
    
        <p>
          El servicio de limpieza consiste en la evacuación de grasa del interior del equipo 
          para ello se utiliza equipo especializado o bien de manera manual según las necesidades de cada instalación. 
          La cotización de este servicio se realiza mediante una visita técnica en las instalaciones.
          Este servicio se encuentra dirigido a restaurantes, cocinas industriales, hospitales, laboratorios,
          supermercados, etc. 
        </p>
        <h2>PROPÓSITO DE LA LIMPIEZA</h2>
        <p>
          PREVENCIÓN DE INCENDIOS
        </p>
        <p>
          ALARGAR LA VIDA ÚTIL DEL EQUIPO
        </p>
        <p>
          PREVENIR O AMINORAR LAS PLAGAS
        </p>
        <p>
          EVITAR CONTAMINACIÓN EN LOS ALIMENTOS
        </p>
        <p>
          CONTAR CON MEJOR CALIDAD DE AIRE Y OLORES EN LAS INSTALACIONES 
        </p>
        <p>
          ACCEDER A CERTIFICACIONES ESPECIALES
        </p>
      </div>
    </block>
    <block>
        <div class="img">
            <img class="imag" src="https://www.safetyandhealthmagazine.com/ext/resources/images/news/construction/construction-wokers.jpg?1573661671" alt="">
        </div>
    </block>
  </double-column-layout>
</template>

<script>
import DoubleColumnLayout from "../layouts/DoubleColumnLayout.vue";

export default {
    name: 'Service',
    components: { DoubleColumnLayout },
}
</script>

<style lang="scss" scoped>
.home {
  padding-top: 20px;
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
</style>
