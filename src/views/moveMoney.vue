<style>
  .red {
    color: red;
  }
</style>

<template>
    <div>
  <h1 class="red">{{msg}}</h1>
  <router-link tag="button" to="/etransfer" class="btn">E-Transfer/Pay Bills</router-link>
  <router-link tag="button" to="/transferAccount" class="btn">Between Accounts</router-link>
  </div>
</template>

<script>
module.exports = {
  data () {
    return {
      msg: 'How would you like to transfer money?'
    }
  }
}
</script>