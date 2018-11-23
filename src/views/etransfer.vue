<style>
  .red {
    color: red;
  }
</style>

<template><div>
  <h1 class="red">Select a recipient</h1>
   <button v-on:click="submit" class="btn submit-btn btn-success physical-btn checkmark">&#10003</button>
  </div>
</template>

<script>
module.exports = {
  methods: {
    submit () {
      this.$router.push('/etransferAmount') 
    }
  },
  data () {
    return {
      msg: 'Foo'
    }
  }
}
</script>