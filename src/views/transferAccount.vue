<style>
  .red {
    color: red;
  }
  h2{
    margin-left: 4%;
  }
</style>

<template>
  <div>
    <h1 class="red">Select Accounts</h1>
    
    <h2 class="leftAlign">From: </h2>

    <div class="selectionBox">
      <button v-on:click="selectBox1" class="physical-btn accountBox1">Chequing Account - 123456 - $48.99</button>

      <button v-on:click="selectBox1" class="physical-btn accountBox1">Savings Account - 135791 - $1,548.78</button>

      <button v-on:click="selectBox1" class="physical-btn accountBox1">RRSP - 156913 - $11,209.11</button>

      <button v-on:click="selectBox1" class="physical-btn accountBox1">TFSA - 981121 - $74,736.02</button>
    </div>

    <h2 class="leftAlign">To: </h2>
    <div class="selectionBox">
      <button v-on:click="selectBox" class="physical-btn accountBox">Chequing Account - 123456 - $48.99</button>

      <button v-on:click="selectBox" class="physical-btn accountBox">Savings Account - 135791 - $1,548.78</button>

      <button v-on:click="selectBox" class="physical-btn accountBox">RRSP - 156913 - $11,209.11</button>

      <button v-on:click="selectBox" class="physical-btn accountBox">TFSA - 981121 - $74,736.02</button>
    </div>

    <div class="buttonBox">
      <button v-on:click="submit" class="btn btn-success physical-btn checkmark">&#10003</button>
    </div>
  </div>
</template>

<script>
var fromCurrentBox='';
var fromSavedValue='';
var toCurrentBox='';
var toSavedValue='';
module.exports = {
  methods: {
    submit () {
      if(fromCurrentBox !== '' && toCurrentBox !== ''){
        fromSavedValue=fromCurrentBox;
        fromCurrentBox='';

        toSavedValue=toCurrentBox;
        toCurrentBox='';

        this.$router.push({name: 'transferAmount', params: {fromAccount: fromSavedValue, toAccount: toSavedValue }}) 
      }
      
    },
    selectBox1: function (event) {
      if (event) {
        var all = document.getElementsByClassName("accountBox1");
        var i;
        for (i = 0; i < all.length; i++) {
            all[i].style.backgroundColor = '#bfbfbf';
        }
        
        event.target.style.backgroundColor = '#00bfff';
        fromCurrentBox=event.target.innerHTML;
      }

    },
    selectBox: function (event) {
      if (event) {
        var all = document.getElementsByClassName("accountBox");
        var i;
        for (i = 0; i < all.length; i++) {
            all[i].style.backgroundColor = '#bfbfbf';
        }
        
        event.target.style.backgroundColor = '#00bfff';
        toCurrentBox=event.target.innerHTML;
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