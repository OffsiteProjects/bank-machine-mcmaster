<style>
  .red {
    color: red;
  }
</style>

<template><div>
  <h1 class="red">How Much</h1>
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