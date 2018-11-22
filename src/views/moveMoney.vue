<style>
  .red {
    color: red;
  }
</style>

<template>
  <h1 class="red">{{msg}}</h1>
</template>

<script>
module.exports = {
  data () {
    return {
      msg: 'Foo'
    }
  }
}
</script>