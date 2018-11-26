<style>
  .red {
    color: red;
  }
</style>

<template>
  <div class="row">
    <div class="column col-lg-12 centered">
      <h2>{{ this.$route.params.Message }}</h2>

      <h4>Would you like to do more transactions?</h4>

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