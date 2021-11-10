<temlate>
  <triple-column-layout>
    <block>
      <div class="home">
        <div class="content">
          <h1>Mantenimiento</h1>
    
          <p>
            Creamos propuestas de control ambiental y de cuidado de
            los ductos que se encuentren en los restaurantes, 
            con una gran variedad de opciones y planes que se les pueden
            otorgar para dar solucion y mantener el area a salvo de incendios.
          </p>
          
          <button>Conocer mas</button>
        </div>
      </div>
    </block>
    <block>
      <div class="description">
        <div class="content">
          <h1>Dise√±o de ductos</h1>
      
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            ullamcorper urna vitae posuere feugiat. Sed at purus eget metus ultrices 
            interdum. In hac habitasse platea dictumst. Donec quis facilisis enim. 
            Vestibulum faucibus sagittis massa, sed auctor nibh varius at. Etiam lorem odio, 
            lobortis vel semper et, varius vel diam. 
            Proin sed tortor sapien. Phasellus mollis hendrerit augue quis tincidunt. 
          </p>
          
          <button>Conocer mas</button>
        </div>
      </div>
    </block>
    <block>
      <div class="des">
        <div class="content">
          <h1>Servicios extra</h1>
      
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            ullamcorper urna vitae posuere feugiat. Sed at purus eget metus ultrices 
            interdum. In hac habitasse platea dictumst. Donec quis facilisis enim. 
            Vestibulum faucibus sagittis massa, sed auctor nibh varius at.
          </p>
          
          <button>Conocer mas</button>
        </div>
      </div>
    </block>
  </triple-column-layout>
</template>

<script>
import TripleColumnLayout from '../layouts/TripleColumnLayout.vue';

export default {
    name: 'Work',
    components: { TripleColumnLayout},
}
</script>

<style lang="scss"
        TripleColumnLayout scoped>
.home {
  height: 550px;
  text-align: center;
  background: aliceblue;
  .content {
    padding-top: 30%;
  }
}
.description {
  height: 550px;
  text-align: center;
  background: honeydew;
  .content {
    padding-top: 30%;
  }
}
.des {
  height: 550px;
  text-align: center;
  background: whitesmoke;
  .content {
    padding-top: 30%;
  }
}
@include respond-to("medium and down") {
  .home {
    padding-top: unset;
  }
}
</style>
