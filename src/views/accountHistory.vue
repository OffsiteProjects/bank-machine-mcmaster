<style>
  .red {
    color: red;
  }
</style>

<template><div>
  <h1 class="red">Transactions</h1>
  <router-link tag="button" to="/main-menu" class="btn">Done</router-link>
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