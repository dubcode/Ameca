<template>
  <!--wrapper-->
  <div class="--row">
    <!--row1-->
    <div class="--row">
      <div class="--ctr">
        <!--grid-->
        <div class="grid-2">
          <!--row1-->
          <!--col1-->
          <div>
            <nuxt-link to="/about" class="t1 --m1">
              About us
            </nuxt-link>
            <div class="videoWrapper --m1">
              <iframe width="560" height="349" src="//www.youtube.com/embed/MqShp7QWQBo?&amp;autoplay=0&amp;modestbranding=1&amp;wmode=transparent&amp;controls=1&amp;showinfo=0&amp;rel=0" frameborder="0" allowfullscreen="true" />
            </div>
            <p>
              Founded in December 2006 by Ruth Markus, in memory of her only child Alex.&nbsp; AMECA is committed to healthcare delivery, training healthcare professionals and to healthcare education in sub-Saharan African countries, through sustainable initiatives. <a class="rm" href="/about/">Read More</a>
            </p>
          </div>
          <!--col1-->

          <!--col2-->
          <div>
            <nuxt-link to="/in-memory-of-alex" class="t1 --m1">
              In memory of Alex
            </nuxt-link>
            <div class="--row --m1">
              <img
                width="560"
                height="349"
                src="~assets/images/IMGP3747-560x349.jpg"
                alt="Alex Coutselos"
              >
            </div>
            <p>
              About Alex By the age of 23, Alex was a junior doctor, a British Army officer and a qualified paratrooper. “Life was very much up for grabs for Alex and I doubt if I will ever know anyone else who made as much of his time as he did.
              <nuxt-link to="/in-memory-of-alex" class="rm">Read More</nuxt-link>
            </p>
          </div>
          <!--col2-->
          <!--row2-->
        </div>
        <!--grid-->
      </div>
    </div>
    <!--row1-->

    <!--header break-->
    <div class="--row">
      <div class="--ctr">
        <div class="--row --hr">
          <h4 class="t1 --m1">
            Currents Projects
          </h4>
        </div>
      </div>
    </div>
    <!--header break-->

    <!--row2-->
    <div class="--row">
      <div class="--ctr">
        <!--grid-->
        <div class="grid-2">
          <!--col1-->
          <div>
            <img
              src="~assets/images/IMG_74271.jpg"
              alt="Current Projects"
            >
          </div>
          <!--col1-->
          <!--col2-->
          <div>
            <nuxt-link to="maternity-unit" class="t2 --m2">
              Project: Maternity Unit
            </nuxt-link>
            <p>
              On average, women in labour walk about 4 – 5 hours over steep hills and uneven rocky paths to reach care.  These journeys present even greater challenges at night and during the rainy season, often resulting in tragic consequences for mother and child.
            </p>
            <p>
              <nuxt-link to="maternity-unit">Read about our current initiative to build a maternity unit at Chilaweni</nuxt-link>
            </p>
          </div>
          <!--col2-->
        </div>
        <!--grid-->
      </div>
    </div>
    <!--row2-->

    <!--header break-->
    <div class="--row">
      <div class="--ctr">
        <div class="--row --hr">
          <nuxt-link to="ameca-healthcare-clinic" class="t1 --m1">
            The AMECA Clinic
          </nuxt-link>
        </div>
      </div>
    </div>
    <!--header break-->

    <!--row3-->
    <div class="--row --m1">
      <div class="--ctr">
        <!--grid-->
        <div class="grid-2">
          <!--col1-->
          <div>
            <p>
              The ability to access healthcare facilities sadly remains a huge challenge for so many impoverished rural villages in Malawi. Prior to the completion of The AMECA Primary Healthcare Clinic, 38,000 people in 22 villages had no prior access to any meaningful healthcare.
            </p>
            <p>
              <nuxt-link to="/ameca-healthcare-clinic" class="--em">
                "It always seems impossible until it's done."<br>Nelson Mandela
              </nuxt-link>
            </p>
            <p>
              <nuxt-link to="/ameca-healthcare-clinic">Read more</nuxt-link>
            </p>
          </div>
          <!--col1-->
          <!--col2-->
          <div>
            <a target="_blank" href="https://www.youtube.com/watch?v=f9c5O3jCncM&amp;t=57s">
              <img
                src="~assets/images/playframe.jpg"
                alt="Play"
              >
            </a>
          </div>
          <!--col2-->
        </div>
        <!--grid-->
      </div>
    </div>
    <!--row3-->

    <!--header break-->
    <div class="--row">
      <div class="--ctr">
        <div class="--row --hr">
          <nuxt-link to="/what-we-do" class="t1 --m1">
            What We Do
          </nuxt-link>
        </div>
      </div>
    </div>
    <!--header break-->

    <!--row4-->
    <div class="--row --m3">
      <div class="--ctr">
        <ul class="grid-4">
          <li>
            <nuxt-link to="/why-malawi/" style="background: url('/IMG_0492.jpeg') no-repeat center center; background-size: cover;">
              <div class="excerpt">
                <div class="bg">
                  <span>About Malawi</span>
                </div>
              </div>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/maternity-unit/" style="background: url('/IMG_1240-560x349.jpg') no-repeat center center; background-size: cover;">
              <div class="excerpt">
                <div class="bg">
                  <span>Maternity Unit</span>
                </div>
              </div>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/ameca-healthcare-clinic/" style="background: url('/18402113_1504543222923310_4773170533259000261_o.jpeg') no-repeat center center; background-size: cover;">
              <div class="excerpt">
                <div class="bg">
                  <span>AMECA Clinic</span>
                </div>
              </div>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/the-ameca-wing/" style="background: url('/IMG_30941-560x349.jpg') no-repeat center center; background-size: cover;">
              <div class="excerpt">
                <div class="bg">
                  <span>AMECA Wing</span>
                </div>
              </div>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/surgical-training/" style="background: url('/Paul-Thomas-surgical-surgical_0.jpg') no-repeat center center; background-size: cover;">
              <div class="excerpt">
                <div class="bg">
                  <span>Surgical Training</span>
                </div>
              </div>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/medical-directory/" style="background: url('/IMG_2480.jpg') no-repeat center center; background-size: cover;">
              <div class="excerpt">
                <div class="bg">
                  <span>Medical Directory</span>
                </div>
              </div>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/medical-electives/" style="background: url('/Elective-Kivunge-Cottage-Hospital-Zanzibar_0.jpg') no-repeat center center; background-size: cover;">
              <div class="excerpt">
                <div class="bg">
                  <span>Elective Bursaries</span>
                </div>
              </div>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/alumni/" style="background: url('/DSC02572-1.jpeg') no-repeat center center; background-size: cover;">
              <div class="excerpt">
                <div class="bg">
                  <span>Awards Alumni</span>
                </div>
              </div>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <!--row4-->

    <!--header break-->
    <div class="--row">
      <div class="--ctr">
        <div class="--row --hr">
          <nuxt-link to="/news" class="t1 --m1">
            Recent Blog Post
          </nuxt-link>
        </div>
      </div>
    </div>
    <!--header break-->

    <!--row4-->
    <div class="--row" v-for="post in displayedPosts" :key="post.id">
      <div class="--ctr">
        <!--grid-->
        <div class="grid-2">
          <!--col1-->
          <div>
            <img :src="post.images.medium" :alt="post.title.rendered"/>
          </div>
          <!--col1-->
          <!--col2-->
          <div>
            <router-link :to="{ path: '/news/'+ post.id +'/' + post.slug}" class="t2 --m2" v-html="post.title.rendered" />
            <p v-html="post.excerpt.rendered" />
            <p>
              <router-link :to="{ path: '/news/'+ post.id +'/' + post.slug}" class="rm">Read More</router-link>
            </p>
          </div>
          <!--col2-->
        </div>
        <!--grid-->
      </div>
    </div>
    <!--row4-->

    <!--header break-->
    <div class="--row">
      <div class="--ctr">
        <div class="--row --hr">
          <nuxt-link to="/blog" class="t1 --m1">
            Get Involved
          </nuxt-link>
        </div>
      </div>
    </div>
    <!--header break-->

    <!--row4-->
    <div class="--row">
      <div class="--ctr">
        <!--grid-->
        <ul class="grid-3">
          <li>
            <nuxt-link to="/fundraising-challenges-in-malawi/" style="background: url('/14095847_1238108786233423_1561764526367562468_n-2-368x245.jpeg') no-repeat center center; background-size: cover;">
              <div class="excerpt">
                <div class="bg">
                  <span>Challenge Fundraising</span>
                </div>
              </div>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/donate/" style="background: url('/IMG_4000-368x245.jpeg') no-repeat center center; background-size: cover;">
              <div class="excerpt">
                <div class="bg">
                  <span>Donate</span>
                </div>
              </div>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/run-an-event/" style="background: url('/11707510_982125398498431_2012686378620675219_n-368x245.jpeg') no-repeat center center; background-size: cover;">
              <div class="excerpt">
                <div class="bg">
                  <span>Run An Event</span>
                </div>
              </div>
            </nuxt-link>
          </li>
        </ul>
        <!--grid-->
      </div>
    </div>
    <!--row4-->
  </div>
  <!--wrapper-->
</template>

<script>
import axios from 'axios'
export default {
  layout: 'default',

  head: {
    title: 'AMECA | Alex`s Medical & Educational Clinic in Africa',
    bodyAttrs: { class: 'home' },
    meta: [
      { hid: 'og:title', name: 'og:title', content: 'Alex`s Medical & Educational Clinic in Africa' },
      { hid: 'description', name: 'description', content: 'AMECA is committed to healthcare delivery, training healthcare professionals and to healthcare education in sub-Saharan African countries, through sustainable initiatives.' },
      { hid: 'og:description', name: 'og:description', content: 'AMECA is committed to healthcare delivery, training healthcare professionals and to healthcare education in sub-Saharan African countries, through sustainable initiatives. ' }
    ]
  },
  data () {
    return {
      posts: [],
      // global variable set for consistent URL in main js
      page: 1,
      perPage: 1,
      pages: []
    }
  },
  // initial state methods
  methods: {
    // get posts
    getPosts () {
      axios
        .get(process.env.baseUrl + 'posts?per_page=1&categories=4')
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
  .videoWrapper,
  .imgWrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;
  }
  .videoWrapper iframe,
  .imgWrapper img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
