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
const withdrawCash = require('./views/withdrawCash.vue')
const deposit = require('./views/deposit.vue')
const verifyWithdraw = require('./views/verifyWithdraw.vue')
const success = require('./views/success.vue')
const verifyDeposit = require('./views/verifyDeposit.vue')
const insertCash = require('./views/insertCash.vue')
const Logout = require('./views/logout.vue')
const receipt = require('./views/receipt.vue')
const prettyReceipt = require('./views/prettyReceipt.vue')
const etransfer = require('./views/etransfer.vue')
const transferAccount = require('./views/transferAccount.vue')
const transferAccountTo = require('./views/transferAccountTo.vue')
const etransferAmount = require('./views/etransferAmount.vue')
const verifyEtransfer = require('./views/verifyEtransfer.vue')
const transferAmount = require('./views/transferAmount.vue')
const verifyTransfer = require('./views/verifyTransfer.vue')
const confirmNewPin = require('./views/confirmNewPin.vue')
const AccountHistory = require('./views/accountHistory.vue')

const routes = [
  { path: '/', component: FakeCard },
  { path: '/#/', component: FakeCard },
  { path: '/pin', component: Pin },
  { path: '/main-menu', component: MainMenu },
  { path: '/logout', component: Logout },
  { path: '/withdrawDeposit', component: withdrawDeposit },
  { path: '/moveMoney', component: moveMoney },
  { path: '/changePin', name: 'changePin', component: changePin},
  { path: '/history', component: history},
  { path: '/withdraw', component: withdraw},
  { path: '/deposit', component: deposit},
  { path: '/verifyWithdraw', name: 'verifyWithdraw', component: verifyWithdraw},
  { path: '/success', name: 'success', component: success},
  { path: '/verifyDeposit', name: 'verifyDeposit', component: verifyDeposit},
  { path: '/insertCash', name: 'insertCash', component: insertCash},
  { path: '/withdrawCash', name: 'withdrawCash', component: withdrawCash},
  { path: '/receipt', component: receipt},
  { path: '/prettyReceipt', component: prettyReceipt},
  { path: '/etransfer', component: etransfer},
  { path: '/transferAccount', component: transferAccount},
  { path: '/transferAccountTo', name: 'transferAccountTo', component: transferAccountTo},
  { path: '/etransferAmount', name: 'etransferAmount', component: etransferAmount},
  { path: '/verifyEtransfer', name: 'verifyEtransfer', component: verifyEtransfer},
  { path: '/transferAmount', name: 'transferAmount', component: transferAmount},
  { path: '/verifyTransfer', name: 'verifyTransfer', component: verifyTransfer},
  { path: '/confirmNewPin', name: 'confirmNewPin', component: confirmNewPin},
  { path: '/accountHistory', name: 'accountHistory', component: AccountHistory}
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
