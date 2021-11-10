<template>
    <div>
        <img src="@/assets/working-logo.svg" alt="">
        <block>
            <labor-description/>
            <jobs-list/>
        </block>
    </div>
</template>

<script>
import LaborDescription from '../components/LaborDescription.vue';
import Block from '@lkmx/flare/src/core/Block.vue';
import JobsList from '../components/JobsList.vue';

export default {
    name: 'LaborContact',
    components: { LaborDescription, Block, JobsList},
}
</script>

<style lang="scss"
        TripleColumnLayout scoped>
img {
    width: 100%;
}

@include respond-to("medium and down") {
  
}
</style>
