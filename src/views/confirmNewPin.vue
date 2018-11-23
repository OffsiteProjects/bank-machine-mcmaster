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
      
      const pin = this.$refs.pad.input.split('')//.reverse()
      
      var checker=true;
      
      if(this.$route.params.newPin.length !== pin.length){
        checker=false;
      }
      else{
        var i;
        for(i=0; i<this.$route.params.newPin.length; i++ ){
          if(this.$route.params.newPin[i] !== pin[i]){
            checker=false;
          }
        }     
      }

      if(checker){
        alert("Your pin has been successfully changed!");
        this.$router.push('/success') 
      }
      else{
        alert("The pin that you entered did not match! You are being redirected to the main menu.");
        this.$router.push('/main-menu') 
      }

    }
  },
  data () {
    return {
      msg: 'Foo'
    }
  }
}


</script>