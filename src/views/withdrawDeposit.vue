<style>
  .red {
    color: red;
  }
</style>

<template>
  <div class="container text-center">
    <h1 class="big-title">{{msg}}</h1>
	<div class="col-xs-2">
		<router-link tag="button" to="/withdraw" class="btn btn-primary btn-main">Withdraw Cash</router-link>
	</div>
	<div class="col-xs-2">
		<router-link tag="button" to="/deposit" class="btn btn-primary btn-main">Deposit Cash</router-link>
	</div>
  </div>
</template>

<script>
module.exports = {
  data () {
    return {
      msg: 'Which would you like to do today?'
    }
  }
}
</script>