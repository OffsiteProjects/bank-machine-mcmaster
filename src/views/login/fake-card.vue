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
      <input type="text" maxlength="4" style="width: 50px;"/>-<input type="text" maxlength="4" style="width: 50px;"/>-<input type="text" maxlength="4" style="width: 50px;"/>
      <br/>
      <br/>
        <div class="buttonBox">
          <button v-on:click="submit" class="btn btn-success physical-btn checkmark">&#10003</button>
        </div>
      </div>
  </div>
</template>

<script>
module.exports = {
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