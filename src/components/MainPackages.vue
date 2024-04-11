<template ref="main">
  <Page>
    <div class="trigger">
      <div class="cards">
        <div class="square">
          <div class="star">
            <img src="../assets/icons/simple-star.svg" alt="" />
          </div>
          <SingleColumnLayout class="intro-title">
            <div>
              <h1>Aun que no lo</h1>
              <p>creas,</p>
              <h1>aun tenemos</h1>
              <p>muchas cosas</p>
              <h1>que mostrarte</h1>
            </div>
          </SingleColumnLayout>
        </div>
        <div
          class="card"
          style="background-color: #f9dcc5"
          :style="{ zIndex: products.length + '1' }"
        >
          <div class="big-container">
            <h1 class="big-title">
              Contamos con una variedad de paquetes 100% modificables segun tus
              necesidades
            </h1>
          </div>
        </div>
        <div
          class="card"
          v-for="(product, index) in products"
          :key="index"
          :style="{
            backgroundColor: product.color,
            color: product.fontColor,
            zIndex: products.length - index,
          }"
        >
          <div class="container">
            <div class="top">
              <div class="left">
                <h1 class="small-tittle">{{ product.title }}</h1>
                <p class="details">{{ product.description }}</p>
              </div>
            </div>
            <div class="bottom">
              <div class="left">
                <p>{{ product.recomendations }}</p>
              </div>
              <div class="right">
                <p class="includes">Incluye:</p>
                <div v-for="include in product.includes" :key="include">
                  <p>{{ include }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Page>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, onUnmounted, ref } from "vue";
