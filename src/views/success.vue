<style>
  .red {
    color: red;
  }
</style>

<template>
  <div>

    <p>What should be displayed on this page? Type of transaction, amount, balance</p>
    <p>"Type of Transaction" was successful! Final Account Balance?</p>
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