<style>
  .red {
    color: red;
  }
</style>

<template>
  <div>
    <div class="row text-center">
      <div class="col-sm">
	  <h1 class="big-title">Welcome to Bank!</h1>
        <h2 class="sub-title">Please insert your card<br>or enter your account number below</h2>
      </div>
    </div>
    <div class="row text-center">
      <div class="col-sm">
        <img id="cardImg" src="assets/card.jpeg"/>
      </div> 
    </div>
    <br/>
    <div align="center">
      <h2 class="sub-title">Input Account Number</h2>
      <div class="row">
        <div class="col-sm-8">
          <num-pad pin-format=false homepage=true ref="pad"></num-pad>
        </div>
        <div class="col-sm-4">
          <button v-on:click="submit" class="btn submit-btn btn-success physical-btn checkmark">&#10003</button>

        </div>
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
      this.$router.push({path: '/pin'}) 
    }
  },
  mounted () {
    const self = this
    function route () {
      window.removeEventListener('click', route)
      self.$router.push('/pin') 
    }
    cardImg = document.getElementById("cardImg");
    cardImg.addEventListener('click', route)
  }
}
</script>