<template>
  <Page>
    <side-bar>
      <block>
        <img class="image-facials-title" src="../assets/massage.svg" alt="" />
      </block>
      <block>
        <div class="description-facials-title">
          <h1>Nuestros Masajes</h1>
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
    </side-bar>
    <div v-for="(product, index) in products" :key="index">
      <column
        number="2"
        number-s="1"
        mode="normal"
        class="product"
        :class="(index + 1) % 2 === 1 ? 'odd' : 'even'"
      >
        <block id="details">
          <div class="details-text">
            <h2>{{ product.title }}</h2>
            <p>{{ product.description }}</p>
            <p>{{ product.duration }}</p>
            <p>{{ product.cost }}</p>
          </div>
        </block>
        <block>
          <div id="image">
            <img :src="`${product.img}`" :alt="index" />
          </div>
        </block>
      </column>
    </div>
  </Page>
</template>

<script>
import SideBar from "../layouts/SideBar.vue";

export default {
  name: "List-Packages",
  components: { SideBar },
  data() {
    return {
      products: [
        {
          img: "/images/facial-1.svg",
          title: "MASAJE RELAJANTE",
          description:
            "Favorece a la circulación, en deuce el estrés y mejora el estado de ánimo",
          cost: "$599",
          duration: "50 MIN",
        },
        {
          img: "/images/facial-1.svg",
          title: "MASAJE PIEDRAS CALIENTES",
          description:
            "Masaje Zen que favorece a mejorar la calidad del sueño, reducir dolores musculares.",
          cost: "$ 1100",
          duration: "75 Min",
        },
        {
          img: "/images/facial-1.svg",
          title: "MASAJE DEPORTIVO O DESCONTRACTURANTE",
          description:
            "Ayuda a mejorar el dolor en contracturas, disminuye el estrés y relaja los músculos.",
          cost: "$900",
          duration: "1 HORA",
        },
        {
          img: "/images/facial-1.svg",
          title: "MASAJE MODELADOR",
          description:
            "Se realiza drenaje linfático, compresas de lodo Del Mar muerto, cavitación y radiofrecuencia.",
          includes:
            "incluye: Limpieza, exfoliación, aparatologia necesaria según tipo de piel, alta frecuencia, radiofrecuencia, mascarilla Gold, hidratación.",
          cost: "$6000",
          duration: "10 sesiones",
        },
      ],
    };
  },
};
</script>

<style>
.image-facials-title {
  max-width: fit-content !important;
  width: 130%;
}
.description-facials-title {
  padding: 10%;
  background-color: white;
}
#image {
  grid-area: a;
}
#details {
  grid-area: b;
}
.product {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  &.odd {
    background-color: #554640 !important;
    grid-template-areas: "a b";
  }
  &.even {
    grid-template-areas: "b a";
  }
  .details-text {
    padding-top: 12%;
  }
}
</style>
