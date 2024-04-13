<template>
  <Page style="background-color: rgb(65 97 118 / 70%)">
    <column number="2" mode="full" class="quitar-flare">
      <block class="tambien-quitar">
        <div class="right-wrapper">
          <div class="titles">
            <div class="title-flex"><h1>Sin importar</h1></div>
            <div class="title-flex">
              <h1>Tus necesidades</h1>
            </div>
            <div>
              <p class="second-title">
                crees necesitar algo que no tenenemos? preguntanos y dejate
                sorprender
              </p>
            </div>
          </div>
        </div>
      </block>
      <block>
        <div class="left-wrapper">
          <div class="section">
            <h2 class="section-title">
              Quieres un paquete especial para ti y tu pareja?
            </h2>
            <p class="normal-text">
              Nos encantan los romanticos y las buenas amistades, por lo que
              buscaremos darte un precio y un trato especial para la ocasion.
            </p>
          </div>
          <div class="section">
            <h2 class="section-title">Tienes una meta especifica?</h2>
            <p class="normal-text">
              Cuentanos sobre lo que buscas lograr y nosotros nos encargaremos
              de hacer el camino menos largo.
            </p>
          </div>
          <div class="section">
            <h2 class="section-title">
              Buscas un procedimiento y no lo has podido encontrar en nignun
              lugar
            </h2>
            <p class="normal-text">
              Aparte de la gran variedad de servicios que ofrecemos, siempre
              estamos buscando inovar y aprender nuevas cosas, si no lo has
              encontrado aqui, puede que, aun así, si lo tengamos o que este por
              ser integrado.
            </p>
          </div>
          <div class="section">
            <h2 class="section-title">
              Es tu primera vez y necesitas un poco de guia?
            </h2>
            <p class="normal-text">
              No todos tienen la obligacion de saber, si solo buscas relajarte,
              nosotros te armaremos el paquete. Buscas algo mas? pero no estas
              seguro de que? nostros te guiaremos.
            </p>
          </div>
          <div class="section">
            <h2 class="section-title">
              Te gustaria que lo hicieramos a tu manera?
            </h2>
            <p class="normal-text">
              Aqui no existen reglas que no se puedan romper.
            </p>
          </div>
        </div>
      </block>
    </column>
  </Page>
</template>

<script>
export default {
  name: "Divided-Scroll",
  components: {},
};
</script>

<style lang="scss" DoubleColumnLayout scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");
.quitar-flare {
  justify-content: center;
  align-items: flex-start;
  padding-top: 5em;
  display: flex;
  position: relative;
  .tambien-quitar {
    padding-top: 8em;
    padding-right: 4em;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  }
}
.right-wrapper {
  .titles {
    .title-flex {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 5px;
      h1 {
        font-family: "Anton", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 6vw;
        color: white;
      }
    }
    .second-title {
      font-family: "Anton", sans-serif;
      font-weight: 400;
      font-style: normal;
      font-size: 1.5vw;
      color: white;
    }
    .bold-text {
      font-weight: 600;
      color: white;
    }
    .normal-text {
      color: white;
    }
    .crossed-text {
      text-decoration: line-through;
      text-decoration-color: white;
      text-decoration-thickness: from-font;
      font-weight: 400;
      font-size: 2.3vw;
      color: white;
    }
  }
}
.left-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 19em;
  grid-row-gap: 10em;
  .section {
    .section-title {
      font-family: "Anton", sans-serif;
      font-weight: 400;
      font-style: normal;
      font-size: 1.5vw;
      color: white;
    }
    .normal-text {
      color: white;
    }
  }
}
</style>
