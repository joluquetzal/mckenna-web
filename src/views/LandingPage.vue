<template>
    <div>
        <video class="logo" autoplay muted>
              <source src="@/assets/wallpaper.mp4" type="video/mp4">
        </video>
        <block>
            <work/>
            <clients/>
        </block>
    </div>
</template>

<script>
import Work from '../components/Work.vue';
import Block from '@lkmx/flare/src/core/Block.vue';
import Clients from '../components/Clients.vue';

export default {
    name: 'landing',
    components: { Work, Block, Clients},
}
</script>

<style lang="scss"
        TripleColumnLayout scoped>
video {
    width: 100%;
}

@include respond-to("medium and down") {
  
}
</style>
