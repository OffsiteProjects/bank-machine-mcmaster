<style>
  .navbar {
    padding: 20px;
    height: 100px;
    background: blue;
  }
  .nav .btn {
    font-size: 24px;
    padding: 10px 20px 10px 20px;
  }

  .logo {
    color: white;
  }
</style>

<template>
  <div>
    <div class="navbar">
      <ul class="nav navbar-nav navbar-left">
        <li class="nav-item">
          <button class="btn btn-warning physical-btn" v-if="!isHome" v-on:click="goBack">Back</button>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-center">
        <div class="logo"><h1>Bank.com</h1></div>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li class="nav-item">
          <router-link to="/logout" v-if="isLoggedIn" class="btn btn-danger physical-btn" tag="button">Logout</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
module.exports = {
  data () {
    return {
      noBackRoutes: [
        "/","/#/" , "/logout", "/pin", "/verifyDeposit", "/verifyWithdraw",
        "/verifyTransfer","/verifyEtransfer","/success", "/prettyReceipt",
        "/success", "/main-menu", "/receipt"
      ],
      isHome: this.$router.currentRoute.path == "/",
      isLoggedIn: false
    }
  },
  watch: {
    '$route' (to, from) {
      this.isHome = this.noBackRoutes.indexOf(to.path) !== -1
      if (to.path == '/logout') this.isLoggedIn = false
      if (to.path == '/verifyWithdraw') this.isLoggedIn = false
      if (to.path == '/success') this.isLoggedIn = false
      if (to.path == '/receipt') this.isLoggedIn = false
      if (to.path == '/prettyReceipt') this.isLoggedIn = false
      if (to.path == '/insertCash') this.isLoggedIn = false
      if (to.path == '/verifyDeposit') this.isLoggedIn = false
      if (to.path == '/verifyEtransfer') this.isLoggedIn = false
      if (to.path == '/main-menu') this.isLoggedIn = true
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>