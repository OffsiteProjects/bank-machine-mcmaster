<style>
  .red {
    color: red;
  }
</style>

<template>
  <div>
  <h1 class="red">{{msg}}</h1>
  <router-link tag="button" to="/withdraw" class="btn">Withdraw</router-link>
  <router-link tag="button" to="/deposit" class="btn">Deposit</router-link>
  </div>
</template>

<script>
module.exports = {
  data () {
    return {
      msg: 'Which would you like to do?'
    }
  }
}
</script>