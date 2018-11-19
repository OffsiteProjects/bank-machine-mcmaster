<style>

</style>

<template>
  <div>
    <h1>Hello world</h1>
    <nav>
      <button v-if="!isHome" v-on:click="goBack">Back</button>
      <router-link to="/logout"><button>Logout</button></router-link>
    </nav>
    <router-view></router-view>
    <NumPad/>
  </div>
</template>

<script>
const NumPad = require('./../components/numpad.vue')
export default {
  data () {
    return {
      msg: '',
      noBackRoutes: ["/", "/logout"],
      isHome: this.$router.currentRoute.path == "/",
      amount: null
    }
  },
  components: {
    NumPad
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