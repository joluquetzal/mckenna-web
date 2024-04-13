<template>
  <Page class="facials">
    <div class="products">
      <div v-for="(product, index) in products" :key="index">
        <column
          number="2"
          mode="full"
          class="product"
          :class="(index + 1) % 2 === 1 ? 'odd' : 'even'"
        >
          <block id="details">
            <div class="details-text">
              <h2 class="title">{{ product.title }}</h2>
              <p class="description">{{ product.description }}</p>
              <div>
                <p class="details">{{ product.includes }}</p>
              </div>
            </div>
          </block>
          <block>
            <div id="image">
              <img
                class="imagen default"
                :src="`${product.img}`"
                :alt="index"
              />
              <img class="imagen demo" :src="`${product.gif}`" :alt="index" />
            </div>
          </block>
        </column>
      </div>
    </div>
  </Page>
</template>

<script>
export default {
  name: "List-Facials",
  components: {},
  data() {
    return {
      products: [
        {
          img: "/images/specials/img1.svg",
          gif: "/images/specials/video1.gif",
          title: "SKIN BOOSTER",
          description: "Hidratación con acido hialuronico",
          includes: "4 sesiones 1 c/15 dias",
          cost: "",
          recomendations: "",
        },
        {
          img: "/images/specials/img2.svg",
          gif: "/images/specials/video2.gif",
          title: "HILOS TENSORES",
          description:
            "Se pueden aplicar tanto para eliminar las arrugas y la flacidez facial, como para levantar las cejas o, incluso, para redefinir el óvalo de la cara y el contorno de la mandíbula.",
          includes:
            "Frente, perfilamiento mandibular, Nasogeniano, Patas de gallo, Lineas marioneta, Cuello y/o Bolsas bichat.",
          cost: "",
          recomendations: "",
        },
        {
          img: "/images/specials/img3.svg",
          gif: "/images/specials/video3.gif",
          title: "NANO BOTOX",
          description:
            "El NanoBotox no utiliza toxina botulínica, sino que se basa en una combinación de sustancias activas como nano péptidos, vitaminas, aminoácidos y minerales que se aplican en la piel a través de estas microagujas.",
          includes: "Una aplicación y un refuerzo.",
          cost: "",
          recomendations: "",
        },
        {
          img: "/images/specials/img4.svg",
          gif: "/images/specials/video4.gif",
          title: "MESO BOTOX",
          description:
            "Consiste en la inyección de múltiples pequeñas dosis de Botox en la piel de la cara que puede servir para reducir la acción del sudor.",
          includes: "Una aplicacion y un refuerzo",
          cost: "",
          recomendations: "",
        },
      ],
    };
  },
};
</script>

<style>
.facials {
  background-color: #3a312e;
  .products {
    padding: 10px;
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

      .details-text {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        .title {
          font-size: 5vw;
          color: white;
          text-transform: uppercase;
        }
        .description {
          font-size: 1.8vw;
          font-weight: 200;
          color: white;
        }
        .details {
          font-size: 1.3vw;
          font-weight: 200;
          color: white;
        }
        .details:first-child {
          font-weight: bold;
          margin-bottom: 3px;
        }
      }
      .imagen {
        width: 100%;
        &.default {
          display: block;
        }
        &.demo {
          display: none;
        }
      }

      &.odd {
        grid-template-areas: "a b";
      }
      &.even {
        grid-template-areas: "b a";
      }
    }
    .product:hover .default {
      display: none;
    }
    .product:hover .demo {
      display: block;
    }
  }
}
</style>
