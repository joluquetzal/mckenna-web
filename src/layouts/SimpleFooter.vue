<template>
  <footer class="footer">
    <div>
      <img src="../assets/icons/hanna-icon.svg" alt="" />
    </div>
    <Columns number="4" number-m="2" number-s="1">
      <Block></Block>
      <Block>
        <span
          class="default-layout__logo"
          @click="$router.push({ name: 'landing' })"
          >HANNAH</span
        >
      </Block>
      <Block>
        <nav class="default-layout__nav">
          <ul class="default-layout__links default-layout__links--footer">
            <li class="default-layout__buttom-link">
              <router-link :to="{ name: 'massages-page' }">Masajes</router-link>
            </li>
            <li class="default-layout__buttom-link">
              <router-link :to="{ name: 'facials-page' }">Faciales</router-link>
            </li>
            <li class="default-layout__buttom-link">
              <router-link :to="{ name: 'special-services' }"
                >Servicios Especiales</router-link
              >
            </li>
            <li class="default-layout__buttom-link">
              <a
                href="mailto:mckennacorp@me.com?Subject=Interesado%20en%20las%20plazas%20laborales"
                >Contactanos</a
              >
            </li>
            <li class="default-layout__buttom-link">
              <router-link :to="{ name: 'special-services' }"
                >Aviso Legal</router-link
              >
            </li>
          </ul>
        </nav>
      </Block>
      <Block>
        <nav>
          <ul class="social-media">
            <li>
              <a href=""
                ><img src="../assets/icons/instagram-icon.svg" alt=""
              /></a>
            </li>
            <li>
              <a href=""
                ><img src="../assets/icons/facebook-icon.svg" alt=""
              /></a>
            </li>
            <li>
              <a href=""><img src="../assets/icons/mail-icon.svg" alt="" /></a>
            </li>
          </ul>
        </nav>
      </Block>
    </Columns>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    },
    goTo(route) {
      this.$router.push({ name: route });
      this.closeMenu();
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #000000;
  height: 27vw;
}
img {
  display: block;
  position: absolute;
  z-index: 1;
}
.default-layout {
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
    display: flex;
    flex-direction: column;
  }
  &__link {
    display: inline-block;
    margin-bottom: 30px;
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
    margin-bottom: 30px;
    a {
      text-decoration: none;
      color: white;
      &:visited {
        color: white;
      }
    }
  }
  &__nav {
    width: 350px;
  }
  &__footer {
    background: #fafafa;
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
      .img {
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
.social-media {
  display: flex;
  justify-content: space-around;
}
</style>
