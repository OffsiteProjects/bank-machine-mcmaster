const Vue = require('vue')
const VueRouter = require('vue-router')

Vue.use(VueRouter)

const Nav = require('./views/nav.vue')
const FakeCard = require('./views/login/fake-card.vue')
const Pin = require('./views/login/pin.vue')
const MainMenu = require('./views/main-menu.vue')

const Logout = require('./views/logout.vue')

const routes = [
  { path: '/', component: FakeCard },
  { path: '/pin', component: Pin },
  { path: '/main-menu', component: MainMenu },
  { path: '/logout', component: Logout }
]
const router = new VueRouter({
  routes // short for `routes: routes`
})
const app = new Vue({
  router,
  render: (h) => {
    return h(Nav)
  }
}).$mount('#app')
