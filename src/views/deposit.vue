<style>
  .red {
    color: red;
  }
</style>

<template><div>
  <h1 class="red">To Where</h1>
   <router-link tag="button" to="/insertCash" class="btn">CheckMark</router-link>
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