export default {
  name: "List-Packages",
  data() {
    return {
      color: "red",
      products: [
        {
          title: "PAQUETE REDUCTIVO",
          description:
            "Este paquete está focalizado para reducción por área al mismo tiempo tensar la piel y mejorar la apariencia obteniendo una piel más tersa e humectada.",
          includes: [
            "2 sesiones de radiofrecuencia",
            "8 sesiones de cavitación",
            "10 sesiones de drenaje linfático",
            "10 sesiones de Lipolaser",
            "20 masajes reductivo",
          ],
          cost: "$6000",
          recomendations: "10 sesiones",
          color: "rgb(162, 84, 61)",
          fontColor: "rgba(247, 209, 186)",
        },
        {
          title: "PAQUETE REAFIRMANTE",
          description:
            "Este paquete está focalizado por área y tiene como objetivo tensar la piel, favorecer la producción de colágeno y así obtener mejor apariencia de la piel.",
          includes: [
            "2 sesiones de hielo-terapia",
            "2 sesiones de vendas frías",
            "10 sesiones de drenaje linfático",
            "10 sesiones de radiofrecuencia",
            "6 sesiones de aplicación de ampolletas reafirmantes con ultrasonido",
          ],
          cost: "$6000",
          recomendations: "10 sesiones",
          color: "rgba(18, 100, 74)",
          fontColor: "rgba(138, 205, 184)",
        },
        {
          title: "PAQUETE ANTICELULÍTICO",
          description:
            "El objetivo de este paquete es disminuir la piel de naranja, favorece a la circulación y mejora la apariencia de la piel.",
          includes: [
            "2 sesiones de vendas frías",
            "10 sesiones de radiofrecuencia",
            "10 sesiones de drenaje linfático",
            "10 masajes tipo anti celulitis",
          ],
          cost: "$6000",
          recomendations: "10 sesiones",
          color: "rgb(41 106 126)",
          fontColor: "rgb(133, 183, 190)",
        },
        {
          title: "PAQUETE ANTIESTRÉS",
          description:
            "Este paquete es de relajación, mejora la calidad del sueño, el estado de ánimo, disminuye el estrés, mejora la circulación e hidrata la piel.",
          includes: [
            "5 sesiones de reflexologia podal",
            "3 masajes relajantes",
            "2 masajes con piedras calientes",
            "2 exfoliaciones de manos",
            "2 sesiones de termoterapia",
            "2 sesiones de presoterapia en piernas",
            "1 tratamiento con flores de BACH",
          ],
          cost: "$3000",
          recomendations: "5 sesiones",
          color: "rgb(143 63 99)",
          fontColor: "rgb(216, 174, 193)",
        },
        {
          title: "Paquete SPA HANNAH",
          description:
            "Favorece al bienestar general, mejora el estado de ánimo, hidrata la piel de todo el cuerpo.",
          includes: [
            "Un masaje relajante",
            "Exfoliación cuerpo completo",
            "Reflexologia podal",
            "Un facial hidratante con mascarilla Gold",
            "Envoltura de hidratación corporal chocolate, café o vino tinto",
          ],
          cost: "$1900",
          recomendations: "1 sesion",
          color: "rgb(162, 84, 61)",
          fontColor: "rgba(247, 209, 186)",
        },
      ],
    };
  },
  setup() {
    const main = ref();
    let tl;
    let ctx;
    onMounted(() => {
      gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.refresh();
      ctx = gsap.context(() => {
        // Timeline animation with GSAP disabled
        tl = gsap.timeline({
          defaults: { ease: "none" }, // Because scrub doesnt look nice with the default ease
          scrollTrigger: {
            trigger: ".trigger",
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: ".cards",
            pinSpacing: true,
            invalidateOnRefresh: false,
            markers: false,
          },
        });
        tl.to(".card", {
          yPercent: -110,
          stagger: {
            each: 1,
          },
          ease: "none",
          duration: 1,
        });
      }, main.value);
    });

    onUnmounted(() => {
      ctx.revert(); // <- Easy Cleanup!
    });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");

.cards {
  position: relative;
  width: 100%;
  height: 210vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  .square {
    display: flex;
    width: 98%;
    height: 200vh;
    margin-top: 8%;
    background-color: rgb(162, 84, 61);
    color: rgb(247, 209, 186);
    justify-content: center;
    border-radius: 2%;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    .intro-title {
      display: flex;
      flex-direction: column;
      align-content: center;
      flex-wrap: wrap;
      margin-top: 15vw;
      h1 {
        font-family: "Boska-Black";
        color: inherit;
        text-align: center;
        font-size: 13vw;
        line-height: 0.7;
      }
      p {
        color: inherit;
        font-family: "Corinthia", cursive;
        text-align: center;
        font-size: 4vw;
        line-height: 1;
      }
    }
    .star {
      display: flex;
      justify-content: center;
      margin-top: 20vw;
    }
  }
}
.card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .big-container {
    padding-left: 1.25em;
    padding-right: 1.25em;
    padding-top: 2.25rem;
    .big-title {
      font-family: "Anton", sans-serif;
      font-weight: 400;
      font-style: normal;
      margin-top: 0;
      margin-bottom: 0;
      font-size: 7.7vw;
      color: #ff2f2f;
      line-height: 130%;
    }
  }
  .container {
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
    display: flex;
    max-width: 1920px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 2.25em;
    padding-right: 2.25em;
    position: relative;
    .top {
      justify-content: space-between;
      align-items: flex-start;
      display: flex;
      .left {
        flex-direction: column;
        justify-content: space-between;
        display: flex;
        width: 64%;
        h1 {
          font-family: "Anton", sans-serif;
          font-weight: 400;
          font-style: normal;
          margin-top: 0;
          margin-bottom: 0;
          padding-top: 4rem;
          font-size: 10.6vw;
          line-height: 11vw;
          color: inherit;
        }
        p {
          font-size: 2vw;
          font-weight: 200;
          line-height: 100%;
          padding-top: 10px;
          color: inherit;
          letter-spacing: 0.5px;
        }
      }
    }
    .bottom {
      height: 100%;
      flex: 0 50%;
      justify-content: space-between;
      align-items: stretch;
      display: flex;
      .left {
        flex-direction: column;
        justify-content: space-between;
        display: flex;
        p {
          font-size: 2vw;
          font-weight: 300;
          letter-spacing: 1.5px;
          color: inherit;
        }
      }
      .right {
        width: 32vw;
        .includes {
          font-weight: 700;
        }
        p {
          font-weight: 200;
          font-size: 1.8vw;
          color: inherit;
          margin-bottom: 7px;
          letter-spacing: 0.5px;
        }
      }
    }
  }
}

.trigger {
  scroll-behavior: smooth;
  background-color: rgba(65, 97, 118, 0.7);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
