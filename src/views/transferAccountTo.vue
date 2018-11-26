<style>

</style>

<template>
  <div class="row">
    <div class="column col-lg-12 centered">
    <h1 class="big-title">Please choose the Account the money will go to</h1>
    
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
var toCurrentBox='';
var toSavedValue='';

module.exports = {
  methods: {
    submit () {
      if(toCurrentBox !== ''){
        toSavedValue=toCurrentBox;
        toCurrentBox='';

        this.$router.push({name: 'transferAmount', params: {fromAccount: this.$route.params.fromAccount, toAccount: toSavedValue }}) 
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
        toCurrentBox=event.target.innerHTML;

        var displayCheck = document.getElementsByClassName("hideCheck");
        var j;
        for (j = 0; j < displayCheck.length; j++) {
            displayCheck[j].style.display = 'block';
        }
      }

    }
  },
  mounted(){
    var all = document.getElementsByClassName("accountBox");
    var i;
    for(i=0;i<all.length; i++){
      if(this.$route.params.fromAccount === all[i].innerHTML){
        all[i].style.display='none';
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