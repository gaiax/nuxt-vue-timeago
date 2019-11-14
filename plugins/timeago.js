import Vue from 'vue'
import VueTimeago from 'vue-timeago'

Vue.use(VueTimeago, {
    name: 'Timeago', // Component name, `Timeago` by default
    locale: 'ja', // Default locale
    // We use `date-fns` under the hood
    // So you can use all locales from it
    locales: {
        ja: require('date-fns/locale/ja')
    }
})