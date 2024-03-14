<template>
  <Page>
    <DoubleColumnLayout>
      <block>
        <img class="image-facials-title" src="../assets/facial.svg" alt="" />
      </block>
      <block>
        <div class="description-facials-title">
          <img
            class="plant_facials"
            src="../assets/icons/planta_2.svg"
            alt=""
          />
          <h1>Nuestros Faciales</h1>
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
    </DoubleColumnLayout>
    <div v-for="(product, index) in products" :key="index">
      <column
        number="2"
        mode="full"
        class="product"
        :class="(index + 1) % 2 === 1 ? 'odd' : 'even'"
      >
        <block class="details" id="details">
          <div class="details-text">
            <h2>{{ product.title }}</h2>
            <p>{{ product.description }}</p>
            <p>{{ product.includes }}</p>
            <p>{{ product.cost }}</p>
          </div>
        </block>
        <block>
          <div class="image_wrapper" id="image">
            <img class="image" :src="`${product.img}`" :alt="index" />
          </div>
        </block>
      </column>
    </div>
  </Page>
</template>

<script>
import DoubleColumnLayout from "../layouts/DoubleColumnLayout.vue";

export default {
  name: "List-Facials",
  components: { DoubleColumnLayout },
  data() {
    return {
      products: [
        {
          img: "/images/facial-1.svg",
          title: "FACIAL HIDRATANTE",
          description:
            "Este tratamiento favorece a pieles de mixtas a secas. Mejora las líneas de expresión, rostro más humectado, disminuye la sensación acartonada en el rostro.",
          includes:
            "incluye: limpieza, exfoliación, ozono, mascarilla de elastina, aparatologia, ácido hialuronico, crema hidratante.",
          cost: "$750",
          recomendations: "",
        },
        {
          img: "/images/facial-1.svg",
          title: "TRATAMIENTO ANTI ACNÉ O PIEL GRASA",
          description:
            "Este tratamiento ayuda a controlar el exceso de grasa, mejora el brillo en la cara, mejora es escozor y la apariencia de la piel.",
          includes:
            "incluye: limpieza, exfoliación, extracción, aparatologia, alta frecuencia,mascarilla de arcilla o barro negro, hidratación.",
          cost: "$1100",
          recomendations:
            "* Se sugiere seguir un tratamiento periodo según cada caso.",
        },
        {
          img: "/images/facial-1.svg",
          title: "HIDRODERMOABRASION",
          description:
            "Este tratamiento realiza limpieza de células muertas e hidrata al mismo tiempo.",
          includes:
            "Incluye: limpieza, exfoliación, alta frecuencia , hidrodermoabrasion con solución de vitamina C, ácido acetil salicílico, ácido glicolico o ácido hialuronico, mascarilla hidropastica e hidratación",
          cost: "$1200",
          recomendations: "",
        },
        {
          img: "/images/facial-1.svg",
          title: "FACIAL HANNAH",
          description:
            "Este tratamiento es el más completo que tenemos y se realiza en 2 sesiones. El objetivo es mejorar la apariencia, extracción en caso necesario y un servicio de microdermoabrasion o hidrodermoabrasion.",
          includes:
            "incluye: Limpieza, exfoliación, aparatologia necesaria según tipo de piel, alta frecuencia, radiofrecuencia, mascarilla Gold, hidratación.",
          cost: "$1400",
          recomendations: "* 2 sesiones",
        },
        {
          img: "/images/facial-1.svg",
          title: "Rejuvenecimiento facial",
          description:
            "Rejuvenece la piel, favorece la producción de colágeno y es un buen tratamiento para mejorar la apariencia de la piel.",
          includes:
            "Incluye: limpieza, exfoliación, radiofrecuencia, bio estimulación, mascarilla según necesidad, máscara led Ayuda a disminuir las líneas de expresión, a mejorar la apariencia del rostro.",
          cost: "$1000",
          recomendations:
            "* Es recomendable hacer de 8 a 10 sesiones periódicas.",
        },
        {
          img: "/images/facial-1.svg",
          title: "Microdermoabrasión",
          description:
            "Este tratamiento realiza limpieza de células muertas y favorece a la producción de colágeno.",
          includes:
            "Incluye: limpieza, exfoliación, alta frecuencia , microdermoabrasion con puntas de diamante, mascarilla hidropastica e hidratación",
          cost: "$1200",
          recomendations: "",
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
  position: relative;
  z-index: 0;
}
.description-facials-title {
  padding: 60% 0% 10% 10%;
  background-color: #fcfcfc;
  position: relative;
  z-index: 1;
  .plant_facials {
    transform: translateY(21.682px);
    position: absolute;
    height: 80%;
    right: -150px;
    top: -68px;
    z-index: -1;
  }
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
  height: 100%;

  .details {
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
    display: flex;
    align-content: center;
  }
  .image_wrapper {
    .image {
      width: 100%;
    }
  }
  &.odd {
    background-color: oldlace !important;
    grid-template-areas: "a b";
  }
  &.even {
    grid-template-areas: "b a";
  }
}
</style>
