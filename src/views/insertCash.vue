<style>
  .red {
    color: red;
  }
</style>

<template>
  <div>
    <div class="row text-center">
      <div class="col-sm">
        <h1 class="big-title">Insert Cash</h1>
		<h2 class="sub-title">Please insert all bills into the slot below</h2>
      </div>
    </div>
    <div class="row text-center">
      <div class="col-sm">
        <img src="assets/cash.png"/>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {

  mounted () {
    const self = this
    function route () {
      window.removeEventListener('click', route)
      //self.$router.push('/verifyDeposit')
      self.$router.push({name: 'verifyDeposit', params: { account: self.$route.params.account }})  
    }
    window.addEventListener('click', route)
  }
}
</script>