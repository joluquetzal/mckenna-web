<template>
  <double-column-layout>
    <block>
      <div class="home">
        <h1>MackennaCorp</h1>
    
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ullamcorper urna vitae posuere feugiat. Sed at purus eget metus ultrices 
          interdum. In hac habitasse platea dictumst. Donec quis facilisis enim. 
          Vestibulum faucibus sagittis massa, sed auctor nibh varius at. Etiam lorem odio, 
          lobortis vel semper et, varius vel diam. 
          Proin sed tortor sapien. Phasellus mollis hendrerit augue quis tincidunt. 
        </p>
        
        <button>View Project</button>
      </div>
    </block>
    <block>
      <img src="https://s3-alpha-sig.figma.com/img/0207/2dc7/23d5c005492ad183faac9460dcb2232?Expires=1634515200&Signature=R4VqYhCYy~jocQiEENmmqOqX-tTk1JDHFt2UBTC2j19UQbH9Tq71G46OAsPZUWRwvxbbMexxMKWRYfwqFPetiAXZwRM1j2dq7JpIK5DfkaldIhnxvSJqRWsr-fTpJM9XCcw1JuxaxEnaG1vQF39uO0y7LDmagNTa7-~A7kyy6jYYo7N3kyVwAUI9lISzjTLSj88qH6BWuVT2zGdu3yK9Eg0rqz-5LxNsDbpwawfhUKY-Bq-CVWPlGZ~IEBHEr7crsTshbJ7sSHiD5~wTUSdX35LFXXTndu798zLFmvfmvywEbxyqPdznIHQuzZ1WWmXLQ-6d9El5R04mH4ZZHUbiiA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="">
    </block>
  </double-column-layout>
</template>

<script>
import DoubleColumnLayout from "../layouts/DoubleColumnLayout.vue";

export default {
    name: 'learn',
    components: { DoubleColumnLayout },
}
</script>

<style lang="scss" scoped>
.home {
  padding-top: 100px;
}
@include respond-to("medium and down") {
  .home {
    padding-top: unset;
  }
}
</style>
