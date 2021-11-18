<template>
  <triple-column-layout>
    <block>
      <div class="home">
        <div class="content">
          <h1>Limpieza de equipos de extracción</h1>
    
          <p>
            Realizamos limpieza de equipos de extracción de grasa, vapores, residuos 
            de laboratorio, ceniza, etc
          </p>
          
          <button @click="$router.push({name: 'service'})">Conocer mas</button>
        </div>
      </div>
    </block>
    <block>
      <div class="description">
        <div class="content">
          <h1>Diseño de instalación</h1>
      
          <p>
            Diseñamos Equipos De Extracción para cualquier espacio: restaurantes,
            laboratorios, cocinas industriales, hospitales, supermercados y más. 
          </p>
          
          <button @click="$router.push({name: 'design'})">Conocer mas</button>
        </div>
      </div>
    </block>
    <block>
      <div class="des">
        <div class="content">
          <h1>Servicios adicionales</h1>
          <p>
            Contamos con servicios integrales para la comodidad y 
            funcionalidad de sus instalaciones.
          </p>
          
          <button @click="$router.push({name: 'extras'})">Conocer mas</button>
        </div>
      </div>
    </block>
  </triple-column-layout>
</template>

<script>
import TripleColumnLayout from '../layouts/TripleColumnLayout.vue';

export default {
    name: 'Work',
    components: { TripleColumnLayout},
}
</script>

<style lang="scss"
        TripleColumnLayout scoped>
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
