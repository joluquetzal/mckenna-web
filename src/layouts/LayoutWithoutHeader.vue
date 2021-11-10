<template>
  <simple-layout class="default-layout">
    <main>
      <router-view />
    </main>

    <template #footer>
      <column class="default-layout__footer" number="2" number-m="2" number-s="1">
        <block>
          <nav class="default-layout__nav">
            <ul class="default-layout__links default-layout__links--footer">
              <li class="default-layout__buttom-link"><a href="mailto:mckennacorp@me.com?Subject=Dudas%20generales">Dudas</a></li>
              <li class="default-layout__buttom-link"><a href="mailto:mckennacorp@me.com?Subject=Interesado%20en%20las%20plazas%20laborales">Trabaja con nosotros</a></li>
            </ul>
          </nav>
        </block>
      </column>
    </template>
  </simple-layout>
</template>

<sript>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    },
    goTo(route) {
      this.$router.push({name: route});
      this.closeMenu();
    }
  }
}
</script>

<style lang="scss" scoped>
.default-layout {
  .layout-header {
    background: #12128b;
  }
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__menu-icon {
    display: none;
  }
  &__logo {
    font-weight: 700;
    font-size: 25px;
    line-height: 27px;
    padding: 6.65px 24px;
    cursor: pointer;
    color: white;
  }
  &__links {
    display: inline-block;
    margin-left: 32px;
    margin-bottom: 0;
  }
  &__link {
    display: inline-block;
    margin-right: 32px;
    margin-bottom: 0;
    a {
      text-decoration: none;
      color: white;
      &:visited {
        color: white;
      }
    }
  }
  &__buttom-link {
    display: inline-block;
    margin-right: 32px;
    margin-bottom: 0;
    a {
      text-decoration: none;
      color: black;
      &:visited {
        color: black;
      }
    }
  }
  .btn {
    &--secondary {
      cursor: pointer;
      border: 1px solid #000000;
      color: black;
      background-color: transparent;
      margin-bottom: 0;
      img {
        display: inline-block;
        vertical-align: middle;
        margin-right: 8px;
      }
      span {
        font-weight: 500;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
  &__nav {
    width: 350px;
  }
  &__footer {
    background: #FAFAFA;
    padding: calc(var(--f-gutter-xl) + 2.73px) 0;
  }
  &__menu {
    display: none;
  }
  @include respond-to("medium and down") {
    &__logo {
      display: block;
      text-align: center;
    }
    &__logo-wrapper {
      order: 1;
    }
    &__menu-icon {
      display: inline-block;
    }
    &__links {
      &--header {
        display: none;
      }
      &--footer {
        margin-left: 0;
        display: block;
      }
      &--menu {
        margin-left: 0;
        display: block;
        text-align: left;
      }
    }
    &__link {
      display: block;
      margin-right: 0;
      margin-bottom: 32px;
    }
    .btn {
      &--secondary {
        display: none;
      }
    }
    &__wrapper {
      justify-content: unset;
      nav {
        margin: auto;
      }
    }
    .image-wrapper {
      .img{
        height: 100px;
        margin: auto;
      }
    }
    &__nav {
      text-align: center;
      width: unset;
    }
    &__footer {
      padding: calc(var(--f-gutter) + 5.87px) 0;
    }
    &__menu {
      display: block;
      padding: calc(var(--f-gutter-l) + 6.111px);
      position: fixed;
      width: 100vw;
      height: calc(100vh - 72px);
      top: 72px;
      left: 0;
      background-color: white;
      z-index: 1;
    }
  }
}
</style>

