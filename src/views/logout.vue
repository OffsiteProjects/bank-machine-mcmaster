<style>

</style>

<template>
  <h1>Thank you for banking</h1>
</template>

<script>
export default {
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