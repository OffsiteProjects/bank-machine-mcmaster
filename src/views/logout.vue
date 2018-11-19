<style>

</style>

<template>
  <h1>Thank you for banking</h1>
</template>

<script>
export default {
  mounted () {
    let listener = window.addEventListener('click', () => {
      window.removeEventListener('click', listener)
      this.$router.push('/') 
    })
  }
}
</script>