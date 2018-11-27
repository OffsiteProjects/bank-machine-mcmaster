<style>

</style>

<template>
  <div class="text-center">
  <h1 class="big-title">Confirm New PIN</h1>
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
        this.$router.push({name: 'success', params: { Message: 'Your PIN has been successfully changed!'}}) 
      }
      else{
        this.$router.push({name: 'changePin', params: { Error: true}}) 
        
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