<style>
  .red {
    color: red;
  }
</style>

<template>
<div>
  <h1 class="red">Select a recipient</h1>
    <button v-on:click="selectBox" class="physical-btn accountBox">Phillip Pavlich</button>

    <button v-on:click="selectBox" class="physical-btn accountBox">Josh Mitchell</button>

    <button v-on:click="selectBox" class="physical-btn accountBox">Erin Varey</button>

    <button v-on:click="selectBox" class="physical-btn accountBox">Thomas Mullen</button>

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
            all[i].style.backgroundColor = '#bfbfbf';
        }
        
        event.target.style.backgroundColor = '#00bfff';
        currentBox=event.target.innerHTML;
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