<template>
  <div class="--row">

    <!--header break-->
        <div class="--row --hr --m3">
          <nuxt-link to="/news" class="t1">
            News
          </nuxt-link>
        </div>
    <!--header break-->

    <router-link :to="{ path: '/news/'+ post.id +'/' + post.slug}" class="news --row" v-for="post in displayedPosts" :key="post.id">
        <div class="news__thumbnail">
            <template v-if="post.images.medium" class="news__thumbnail">
            <img :src="post.images.medium" :alt="post.title.rendered"/>
          </template>
          <template v-else><div class="--fill --temp-image" /></template>
        </div>
        <div class="news__excerpt">
            <div class="--row --fill --flex">
              <div class="--row">
                <h4 class="t2 --m2" v-html="post.title.rendered" />
                <p><b><span class="t5 --m2" v-html="post.date.substring(0,10)" /></b></p>
                <p v-html="post.excerpt.rendered"></p>
              </div>
            </div>
        </div>
    </router-link>
    <div class="--row --m3">
      <div class="pager">
        <div class="pager__ctr">
          <button type="button" v-if="page != 1" @click="page--"> prev </button>
          <button type="button" v-for="pageNumber in pages.slice(page-1, page+5)" :key="pageNumber" @click="page = pageNumber"> {{pageNumber}} </button>
          <button type="button" @click="page++" v-if="page < pages.length"> next </button>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  layout: 'layout-two',
  data () {
    return {
      posts: [],
      // global variable set for consistent URL in main js
      page: 1,
      perPage: 10,
      pages: []
    }
  },
  // initial state methods
  methods: {
    // get posts
    getPosts () {
      axios
        .get(process.env.baseUrl + 'posts?per_page=100&categories=4&after=2018-12-31T00:00:00')
        .then((response) => {
          this.posts = response.data
        })
        .catch((response) => {
          console.log(response)
        })
    },
    // set pages
    setPages () {
      const numberOfPages = Math.ceil(this.posts.length / this.perPage)
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index)
      }
    },
    // paginate
    paginate (posts) {
      const page = this.page
      const perPage = this.perPage
      const from = page * perPage - perPage
      const to = page * perPage
      return posts.slice(from, to)
    }
  },
  // created
  created () {
    this.getPosts()
  },
  // watch
  watch: {
    posts () {
      this.setPages()
    }
  },
  // computed
  computed: {
    displayedPosts () {
      return this.paginate(this.posts)
    }
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
.news h4{
  transition: all ease 0.3s;
}
.news:hover h4{
  color: #cda272;
}
</style>
