<template>
  <div class="--row">

    <!--header break-->
        <div class="--row --hr --m3">
          <nuxt-link to="/newsletters" class="t1">
            Awards Alumni
          </nuxt-link>
        </div>
    <!--header break-->

    <ul class="newsletters --row" v-for="post in displayedPosts" :key="post.id">
      <li class="--row">
        <h3 class="t2 --m2" v-html="post.acf.name" />
        <p><b v-html="post.acf.year"></b></p>
        <p><b>University: </b> <span v-html="post.acf.university" /></p>
        <p><b>Course: </b> <span v-html="post.acf.course" /></p>
        <a :href="post.acf.elective_report" target="_blank">View Report</a>
      </li>
    </ul>
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
  layout: 'layout-one',
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
        .get(process.env.baseUrl + 'posts?per_page=100&categories=6')
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
.newsletters {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: block;
  width: 100%;
}
.newsletters li{
  border-bottom: 1px solid #ccc;
  margin: 0 0 1em 0;
  padding: 0 0 1em 0;
  display: block;
  width: 100%;
}

.newsletters a{
    color: #d6aa77;
}
</style>
