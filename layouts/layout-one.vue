<template>
  <div :class="{ 'scrolling': isScrollTop }">
    <div class="--row">
      <Header />
      <Hero />
      <div class="--row">
        <div class="--ctr">
          <div class="--row">
            <div class="l1">
              <div class="l1-content">
                <nuxt />
              </div>
              <div class="l1-side">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Hero from '~/components/Hero.vue'
import Sidebar from '~/components/Sidebar.vue'
import Footer from '~/components/Footer.vue'
export default {
  name: 'ScrollTop',
  components: {
    Header,
    Hero,
    Sidebar,
    Footer
  },
  data () {
    return {
      // Define the default location of the scrollbar
      scrollTop: null,

      // Define the default state
      isScrollTop: false
    }
  },
  mounted () {
    // Listening for scrolling events
    window.addEventListener('scroll', () => {
      this.scrollTop = document.documentElement.scrollTop ||
      window.pageYOffset ||
      document.body.scrollTop ||
      document.querySelector(this.el).scrollTop

      // Control the hiding or display of scroll buttons
      if (this.scrollTop > 150) {
        this.isScrollTop = true
      } else {
        this.isScrollTop = false
      }
    }, true)
  },
  methods: {
    /**
     * Scroll to the top
     */
    scrollToTop () {
      const $this = this

      // Return top animation effects
      setTimeout(function animation () {
        if ($this.scrollTop > 0) {
          setTimeout(() => {
            // Stepping speed
            $this.scrollTop = $this.scrollTop - 30
            // Return to the top
            if (document.documentElement.scrollTop > 0) {
              document.documentElement.scrollTop = $this.scrollTop - 30
            } else if (window.pageYOffset > 0) {
              window.pageYOffset = $this.scrollTop - 30
            } else if (document.body.scrollTop > 0) {
              document.body.scrollTop = $this.scrollTop - 30
            } else if (document.querySelector($this.el).scrollTop) {
              document.querySelector($this.el).scrollTop = $this.scrollTop - 30
            }

            animation()
          }, 1)
        }
      }, 1)
    }
  }
}
</script>

<style scoped>
.l1 {
  display: grid;
  grid-gap: 0;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "content" "side";
  width: 100%;
}
.l1-content { grid-area: content; }
.l1-side {grid-area: side; }
@media only screen and (min-width: 768px) {
  .l1 {
    grid-gap: 4em;
    grid-template-columns: 1.4fr 0.6fr;
    grid-template-rows: 1fr;
    grid-template-areas: "content side";
  }
}

</style>
