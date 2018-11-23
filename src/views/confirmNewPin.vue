<style>
  .red {
    color: red;
  }
</style>

<template>
  <div>
    <h1 class="red">Comfirm New Pin:</h1>
    <div class="row">
      <div class="col-sm-8">
        <num-pad pin-format=true ref="pad"></num-pad>
      </div>
      <div class="col-sm-4">
        <button v-on:click="submit" class="btn submit-btn btn-success physical-btn confirm">Confirm</button>
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
      const pin = this.$refs.pad.input.split('').reverse()
      const correctPin = ['1', '2', '3', '4'] // lmao
      alert("Your pin has been successfully changed!");
      this.$router.push('/success') 
    }
  },
  data () {
    return {
      msg: 'Foo'
    }
  }
}
</script>