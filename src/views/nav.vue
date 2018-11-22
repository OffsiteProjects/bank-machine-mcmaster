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
          <router-link to="/logout" v-if="user" class="btn btn-danger physical-btn" tag="button">Logout</router-link>
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
      noBackRoutes: ["/", "/logout", "/pin"],
      isHome: this.$router.currentRoute.path == "/",
      user: null
    }
  },
  watch: {
    '$route' (to, from) {
      this.isHome = this.noBackRoutes.indexOf(to.path) !== -1
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