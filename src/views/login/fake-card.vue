<style>
  .red {
    color: red;
  }
</style>

<template>
  <div>
    <div class="row text-center">
      <div class="col-sm">
        <h2>Please enter your card</h2>
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
export default {
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