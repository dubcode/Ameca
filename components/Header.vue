<template>
  <div :class="{'active': menuClose, 'inactive': !menuClose}">
    <div class="--row header">
      <header class="header__wrapper --row ">
        <div class="--ctr --fill">
          <div class="header__grid">
            <Logo />
            <Hamburger :menu-close="menuClose" @toggle="menuClose = !menuClose" />
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
export default {
  components: {
    Hamburger,
    Logo,
    Nav
  },

  props: {
    menuClose: Boolean
  }
}
</script>
