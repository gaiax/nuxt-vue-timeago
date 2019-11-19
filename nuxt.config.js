import colors from 'vuetify/es5/util/colors'
require('dotenv').config()
const {API} = process.env

export default {
  rootDir: './',
  mode: 'spa',
  env: {
    SSRURL: process.env.SSRURL || 'http://localhost:3001/cheer/',
    CHEERFOR_URL: process.env.CHEERFOR_URL || 'http://localhost:3000/',
  },
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
,
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/timeago.js' },
    { src: '~/plugins/web3.js' },
    { src: '~/plugins/twitter.js' }
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/pwa',
  ],
  pwa: {
    workbox: {
      dev: true,
    }
  },
  manifest: {
    name: 'cheerfor beta',
    short_name: 'cheerfor',
    title: 'cheerfor beta',
    'og:title': 'cheerfor beta',
    description: 'cheerfor beta',
    'og:description': 'cheerfor beta',
    lang: 'ja',
    theme_color: '#ffffff',
    background_color: '#ffffff'
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    theme: {
      primary: colors.amber.darken2,
      accent: colors.grey.darken3,
      secondary: colors.grey.lighten3,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}