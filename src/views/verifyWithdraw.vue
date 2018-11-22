<style>
  .red {
    color: red;
  }
</style>

<template><div>
  <h1 class="red">{{msg}}</h1>
   <router-link tag="button" to="/success" class="btn">CheckMark</router-link>
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