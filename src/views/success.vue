<style>
  .red {
    color: red;
  }
</style>

<template>
  <div class="row">
    <div class="column col-lg-12 centered">
      <h2>{{ this.$route.params.Message }}</h2>
      <router-link tag="button" to="/main-menu" class="btn btn-primary">More Transactions</router-link>
      <router-link tag="button" to="/receipt" class="btn btn-primary">Receipt</router-link>
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