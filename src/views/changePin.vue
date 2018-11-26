<style>

</style>

<template>
  <div class="text-center">
    <div id="errorBox">
      The two PINs that you entered did not match! 
      <br>
      Please try again.
    </div>

    <h1 class="big-title">Enter New PIN</h1>
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
      const pin = this.$refs.pad.input.split('')//.reverse()
      this.$router.push({name: 'confirmNewPin', params: { newPin: pin }}) 
    }
  },
  mounted(){
    if(this.$route.params.Error){
      var errorBox=document.getElementById('errorBox');
      errorBox.style.display='block';
    }
  },
  data () {
    return {
      msg: 'Foo'
    }
  }
}
</script>