<style>
  .red {
    color: red;
  }
</style>

<template><div>
  <h1 class="red">Select a recipient</h1>
   <router-link tag="button" to="/etransferAmount" class="btn">CheckMark</router-link>
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