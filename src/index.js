const Vue = require('vue')
const VueRouter = require('vue-router')

Vue.use(VueRouter)

const Home = require('./views/home.vue')
const Logout = require('./views/logout.vue')
const Foo = require('./views/foo.vue')
const Bar = require('./views/bar.vue')

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/logout', component: Logout }
]
const router = new VueRouter({
  routes // short for `routes: routes`
})
const app = new Vue({
  router,
  render: (h) => {
    return h(Home)
  }
}).$mount('#app')