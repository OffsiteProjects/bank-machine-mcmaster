<style>

</style>

<template>
  <div>
    <h1>Thank you for banking with us!</h1>
    <h2>Please don't forget your card below.</h2>
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