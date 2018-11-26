<style>

</style>

<template><div>
  <h1 class="big-title">Transfer Between Accounts</h1>
  <h2 class="sub-title">How much money would you like to transfer from {{this.$route.params.fromAccount.slice(0,this.$route.params.fromAccount.lastIndexOf("-")-1)}} to {{this.$route.params.toAccount.slice(0,this.$route.params.toAccount.lastIndexOf("-")-1)}}?</h2>
    <div class="row">
      <div class="col-sm-8">
        <num-pad pin-format=false ref="pad"></num-pad>
      </div>
      <div class="col-sm-4">
        <button v-on:click="submit" class="btn submit-btn btn-success physical-btn checkmark">&#10003</button>
      </div>
    </div>
  </div>
</template>

<script>
const NumPad = require('./../components/numpad.vue')
module.exports = {
  components: {
    NumPad
  },
  methods: {
    submit () {
      this.$router.push({name: 'verifyTransfer', params: { amount: this.$refs.pad.input, fromAccount: this.$route.params.fromAccount, toAccount: this.$route.params.toAccount }}) 
    }
  },
  data () {
    return {
      msg: 'Foo'
    }
  }
}
</script>