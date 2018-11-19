<style>

</style>

<template>
  <h1>Thank you for banking</h1>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Foo'
    }
  },
  mounted () {
    setTimeout(() => { // TODO unmount
      this.$router.push('/') // TODO history?
    }, 1000)
  }
}
</script>