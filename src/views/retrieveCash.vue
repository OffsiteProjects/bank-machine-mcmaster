<style>
  .red {
    color: red;
  }
</style>

<template>
  <div>
    <div class="row text-center">
      <div class="col-sm">
        <h1 class="big-title">Deposit Cancelled</h1>
		<h2 class="sub-title">Please retrieve your cash below.</h2>
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
      self.$router.push({path: '/main-menu'})  
      
    }
    window.addEventListener('click', route)
  }
}
</script>