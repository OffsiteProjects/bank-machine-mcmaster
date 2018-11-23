<style>
  .red {
    color: red;
  }
</style>

<template><div>
  <h1 class="red">How Much</h1>
   <button v-on:click="submit" class="btn submit-btn btn-success physical-btn checkmark">&#10003</button>
  </div>
</template>

<script>
module.exports = {
  methods: {
    submit () {
      this.$router.push('/verifyTransfer') 
    }
  },
  data () {
    return {
      msg: 'Foo'
    }
  }
}
</script>