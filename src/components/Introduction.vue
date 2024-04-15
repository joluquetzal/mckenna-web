<template>
  <page class="intro">
    <DoubleColumnLayout>
      <block>
        <div class="image-intro">
          <img src="../assets/intro.svg" alt="" />
        </div>
      </block>
      <block class="container">
        <div class="description-intro">
          <h1>Un santuario</h1>
        </div>
        <div class="description-intro">
          <h1>hecho a la</h1>
        </div>

        <div class="description-intro">
          <h1>medida para el</h1>
        </div>
        <div class="description-intro">
          <h1>bienestar de tu</h1>
        </div>

        <div class="description-intro">
          <h1>cuerpo y de tu</h1>
        </div>

        <div class="description-intro">
          <h1>salud</h1>
        </div>
      </block>
    </DoubleColumnLayout>
    <SingleColumnLayout class="intro-title">
      <div>
        <h1>Tu cuerpo</h1>
        <p>es</p>
        <h1>para nosotos</h1>
        <p>lo mas</p>
        <h1>importante</h1>
      </div>
    </SingleColumnLayout>
    <div class="star">
      <img src="../assets/icons/simple-star.svg" alt="" />
    </div>
  </page>
</template>

<script>
import DoubleColumnLayout from "../layouts/DoubleColumnLayout.vue";
import SingleColumnLayout from "../layouts/SingleColumnLayout.vue";
export default {
  name: "Introduction-Section",
  components: { DoubleColumnLayout, SingleColumnLayout },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");
@import url("../assets/fonts/Boska_Complete/Fonts/WEB/css/boska.css");
@import url("https://fonts.googleapis.com/css2?family=Corinthia:wght@400;700&display=swap");
.intro {
  justify-content: space-between;
  align-items: stretch;
  height: 300vh;
  padding-top: 20px;
  .image-intro {
    padding: 12%;
    img {
      width: 90%;
      border-radius: 5%;
    }
  }
  .container {
    display: flex;
    align-items: center;
    .description-intro {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-end;
      h1 {
        font-size: 5vw;
        line-height: 6vw;
        font-family: "Anton", sans-serif;
        font-weight: 400;
        font-style: normal;
        color: inherit;
      }
    }
  }
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
</style>
