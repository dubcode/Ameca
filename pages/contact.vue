<template>
  <div class="content" v-html="content" />
</template>

<script>
import axios from 'axios'
export default {
  layout: 'layout-one',

  // post data
  data () {
    return {
      id: this.$route.params.id,
      baseUrl: process.env.baseUrl + 'pages/16?_embed',
      // global variable set for consistent URL in main js
      posts: [],
      post: '',
      title: '',
      thumb: '',
      content: '',
      slug: '',
      date: '',
      isActive: 'isActive'
    }
  },

  head () {
    return {
      title: this.title + ' | AMECA',
      bodyAttrs: { class: 'page' }
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
