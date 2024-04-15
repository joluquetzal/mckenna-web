<template>
  <Page class="massages">
    <div class="products">
      <block style="background-color: #120f0f; border-radius: 1%">
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
                <p class="details">{{ product.duration }}</p>
              </div>
            </block>
            <block>
              <div class="image-wrapper" id="image">
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
      </block>
    </div>
  </Page>
</template>

<script>
export default {
  name: "List-Massages",
  data() {
    return {
      products: [
        {
          img: "/images/massages/img1.svg",
          gif: "/images/massages/video1.gif",
          title: "MASAJE RELAJANTE",
          description:
            "Favorece a la circulación, en deuce el estrés y mejora el estado de ánimo.",
          cost: "$599",
          duration: "50 MIN",
        },
        {
          img: "/images/massages/img2.svg",
          gif: "/images/massages/video2.gif",
          title: "MASAJE PIEDRAS CALIENTES",
          description:
            "Masaje Zen que favorece a mejorar la calidad del sueño, reducir dolores musculares.",
          cost: "$ 1100",
          duration: "75 Min",
        },
        {
          img: "/images/massages/img3.svg",
          gif: "/images/massages/video3.gif",
          title: "MASAJE DEPORTIVO",
          description:
            "Ayuda a mejorar el dolor en contracturas, disminuye el estrés y relaja los músculos.",
          cost: "$900",
          duration: "1 HORA",
        },
        {
          img: "/images/massages/img4.svg",
          gif: "/images/massages/video4.gif",
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
.massages {
  background-color: rgb(44, 16, 16);
  .products {
    padding: 10px;
    #image {
      grid-area: a;
    }
    #details {
      grid-area: b;
      display: flex;
      align-items: center;
    }
    .product {
      height: 100%;
      .details-text {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        gap: 10px;
        .title {
          font-size: 6vw;
          color: white;
        }
        .description {
          font-size: 3vw;
          font-weight: 200;
          color: white;
        }
        .details {
          font-size: 1.8vw;
          font-weight: 100;
          color: white;
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
