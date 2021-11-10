<templae>
  <single-column-layout>
    <block>
      <div class="home">
        <h1 class="title">MckennaCorp</h1>
        <p class="description">Soluciones que damos para proteger a la empresa y sus clientes</p>
      </div>
    </block>
  </single-column-layout>
</template>

<script>
import SingleColumnLayout from '../layouts/SingleColumnLayout.vue';

export default {
    name: 'Work',
    components: { SingleColumnLayout},
}
</script>

<style lang="scss"
        TripleColumnLayout scoped>
.home {
  padding-top: 100px;
  padding-bottom: 100px;
  text-align: center;
  .title {
      font-size: 155px;
  }
  .description {
      font-size: 20px;
      font-weight: 500;
  }
}

@include respond-to("medium and down") {
  .home {
    padding-top: unset;
    .title {
        font-size: 55px;
    }
  }
}
</style>

