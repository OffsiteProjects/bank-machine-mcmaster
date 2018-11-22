<style>
  .red {
    color: red;
  }
</style>

<template><div>
   Anymore Transactions
   <router-link tag="button" to="/main-menu" class="btn">More Transactions</router-link>
   <router-link tag="button" to="/receipt" class="btn">Receipt</router-link>
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