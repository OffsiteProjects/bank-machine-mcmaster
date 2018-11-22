<style>
  .red {
    color: red;
  }
</style>

<template>
  <div>
    <h1 style="color:blue;">Main menu</h1>
    <router-link tag="button" to="/withdrawDeposit" class="btn">Withdraw/Deposit Money</router-link>
    <router-link tag="button" to="/moveMoney" class="btn">Move Money</router-link>
    <router-link tag="button" to="/changePin" class="btn">Change Pin</router-link>
    <router-link tag="button" to="/history" class="btn">Transaction History</router-link>
  </div>
</template>

<script>
module.exports = {

}
</script>