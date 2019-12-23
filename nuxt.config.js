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
      bodyAttrs: { class: 'category' },
      meta: [
        { hid: 'og:title', name: 'og:title', content: 'Web Design & Development Case Studies' },
        { hid: 'description', name: 'description', content: 'A closer look at some of my web design and development projects.' },
        { hid: 'og:description', name: 'og:description', content: 'A closer look at some of my web design and development projects.' },
        { name: 'keywords', content: 'web designer, web developer, cheshire, front end, javascript, php, WordPress' }
      ]
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
