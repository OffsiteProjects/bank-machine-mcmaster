<style>

</style>

<template>
  <div class="row">
    <div class="column col-lg-12 centered">
    <h1 class="big-title">Transfer Between Accounts</h1>
    
    <h2 class="sub-title">Please choose the Account the money will come from</h2>
    
    <button v-on:click="selectBox" class="physical-btn btn-primary accountBox">Chequing Account - 123456 - $48.99</button>

    <button v-on:click="selectBox" class="physical-btn btn-primary accountBox">Savings Account - 135791 - $1,548.78</button>

    <button v-on:click="selectBox" class="physical-btn btn-primary accountBox">RRSP - 156913 - $11,209.11</button>

    <button v-on:click="selectBox" class="physical-btn btn-primary accountBox">TFSA - 981121 - $74,736.02</button>

    <div class="buttonBox hideCheck">
      <button v-on:click="submit" class="btn btn-success physical-btn checkmark">&#10003</button>
    </div>
  </div></div>
</template>

<script>
var fromCurrentBox='';
var fromSavedValue='';

module.exports = {
  methods: {
    submit () {
      if(fromCurrentBox !== ''){
        fromSavedValue=fromCurrentBox;
        fromCurrentBox='';

        this.$router.push({name: 'transferAccountTo', params: {fromAccount: fromSavedValue.slice(0,fromSavedValue.lastIndexOf("-")-1)}}) 
      }
      
    },
    selectBox: function (event) {
      if (event) {
        var all = document.getElementsByClassName("accountBox");
        var i;
        for (i = 0; i < all.length; i++) {
            all[i].style.backgroundColor = '#007bff';
			all[i].style.borderColor = '#007bff';
        }
        
        event.target.style.backgroundColor = '#00bfff';
		event.target.style.borderColor = '#00bfff';
        fromCurrentBox=event.target.innerHTML;

        var displayCheck = document.getElementsByClassName("hideCheck");
        var j;
        for (j = 0; j < displayCheck.length; j++) {
            displayCheck[j].style.display = 'block';
        }
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