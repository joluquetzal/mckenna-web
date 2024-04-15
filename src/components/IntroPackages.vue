<template>
  <Page class="packages-intro">
    <SingleColumnLayout class="intro-title">
      <div class="flex-intro">
        <h1>Paquetes para</h1>
        <div class="circle">
          <p>ti</p>
        </div>
        <h1>todos</h1>
      </div>
    </SingleColumnLayout>
  </Page>
</template>

<script>
import SingleColumnLayout from "../layouts/SingleColumnLayout.vue";
export default {
  name: "Introduction-Packages",
  components: { SingleColumnLayout },
};
</script>

<style>
@import url("../assets/fonts/Boska_Complete/Fonts/WEB/css/boska.css");
@import url("https://fonts.googleapis.com/css2?family=Corinthia:wght@400;700&display=swap");
.intro-title {
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  margin-bottom: 15vw;
  .flex-intro {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    h1 {
      font-family: "Boska-Black";
      color: inherit;
      text-align: center;
      font-size: 13vw;
      line-height: 0.7;
    }
    .circle {
      height: 5vw;
      background-color: currentColor;
      width: 5vw;
      border-radius: 100%;
      margin: 3vw;
      p {
        color: beige;
        font-family: "Corinthia", cursive;
        text-align: center;
        font-size: 4vw;
        line-height: 1;
        padding: 1vw;
      }
    }
  }
}
</style>
