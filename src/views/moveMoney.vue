<style>
  .red {
    color: red;
  }
</style>

<template>
  <div class="row">
    <div class="column col-lg-12 centered">
		<h1 class="big-title">Move Money</h1>
	  <h2 class="sub-title">{{msg}}</h2>
		  <router-link tag="button" to="/etransfer" class="btn btn-primary btn-main">E-Transfer/Pay Bills</router-link>
		  <router-link tag="button" to="/transferAccount" class="btn btn-primary btn-main">Between Accounts</router-link>
	  </div>
  </div>
</template>

<script>
module.exports = {
  data () {
    return {
      msg: 'How would you like to transfer money?'
    }
  }
}
</script>