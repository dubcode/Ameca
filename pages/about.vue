<template>
  <div class="content --row" v-html="content"></div>
</template>

<script>
import axios from 'axios'
export default {
  layout: 'layout-one',
  head () {
    return {
      title: 'About AMECA | Alex"s Medical &amp; Educational Clinic in Africa',
      bodyAttrs: { class: 'category' },
      meta: [
        { hid: 'og:title', name: 'og:title', content: 'Web Design & Development Case Studies' },
        { hid: 'description', name: 'description', content: 'A closer look at some of my web design and development projects.' },
        { hid: 'og:description', name: 'og:description', content: 'A closer look at some of my web design and development projects.' },
        { name: 'keywords', content: 'web designer, web developer, cheshire, front end, javascript, php, WordPress' }
      ]
    }
  },

  // post data
  data () {
    return {
      id: this.$route.params.id,
      baseUrl: 'https://ameca.org.uk/wp-json/wp/v2/pages/2?_embed',
      // global variable set for consistent URL in main js
      posts: [],
      post: '',
      title: '',
      thumb: '',
      content: '',
      date: '',
      isActive: 'isActive'
    }
  },
  mounted () {
    this.getSingle()
    window.removeEventListener('scroll', this.onScroll)
  },
  // post methods
  methods: {
    // get single post
    getSingle () {
      this.id = this.$route.params.id
      axios.get(this.baseUrl, {
      })
        .then((response) => {
          this.title = response.data.title.rendered
          this.content = response.data.content.rendered
          this.thumb = response.data._embedded['wp:featuredmedia']['0'].media_details.sizes.medium.source_url
        })
        .catch((response) => {
          // response
        })
    }
  }

}
</script>

<style scoped>

</style>
