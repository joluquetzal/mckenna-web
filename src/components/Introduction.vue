/*buscar nuevas fontFamilyis cambiar color de fondo (no queda con la portada)
agregar animaciones agregar una sombra al primer cuadro*/
<template>
  <SideBar>
    <block class="image-block">
      <div class="image-intro">
        <img src="../assets/intro.svg" alt="" />
      </div>
    </block>
    <block class="description-block">
      <div class="description-intro">
        <h1>Hora de relajarse</h1>
        <p>
          A sanctuary of relaxed luxury, the 5-star Relais & Châteaux hotel in
          the heart of the Serra de Tramuntana. Quintessence of what is
          authentically Mallorcan. Surrounded by 32 hectares of vineyards,
          orchards and centuries-old olive trees, just 2 km from the town of
          Pollença and 6 km from the sea. This historic 18th century monastery
          is the perfect place to enjoy Majorca.
        </p>
        <p>
          A sanctuary of relaxed luxury, the 5-star Relais & Châteaux hotel in
          the heart of the Serra de Tramuntana. Quintessence of what is
          authentically Mallorcan. Surrounded by 32 hectares of vineyards,
          orchards and centuries-old olive trees, just 2 km from the town of
          Pollença and 6 km from the sea. This historic 18th century monastery
          is the perfect place to enjoy Majorca.
        </p>
      </div>
    </block>
    <block>
      <img class="planta" src="../assets/icons/planta.svg" alt="" />
    </block>
  </SideBar>
</template>

<script>
import SideBar from "../layouts/SideBar.vue";

export default {
  name: "Introduction-Section",
  components: { SideBar },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Cormorant:ital@1&display=swap");

.image-block {
  width: 80%;
  .image-intro {
    width: 500px;
  }
}

.description-block {
  background-color: floralwhite;
  .description-intro {
    z-index: 1;
    position: relative;
    h1 {
      font-family: "Cormorant", serif;
      font-optical-sizing: auto;
      font-weight: 200;
      font-size: 100px;
      font-style: italic;
    }
    p {
      margin-right: 20%;
      font-size: 15px;
      color: black;
    }
  }
}

.planta {
  transform: translateY(21.682px);
  position: absolute;
  height: 100%;
  right: 0px;
  top: 1012px;
  z-index: 0;
  width: 50%;
}
</style>
