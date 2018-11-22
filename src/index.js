const Vue = require('vue')
const VueRouter = require('vue-router')

Vue.use(VueRouter)

const Nav = require('./views/nav.vue')
const FakeCard = require('./views/login/fake-card.vue')
const Pin = require('./views/login/pin.vue')
const MainMenu = require('./views/main-menu.vue')
const withdrawDeposit = require('./views/withdrawDeposit.vue')
const moveMoney = require('./views/moveMoney.vue')
const changePin = require('./views/changePin.vue')
const history = require('./views/history.vue')
const withdraw = require('./views/withdraw.vue')
const deposit = require('./views/deposit.vue')
const verifyWithdraw = require('./views/verifyWithdraw.vue')
const success = require('./views/success.vue')
const verifyDeposit = require('./views/verifyDeposit.vue')
const insertCash = require('./views/insertCash.vue')
const Logout = require('./views/logout.vue')
const receipt = require('./views/receipt.vue')
const prettyReceipt = require('./views/prettyReceipt.vue')

const routes = [
  { path: '/', component: FakeCard },
  { path: '/pin', component: Pin },
  { path: '/main-menu', component: MainMenu },
  { path: '/logout', component: Logout },
  { path: '/withdrawDeposit', component: withdrawDeposit },
  { path: '/moveMoney', component: moveMoney },
  { path: '/changePin', component: changePin},
  { path: '/history', component: history},
  { path: '/withdraw', component: withdraw},
  { path: '/deposit', component: deposit},
  { path: '/verifyWithdraw', component: verifyWithdraw},
  { path: '/success', component: success},
  { path: '/verifyDeposit', component: verifyDeposit},
  { path: '/insertCash', component: insertCash},
  { path: '/receipt', component: receipt},
  { path: '/prettyReceipt', component: prettyReceipt}
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
