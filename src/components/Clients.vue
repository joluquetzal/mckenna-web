<template>
<div>
  <full-layout>
    <block>
      <div class="home">
        <h1 class="title">clientes</h1>
      </div>
    </block>
  </full-layout>
  <column number="3" number-s="1" mode="slim">
      <block>
          <div class="image-wrapper">
            <img class="img" src="https://cdn.freebiesupply.com/logos/large/2x/camino-real-logo-black-and-white.png" alt="">
          </div>
      </block>
      <block>
          <div class="image-wrapper">
            <img class="img" src="https://sonoragrill.com.mx/images/sonora-grill-logo.svg" alt="">
          </div>
      </block>
      <block>
          <div class="image-wrapper">
            <img class="img" src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Logo_de_NH_hoteles.png" alt="">
          </div>
      </block>
  </column>

</div>
</template>

<script>
import Block from '@lkmx/flare/src/core/Block.vue';
import FullLayout from '../layouts/FullLayout.vue';

export default {
    name: 'Work',
    components: { FullLayout, Block},
}
</script>

<style lang="scss"
        TripleColumnLayout scoped>
.home {
  text-align: center;
}
.image-wrapper {
    .img{
      height: 100px;
    }
  }


</style>

