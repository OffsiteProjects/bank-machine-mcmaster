<style>
  .red {
    color: red;
  }
</style>

<template>
  <div>
    <h1 class="red">Input New Pin:</h1>

    <div class="row">
      <div class="col-sm-8">
        <num-pad pin-format=true ref="pad"></num-pad>
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
      const pin = this.$refs.pad.input.split('').reverse()
      const correctPin = ['1', '2', '3', '4'] // lmao

      this.$router.push('/confirmNewPin') 
    }
  },
  data () {
    return {
      msg: 'Foo'
    }
  }
}
</script>