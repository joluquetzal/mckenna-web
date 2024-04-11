<template>
  <Page style="background-color: rgba(65, 97, 118, 0.7)">
    <normal-layout>
      <div class="title">
        <div class="title-flex">
          <h1 class="normal-text">Algunos de nuestros servicios</h1>
        </div>
        <div class="title-flex">
          <h1 class="normal-text">con equipos especializados</h1>
        </div>
      </div>
      <ul class="table">
        <li
          class="table-elements"
          v-for="equipment in equipments"
          :key="equipment.index"
          :style="{
            background:
              'url(' +
              `${equipment.img}` +
              '), linear-gradient(144deg, #3a312e -50%, rgba(255, 255, 255, 0.31) 100%)',
          }"
          @click="$router.push({ name: 'equipment-page' })"
        >
          <triple-column-layout class="content">
            <block>
              <div class="element name">
                <h3>{{ equipment.name }}</h3>
              </div>
            </block>
            <block>
              <div class="element description">
                <span>{{ equipment.description }}</span>
              </div>
            </block>
            <block>
              <div class="element arrow">
                <img src="../assets/icons/simple-arrow.svg" alt="" />
              </div>
            </block>
          </triple-column-layout>
          <div class="overlay"></div>
        </li>
      </ul>
    </normal-layout>
  </Page>
</template>

<script>
import NormalLayout from "../layouts/NormalLayout.vue";
import TripleColumnLayout from "../layouts/TripleColumnLayout.vue";

export default {
  name: "Equipment-List",
  components: { TripleColumnLayout, NormalLayout },
  data() {
    return {
      equipments: [
        {
          name: "Carboxiterapia",
          description:
            "Over a decade of dedicated experience and skill in both Aesthetic and Functional Rhinoplasty has allowed",
          img: "/equipment/1.svg",
        },
        {
          name: "Cavitación",
          description:
            "Over a decade of dedicated experience and skill in both Aesthetic and Functional Rhinoplasty has allowed",
          img: "/equipment/2.svg",
        },
        {
          name: "Radiofrecuenci ",
          description:
            "Over a decade of dedicated experience and skill in both Aesthetic and Functional Rhinoplasty has allowed",
          img: "/equipment/3.svg",
        },
        {
          name: "Ultrasonido",
          description:
            "Over a decade of dedicated experience and skill in both Aesthetic and Functional Rhinoplasty has allowed",
          img: "/equipment/4.svg",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.title {
  padding-top: 50px;
  padding-bottom: 50px;
  .title-flex {
    display: flex;
    align-items: stretch;
    justify-content: center;
    gap: 10px;
  }
  .normal-text {
    font-family: "Anton", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 7vw;
    color: white;
  }
}
.table {
  .table-elements {
    position: relative;
    border-radius: 20px;
    height: 100px;
    margin-bottom: 5px;
    display: grid;
    align-items: end;
    background-position: center !important;
    background-repeat: no-repeat !important;
    .content {
      z-index: 4;
      cursor: pointer;
      .element {
        &.name {
          margin: 10px;
          z-index: 4;
          h3 {
            color: white;
          }
        }
        &.arrow {
          display: flex;
          justify-content: flex-end;
          z-index: 4;
          img {
            width: 50px;
          }
        }
        &.description {
          opacity: 0;
          transition: 0.5s ease;
          z-index: 4;
          span {
            font-size: 15px;
            font-weight: 260;
            color: white;
          }
        }
      }
    }
    .content:hover .description {
      opacity: 1;
    }
    .overlay {
      position: absolute;
      border-radius: 20px;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      transition: 0.5s ease;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 3;
    }
  }
  .table-elements:hover .overlay {
    opacity: 1;
  }
}
@include respond-to("medium and down") {
}
</style>
