<template>
  <div class="--flare --flare-sidebar-layout">
    <slot name="left"></slot>
    <slot></slot>
    <slot name="right"></slot>
  </div>
</template>

<style lang="scss" scoped>
.--flare-sidebar-layout {
  display: grid;
  grid-template-columns: auto 1fr auto;
  height: 100vh;
}
</style>
