<template>
  <base-layout>
    <Page>
      <Columns>
        <Block>
          <h1>Flare it's easy to use</h1>
          <p>
            Assembling a minimal structure with Flare requires the use of their
            core elements, from there, any page could be styled.
          </p>
        </Block>
      </Columns>
    </Page>
  </base-layout>
</template>

<script>
import BaseLayout from "../components/BaseLayout.vue";

export default {
  name: "Landing-Page",
  components: { BaseLayout },
};
</script>
