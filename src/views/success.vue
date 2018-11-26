<style>

</style>

<template>
  <div class="text-center">
  <h1 class="big-title">{{ this.$route.params.Message }}</h1>
    <div class="column col-lg-12">
      <h2 class="sub-title">Would you like to perform any other transactions today?</h2>
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