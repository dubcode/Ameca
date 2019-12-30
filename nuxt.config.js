import axios from 'axios'
export default {
  mode: 'universal',
  /*
   ** Webfont Loader Config
   */
  webfontloader: {
    google: {
      families: ['Montserrat:100,300,800']
    }
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'AMECA | Alex`s Medical &amp; Educational Clinic in Africa',
    bodyAttrs: {
      class: 'category'
    },
    meta: [
      { hid: 'og:title', name: 'og:title', content: 'Alex`s Medical &amp; Educational Clinic in Africa' },
      { hid: 'description', name: 'description', content: 'AMECA is committed to healthcare delivery, training healthcare professionals and to healthcare education in sub-Saharan African countries, through sustainable initiatives.' },
      { hid: 'og:description', name: 'og:description', content: 'AMECA is committed to healthcare delivery, training healthcare professionals and to healthcare education in sub-Saharan African countries, through sustainable initiatives. ' }
    ]
  },
  /** Set Global Api Base URL */
  env: {
    baseUrl: 'https://api.ameca.org.uk/wp-json/wp/v2/'
  },
  /*
  ** Generate Dynamic Routes
  No need for embed param but does need per_page=100
  */
  generate: {
    routes () {
      return axios.get('https://api.ameca.org.uk/wp-json/wp/v2/posts?per_page=100')
        .then((res) => {
          return res.data.map((post) => {
            return '/news/' + post.id + '/' + post.slug
          })
        })
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: false,
  /*
   ** Global CSS
   */
  css: [
    '~assets/css/main.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~assets/js/main.js', ssr: false
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // SASS Loader installed - Use style lang="scss" in your components
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-webfontloader',
    ['nuxt-sass-resources-loader',
      [
        '~assets/css/variables.scss',
        '~assets/css/resources.scss'
      ]
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {}
  }
}
