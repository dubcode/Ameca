<template>
  <div class="hero --row --m3">
  </div>
</template>

<style lang="scss" scoped>
.hero {
  background: url('~assets/images/bg2.jpg') no-repeat center center;
  background-size: cover;
  height:6em;
}

@media only screen and (min-width: 1024px) {
  .hero {
    height:12em;
  }
}
@media only screen and (min-width: 1440px) {
  .hero {
    height:20em;
  }
}
</style>
