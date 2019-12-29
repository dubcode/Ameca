<template>
  <div class="--row">
    <div class="news__thumb">
        <h4 class="t2 --m2" v-html="this.title" />
        <p><b><span class="t2 --m2" v-html="this.date.substring(0,10)" /></b></p>
        <template v-if="this.thumb">
          <img :src="this.thumb" :alt="this.title" class="--m3"/>
        </template>
    </div>
    <div class="news__excerpt">
      <div class="content --row --m2" v-html="this.content" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  layout: 'layout-two',

  // meta
  head () {
    return {
      title: this.title,
      bodyAttrs: { class: 'single' },
      meta: [
        { hid: 'description', name: 'description', content: this.excerpt },
        { hid: 'og:title', name: 'og:title', content: this.title },
        { hid: 'og:description', name: 'og:description', content: this.excerpt }
      ]
    }
  },

  // post data
  data () {
    return {
      id: this.$route.params.id,
      // global variable set for consistent URL in main js
      posts: [],
      post: '',
      title: '',
      thumb: '',
      content: '',
      date: '',
      categoryId: '',
      tags: '',
      isActive: 'isActive'
    }
  },
  // post methods
  methods: {
  // get single post
    getSingle () {
      this.id = this.$route.params.id
      axios.get(process.env.baseUrl + 'posts/' + this.id + '?_embed', {
      })
        .then((response) => {
          this.title = response.data.title.rendered
          this.content = response.data.content.rendered
          this.thumb = response.data.images.medium
          this.tags = response.data.tags
          this.date = response.data.date
          this.categoryId = response.data.categories[0]
        })
        .catch((response) => {
          console.log(response)
        })
    }
  },
  mounted () {
    this.getSingle()
  }
}
</script>

<style scoped>
.news {
  display: grid;
  grid-gap: 2em;
  grid-template-columns: 0.6fr 1.4fr;
  grid-template-rows: 1fr;
  grid-template-areas: "thumb excerpt";
}
.news__excerpt {grid-area: excerpt; }
.news__excerpt p {
  text-align: left;
}
.news__thumb { grid-area: thumb; }
.news__thumb img {
  max-width: 768px;
}
</style>
