<style>
  .red {
    color: red;
  }
</style>

<template>
  <div class="row">
    <div class="column col-lg-12 centered">
    <h1 class="red">Select Account to view</h1>

    <button v-on:click="selectBox" class="physical-btn btn-primary accountBox">Chequing Account - 123456 - $48.99</button>

    <button v-on:click="selectBox" class="physical-btn btn-primary accountBox">Savings Account - 135791 - $1,548.78</button>

    <button v-on:click="selectBox" class="physical-btn btn-primary accountBox">RRSP - 156913 - $11,209.11</button>

    <button v-on:click="selectBox" class="physical-btn btn-primary accountBox">TFSA - 981121 - $74,736.02</button>

    <div class="buttonBox hideCheck">
      <button v-on:click="submit" class="btn btn-success physical-btn checkmark">&#10003</button>
    </div>
    </div>
  </div>
</template>

<script>
var currentBox='';
var savedValue='';
module.exports = {

  methods: {
    submit () {
      if(currentBox !== ''){
        savedValue=currentBox;
        currentBox='';
        this.$router.push({name: 'accountHistory', params: { account: savedValue.slice(0,savedValue.lastIndexOf("-")-1)}})
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