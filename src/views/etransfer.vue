<style>

</style>

<template>
  <div class="row">
    <div class="column col-lg-12 centered">
	<h1 class="big-title">e-Transfer</h1>
  <h2 class="sub-title">Who would you like to send money too?</h2>
    <button v-on:click="selectBox" class="physical-btn btn-primary accountBox">Phillip Pavlich</button>

    <button v-on:click="selectBox" class="physical-btn btn-primary accountBox">Josh Mitchell</button>

    <button v-on:click="selectBox" class="physical-btn btn-primary accountBox">Erin Varey</button>

    <button v-on:click="selectBox" class="physical-btn btn-primary accountBox">Thomas Mullen</button>

    <div class="buttonBox hideCheck">
      <button v-on:click="submit" class="btn btn-success physical-btn checkmark">&#10003</button>
    </div>
  </div></div>
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
        this.$router.push({name: 'etransferAmount', params: { payTo: savedValue }}) 
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