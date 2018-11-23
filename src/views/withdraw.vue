<style>
  .red {
    color: red;
  }
</style>

<template>
  <div>
    <h1 class="red">{{msg}}</h1>
    <button v-on:click="selectBox" class="physical-btn accountBox">Chequing Account - 123456 - $48.99</button>

    <button v-on:click="selectBox" class="physical-btn accountBox">Savings Account - 135791 - $1,548.78</button>

    <button v-on:click="selectBox" class="physical-btn accountBox">RRSP - 156913 - $11,209.11</button>

    <button v-on:click="selectBox" class="physical-btn accountBox">TFSA - 981121 - $74,736.02</button>

    <div class="buttonBox">
      <button v-on:click="submit" class="btn btn-success physical-btn checkmark">&#10003</button>
    </div>
  </div>
</template>

<script>
var currentBox='';
var savedValue='';
module.exports = {
  methods: {
    submit () {
      alert(currentBox)
      if(currentBox !== ''){
        savedValue=currentBox;
        currentBox='';
        this.$router.push({name: 'withdrawCash', params: { account: savedValue }}) 
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
        currentBox=event.target.innerHTML;
      }

    }
  },
  data () {
    return {
      msg: 'From Where'
    }
  }
}
</script>