<template>
  <div :class="{'active': menuClose, 'inactive': !menuClose}">
    <div class="--row header">
      <header class="header__wrapper --row ">
        <div class="--ctr --fill">
          <div class="header__grid">
            <div>
              <Logo />
            </div>
            <div></div>
            <div>
              <Hamburger :menu-close="menuClose" @toggle="menuClose = !menuClose" />
              <Directorysvg />
              <Housesvg />
            </div>
          </div>
        </div>
      </header>
    </div>
    <Nav />
  </div>
</template>

<script>
import Hamburger from '~/components/Hamburger.vue'
import Logo from '~/components/Logo.vue'
import Nav from '~/components/Nav.vue'
import Housesvg from '~/components/Housesvg.vue'
import Directorysvg from '~/components/Directorysvg.vue'
export default {
  components: {
    Hamburger,
    Logo,
    Nav,
    Housesvg,
    Directorysvg
  },

  props: {
    menuClose: Boolean
  }
}
</script>
