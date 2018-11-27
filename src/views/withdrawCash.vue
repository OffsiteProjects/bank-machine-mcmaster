<style>
  .red {
    color: red;
  }
</style>

<template>
  <div class="text-center">
    <h1 class="big-title">Withdraw Cash</h1>
	<h2 class="sub-title">{{msg}}</h2>
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
      this.$router.push({name: 'verifyWithdraw', params: { amount: this.$refs.pad.input, account: this.$route.params.account }}) 
    }
  },
  data () {
    return {
      msg: 'How Much Would You Like to Withdraw?'
    }
  }
}
</script>