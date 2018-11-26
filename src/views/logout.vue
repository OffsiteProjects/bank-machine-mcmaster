<style>

</style>

<template>
  <div>
    <h1 class="big-title">Thank you for banking with us!</h1>
    <h2 class="sub-title">Please don't forget your card below.</h2>
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
      self.$router.push('/') 
    }
    window.addEventListener('click', route)
  }
}
</script>