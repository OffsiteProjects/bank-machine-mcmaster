<style>

</style>

<template>
<div class="row">
  <div class="column col-lg-12 centered">
    <h1 class="big-title">{{ this.$route.params.Message }}</h1>
    <h2 class="big-title">{{ this.$route.params.balance }}</h2>
    <div class="column col-lg-12">
      <h2 class="sub-title">Would you like to perform any other transactions today?</h2>

    </div>
      
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
      this.$router.push({path: '/main-menu'}) 
    },
    cancel () {
      this.$router.push({path: '/receipt'}) 
    }
  },
  data () {
    return {
      msg: 'Foo'
    }
  }
}
</script>