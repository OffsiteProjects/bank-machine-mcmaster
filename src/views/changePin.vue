<style>
  .red {
    color: red;
  }
</style>

<template><div>
  <h1 class="red">Input New Pin</h1>
  <router-link tag="button" to="/confirmNewPin" class="btn">CheckMark</router-link>
  </div>
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