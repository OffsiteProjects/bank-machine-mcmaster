<style>

</style>

<template>
  <div class="row">
    <div class="column col-lg-12 centered">

      <h1 class="big-title">Transactions</h1>
      <h2 class="sub-title">Account: {{this.$route.params.account}}</h2>
      <router-link tag="button" to="/main-menu" class="btn btn-primary btn-main">Done</router-link>
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