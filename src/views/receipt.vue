<style>
  .red {
    color: red;
  }
</style>

<template>  
<div class="row">
  <div class="column col-lg-12 centered">
    <h2>Would you like a receipt?</h2>

  </div>

  <div class="buttonBox">
    <button v-on:click="submit" class="btn btn-success physical-btn checkmark">&#10003</button>
  </div>

  <div class="buttonBox">
    <button v-on:click="cancel" class="btn btn-danger physical-btn checkmark">X</button>
  </div>
</div>
</template>

<script>
module.exports = {
  methods: {
    submit () {
      this.$router.push({path: '/prettyReceipt'}) 
    },
    cancel () {
      this.$router.push({path: '/logout'}) 
    }
  },
  data () {
    return {
      msg: 'Foo'
    }
  }
}
</script>