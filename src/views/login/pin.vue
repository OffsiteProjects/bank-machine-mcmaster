<style>
  .submit-btn {
    position: absolute;
    top: 35%;
    left: 30px;
    width: 100px;
    height: 100px;
  }
</style>

<template>
  <div class="container">  
    <div class="row text-center">
      <div class="col-sm">
        <h2>Please enter your PIN</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-8">
        <num-pad pin-format=true ref="pad"></num-pad>
      </div>
      <div class="col-sm-4">
        <button v-on:click="submit" class="btn submit-btn btn-success physical-btn">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
const NumPad = require('./../../components/numpad.vue')
module.exports = {
  components: {
    NumPad
  },
  methods: {
    submit () {
      const pin = this.$refs.pad.input.split('').reverse()
      const correctPin = ['1', '2', '3', '4'] // lmao

      this.$router.push('/main-menu') 
    }
  }
}
</script>