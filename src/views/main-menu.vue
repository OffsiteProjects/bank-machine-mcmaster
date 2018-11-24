<style>
  .red {
    color: red;
  }
  .btn-main {
	width: 35%;
	height: 3em;
	padding: 0;
	margin: 0.2em;
	font-size: x-large;
	font-weight: bold;
  }
</style>

<template>
  <div class="container text-center">
    <h1 class="big-title">Welcome to BANK</h1>
	<h2 class="sub-title">How can we help you today?</h2>
	<div class="col-xs-2">
		<router-link tag="button" to="/withdrawDeposit" class="btn btn-primary btn-main">Withdraw/Deposit</router-link>
		<router-link tag="button" to="/moveMoney" class="btn btn-primary btn-main">Move Money</router-link>
	</div>
	<div class="col-xs-2">
		<router-link tag="button" to="/changePin" class="btn btn-primary btn-main">Change Pin</router-link>
		<router-link tag="button" to="/history" class="btn btn-primary btn-main">Transaction History</router-link>
	</div>
	
	
  </div>
</template>

<script>
module.exports = {

}
</script>                                                                                                                                                                                                                                                                                                                                                                                                                                                             