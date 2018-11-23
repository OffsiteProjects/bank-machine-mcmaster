<style>
  .red {
    color: red;
  }
</style>

<template>
  <div>
    <h1 class="red">{{msg}}</h1>
    <button class="physical-btn accountBox">Chequing Account - 123456 - $48.99</button>
    <button class="physical-btn accountBox">Savings Account - 135791 - $1,548.78</button>
    <button v-on:click="submit" class="btn submit-btn btn-success physical-btn checkmark">&#10003</button>
  </div>
</template>

<script>
module.exports = {
  methods: {
    submit () {
      this.$router.push('/verifyWithdraw') 
    }
  },
  data () {
    return {
      msg: 'From Where'
    }
  }
}
</script>