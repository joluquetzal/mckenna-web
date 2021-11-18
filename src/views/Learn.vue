<template>
    <slim-layout>
        <div class="learn">
            <h1>Sobre nosotros</h1>
            <h3>NUESTRA HISTORIA</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Expedita velit dolorem quam exercitationem magni, dolor deleniti optio 
                 ipsum fugit aut numquam est architecto facilis id nemo magnam dicta. Recusandae, 
                 ipsam veniam. Dolorum non sunt debitis doloremque? Deleniti delectus odit, debitis rerum 
                 fugit omnis eum, praesentium, iusto magni aspernatur ea soluta?
            </p>
            <p>
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus tempora veniam fugit autem
                  temporbus quidem ad necessitatibus voluptate? Nemo, est!
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod sed ex similique laboriosam dolores
                 fuga doloribus, consectetur eaque architecto vitae fugiat repellat non eveniet nesciunt, sint consequuntur
                  corporis. Voluptas, eius, ipsum fugit praesentium rem quo obcaecati nesciunt odio eaque velit expedita
                   doloremque hic ipsa eligendi. Ab ut ex aspernatur qui facilis accusantium. Enim non architecto quae explicabo
                    et iusto autem maiores impedit consequatur hic, consequuntur voluptatibus cum in aspernatur veniam molestiae
                     cumque laboriosam aperiam sint distinctio. Necessitatibus, sunt at optio rerum quis, assumenda deserunt quisquam
                      culpa hic odio expedita? Officiis tempore sint numquam sunt facilis quia sit delectus. Ipsa, earum.
            </p>
            <h3>MISION</h3>
            <p>
                Ofrecer servicios de calidad y diferente con el fin protegeré sus instalaciones,
                ser competitivos y estar a la vanguardia.
            </p>
            <h3>VISIÓN</h3>
            <p>
                Priorizamos la calidad y honestidad. Estamos comprometidos con el medio ambiente por lo que 
                usamos productos biodegradables. Nos comprometemos con la total satisfacción de nuestro cliente y 
                cuidamos de sus instalaciones.
            </p>
        </div>
    </slim-layout>
</template>

<script>
import SlimLayout from "../layouts/SlimLayout.vue";

export default {
    name: 'learn',
    components: { SlimLayout },
}
</script>

<style lang="scss" scoped>
.learn {
    h3 {
        padding-top: 26px;
    }
    p {
        color: #808080;
        a { 
            color: inherit; 
        } 
    }
}
</style>
