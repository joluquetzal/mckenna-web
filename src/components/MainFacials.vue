<template>
  <Page class="facials">
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
                <div>
                  <p class="details">Incluye:</p>
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
      </block>
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
          img: "/images/facials/img1.svg",
          gif: "/images/facials/video1.gif",
          title: "FACIAL HIDRATANTE",
          description:
            "Este tratamiento favorece a pieles de mixtas a secas. Mejora las líneas de expresión, rostro más humectado, disminuye la sensación acartonada en el rostro.",
          includes:
            "limpieza, exfoliación, ozono, mascarilla de elastina, aparatologia, ácido hialuronico, crema hidratante.",
          cost: "$750",
          recomendations: "",
        },
        {
          img: "/images/facials/img2.svg",
          gif: "/images/facials/video2.gif",
          title: "ANTI ACNÉ O PIEL GRASA",
          description:
            "Este tratamiento ayuda a controlar el exceso de grasa, mejora el brillo en la cara, mejora es escozor y la apariencia de la piel.",
          includes:
            "limpieza, exfoliación, extracción, aparatologia, alta frecuencia,mascarilla de arcilla o barro negro, hidratación.",
          cost: "$1100",
          recomendations:
            "* Se sugiere seguir un tratamiento periodo según cada caso.",
        },
        {
          img: "/images/facials/img3.svg",
          gif: "/images/facials/video3.gif",
          title: "HIDRODER MOABRASION",
          description:
            "Remueve las células muertas de la piel, el exceso de grasa e impurezas que obstruyen frecuentemente los poros a través de un sistema de succión indolora que hidrata y limpia de forma simultánea.",
          includes:
            "limpieza, exfoliación, alta frecuencia , hidrodermoabrasion con solución de vitamina C, ácido acetil salicílico, ácido glicolico o ácido hialuronico, mascarilla hidropastica e hidratación",
          cost: "$1200",
          recomendations: "",
        },
        {
          img: "/images/facials/img4.svg",
          gif: "/images/facials/video4.gif",
          title: "FACIAL HANNAH",
          description:
            "Este tratamiento es el más completo que tenemos y se realiza en 2 sesiones. El objetivo es mejorar la apariencia, extracción en caso necesario y un servicio de microdermoabrasion o hidrodermoabrasion.",
          includes:
            "Limpieza, exfoliación, aparatologia necesaria según tipo de piel, alta frecuencia, radiofrecuencia, mascarilla Gold, hidratación.",
          cost: "$1400",
          recomendations: "* 2 sesiones",
        },
        {
          img: "/images/facials/img5.svg",
          gif: "/images/facials/video5.gif",
          title: "facial Rejuvenecedor",
          description:
            "Rejuvenece la piel, favorece la producción de colágeno y es un buen tratamiento para mejorar la apariencia de la piel.",
          includes:
            "Inlimpieza, exfoliación, radiofrecuencia, bio estimulación, mascarilla según necesidad, máscara led Ayuda a disminuir las líneas de expresión, a mejorar la apariencia del rostro.",
          cost: "$1000",
          recomendations:
            "* Es recomendable hacer de 8 a 10 sesiones periódicas.",
        },
        {
          img: "/images/facials/img6.svg",
          gif: "/images/facials/video6.gif",
          title: "Microder moabrasión",
          description:
            "Se realiza para tener una piel más joven, suave y limpia. Con este procedimiento se consigue que la piel se renueve naturalmente, ayudando a eliminar cicatrices y a disminuir arrugas.",
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
.facials {
  background-color: rgb(44, 16, 16);
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
