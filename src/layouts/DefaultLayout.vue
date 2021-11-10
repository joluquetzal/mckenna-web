<template>
  <simple-layout class="default-layout">
    <template class="header" #header>
      <column mode="full">
        <block>
          <div class="default-layout__wrapper">
            <img class="default-layout__menu-icon" src="@/assets/icons/icon-menu.svg" alt="Menu Icon" @click="toggleMenu">
            <nav>
              <span class="default-layout__logo" @click="$router.push({name: 'home'})"><strong>Mcken</strong>naCorp</span>
              <ul class="default-layout__links default-layout__links--header">
                <li class="default-layout__link"><a href="#" @click="$router.push({name: 'home'})">Inicio</a></li>
                <li class="default-layout__link"><a href="#">Project</a></li>
                <li class="default-layout__lnk"><router-link :to="{name: 'learn'}">Sobre nosotros</router-link></li>
              </ul>
            </nav>
          </div>
          <div class="default-layout__menu" v-show="isOpen">
            <nav class="default-layout__nav">
              <ul class="default-layout__links default-layout__links--menu">
                <li class="default-layout__link"><a href="#" @click="goTo('home')">Home</a></li>
                <li class="default-layout__link"><a href="#">Project</a></li>
                <li class="default-layout__link"><a href="#" @click="goTo('learn')">Learn</a></li>
              </ul>
            </nav>
          </div>
        </block>
      </column>
    </template>

    <main>
      <router-view />
    </main>

    <template #footer>
      <column class="default-layout__footer" number="2" number-m="1" number-s="1">
        <block class="default-layout__logo-wrapper">
          <span class="default-layout__logo">E-Props</span>
        </block>
        <block>
          <nav class="default-layout__nav">
            <ul class="default-layout__links default-layout__links--footer">
              <li class="default-layout__link"><a href="#" @click="$router.push({name: 'home'})">Home</a></li>
              <li class="default-layout__link"><a href="#">Project</a></li>
              <li class="default-layout__link"><router-link :to="{name: 'learn'}">Learn</router-link></li>
            </ul>
          </nav>
        </block>
      </column>
    </template>
  </simple-layout>
</template>

<script>
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
    strong {
      color: blue;
    }
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
    text-align: right;
  }
  &__footer {
    background: #FAFAFA;
    padding: calc(var(--f-gutter-xxl) + 2.73px) 0;
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
    &__nav {
      text-align: center;
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
