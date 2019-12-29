<template>
  <div class="--row">

    <!--header break-->
        <div class="--row --hr --m3">
          <nuxt-link to="/partners" class="t1">
            Partners
          </nuxt-link>
          <nuxt-link to="/sponsors" class="t1 sponsor_btn">
            Sponsors
          </nuxt-link>
        </div>
    <!--header break-->

    <div class="partner --row" v-for="post in displayedPosts" :key="post.id">
        <div class="partner__excerpt">
            <div class="--row --fill --flex">
              <div class="--row">
                <h4 class="t2 --m2" v-html="post.title.rendered" />
                <p v-html="post.excerpt.rendered"></p>
              </div>
            </div>
        </div>
        <div class="partner__thumbnail">
            <img :src="post.images.medium" :alt="post.title.rendered" class="blog__image"/>
        </div>
    </div>
    <!--
    <div class="pager">
        <div class="pager__ctr">
        <button type="button" v-if="page != 1" @click="page--"> prev </button>
        <button type="button" v-for="pageNumber in pages.slice(page-1, page+5)" :key="pageNumber" @click="page = pageNumber"> {{pageNumber}} </button>
        <button type="button" @click="page++" v-if="page < pages.length"> next </button>
        </div>
    </div>
    -->
</div>
</template>

<script>
import axios from 'axios'
export default {
  layout: 'layout-one',
  data () {
    return {
      posts: [],
      // global variable set for consistent URL in main js
      page: 1,
      perPage: 20,
      pages: []
    }
  },
  // initial state methods
  methods: {
    // get posts
    getPosts () {
      axios
        .get(process.env.baseUrl + 'posts?per_page=100&categories=7')
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
.partner {
  display: grid;
  grid-gap: 2em;
  grid-template-columns: 1.4fr 0.6fr;
  grid-template-rows: 1fr;
  grid-template-areas: "excerpt thumb";
}
.partner__excerpt {grid-area: excerpt; }
.partner__excerpt p {
  text-align: left;
}
.partner__thumb { grid-area: thumb; }
.sponsor_btn {
  opacity: 0.5;
  transform: translateX(-4px);
  transition: all ease 0.3s;
}
</style>
