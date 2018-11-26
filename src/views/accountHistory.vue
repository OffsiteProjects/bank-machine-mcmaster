<style>
  .red {
    color: red;
  }
</style>

<template>
  <div class="row">
    <div class="column col-lg-12 centered">
    <h1 class="red">Transactions</h1>
    <h2>Account: {{this.$route.params.account}}</h2>
    <router-link tag="button" to="/main-menu" class="btn btn-primary">Done</router-link>
  </div>
  </div>
</template>

<script>
module.exports = {
  data () {
    return {
      msg: 'Foo'
    }
  }
}
</script>