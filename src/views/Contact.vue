<template>
    <div class="page">
        <double-column-layout>
            <block>
            <div class="card-labor">
                <div class="content">
                <img src="@/assets/icons/folder.png" alt="">
                <h3>Trabaja con nosotros</h3>
            
                <p>
                    Creamos propuestas de control ambiental y de cuidado de
                    los ductos que se encuentren en los restaurantes, 
                    con una gran variedad de opciones y planes que se les pueden
                    otorgar para dar solucion y mantener el area a salvo de incendios.
                </p>
                
                <button @click="$router.push({name: 'labor-contact'})">Conocer mas</button>
               </div>
            </div>
            </block>
            <block>
            <div class="card-client">
                <div class="content">
                <img src="@/assets/icons/handshake.png" alt="">
                <h3>Contrata nuestros servicios</h3>
            
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                    ullamcorper urna vitae posuere feugiat. Sed at purus eget metus ultrices 
                    interdum. In hac habitasse platea dictumst. Donec quis facilisis enim. 
                    Vestibulum faucibus sagittis massa, sed auctor nibh varius at. Etiam lorem odio, 
                    lobortis vel semper et, varius vel diam. 
                    Proin sed tortor sapien. Phasellus mollis hendrerit augue quis tincidunt. 
                </p>
                
                <button @click="$router.push({name: 'clients-contact'})">Conocer mas</button>
                </div>
            </div>
            </block>
        </double-column-layout>
    </div>
</template>

<script>
import Block from '@lkmx/flare/src/core/Block.vue';
import DoubleColumnLayout from '../layouts/DoubleColumnLayout.vue';

export default {
    name: 'Work',
    components: { DoubleColumnLayout, Block},
}
</script>

<style lang="scss"
        TripleColumnLayout scoped>
        .page {
            background-color: #DEE4E7;
            .card-labor {
                height: 600px;
                text-align: center;
                background-image: url(../assets/wroking-card.png);
              .content {
                    padding: 25% 10%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    text-decoration: white;
                    img {
                        width: 70px;
                        margin: auto;
                        padding-bottom: 10px;
                    }
                    h3 {
                        color: white;
                    }
                    p {
                        color: white;
                    }
              }
            }
            .card-client {
                height: 600px;
                text-align: center;
                background-image: url(../assets/clients-card.png);
              .content {
                    padding: 25% 10%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.7);
                    -webkit-text-decoration: white;
                    text-decoration: white;
                    img {
                        width: 70px;
                        margin: auto;
                        padding-bottom: 10px;
                    }
                    h3 {
                        color: white;
                    }
                    p {
                        color: white;
                    }
              }
        }
}
</style>
