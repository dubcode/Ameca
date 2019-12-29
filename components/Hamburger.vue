<template>
  <div class="header__button --right">
    <button :class="{'active': menuClose, 'inactive': !menuClose}" @click="clickHandler">
      <span />
      <span />
      <span />
    </button>
  </div>
</template>
<script>
export default {
  props: {
    menuClose: Boolean
  },
  data () {
    return {}
  },
  methods: {
    clickHandler (e) {
      this.$emit('toggle')
    }
  }
}
</script>
