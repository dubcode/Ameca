<template>
  <div class="--row">

    <!--header break-->
        <div class="--row --hr --m3">
          <nuxt-link to="/directory" class="t1">
            Medical Directory
          </nuxt-link>
        </div>
    <!--header break-->

    <div class="directory --row" v-for="post in displayedPosts" :key="post.id">
        <router-link :to="{ path: '/medical-directory/'+ post.id +'/' + post.slug}" class="directory__thumbnail">
            <template v-if="post.images.medium" class="directory__thumbnail">
            <img :src="post.images.medium" :alt="post.title.rendered"/>
          </template>
          <template v-else><div class="--fill --flex --temp-image"><div>No Image</div></div></template>
        </router-link>
        <div class="directory__excerpt">
            <div class="--row --fill --flex">
              <div class="--row">
                <router-link :to="{ path: '/medical-directory/'+ post.id +'/' + post.slug}" class="t4 --m2" v-html="post.title.rendered" />
                <p class="--m4" v-html="post.acf.location" />
                <template v-if="post.acf.landline">
                  <p class="--m4" v-html="post.acf.landline" />
                </template>
                <template v-if="post.acf.mobile">
                  <p class="--m4" v-html="post.acf.mobile" />
                </template>
                <template v-if="post.acf.email">
                  <p class="--m4"><a :href="'mailto:' + post.acf.email" v-html="post.acf.email" target="_blank" /></p>
                </template>
                <template v-if="post.acf.website">
                  <p class="--m4"><a :href="post.acf.website" class="--m4" v-html="post.acf.website" target="_blank" /></p>
                </template>
              </div>
            </div>
        </div>
    </div>
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
        .get(process.env.baseUrl + 'posts?per_page=100&categories=12')
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
.directory {
  display: grid;
  grid-gap: 2em;
  grid-template-columns: 0.6fr 1.4fr;
  grid-template-rows: 1fr;
  grid-template-areas: "thumb excerpt";
  text-decoration: none;
}
.directory a{
    text-decoration: none;
}
.directory__excerpt {grid-area: excerpt; }
.directory__excerpt p {
  text-align: left;
}
.directory__thumb { grid-area: thumb; }
</style>
