<style>
  .red {
    color: red;
  }
</style>

<template>
  <div>
    <div class="row text-center">
      <div class="col-sm">
	  <h1 class="big-title">Welcome to Bank!</h1>
        <h2 class="sub-title">Please insert your card<br>or enter your account number below</h2>
      </div>
    </div>
    <div class="row text-center">
      <div class="col-sm">
        <img src="assets/card.jpeg"/>
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
      self.$router.push('/pin') 
    }
    window.addEventListener('click', route)
  }
}
</script>